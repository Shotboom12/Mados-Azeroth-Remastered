// HD: the wxl hook points as engine seams (wxlcompat/Seams.hpp, Engine/Source/Gx/GxSeam.h). Part of the
// wxl-vulkan-api port (WarcraftXL, GPL-3.0).
//
// The 32-bit core detoured six engine functions by address. Here each one asks GxSeamEnter at its top and
// calls the seam's outermost bracket; the chain below keeps the core's order (lower priority first, equal
// values in attach order), and its last link is an adapter that calls the engine function again with the
// seam's re-entry flag set, so that call runs the function's own body.

#include "wxlcompat/Seams.hpp"

#include "shaders/Translated.hpp"
#include "wxl/PluginApi.h"
#include "wxlcompat/Engine.hpp"

#include "Engine/Source/Gx/GxSeam.h"
#include "Engine/Source/Model2/CM2SceneRender.h"
#include "WoW/Source/Ui/WorldFrame.h"
#include "WoW/Source/WorldClient/MapObj.h"
#include "WoW/Source/WorldClient/World.h"

#include <cstdio>
#include <cstring>

namespace
{
    // The last link of each chain: the engine function, entered again past its seam.

    void __fastcall WorldOnRender(void* worldFrame, void* /*edx*/)
    {
        g_gxSeams[GxSeam_WorldOnRender].m_reenter = 1;
        static_cast<CGWorldFrame*>(worldFrame)->OnWorldRender();
    }

    void __cdecl DetailDoodads()
    {
        g_gxSeams[GxSeam_DetailDoodads].m_reenter = 1;
        CWorldScene::RenderDetailDoodads();
    }

    void __cdecl LiquidPass()
    {
        g_gxSeams[GxSeam_LiquidPass].m_reenter = 1;
        CWorldScene::RenderLiquidPass();
    }

    uint32_t __fastcall DrawBatchDoodad(void* render, void* /*edx*/, void* elements, void* indices)
    {
        g_gxSeams[GxSeam_DrawBatchDoodad].m_reenter = 1;
        static_cast<CM2SceneRender*>(render)->DrawBatchDoodad(static_cast<M2Element*>(elements), static_cast<uint32_t*>(indices));
        return 0;
    }

    void __fastcall WmoExterior(void* mapObj, void* /*edx*/, void* group, int index)
    {
        g_gxSeams[GxSeam_WmoExterior].m_reenter = 1;
        static_cast<CMapObj*>(mapObj)->ExteriorRender(static_cast<CMapObjGroup*>(group), static_cast<uint32_t>(index));
    }

    void __fastcall WmoInterior(void* mapObj, void* /*edx*/, void* group, int index)
    {
        g_gxSeams[GxSeam_WmoInterior].m_reenter = 1;
        static_cast<CMapObj*>(mapObj)->InteriorRender(static_cast<CMapObjGroup*>(group), static_cast<uint32_t>(index));
    }

    struct Link
    {
        int    priority;
        void*  detour;
        void** original;
    };

    struct Chain
    {
        const char* name;     ///< the core's hook point name
        EGxSeam     seam;
        void*       engine;   ///< the last link
        Link        links[4];
        uint32_t    count;
    };

    Chain g_chains[] = {
        { "Gx.WorldOnRender",        GxSeam_WorldOnRender,   reinterpret_cast<void*>(&WorldOnRender),   {}, 0 },
        { "Adt.RenderDetailDoodads", GxSeam_DetailDoodads,   reinterpret_cast<void*>(&DetailDoodads),   {}, 0 },
        { "Liquid.WorldLiquidPass",  GxSeam_LiquidPass,      reinterpret_cast<void*>(&LiquidPass),      {}, 0 },
        { "M2.DrawBatchDoodad",      GxSeam_DrawBatchDoodad, reinterpret_cast<void*>(&DrawBatchDoodad), {}, 0 },
        { "Wmo.ExtRender",           GxSeam_WmoExterior,     reinterpret_cast<void*>(&WmoExterior),     {}, 0 },
        { "Wmo.IntRender",           GxSeam_WmoInterior,     reinterpret_cast<void*>(&WmoInterior),     {}, 0 },
    };

    bool g_enabled = false;

    int32_t ShaderKnown(const void* code, uint32_t size)
    {
        return wxlvk::shaders::translated::Known(code, size) ? 1 : 0;
    }

    /// The chain's outermost link (what the engine calls), or nothing when no detour is attached.
    void* Outermost(const Chain& c) { return c.count ? c.links[0].detour : nullptr; }

    void Arm(const Chain& c) { g_gxSeams[c.seam].m_bracket = g_enabled ? Outermost(c) : nullptr; }
}

namespace wxlcompat
{
    bool SeamAttach(const char* name, void* detour, void** original, int priority)
    {
        if (!name || !detour || !original) return false;
        for (Chain& c : g_chains)
        {
            if (std::strcmp(c.name, name) != 0) continue;
            if (c.count >= sizeof c.links / sizeof *c.links)
            {
                Log(WXL_LOG_WARN, "wxl-vulkan-api", "seam: too many detours on one point, refused");
                return false;
            }
            uint32_t at = c.count;
            while (at > 0 && c.links[at - 1].priority > priority)
            {
                c.links[at] = c.links[at - 1];
                --at;
            }
            c.links[at] = { priority, detour, original };
            ++c.count;
            // Every link's original is the next one in, the last one's the engine function.
            for (uint32_t i = 0; i < c.count; ++i)
                *c.links[i].original = i + 1 < c.count ? c.links[i + 1].detour : c.engine;
            Arm(c);

            char line[160];
            std::snprintf(line, sizeof line, "seam: %s attached (%u detour(s) on it, priority %d)", name, c.count, priority);
            Log(WXL_LOG_DEBUG, "wxl-vulkan-api", line);
            return true;
        }
        return false;
    }

    void SeamsEnable(bool on)
    {
        g_enabled = on;
        g_gxShaderKnown = on ? &ShaderKnown : nullptr;
        for (const Chain& c : g_chains)
        {
            Arm(c);
            g_gxSeams[c.seam].m_reenter = 0;
        }
    }
}
