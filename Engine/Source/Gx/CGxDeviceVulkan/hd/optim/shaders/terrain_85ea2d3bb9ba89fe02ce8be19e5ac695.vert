#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
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
    vec4 _692 = _138;
    _692.x = _153.x;
    _692.y = _153.y;
    _692.z = _153.z;
    vec3 _171 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _692.xyz;
    vec4 _698 = _692;
    _698.x = _171.x;
    _698.y = _171.y;
    _698.z = _171.z;
    vec3 _186 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _698.xyz;
    float _188 = _186.x;
    vec4 _704 = _698;
    _704.x = _188;
    _704.y = _186.y;
    _704.z = _186.z;
    vec3 _194 = _116.xyz;
    float _197 = dot(_194, _704.xyz);
    vec4 _885 = vec4(_188, _186.yz, _197);
    _885.w = _197 + _197;
    vec3 _214 = (_885.xyz * (-_885.www)) + _194;
    vec4 _716 = vec4(0.0);
    _716.x = _214.x;
    _716.y = _214.y;
    float _220 = _214.z;
    _716.z = _220;
    vec3 _227 = _716.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _722 = vec4(0.0);
    _722.x = _227.x;
    _722.y = _227.y;
    _722.z = _227.z;
    vec3 _243 = (_716.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _722.xyz;
    vec4 _886 = vec4(_243.xy, _220, _243.z);
    vec3 _259 = (_886.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _886.xyw;
    vec4 _734 = vec4(0.0);
    _734.x = _259.x;
    _734.y = _259.y;
    _734.z = _259.z;
    vec2 _274 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _886.x = _274.x;
    _886.y = _274.y;
    _722.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _722.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _752 = _722;
    _752.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _752.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _324 = _116.z;
    float _332 = (_324 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _885.w = _332;
    float _336 = max(_332, 0.0);
    _885.w = _336;
    float _684;
    if (_336 == 0.0)
    {
        _684 = 0.0;
    }
    else
    {
        _684 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_336)));
    }
    vec4 _767 = _886;
    _767.x = _684;
    vec3 _352 = -_194;
    float _356 = dot(_352, _352);
    _885.w = _356;
    _885.w = inversesqrt(abs(_356));
    vec3 _373 = (_352 * _885.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _767.x = _373.x;
    _767.y = _373.y;
    _767.z = _373.z;
    vec4 _668 = _767 * inversesqrt(dot(_767.xyz, _767.xyz));
    vec4 _783 = _752;
    _783.x = _668.x;
    _783.y = _668.y;
    _783.z = _668.z;
    float _394 = dot(_783.xyz, _885.xyz);
    vec4 _789 = _885;
    _789.w = _394;
    _789.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _789.xyz), 0.0, 1.0);
    _767.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _767.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _767.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _888 = vec4((_767.xyz * _789.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _394);
    vec3 _434 = min(_888.xyz, vec3(1.0));
    vec4 _805 = _888;
    _805.x = _434.x;
    _805.y = _434.y;
    _805.z = _434.z;
    float _457 = max(_394, 0.0);
    float _685;
    if (_457 == 0.0)
    {
        _685 = 0.0;
    }
    else
    {
        _685 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_457)));
    }
    _767.x = _685;
    vec4 _853 = vec4(0.0);
    _853.x = _116.x;
    _853.y = _116.y;
    _853.z = _324;
    vec4 _892 = vec4(_805.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_188, _186.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _584 = abs((_892.xyz * 2.0) - _805.xyz);
    wxlGPlain = max(max(_584.x, _584.y), _584.z);
    gl_Position = vec4(_146.x, -_146.y, _146.zw);
    color0 = _892;
    color1 = vec4(_767.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _734;
    texcoord1 = vec4((_886.yx * _722.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_886.xy * _752.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _853;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_684, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
