// SPDX-License-Identifier: GPL-3.0-or-later
// HD: the Cata water's sky in reflections, tranche 3 (CataMirror.cpp): the game's own sky (DayNight::RenderSky: the
// stars, the sun and the moons, the dome, the clouds, the skybox models) drawn again by the engine with its view
// mirrored in a horizontal plane (WoW/Source/WorldClient/HD/HdCataWater.cpp), into a render target upside down (its
// projection's y negated keeps the winding). A pixel of the reflection target shows that render's pixel at the same
// place, flipped back.
#version 450
layout(location = 0) out vec4 outColor;
layout(set = 0, binding = 0) uniform sampler2D skyTex;
layout(push_constant) uniform Push {
    vec4 invExtent;      // xy: 1 / the reflection target's size
} pc;
void main() {
    vec2 uv = gl_FragCoord.xy * pc.invExtent.xy;
    outColor = vec4(texture(skyTex, vec2(uv.x, 1.0 - uv.y)).rgb, 1.0);
}
