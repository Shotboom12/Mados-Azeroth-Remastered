#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
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
    vec4 _138 = (_116.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_116.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_116.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _146 = (_116.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _138;
    vec3 _153 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _690 = _138;
    _690.x = _153.x;
    _690.y = _153.y;
    _690.z = _153.z;
    vec3 _171 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _690.xyz;
    vec4 _696 = _690;
    _696.x = _171.x;
    _696.y = _171.y;
    _696.z = _171.z;
    vec3 _186 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _696.xyz;
    float _188 = _186.x;
    vec4 _702 = _696;
    _702.x = _188;
    _702.y = _186.y;
    _702.z = _186.z;
    vec3 _194 = _116.xyz;
    float _197 = dot(_194, _702.xyz);
    vec4 _883 = vec4(_188, _186.yz, _197);
    _883.w = _197 + _197;
    vec3 _214 = (_883.xyz * (-_883.www)) + _194;
    vec4 _714 = vec4(0.0);
    _714.x = _214.x;
    _714.y = _214.y;
    float _220 = _214.z;
    _714.z = _220;
    vec3 _227 = _714.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _720 = vec4(0.0);
    _720.x = _227.x;
    _720.y = _227.y;
    _720.z = _227.z;
    vec3 _243 = (_714.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _720.xyz;
    vec4 _884 = vec4(_243.xy, _220, _243.z);
    vec3 _259 = (_884.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _884.xyw;
    vec4 _732 = vec4(0.0);
    _732.x = _259.x;
    _732.y = _259.y;
    _732.z = _259.z;
    vec2 _274 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _884.x = _274.x;
    _884.y = _274.y;
    _720.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _720.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _750 = _720;
    _750.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _750.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _324 = _116.z;
    float _332 = (_324 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _883.w = _332;
    float _336 = max(_332, 0.0);
    _883.w = _336;
    float _682;
    if (_336 == 0.0)
    {
        _682 = 0.0;
    }
    else
    {
        _682 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_336)));
    }
    vec4 _765 = _884;
    _765.x = _682;
    vec3 _352 = -_194;
    float _356 = dot(_352, _352);
    _883.w = _356;
    _883.w = inversesqrt(abs(_356));
    vec3 _373 = (_352 * _883.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _765.x = _373.x;
    _765.y = _373.y;
    _765.z = _373.z;
    vec4 _666 = _765 * inversesqrt(dot(_765.xyz, _765.xyz));
    vec4 _781 = _750;
    _781.x = _666.x;
    _781.y = _666.y;
    _781.z = _666.z;
    float _394 = dot(_781.xyz, _883.xyz);
    vec4 _787 = _883;
    _787.w = _394;
    _787.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _787.xyz), 0.0, 1.0);
    _765.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _765.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _765.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _886 = vec4((_765.xyz * _787.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _394);
    vec3 _434 = min(_886.xyz, vec3(1.0));
    vec4 _803 = _886;
    _803.x = _434.x;
    _803.y = _434.y;
    _803.z = _434.z;
    float _456 = max(_394, 0.0);
    float _683;
    if (_456 == 0.0)
    {
        _683 = 0.0;
    }
    else
    {
        _683 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_456)));
    }
    _765.x = _683;
    vec4 _851 = vec4(0.0);
    _851.x = _116.x;
    _851.y = _116.y;
    _851.z = _324;
    vec4 _890 = vec4(_803.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_188, _186.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _582 = abs((_890.xyz * 2.0) - _803.xyz);
    wxlGPlain = max(max(_582.x, _582.y), _582.z);
    gl_Position = vec4(_146.x, -_146.y, _146.zw);
    color0 = _890;
    color1 = vec4(_765.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _732;
    texcoord1 = vec4((_884.yx * _720.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_884.xy * _750.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _851;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_682, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
