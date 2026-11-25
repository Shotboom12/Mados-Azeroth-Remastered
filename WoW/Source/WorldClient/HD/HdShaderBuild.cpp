// Claude BLZ1 (20 nov 2026): see HdShaderBuild.h.
#include "WoW/Source/WorldClient/HD/HdShaderBuild.h"
#include <cstdio>
#include <cstring>
#include <mutex>
#include <string>
#include <thread>
#include <windows.h>
#include <d3dcompiler.h>

namespace {
typedef HRESULT(WINAPI* D3DCompileFn)(LPCVOID, SIZE_T, LPCSTR, const D3D_SHADER_MACRO*, ID3DInclude*, LPCSTR, LPCSTR, UINT, UINT, ID3DBlob**, ID3DBlob**);
const UINT kFlags = D3DCOMPILE_OPTIMIZATION_LEVEL3;
const uint32_t kMagic = 0x43534448; // 'HDSC'
const uint32_t kVersion = 1;

struct Hash {
    uint64_t h = 1469598103934665603ull;
    void Bytes(const void* data, size_t size) {
        const uint8_t* p = static_cast<const uint8_t*>(data);
        for (size_t i = 0; i < size; i++) { h ^= p[i]; h *= 1099511628211ull; }
    }
    void Text(const char* s) { if (s) Bytes(s, strlen(s) + 1); else Bytes("", 1); } // the 0 separates fields
    void Int(uint64_t v) { Bytes(&v, sizeof(v)); }
};

std::string CacheFile(const char* material) {
    char exe[MAX_PATH] = {};
    GetModuleFileNameA(nullptr, exe, MAX_PATH);
    char* slash = strrchr(exe, '\\');
    if (slash) slash[1] = 0;
    std::string dir = std::string(exe) + "HD";
    CreateDirectoryA(dir.c_str(), nullptr);
    dir += "\\ShaderCache";
    CreateDirectoryA(dir.c_str(), nullptr);
    return dir + "\\" + material + ".bin";
}

bool ReadCache(const std::string& path, uint64_t key, std::vector<HD::ShaderBuild::Job>& jobs) {
    FILE* f = fopen(path.c_str(), "rb");
    if (!f) return false;
    uint32_t magic = 0, version = 0, count = 0;
    uint64_t fileKey = 0;
    bool ok = fread(&magic, 4, 1, f) == 1 && fread(&version, 4, 1, f) == 1 && fread(&fileKey, 8, 1, f) == 1 && fread(&count, 4, 1, f) == 1
        && magic == kMagic && version == kVersion && fileKey == key && count == jobs.size();
    std::vector<std::vector<uint8_t>> code(ok ? count : 0);
    for (uint32_t i = 0; ok && i < count; i++) {
        uint32_t size = 0;
        ok = fread(&size, 4, 1, f) == 1 && size >= 4 && size < (1u << 24);
        if (ok) { code[i].resize(size); ok = fread(&code[i][0], 1, size, f) == size; }
    }
    if (ok) { char extra; ok = fread(&extra, 1, 1, f) == 0; } // nothing after the last shader
    fclose(f);
    if (!ok) return false;
    for (uint32_t i = 0; i < count; i++) jobs[i].out->swap(code[i]);
    return true;
}

void WriteCache(const std::string& path, uint64_t key, const std::vector<HD::ShaderBuild::Job>& jobs) {
    std::string temp = path + ".tmp";
    FILE* f = fopen(temp.c_str(), "wb");
    if (!f) return;
    uint32_t count = static_cast<uint32_t>(jobs.size());
    bool ok = fwrite(&kMagic, 4, 1, f) == 1 && fwrite(&kVersion, 4, 1, f) == 1 && fwrite(&key, 8, 1, f) == 1 && fwrite(&count, 4, 1, f) == 1;
    for (uint32_t i = 0; ok && i < count; i++) {
        const std::vector<uint8_t>& code = *jobs[i].out;
        uint32_t size = static_cast<uint32_t>(code.size());
        ok = fwrite(&size, 4, 1, f) == 1 && fwrite(&code[0], 1, size, f) == size;
    }
    ok = fclose(f) == 0 && ok;
    if (ok) ok = MoveFileExA(temp.c_str(), path.c_str(), MOVEFILE_REPLACE_EXISTING) != 0;
    if (!ok) DeleteFileA(temp.c_str());
}
}

bool HD::ShaderBuild::Build(const char* material, std::vector<Job>& jobs, char* info, size_t infoSize) {
    ULONGLONG start = GetTickCount64();
    HMODULE module = LoadLibraryA("d3dcompiler_47.dll");
    D3DCompileFn compile = module ? reinterpret_cast<D3DCompileFn>(GetProcAddress(module, "D3DCompile")) : nullptr;
    if (!compile) {
        snprintf(info, infoSize, "ERROR: d3dcompiler_47.dll not found: no %s shaders", material);
        return false;
    }

    // The key: every input of every compile, and which compiler.
    Hash key;
    key.Int(kVersion);
    key.Int(kFlags);
    key.Int(jobs.size());
    for (const Job& j : jobs) {
        key.Text(j.source); key.Text(j.name); key.Text(j.entry); key.Text(j.profile);
        key.Int(static_cast<uint64_t>(j.macroCount));
        for (int32_t m = 0; m < j.macroCount; m++) { key.Text(j.macroName[m]); key.Int(static_cast<uint64_t>(j.macroValue[m])); }
    }
    char dll[MAX_PATH] = {};
    GetModuleFileNameA(module, dll, MAX_PATH);
    WIN32_FILE_ATTRIBUTE_DATA attributes = {};
    if (GetFileAttributesExA(dll, GetFileExInfoStandard, &attributes)) {
        key.Int(attributes.nFileSizeLow); key.Int(attributes.nFileSizeHigh);
        key.Int(attributes.ftLastWriteTime.dwLowDateTime); key.Int(attributes.ftLastWriteTime.dwHighDateTime);
    }

    const std::string path = CacheFile(material);
    if (ReadCache(path, key.h, jobs)) {
        snprintf(info, infoSize, "%u shaders from HD\\ShaderCache in %u ms", static_cast<uint32_t>(jobs.size()), static_cast<uint32_t>(GetTickCount64() - start));
        return true;
    }

    // Every core: D3DCompile may be called from several threads at once.
    std::atomic<uint32_t> next(0);
    std::atomic<bool> failed(false);
    std::mutex errorLock;
    std::string error;
    auto worker = [&]() {
        for (;;) {
            uint32_t i = next.fetch_add(1);
            if (i >= jobs.size() || failed.load()) return;
            Job& j = jobs[i];
            D3D_SHADER_MACRO macros[9] = {};
            char values[8][12];
            for (int32_t m = 0; m < j.macroCount; m++) {
                snprintf(values[m], sizeof(values[m]), "%d", j.macroValue[m]);
                macros[m].Name = j.macroName[m];
                macros[m].Definition = values[m];
            }
            ID3DBlob* code = nullptr;
            ID3DBlob* errors = nullptr;
            HRESULT hr = compile(j.source, strlen(j.source), j.name, macros, nullptr, j.entry, j.profile, kFlags, 0, &code, &errors);
            if (FAILED(hr) || !code) {
                std::lock_guard<std::mutex> lock(errorLock);
                if (!failed.exchange(true)) {
                    char text[64];
                    snprintf(text, sizeof(text), "ERROR: %s %d: ", j.what, j.index);
                    error = std::string(text) + (errors ? static_cast<const char*>(errors->GetBufferPointer()) : "unknown");
                }
            } else {
                const uint8_t* bytes = static_cast<const uint8_t*>(code->GetBufferPointer());
                j.out->assign(bytes, bytes + code->GetBufferSize());
            }
            if (errors) errors->Release();
            if (code) code->Release();
        }
    };
    uint32_t threads = std::thread::hardware_concurrency();
    if (threads < 1) threads = 1;
    if (threads > jobs.size()) threads = static_cast<uint32_t>(jobs.size());
    std::vector<std::thread> pool;
    for (uint32_t t = 1; t < threads; t++) pool.emplace_back(worker);
    worker();
    for (std::thread& t : pool) t.join();
    if (failed.load()) {
        snprintf(info, infoSize, "%s", error.c_str());
        return false;
    }
    WriteCache(path, key.h, jobs);
    snprintf(info, infoSize, "%u shaders compiled in %u ms on %u threads (saved to HD\\ShaderCache)", static_cast<uint32_t>(jobs.size()),
             static_cast<uint32_t>(GetTickCount64() - start), threads);
    return true;
}

void HD::ShaderBuild::Error(const char* text) {
    static std::mutex lock;
    std::lock_guard<std::mutex> guard(lock);
    OutputDebugStringA(text);
    OutputDebugStringA("\n");
    char exe[MAX_PATH] = {};
    GetModuleFileNameA(nullptr, exe, MAX_PATH);
    char* slash = strrchr(exe, '\\');
    if (slash) slash[1] = 0;
    std::string dir = std::string(exe) + "Logs";
    CreateDirectoryA(dir.c_str(), nullptr);
    FILE* f = fopen((dir + "\\HdErreurs.txt").c_str(), "ab");
    if (!f) return;
    SYSTEMTIME t;
    GetLocalTime(&t);
    fprintf(f, "%04u-%02u-%02u %02u:%02u:%02u  %s\r\n", t.wYear, t.wMonth, t.wDay, t.wHour, t.wMinute, t.wSecond, text);
    fclose(f);
}

uint32_t HD::ShaderBuild::Wait(const std::atomic<int32_t>& state, int32_t compiling) {
    ULONGLONG start = GetTickCount64();
    while (state.load() == compiling) Sleep(2);
    return static_cast<uint32_t>(GetTickCount64() - start);
}
