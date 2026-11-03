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
    vec3 _176 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _728 = _161;
    _728.x = _176.x;
    _728.y = _176.y;
    _728.z = _176.z;
    vec3 _191 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _728.xyz;
    vec4 _734 = _728;
    _734.x = _191.x;
    _734.y = _191.y;
    _734.z = _191.z;
    vec3 _206 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _734.xyz;
    float _208 = _206.x;
    vec4 _740 = _734;
    _740.x = _208;
    _740.y = _206.y;
    _740.z = _206.z;
    vec3 _214 = _139.xyz;
    float _217 = dot(_214, _740.xyz);
    vec4 _941 = vec4(_208, _206.yz, _217);
    _941.w = _217 + _217;
    vec3 _233 = (_941.xyz * (-_941.www)) + _214;
    vec4 _752 = vec4(0.0);
    _752.x = _233.x;
    _752.y = _233.y;
    float _239 = _233.z;
    _752.z = _239;
    vec3 _246 = _752.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _758 = vec4(0.0);
    _758.x = _246.x;
    _758.y = _246.y;
    _758.z = _246.z;
    vec3 _262 = (_752.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _758.xyz;
    vec4 _942 = vec4(_262.xy, _239, _262.z);
    vec3 _278 = (_942.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _942.xyw;
    vec4 _770 = vec4(0.0);
    _770.x = _278.x;
    _770.y = _278.y;
    _770.z = _278.z;
    vec2 _293 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _942.x = _293.x;
    _942.y = _293.y;
    _758.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _758.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _788 = _758;
    _788.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _788.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _796 = _788;
    _796.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _796.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _804 = _796;
    _804.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _804.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _387 = _139.z;
    float _395 = (_387 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _941.w = _395;
    float _399 = max(_395, 0.0);
    _941.w = _399;
    float _725;
    if (_399 == 0.0)
    {
        _725 = 0.0;
    }
    else
    {
        _725 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_399)));
    }
    vec4 _819 = _942;
    _819.x = _725;
    vec3 _416 = -_214;
    float _420 = dot(_416, _416);
    _941.w = _420;
    _941.w = inversesqrt(abs(_420));
    vec3 _437 = (_416 * _941.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _819.x = _437.x;
    _819.y = _437.y;
    _819.z = _437.z;
    vec4 _692 = _819 * inversesqrt(dot(_819.xyz, _819.xyz));
    vec4 _835 = _804;
    _835.x = _692.x;
    _835.y = _692.y;
    _835.z = _692.z;
    float _458 = dot(_835.xyz, _941.xyz);
    vec4 _841 = _941;
    _841.w = _458;
    _841.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _841.xyz), 0.0, 1.0);
    _819.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _819.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _819.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _945 = vec4((_819.xyz * _841.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _458);
    vec3 _497 = min(_945.xyz, vec3(1.0));
    vec4 _857 = _945;
    _857.x = _497.x;
    _857.y = _497.y;
    _857.z = _497.z;
    float _518 = max(_458, 0.0);
    float _726;
    if (_518 == 0.0)
    {
        _726 = 0.0;
    }
    else
    {
        _726 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_518)));
    }
    _819.x = _726;
    vec4 _905 = vec4(0.0);
    _905.x = _139.x;
    _905.y = _139.y;
    _905.z = _387;
    vec4 _714 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_714.x, -_714.y, _714.zw);
    color0 = vec4(_857.xyz * v2.xyz, 1.0);
    color1 = vec4(_819.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _770;
    texcoord1 = vec4((_942.yx * _758.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_942.xy * _788.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_942.yx * _796.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_942.xy * _804.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _905;
    texcoord4 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_725, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
