#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _708;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _134 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _156 = (_134.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_134.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_134.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _171 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _567 = _156;
    _567.x = _171.x;
    _567.y = _171.y;
    _567.z = _171.z;
    vec3 _186 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _567.xyz;
    vec4 _573 = _567;
    _573.x = _186.x;
    _573.y = _186.y;
    _573.z = _186.z;
    vec3 _201 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _573.xyz;
    float _203 = _201.x;
    vec4 _579 = _573;
    _579.x = _203;
    _579.y = _201.y;
    _579.z = _201.z;
    float _212 = dot(_134.xyz, _579.xyz);
    vec4 _585 = _134;
    _585.w = _212;
    _585.w = _212 + _212;
    vec3 _228 = (_579.xyz * (-_585.www)) + _585.xyz;
    vec4 _591 = vec4(0.0);
    _591.x = _228.x;
    _591.y = _228.y;
    float _234 = _228.z;
    _591.z = _234;
    vec3 _241 = _591.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _597;
    _597.x = _241.x;
    _597.y = _241.y;
    _597.z = _241.z;
    vec3 _257 = (_591.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _597.xyz;
    vec4 _719 = vec4(_257.xy, _234, _257.z);
    vec3 _273 = (_719.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _719.xyw;
    vec4 _609 = vec4(0.0);
    _609.x = _273.x;
    _609.y = _273.y;
    _609.z = _273.z;
    vec2 _288 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _719.x = _288.x;
    _719.y = _288.y;
    vec4 _619;
    _619.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _619.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _310 = (_719.xy * _619.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _623 = vec4(0.0);
    _623.x = _310.x;
    _623.y = _310.y;
    float _324 = (_134.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _585.w = _324;
    float _328 = max(_324, 0.0);
    _585.w = _328;
    float _564;
    if (_328 == 0.0)
    {
        _564 = 0.0;
    }
    else
    {
        _564 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_328)));
    }
    vec4 _720 = vec4(_203, _201.yz, _564);
    vec3 _345 = -_585.xyz;
    float _349 = dot(_345, _345);
    vec4 _639 = _585;
    _639.w = _349;
    float _521 = inversesqrt(abs(_349));
    _639.w = _521;
    vec4 _721 = vec4(((-_639.xyz) * _639.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _521);
    vec3 _526 = _721.xyz;
    vec4 _531 = _721 * inversesqrt(dot(_526, _526));
    _719.x = _531.x;
    _719.y = _531.y;
    _719.z = _531.z;
    vec3 _386 = _720.xyz;
    float _387 = dot(_719.xyz, _386);
    _721.x = _387;
    _721.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _386), 0.0, 1.0);
    vec4 _660 = _720;
    _660.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _660.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _660.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _722 = vec4(_387, (_660.xyz * _721.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _426 = min(_722.yzw, vec3(1.0));
    vec4 _672 = _722;
    _672.y = _426.x;
    _672.z = _426.y;
    _672.w = _426.z;
    float _447 = max(_387, 0.0);
    float _565;
    if (_447 == 0.0)
    {
        _565 = 0.0;
    }
    else
    {
        _565 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_447)));
    }
    _660.x = _565;
    vec4 _553 = optPush.clipToTarget * ((_134.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _156);
    gl_Position = vec4(_553.x, -_553.y, _553.zw);
    color0 = vec4(_672.yzw * v2.xyz, 1.0);
    color1 = vec4(_660.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _609;
    texcoord1 = _623;
    fog0 = min(_564, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
