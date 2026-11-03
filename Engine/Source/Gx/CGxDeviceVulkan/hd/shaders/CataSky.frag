// SPDX-License-Identifier: GPL-3.0-or-later
// HD: the Cata water's sky in reflections (CataMirror.cpp). The reflection targets are aligned with the screen (the
// water looks them up with the main camera's view-projection), so a pixel shows the sky in the main camera's ray
// mirrored in a horizontal plane: the ray's elevation negated. The sky is DayNight's dome (DNSky) reduced to its
// rings (the engine's GxCataSky): the colour is interpolated between the two rings around that elevation.
#version 450
layout(location = 0) out vec4 outColor;
layout(push_constant) uniform Push {
    vec4  rayX;          // the world ray of a pixel: rayX * x + rayY * y + rayO (x, y in target pixels); rayX.w = rings
    vec4  rayY;
    vec4  rayO;
    float sinElev[8];    // the rings, top first: the sine of their elevation seen from the camera
    uint  color[8];      // their colour, unpackUnorm4x8 (r, g, b, unused)
} pc;
void main() {
    vec3 ray = pc.rayX.xyz * gl_FragCoord.x + pc.rayY.xyz * gl_FragCoord.y + pc.rayO.xyz;
    float s = -ray.z / max(length(ray), 1e-6);   // the mirrored ray's elevation
    int count = int(pc.rayX.w);
    vec3 c = unpackUnorm4x8(pc.color[0]).rgb;
    if (s < pc.sinElev[0]) {
        c = unpackUnorm4x8(pc.color[count - 1]).rgb;
        for (int i = 1; i < count; ++i) {
            if (s >= pc.sinElev[i]) {
                float t = (s - pc.sinElev[i]) / max(pc.sinElev[i - 1] - pc.sinElev[i], 1e-6);
                c = mix(unpackUnorm4x8(pc.color[i]).rgb, unpackUnorm4x8(pc.color[i - 1]).rgb, t);
                break;
            }
        }
    }
    outColor = vec4(c, 1.0);
}
