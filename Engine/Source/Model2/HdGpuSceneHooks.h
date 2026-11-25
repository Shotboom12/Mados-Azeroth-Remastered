// Claude voie B, B2 (23 nov 2026): the M2 scene's calls into HD::GpuScene (WoW/Source/WorldClient/HD/HdGpuScene.cpp).
#pragma once

#include <cstdint>

class CM2Lighting;
class CM2Scene;
class M2Element;

namespace HD::GpuScene
{
    /// The element is a GPU-driven group (M2Element::m_flags), its group in m_index.
    constexpr uint32_t kElement = 0x100;

    /// CM2Scene::Animate, after the AnimateST loop: the fixed doodads next to a lamp go back to the original path.
    void LateLit(CM2Scene* scene);
    /// CM2Scene::Animate, at its end: this frame's groups, commands and lighting classes.
    void OnAnimate(CM2Scene* scene);
    /// CM2Scene::Draw(M2PASS_0): the groups' elements (phase 0, then phase 1 after the depth pyramid). False: none.
    bool Elements(CM2Scene* scene, uint32_t phase, M2Element*& elements, uint32_t*& indices, uint32_t& count);
    /// Claude ORDRE1 (hdOrdre1): the ground after the objects, plain shadow casters without a pixel stage.
    bool Ordre1();
    /// Claude ORDRE1: the groups can be drawn before the ground this frame (CM2Scene::HdDrawGpuScene).
    bool Early(CM2Scene* scene);
    /// The lighting the group's element is drawn with.
    CM2Lighting* Lighting(const M2Element* element);
    /// The group's commands are armed (the next Gx draw is theirs); Disarm after it.
    bool Arm(const M2Element* element);
    void Disarm();
}
