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
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _139 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _161 = (_139.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_139.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_139.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _178 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _656 = _161;
    _656.x = _178.x;
    _656.y = _178.y;
    vec4 _660 = vec4(0.0);
    _660.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _660.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _200 = (_656.xy * _660.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _664 = vec4(0.0);
    _664.x = _200.x;
    _664.y = _200.y;
    _660.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _660.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _676 = _660;
    _676.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _676.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _684 = _676;
    _684.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _684.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _266 = (_656.xy * _684.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _688 = vec4(0.0);
    _688.x = _266.x;
    _688.y = _266.y;
    float _272 = _139.z;
    float _280 = (_272 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _693 = _656;
    _693.x = _280;
    float _284 = max(_280, 0.0);
    _693.x = _284;
    float _653;
    if (_284 == 0.0)
    {
        _653 = 0.0;
    }
    else
    {
        _653 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_284)));
    }
    _684.x = _653;
    vec3 _305 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _693.x = _305.x;
    _693.y = _305.y;
    _693.z = _305.z;
    vec3 _320 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _693.xyz;
    vec4 _710 = _693;
    _710.x = _320.x;
    _710.y = _320.y;
    _710.z = _320.z;
    vec3 _344 = -_139.xyz;
    float _348 = dot(_344, _344);
    vec4 _840 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _710.xyz, _348);
    _840.w = inversesqrt(abs(_348));
    vec3 _365 = (_344 * _840.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _684.x = _365.x;
    _684.y = _365.y;
    _684.z = _365.z;
    vec4 _620 = _684 * inversesqrt(dot(_684.xyz, _684.xyz));
    vec4 _733 = vec4(0.0);
    _733.x = _620.x;
    _733.y = _620.y;
    _733.z = _620.z;
    float _386 = dot(_733.xyz, _840.xyz);
    vec4 _739 = _840;
    _739.w = _386;
    _739.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _739.xyz), 0.0, 1.0);
    _684.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _684.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _684.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _841 = vec4((_684.xyz * _739.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _386);
    vec3 _425 = min(_841.xyz, vec3(1.0));
    vec4 _755 = _841;
    _755.x = _425.x;
    _755.y = _425.y;
    _755.z = _425.z;
    float _446 = max(_386, 0.0);
    float _654;
    if (_446 == 0.0)
    {
        _654 = 0.0;
    }
    else
    {
        _654 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_446)));
    }
    _684.x = _654;
    vec4 _803 = vec4(0.0);
    _803.x = _139.x;
    _803.y = _139.y;
    _803.z = _272;
    vec4 _642 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_642.x, -_642.y, _642.zw);
    color0 = vec4(_755.xyz * v2.xyz, 1.0);
    color1 = vec4(_684.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _664;
    texcoord1 = vec4((_656.xy * _660.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_656.yx * _676.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _688;
    texcoord3 = _803;
    texcoord4 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_653, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
