#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _707;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec4 _566 = _156;
    _566.x = _171.x;
    _566.y = _171.y;
    _566.z = _171.z;
    vec3 _186 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _566.xyz;
    vec4 _572 = _566;
    _572.x = _186.x;
    _572.y = _186.y;
    _572.z = _186.z;
    vec3 _201 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _572.xyz;
    float _203 = _201.x;
    vec4 _578 = _572;
    _578.x = _203;
    _578.y = _201.y;
    _578.z = _201.z;
    float _212 = dot(_134.xyz, _578.xyz);
    vec4 _584 = _134;
    _584.w = _212;
    _584.w = _212 + _212;
    vec3 _228 = (_578.xyz * (-_584.www)) + _584.xyz;
    vec4 _590 = vec4(0.0);
    _590.x = _228.x;
    _590.y = _228.y;
    float _234 = _228.z;
    _590.z = _234;
    vec3 _241 = _590.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _596;
    _596.x = _241.x;
    _596.y = _241.y;
    _596.z = _241.z;
    vec3 _257 = (_590.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _596.xyz;
    vec4 _718 = vec4(_257.xy, _234, _257.z);
    vec3 _273 = (_718.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _718.xyw;
    vec4 _608 = vec4(0.0);
    _608.x = _273.x;
    _608.y = _273.y;
    _608.z = _273.z;
    vec2 _288 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _718.x = _288.x;
    _718.y = _288.y;
    vec4 _618;
    _618.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _618.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _310 = (_718.xy * _618.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _622 = vec4(0.0);
    _622.x = _310.x;
    _622.y = _310.y;
    float _324 = (_134.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _584.w = _324;
    float _328 = max(_324, 0.0);
    _584.w = _328;
    float _563;
    if (_328 == 0.0)
    {
        _563 = 0.0;
    }
    else
    {
        _563 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_328)));
    }
    vec4 _719 = vec4(_203, _201.yz, _563);
    vec3 _345 = -_584.xyz;
    float _349 = dot(_345, _345);
    vec4 _638 = _584;
    _638.w = _349;
    float _520 = inversesqrt(abs(_349));
    _638.w = _520;
    vec4 _720 = vec4(((-_638.xyz) * _638.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _520);
    vec3 _525 = _720.xyz;
    vec4 _530 = _720 * inversesqrt(dot(_525, _525));
    _718.x = _530.x;
    _718.y = _530.y;
    _718.z = _530.z;
    vec3 _386 = _719.xyz;
    float _387 = dot(_718.xyz, _386);
    _720.x = _387;
    _720.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _386), 0.0, 1.0);
    vec4 _659 = _719;
    _659.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _659.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _659.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _721 = vec4(_387, (_659.xyz * _720.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _426 = min(_721.yzw, vec3(1.0));
    vec4 _671 = _721;
    _671.y = _426.x;
    _671.z = _426.y;
    _671.w = _426.z;
    float _446 = max(_387, 0.0);
    float _564;
    if (_446 == 0.0)
    {
        _564 = 0.0;
    }
    else
    {
        _564 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_446)));
    }
    _659.x = _564;
    vec4 _552 = optPush.clipToTarget * ((_134.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _156);
    gl_Position = vec4(_552.x, -_552.y, _552.zw);
    color0 = vec4(_671.yzw * vec3(0.5), 1.0);
    color1 = vec4(_659.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _608;
    texcoord1 = _622;
    fog0 = min(_563, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
