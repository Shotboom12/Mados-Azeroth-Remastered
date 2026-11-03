#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





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
    vec4 _139 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _161 = (_139.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_139.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_139.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _178 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _655 = _161;
    _655.x = _178.x;
    _655.y = _178.y;
    vec4 _659 = vec4(0.0);
    _659.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _659.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _200 = (_655.xy * _659.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _663 = vec4(0.0);
    _663.x = _200.x;
    _663.y = _200.y;
    _659.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _659.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _675 = _659;
    _675.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _675.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _683 = _675;
    _683.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _683.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _266 = (_655.xy * _683.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _687 = vec4(0.0);
    _687.x = _266.x;
    _687.y = _266.y;
    float _272 = _139.z;
    float _280 = (_272 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _692 = _655;
    _692.x = _280;
    float _284 = max(_280, 0.0);
    _692.x = _284;
    float _652;
    if (_284 == 0.0)
    {
        _652 = 0.0;
    }
    else
    {
        _652 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_284)));
    }
    _683.x = _652;
    vec3 _305 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _692.x = _305.x;
    _692.y = _305.y;
    _692.z = _305.z;
    vec3 _320 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _692.xyz;
    vec4 _709 = _692;
    _709.x = _320.x;
    _709.y = _320.y;
    _709.z = _320.z;
    vec3 _344 = -_139.xyz;
    float _348 = dot(_344, _344);
    vec4 _839 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _709.xyz, _348);
    _839.w = inversesqrt(abs(_348));
    vec3 _365 = (_344 * _839.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _683.x = _365.x;
    _683.y = _365.y;
    _683.z = _365.z;
    vec4 _619 = _683 * inversesqrt(dot(_683.xyz, _683.xyz));
    vec4 _732 = vec4(0.0);
    _732.x = _619.x;
    _732.y = _619.y;
    _732.z = _619.z;
    float _386 = dot(_732.xyz, _839.xyz);
    vec4 _738 = _839;
    _738.w = _386;
    _738.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _738.xyz), 0.0, 1.0);
    _683.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _683.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _683.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _840 = vec4((_683.xyz * _738.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _386);
    vec3 _425 = min(_840.xyz, vec3(1.0));
    vec4 _754 = _840;
    _754.x = _425.x;
    _754.y = _425.y;
    _754.z = _425.z;
    float _445 = max(_386, 0.0);
    float _653;
    if (_445 == 0.0)
    {
        _653 = 0.0;
    }
    else
    {
        _653 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_445)));
    }
    _683.x = _653;
    vec4 _802 = vec4(0.0);
    _802.x = _139.x;
    _802.y = _139.y;
    _802.z = _272;
    vec4 _641 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_641.x, -_641.y, _641.zw);
    color0 = vec4(_754.xyz * vec3(0.5), 1.0);
    color1 = vec4(_683.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _663;
    texcoord1 = vec4((_655.xy * _659.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_655.yx * _675.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _687;
    texcoord3 = _802;
    texcoord4 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_652, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
