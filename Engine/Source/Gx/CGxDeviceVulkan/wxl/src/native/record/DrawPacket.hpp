// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once
#include "draw/Cmd.hpp"
#include <cstring>
#include <type_traits>

namespace wxlvk::native::impl {
// Claude MT5 (native/Draw.cpp, engine thread): the native device's vertex register file (256 rows), the rows a
// constant flush wrote since the last delta packet (false: none), and the reset once a packet carries them.
const float (*VsRegisterFile())[4];
bool VsDelta(uint32_t& lo, uint32_t& hi);
void VsDeltaTaken();
void VsDeltaAll();
}

namespace wxlvk::native::present::detail {
// Claude CPU-B (Pass.cpp, engine thread): a texture's layout as the record thread's stream will have it when this
// draw runs -- a queued pass end or begin not run yet has written the overlay only. False: the image's own is.
bool StreamLayout(const void* at, uint32_t& out) noexcept;
}

namespace wxlvk::recordthread {
// This owns register bytes AND CPU Image metadata. It does NOT own GPU resources,
// engineTex0, WMO/FSR scopes, wind state or shader registries. See THREAD-SAFETY.md.
// Never copy a packet and use its old internal pointers: always Rebase() at consumption.
struct alignas(64) DrawPacket {
    draw::Cmd cmd;
    VkCommandBuffer buffer;
    VkRenderPass pass;
    uint32_t frameSlot;
    bool inQuery, vkQuery;
    bool hasVertex, hasHigh, hasPalette;
    bool paletteAlias;   // Claude 2026-11-04: the palette is rows c31.. of the same register file, already in vertex[]
    uint32_t textureMask;
    alignas(16) float vertex[draw::Cmd::kVertexRegsHigh][4];
    alignas(16) float palette[draw::Cmd::kVertexRegsHigh-draw::Cmd::kPaletteBase][4];
    vk::texture::Image images[draw::Cmd::kTextureStages];
    const vk::texture::Image* origin[draw::Cmd::kTextureStages];   ///< Claude CPU-B (the proof): the image each copy is of
    // Claude MT5: a delta packet. Its rows that point into the native register file are read, on the record
    // thread, from that thread's own copy of the file, which every delta packet brings up to date in order with
    // the rows written since the previous one (deltaRows[deltaLo..deltaHi]). check: the whole file as it was at
    // the draw (checkRows), compared with the copy (the proof).
    bool delta=false, fileRows=false, fileHigh=false, filePalette=false, check=false;
    uint32_t deltaLo=1, deltaHi=0;
    alignas(16) float deltaRows[draw::Cmd::kVertexRegsHigh][4];
    alignas(16) float checkRows[draw::Cmd::kVertexRegsHigh][4];

    bool Snapshot(VkCommandBuffer b, VkRenderPass p, uint32_t slot,
                  const draw::Cmd& c, bool query=false, bool vkq=false) noexcept {
        using C=draw::Cmd;
        static_assert(std::is_trivially_copyable_v<C>);
        static_assert(std::is_trivially_copyable_v<vk::texture::Image>);
        constexpr uint32_t hi=C::kVertexRegsHigh-C::kVertexRegs;
        constexpr uint32_t pal=C::kVertexRegsHigh-C::kPaletteBase;
        // Reject an invalid span instead of hiding it by truncation. Native code can
        // fall back synchronously to its original path without losing a draw.
        if ((c.vconst==C::kVertexRegsHigh && c.highRows>hi) || c.paletteCount>pal) return false;
        // CP1: vertexConst is an embedded fixed-function scratch array. Shader draws
        // consume vertexRows, snapshotted below, and never consume this scratch array.
        // Keep the fixed-function copy: diagnostics still read cmd.vertexConst directly.
        static_assert(std::is_standard_layout_v<C>);
        delta=false;   // Claude MT5
        constexpr size_t scratchEnd=offsetof(C,vertexConst)+sizeof(C::vertexConst);
        std::memcpy(&cmd,&c,offsetof(C,vertexConst));
        if(c.fixedFunction) std::memcpy(cmd.vertexConst,c.vertexConst,sizeof c.vertexConst);
        if constexpr(sizeof(C)>scratchEnd) std::memcpy(reinterpret_cast<char*>(&cmd)+scratchEnd,
            reinterpret_cast<const char*>(&c)+scratchEnd,sizeof(C)-scratchEnd);
        buffer=b; pass=p; frameSlot=slot; inQuery=query; vkQuery=vkq;
        hasVertex=c.vertexRows!=nullptr;
        hasHigh=c.vertexConstHigh!=nullptr;
        hasPalette=c.paletteRows!=nullptr;
        if(hasVertex) std::memcpy(vertex,c.vertexRows,C::kVertexRegs*16u);
        if(hasHigh && c.vconst==C::kVertexRegsHigh && c.highRows)
            std::memcpy(vertex+C::kVertexRegs,c.vertexConstHigh,c.highRows*16u);
        // MT2 (Claude 2026-11-04): slot 42 points the palette at c31 of the register file whose c0..c63 and c64..
        // are copied just above; when the palette lies inside those copied rows it is not copied a second time.
        paletteAlias=hasPalette && hasVertex && hasHigh && c.vconst==C::kVertexRegsHigh
            && c.paletteRows==c.vertexRows+C::kPaletteBase && c.vertexConstHigh==c.vertexRows+C::kVertexRegs
            && C::kPaletteBase+c.paletteCount<=C::kVertexRegs+c.highRows;
        if(hasPalette && c.paletteCount && !paletteAlias) std::memcpy(palette,c.paletteRows,c.paletteCount*16u);
        textureMask=0;
        for(uint32_t i=0;i<C::kTextureStages;++i) if(c.texture[i]) {
            std::memcpy(&images[i],c.texture[i],sizeof images[i]); textureMask|=1u<<i; origin[i]=c.texture[i];
            // Claude CPU-B: the copy is taken now, ahead of the queued pass ops: their layout, not the image's yet.
            uint32_t streamed=0;
            if(native::present::detail::StreamLayout(&c.texture[i]->layout,streamed)) images[i].layout=static_cast<VkImageLayout>(streamed);
        }
        Rebase();
        return true;
    }
    /**
     * Claude MT5: Snapshot(), except that the rows read from the register file `file` are not copied: the packet
     * carries the rows written since the previous delta packet (file[lo..hi]) and the record thread reads its own
     * copy of the file, brought up to date by them in order (Rebase(mirror)). Rows read from anywhere else (the
     * fixed-function scratch) are copied as Snapshot() copies them.
     */
    bool SnapshotDelta(VkCommandBuffer b, VkRenderPass p, uint32_t slot, const draw::Cmd& c,
                       const float (*file)[4], uint32_t lo, uint32_t hi, bool proof) noexcept {
        using C=draw::Cmd;
        constexpr uint32_t hiMax=C::kVertexRegsHigh-C::kVertexRegs;
        constexpr uint32_t pal=C::kVertexRegsHigh-C::kPaletteBase;
        if ((c.vconst==C::kVertexRegsHigh && c.highRows>hiMax) || c.paletteCount>pal) return false;
        if (lo<=hi && hi>=C::kVertexRegsHigh) return false;
        constexpr size_t scratchEnd=offsetof(C,vertexConst)+sizeof(C::vertexConst);
        std::memcpy(&cmd,&c,offsetof(C,vertexConst));
        if(c.fixedFunction) std::memcpy(cmd.vertexConst,c.vertexConst,sizeof c.vertexConst);
        if constexpr(sizeof(C)>scratchEnd) std::memcpy(reinterpret_cast<char*>(&cmd)+scratchEnd,
            reinterpret_cast<const char*>(&c)+scratchEnd,sizeof(C)-scratchEnd);
        buffer=b; pass=p; frameSlot=slot; inQuery=false; vkQuery=false;
        hasVertex=c.vertexRows!=nullptr;
        hasHigh=c.vertexConstHigh!=nullptr;
        hasPalette=c.paletteRows!=nullptr;
        fileRows=hasVertex && c.vertexRows==file;
        fileHigh=hasHigh && c.vertexConstHigh==file+C::kVertexRegs;
        filePalette=hasPalette && c.paletteRows==file+C::kPaletteBase;
        if(hasVertex && !fileRows) std::memcpy(vertex,c.vertexRows,C::kVertexRegs*16u);
        if(hasHigh && !fileHigh && c.vconst==C::kVertexRegsHigh && c.highRows)
            std::memcpy(vertex+C::kVertexRegs,c.vertexConstHigh,c.highRows*16u);
        paletteAlias=hasPalette && !filePalette && hasVertex && hasHigh && c.vconst==C::kVertexRegsHigh
            && c.paletteRows==c.vertexRows+C::kPaletteBase && c.vertexConstHigh==c.vertexRows+C::kVertexRegs
            && C::kPaletteBase+c.paletteCount<=C::kVertexRegs+c.highRows;
        if(hasPalette && !filePalette && c.paletteCount && !paletteAlias) std::memcpy(palette,c.paletteRows,c.paletteCount*16u);
        delta=true; deltaLo=lo; deltaHi=hi; check=proof;
        if(lo<=hi) std::memcpy(deltaRows[lo],file[lo],(hi-lo+1u)*16u);
        if(proof) std::memcpy(checkRows,file,sizeof checkRows);
        textureMask=0;
        for(uint32_t i=0;i<C::kTextureStages;++i) if(c.texture[i]) {
            std::memcpy(&images[i],c.texture[i],sizeof images[i]); textureMask|=1u<<i; origin[i]=c.texture[i];
            // Claude CPU-B: the copy is taken now, ahead of the queued pass ops: their layout, not the image's yet.
            uint32_t streamed=0;
            if(native::present::detail::StreamLayout(&c.texture[i]->layout,streamed)) images[i].layout=static_cast<VkImageLayout>(streamed);
        }
        return true;   // Rebase(mirror) on the record thread
    }
    /// Claude MT5: a delta packet's pointers, the file's rows read from `mirror` (the record thread's copy).
    void Rebase(const float (*mirror)[4]) noexcept {
        using C=draw::Cmd;
        cmd.vertexRows=fileRows?mirror:(hasVertex?vertex:nullptr);
        cmd.vertexConstHigh=fileHigh?mirror+C::kVertexRegs:(hasHigh?vertex+C::kVertexRegs:nullptr);
        cmd.paletteRows=filePalette?mirror+C::kPaletteBase:(hasPalette?(paletteAlias?vertex+C::kPaletteBase:palette):nullptr);
        for(uint32_t i=0;i<C::kTextureStages;++i)
            cmd.texture[i]=(textureMask&(1u<<i))?&images[i]:nullptr;
    }
    void Rebase() noexcept {
        cmd.vertexRows=hasVertex?vertex:nullptr;
        cmd.vertexConstHigh=hasHigh?vertex+draw::Cmd::kVertexRegs:nullptr;
        cmd.paletteRows=hasPalette?(paletteAlias?vertex+draw::Cmd::kPaletteBase:palette):nullptr;
        for(uint32_t i=0;i<draw::Cmd::kTextureStages;++i)
            cmd.texture[i]=(textureMask&(1u<<i))?&images[i]:nullptr;
    }
};
}
