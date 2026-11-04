// SPDX-License-Identifier: GPL-3.0-or-later
// Material helper ONLY. This does not instrument translated M2/WMO/terrain shaders automatically.
// Evaluate the SAME final material twice in registers: with points, then excluding the chosen key.
// Do not redraw the world twice. Inputs: encoded/clipped final RGB, matching alpha and fog.
vec4 HdMakeLocalLampDelta(vec4 withLamp,vec4 withoutLamp,bool covered) {
    if(!covered || any(isnan(withLamp)) || any(isinf(withLamp)) || any(isnan(withoutLamp)) || any(isinf(withoutLamp)))return vec4(0);
    if(withLamp.a!=withoutLamp.a || any(lessThan(withLamp.rgb,vec3(0))) || any(greaterThan(withLamp.rgb,vec3(1))) || any(lessThan(withoutLamp.rgb,vec3(0))) || any(greaterThan(withoutLamp.rgb,vec3(1))))return vec4(0);
    return vec4(withLamp.rgb-withoutLamp.rgb,1);
}
