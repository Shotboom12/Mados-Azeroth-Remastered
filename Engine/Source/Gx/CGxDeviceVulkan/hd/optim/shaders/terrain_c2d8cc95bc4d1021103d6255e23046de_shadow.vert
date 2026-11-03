#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _806;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _137 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _159 = (_137.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_137.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_137.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _174 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _641 = _159;
    _641.x = _174.x;
    _641.y = _174.y;
    _641.z = _174.z;
    vec3 _189 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _641.xyz;
    vec4 _647 = _641;
    _647.x = _189.x;
    _647.y = _189.y;
    _647.z = _189.z;
    vec3 _204 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _647.xyz;
    float _206 = _204.x;
    vec4 _653 = _647;
    _653.x = _206;
    _653.y = _204.y;
    _653.z = _204.z;
    float _215 = dot(_137.xyz, _653.xyz);
    vec4 _659 = _137;
    _659.w = _215;
    _659.w = _215 + _215;
    vec3 _231 = (_653.xyz * (-_659.www)) + _659.xyz;
    vec4 _665 = vec4(0.0);
    _665.x = _231.x;
    _665.y = _231.y;
    float _237 = _231.z;
    _665.z = _237;
    vec3 _244 = _665.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _671;
    _671.x = _244.x;
    _671.y = _244.y;
    _671.z = _244.z;
    vec3 _260 = (_665.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _671.xyz;
    vec4 _817 = vec4(_260.xy, _237, _260.z);
    vec3 _276 = (_817.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _817.xyw;
    vec4 _683 = vec4(0.0);
    _683.x = _276.x;
    _683.y = _276.y;
    _683.z = _276.z;
    vec2 _291 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _817.x = _291.x;
    _817.y = _291.y;
    vec4 _693;
    _693.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _693.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _313 = (_817.xy * _693.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _697 = vec4(0.0);
    _697.x = _313.x;
    _697.y = _313.y;
    vec4 _701;
    _701.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _701.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _335 = (_817.xy * _701.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _705 = vec4(0.0);
    _705.x = _335.x;
    _705.y = _335.y;
    vec4 _709;
    _709.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _709.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _357 = (_817.xy * _709.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _713 = vec4(0.0);
    _713.x = _357.x;
    _713.y = _357.y;
    vec4 _717;
    _717.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _717.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _379 = (_817.xy * _717.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _721 = vec4(0.0);
    _721.x = _379.x;
    _721.y = _379.y;
    float _393 = (_137.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _659.w = _393;
    float _397 = max(_393, 0.0);
    _659.w = _397;
    float _638;
    if (_397 == 0.0)
    {
        _638 = 0.0;
    }
    else
    {
        _638 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_397)));
    }
    vec4 _818 = vec4(_206, _204.yz, _638);
    vec3 _414 = -_659.xyz;
    float _418 = dot(_414, _414);
    vec4 _737 = _659;
    _737.w = _418;
    float _595 = inversesqrt(abs(_418));
    _737.w = _595;
    vec4 _819 = vec4(((-_737.xyz) * _737.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _595);
    vec3 _600 = _819.xyz;
    vec4 _605 = _819 * inversesqrt(dot(_600, _600));
    _817.x = _605.x;
    _817.y = _605.y;
    _817.z = _605.z;
    vec3 _455 = _818.xyz;
    float _456 = dot(_817.xyz, _455);
    _819.x = _456;
    _819.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _455), 0.0, 1.0);
    vec4 _758 = _818;
    _758.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _758.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _758.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _820 = vec4(_456, (_758.xyz * _819.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _495 = min(_820.yzw, vec3(1.0));
    vec4 _770 = _820;
    _770.y = _495.x;
    _770.z = _495.y;
    _770.w = _495.z;
    float _515 = max(_456, 0.0);
    float _639;
    if (_515 == 0.0)
    {
        _639 = 0.0;
    }
    else
    {
        _639 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_515)));
    }
    _758.x = _639;
    vec4 _627 = optPush.clipToTarget * ((_137.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _159);
    gl_Position = vec4(_627.x, -_627.y, _627.zw);
    color0 = vec4(_770.yzw * vec3(0.5), 1.0);
    color1 = vec4(_758.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _683;
    texcoord1 = _697;
    texcoord2 = _705;
    texcoord3 = _713;
    texcoord4 = _721;
    fog0 = min(_638, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
