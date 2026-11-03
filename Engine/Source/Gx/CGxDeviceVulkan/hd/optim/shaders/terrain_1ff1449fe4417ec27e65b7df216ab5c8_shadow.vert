#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _111 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _133 = (_111.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_111.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_111.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _149 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _491 = _133;
    _491.x = _149.x;
    _491.y = _149.y;
    _491.z = _149.z;
    vec3 _164 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _491.xyz;
    vec4 _497 = _491;
    _497.x = _164.x;
    _497.y = _164.y;
    _497.z = _164.z;
    vec3 _179 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _497.xyz;
    float _181 = _179.x;
    vec4 _503 = _497;
    _503.x = _181;
    _503.y = _179.y;
    _503.z = _179.z;
    float _190 = dot(_111.xyz, _503.xyz);
    vec4 _509 = _111;
    _509.w = _190;
    _509.w = _190 + _190;
    vec3 _206 = (_503.xyz * (-_509.www)) + _509.xyz;
    float _222 = (_111.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _623 = vec4(_206.xy, _222, _206.z);
    float _226 = max(_222, 0.0);
    _623.z = _226;
    float _489;
    if (_226 == 0.0)
    {
        _489 = 0.0;
    }
    else
    {
        _489 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_226)));
    }
    vec4 _624 = vec4(_181, _179.yz, _489);
    _623.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _624.xyz), 0.0, 1.0);
    _624.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _624.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _624.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _269 = (_624.xyz * _623.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _541 = _624;
    _541.x = _269.x;
    _541.y = _269.y;
    _541.z = _269.z;
    vec3 _279 = min(_541.xyz, vec3(1.0));
    vec4 _547 = _541;
    _547.x = _279.x;
    _547.y = _279.y;
    _547.z = _279.z;
    vec3 _304 = _623.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _559 = _547;
    _559.x = _304.x;
    _559.y = _304.y;
    _559.z = _304.z;
    vec3 _320 = (_623.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _559.xyz;
    vec4 _565 = _623;
    _565.x = _320.x;
    _565.y = _320.y;
    _565.z = _320.z;
    vec3 _336 = (_565.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _565.xyz;
    vec4 _571 = vec4(0.0);
    _571.x = _336.x;
    _571.y = _336.y;
    _571.z = _336.z;
    vec2 _351 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _565.x = _351.x;
    _565.y = _351.y;
    _559.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _559.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _373 = (_565.xy * _559.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _585 = vec4(0.0);
    _585.x = _373.x;
    _585.y = _373.y;
    _559.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _559.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _395 = (_565.xy * _559.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _593 = vec4(0.0);
    _593.x = _395.x;
    _593.y = _395.y;
    _559.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _559.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _417 = (_565.xy * _559.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _601 = vec4(0.0);
    _601.x = _417.x;
    _601.y = _417.y;
    vec4 _478 = optPush.clipToTarget * ((_111.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _133);
    gl_Position = vec4(_478.x, -_478.y, _478.zw);
    color0 = vec4(_547.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _571;
    texcoord1 = _585;
    texcoord2 = _593;
    texcoord3 = _601;
    fog0 = min(_489, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
