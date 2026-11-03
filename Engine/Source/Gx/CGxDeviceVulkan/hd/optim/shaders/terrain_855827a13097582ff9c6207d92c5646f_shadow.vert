#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _765;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _116 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec3 _154 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _603;
    _603.x = _154.x;
    _603.y = _154.y;
    _603.z = _154.z;
    vec3 _169 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _603.xyz;
    vec4 _609;
    _609.x = _169.x;
    _609.y = _169.y;
    _609.z = _169.z;
    vec3 _184 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _609.xyz;
    float _186 = _184.x;
    vec4 _615;
    _615.x = _186;
    _615.y = _184.y;
    _615.z = _184.z;
    vec3 _192 = _116.xyz;
    float _195 = dot(_192, _615.xyz);
    vec4 _773 = vec4(_186, _184.yz, _195);
    _773.w = _195 + _195;
    vec3 _211 = (_773.xyz * (-_773.www)) + _192;
    vec4 _627 = vec4(0.0);
    _627.x = _211.x;
    _627.y = _211.y;
    _627.z = _211.z;
    vec4 _633;
    _633.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _773.xyz), 0.0, 1.0);
    vec4 _635;
    _635.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _635.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _635.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _247 = (_635.xyz * _633.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _641;
    _641.x = _247.x;
    _641.y = _247.y;
    _641.z = _247.z;
    vec3 _257 = min(_641.xyz, vec3(1.0));
    vec4 _647;
    _647.x = _257.x;
    _647.y = _257.y;
    _647.z = _257.z;
    vec3 _281 = _627.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _659;
    _659.x = _281.x;
    _659.y = _281.y;
    _659.z = _281.z;
    vec3 _297 = (_627.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _659.xyz;
    vec4 _665;
    _665.x = _297.x;
    _665.y = _297.y;
    _665.z = _297.z;
    vec3 _313 = (_627.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _665.xyz;
    vec4 _671 = vec4(0.0);
    _671.x = _313.x;
    _671.y = _313.y;
    _671.z = _313.z;
    vec2 _328 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _677;
    _677.x = _328.x;
    _677.y = _328.y;
    _627.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _627.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _689 = _627;
    _689.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _689.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _697 = _689;
    _697.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _697.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _705 = _697;
    _705.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _705.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _422 = _116.z;
    float _434 = max((_422 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _601;
    if (_434 == 0.0)
    {
        _601 = 0.0;
    }
    else
    {
        _601 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_434)));
    }
    vec4 _749 = vec4(0.0);
    _749.x = _116.x;
    _749.y = _116.y;
    _749.z = _422;
    vec4 _590 = optPush.clipToTarget * ((_116.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_116.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_116.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_116.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_590.x, -_590.y, _590.zw);
    color0 = vec4(_647.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _671;
    texcoord1 = vec4((_677.yx * _627.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_677.xy * _689.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_677.yx * _697.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_677.xy * _705.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _749;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_601, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
