cmake_minimum_required(VERSION 3.10)

if (${CMAKE_SOURCE_DIR} STREQUAL ${CMAKE_BINARY_DIR})
    message(FATAL_ERROR
        "In-source builds not allowed.
        Please make a new directory (called a build directory) and run CMake from there.
        You may need to remove CMakeCache.txt."
    )
endif ()

project(wowdecomp CXX C)

# HD: measured CPU optimizations (GPT kit 2026-10-29, options 1, 2 and 4). Same images; -D...=OFF gives the old paths.
option(WOWDECOMP_REUSE_SHADER_MEMO "Reuse existing shader memo for lamp material metadata" ON)
if(WOWDECOMP_REUSE_SHADER_MEMO)
    add_compile_definitions(WOWDECOMP_REUSE_SHADER_MEMO=1)
endif()
option(WOWDECOMP_FRAME_QUANTILES "Quantiles over the existing present-interval statistics (latest 4096 samples)" ON)
if(WOWDECOMP_FRAME_QUANTILES)
    add_compile_definitions(WOWDECOMP_FRAME_QUANTILES=1)
endif()
option(WOWDECOMP_FAST_CLIP_SPANS "Exact SIMD spans in the existing CPU occlusion buffer" ON)
if(WOWDECOMP_FAST_CLIP_SPANS)
    add_compile_definitions(WOWDECOMP_FAST_CLIP_SPANS=1)
endif()

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

if (NOT CMAKE_SYSTEM_NAME MATCHES "Windows")
    message(FATAL_ERROR "wowdecomp targets Windows only.")
endif ()

# x64 is the target. Win32 stays buildable: it is the configuration whose struct layouts can be
# checked against Wow.exe 3.3.5a (12340).
if (CMAKE_SIZEOF_VOID_P EQUAL 8)
    set(WOWDECOMP_ARCH_64 1)
    add_compile_definitions(WOWDECOMP_ARCH_64=1)
elseif (CMAKE_SIZEOF_VOID_P EQUAL 4)
    set(WOWDECOMP_ARCH_32 1)
    add_compile_definitions(WOWDECOMP_ARCH_32=1)
    # x87 floating point like the VS2005 original; keeps Win32 code comparable with the binary (re/tools/verify.py).
    if (MSVC)
        add_compile_options(/arch:IA32 /fp:fast)
    endif ()
    # 32-bit time_t like the original build: time/localtime/mktime resolve to _time32/_localtime32/_mktime32.
    add_compile_definitions(_USE_32BIT_TIME_T)
else ()
    message(FATAL_ERROR "Unsupported pointer size.")
endif ()

set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/lib)
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

add_compile_definitions(
    WIN32
    _WINDOWS
    NOMINMAX
    WIN32_LEAN_AND_MEAN
    _CRT_SECURE_NO_WARNINGS
)

# Off by default: the client checks MPQ file MD5s (signaturefile) and GlueXML/FrameXML/AddOn .toc.sig files like the
# original. ON accepts unsigned or modified game data and interface files.
option(WOWDECOMP_DISABLE_SIGNATURE_CHECKS "Skip MPQ file signature and .toc signature checks" OFF)
if (WOWDECOMP_DISABLE_SIGNATURE_CHECKS)
    add_compile_definitions(DISABLE_SIGNATURE_CHECKS=1)
endif ()

# HD: Vulkan backend (gxApi vulkan). Off by default: D3D9 stays the default device either way.
option(WOWDECOMP_VULKAN "Build the Vulkan graphics backend (gxApi vulkan)" OFF)
if (WOWDECOMP_VULKAN)
    add_compile_definitions(WOWDECOMP_VULKAN=1)
endif ()

# HD 2026-11-02, kit commun R1 lot L0: Lumenveil R2 (hd/lumen) compiled and started, every hdLv* case OFF.
# OFF: hd/lumen is left out of the GxVulkan glob, exactly the previous build.
option(WOWDECOMP_LUMEN "Compile Lumenveil R2 (hd/lumen), all effects OFF by default (requires WOWDECOMP_VULKAN)" OFF)
# HD 2026-11-02 lot G1: with it, the Seyris wind model (hd/seyris) and its use by the grass wind (WorldClient,
# hdSxWind, OFF by default). The WorldClient define is set at the end of this file, once that target exists.

# HD: whole program optimization for the x64 Release build (/GL + /LTCG). The engine's small math functions
# (vector * matrix, culling tests) live in other libraries than their callers: without it they are never inlined.
# Same code, same results; only the link is slower. -DWOWDECOMP_LTCG=OFF turns it off.
option(WOWDECOMP_LTCG "Whole program optimization (x64 Release)" ON)
if (MSVC AND WOWDECOMP_ARCH_64 AND WOWDECOMP_LTCG)
    add_compile_options($<$<CONFIG:Release>:/GL>)
    add_link_options($<$<CONFIG:Release>:/LTCG>)
    string(APPEND CMAKE_STATIC_LINKER_FLAGS_RELEASE " /LTCG")
endif ()

# Third-party code is linked, not decompiled, for now.
if (EXISTS ${CMAKE_SOURCE_DIR}/ThirdParty/CMakeLists.txt)
    add_subdirectory(ThirdParty)
endif ()

add_subdirectory(Engine/Source/BLPFile)
add_subdirectory(Engine/Source/Base)
add_subdirectory(Engine/Source/BlizzardCore)
add_subdirectory(Engine/Source/ComSat)
add_subdirectory(Engine/Source/ConsoleBase)
add_subdirectory(Engine/Source/Event)
add_subdirectory(Engine/Source/FFX)
add_subdirectory(Engine/Source/Frame)
add_subdirectory(Engine/Source/FrameScript)
add_subdirectory(Engine/Source/FrameXML)
add_subdirectory(Engine/Source/Gx)
add_subdirectory(Engine/Source/Gxu)
add_subdirectory(Engine/Source/Images)
add_subdirectory(Engine/Source/jpeg)
add_subdirectory(Engine/Source/lua-5.1)
add_subdirectory(Engine/Source/Model2)
add_subdirectory(Engine/Source/Os)
add_subdirectory(Engine/Source/pcre)
add_subdirectory(Engine/Source/Scrn)
add_subdirectory(Engine/Source/Services)
add_subdirectory(Engine/Source/ShaderEffect)
add_subdirectory(Engine/Source/SoundEngine)
add_subdirectory(Engine/Source/SteelseriesMouse)
add_subdirectory(Engine/Source/Storm)
add_subdirectory(Engine/Source/Tempest)
add_subdirectory(WoW/Common)
add_subdirectory(WoW/Source/Battlenet)
add_subdirectory(WoW/Source/Console)
add_subdirectory(WoW/Source/ConsoleDevice)
add_subdirectory(WoW/Source/DB)
add_subdirectory(WoW/Source/Game)
add_subdirectory(WoW/Source/Glue)
add_subdirectory(WoW/Source/Magic)
add_subdirectory(WoW/Source/LiquidSystem)
add_subdirectory(WoW/Source/Minigame)
add_subdirectory(WoW/Source/Net)
add_subdirectory(WoW/Source/Object)
add_subdirectory(WoW/Source/ObjectAlloc)
add_subdirectory(WoW/Source/ObjectMgrClient)
add_subdirectory(WoW/Source/SoundInterface)
add_subdirectory(WoW/Source/UIUtil)
add_subdirectory(WoW/Source/Ui)
add_subdirectory(WoW/Source/WorldClient)
add_subdirectory(WoW/Source/WowServices)
add_subdirectory(WoW/Source/WowSvcs)
add_subdirectory(WoW/Source)
if (WIN32)
    add_subdirectory(Tools/WowClient)
endif ()
if (WOWDECOMP_ARCH_64)
    add_subdirectory(Tools/XvidDecoder)
endif ()

foreach (target Wow WowClient MapViewer M2Viewer GxTest MpqTest BlpTest DbcTest AssetCheck)
    if (TARGET ${target})
        target_sources(${target} PRIVATE ${CMAKE_SOURCE_DIR}/waystone.rc)
    endif ()
endforeach ()

# FSR integration kit: compiling these helpers does not enable incomplete render/WSI plumbing.
option(WOWDECOMP_FSR "Compile the optional AMD FSR Vulkan integration helpers and CVars" OFF)
if(WOWDECOMP_FSR)
    if(NOT WIN32 OR NOT CMAKE_SIZEOF_VOID_P EQUAL 8 OR NOT TARGET GxVulkan)
        message(FATAL_ERROR "FSR kit requires Windows x64 and WOWDECOMP_VULKAN=ON")
    endif()
    target_compile_definitions(GxVulkan PRIVATE WOWDECOMP_FSR=1 NOMINMAX WIN32_LEAN_AND_MEAN _WINDOWS)
    target_include_directories(GxVulkan PRIVATE "${CMAKE_SOURCE_DIR}/ThirdParty/FidelityFX")
    # M2 instance/lifetime/teleport producers live in these ENGINE libraries, not in GxVulkan.
    # The OFF configuration has exactly the original definitions.
    foreach(FSR_PRODUCER_TARGET Model2 WorldClient Object Ui)
        target_compile_definitions(${FSR_PRODUCER_TARGET} PRIVATE WOWDECOMP_FSR=1)
    endforeach()
    if(TARGET WowClient)
        add_custom_target(WaystoneFsrRuntime
            COMMAND ${CMAKE_COMMAND} -E make_directory "$<TARGET_FILE_DIR:WowClient>/FSR"
            COMMAND ${CMAKE_COMMAND} -E copy_if_different
                "${CMAKE_SOURCE_DIR}/ThirdParty/FidelityFX/signedbin/amd_fidelityfx_loader_vk.dll"
                "${CMAKE_SOURCE_DIR}/ThirdParty/FidelityFX/signedbin/amd_fidelityfx_upscaler_vk.dll"
                "${CMAKE_SOURCE_DIR}/ThirdParty/FidelityFX/signedbin/amd_fidelityfx_framegeneration_vk.dll"
                "$<TARGET_FILE_DIR:WowClient>/FSR")
        add_dependencies(WaystoneFsrRuntime WowClient)
    endif()
endif()

# HD 2026-11-02: NVIDIA DLSS Super Resolution (SDK 310.9.16 copied into ThirdParty/DLSS), in the FSR pass's place
# (same world target, depth, motion and jitter). Needs WOWDECOMP_FSR. OFF: exactly the FSR build.
option(WOWDECOMP_DLSS "Compile NVIDIA DLSS Super Resolution next to FSR (requires WOWDECOMP_FSR)" OFF)
if(WOWDECOMP_DLSS)
    if(NOT WOWDECOMP_FSR)
        message(FATAL_ERROR "WOWDECOMP_DLSS requires WOWDECOMP_FSR=ON")
    endif()
    set(WOWDECOMP_DLSS_DIR "${CMAKE_SOURCE_DIR}/ThirdParty/DLSS")
    foreach(DLSS_FILE include/nvsdk_ngx_vk.h lib/Windows_x86_64/x64/nvsdk_ngx_d.lib lib/Windows_x86_64/rel/nvngx_dlss.dll)
        if(NOT EXISTS "${WOWDECOMP_DLSS_DIR}/${DLSS_FILE}")
            message(FATAL_ERROR "DLSS: ${WOWDECOMP_DLSS_DIR}/${DLSS_FILE} missing")
        endif()
    endforeach()
    # Gx is made in Engine/Source/Gx: linking it from here needs CMP0079 (CMake 3.13+).
    if(POLICY CMP0079)
        cmake_policy(SET CMP0079 NEW)
    endif()
    target_compile_definitions(GxVulkan PRIVATE WOWDECOMP_DLSS=1)
    target_include_directories(GxVulkan PRIVATE "${WOWDECOMP_DLSS_DIR}/include")
    # /MD release library (the build's CMAKE_CXX_FLAGS_RELEASE is /MD); NGX loads Vulkan itself, no vulkan-1.lib.
    target_link_libraries(Gx PUBLIC "${WOWDECOMP_DLSS_DIR}/lib/Windows_x86_64/x64/nvsdk_ngx_d.lib")
    if(TARGET WowClient)
        add_custom_target(WaystoneDlssRuntime
            COMMAND ${CMAKE_COMMAND} -E make_directory "$<TARGET_FILE_DIR:WowClient>/DLSS"
            COMMAND ${CMAKE_COMMAND} -E copy_if_different
                "${WOWDECOMP_DLSS_DIR}/lib/Windows_x86_64/rel/nvngx_dlss.dll"
                "$<TARGET_FILE_DIR:WowClient>/DLSS")
        add_dependencies(WaystoneDlssRuntime WowClient)
    endif()
endif()

# HD 2026-11-02, kit commun R1 lot G1: the grass wind (WorldClient/HD/HdGrassWind.cpp) may read the Seyris wind
# model compiled with WOWDECOMP_LUMEN (hd/seyris). OFF: exactly the previous build.
if (WOWDECOMP_LUMEN)
    target_compile_definitions(WorldClient PRIVATE WOWDECOMP_LUMEN=1)
endif ()
