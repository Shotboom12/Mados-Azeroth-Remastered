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
    vec4 _668 = _138;
    _668.x = _153.x;
    _668.y = _153.y;
    _668.z = _153.z;
    vec3 _171 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _668.xyz;
    vec4 _674 = _668;
    _674.x = _171.x;
    _674.y = _171.y;
    _674.z = _171.z;
    vec3 _186 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _674.xyz;
    float _188 = _186.x;
    vec4 _680 = _674;
    _680.x = _188;
    _680.y = _186.y;
    _680.z = _186.z;
    vec3 _194 = _116.xyz;
    float _197 = dot(_194, _680.xyz);
    vec4 _853 = vec4(_188, _186.yz, _197);
    _853.w = _197 + _197;
    vec3 _214 = (_853.xyz * (-_853.www)) + _194;
    vec4 _692 = vec4(0.0);
    _692.x = _214.x;
    _692.y = _214.y;
    float _220 = _214.z;
    _692.z = _220;
    vec3 _227 = _692.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _698 = vec4(0.0);
    _698.x = _227.x;
    _698.y = _227.y;
    _698.z = _227.z;
    vec3 _243 = (_692.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _698.xyz;
    vec4 _854 = vec4(_243.xy, _220, _243.z);
    vec3 _259 = (_854.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _854.xyw;
    vec4 _710 = vec4(0.0);
    _710.x = _259.x;
    _710.y = _259.y;
    _710.z = _259.z;
    vec2 _274 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _854.x = _274.x;
    _854.y = _274.y;
    _698.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _698.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _296 = (_854.xy * _698.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _724 = vec4(0.0);
    _724.x = _296.x;
    _724.y = _296.y;
    float _302 = _116.z;
    float _310 = (_302 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _853.w = _310;
    float _314 = max(_310, 0.0);
    _853.w = _314;
    float _660;
    if (_314 == 0.0)
    {
        _660 = 0.0;
    }
    else
    {
        _660 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_314)));
    }
    _854.x = _660;
    vec3 _330 = -_194;
    float _334 = dot(_330, _330);
    _853.w = _334;
    _853.w = inversesqrt(abs(_334));
    vec3 _351 = (_330 * _853.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _854.x = _351.x;
    _854.y = _351.y;
    _854.z = _351.z;
    vec4 _644 = _854 * inversesqrt(dot(_854.xyz, _854.xyz));
    _698.x = _644.x;
    _698.y = _644.y;
    _698.z = _644.z;
    float _372 = dot(_698.xyz, _853.xyz);
    vec4 _757 = _853;
    _757.w = _372;
    _757.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _757.xyz), 0.0, 1.0);
    _854.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _854.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _854.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _855 = vec4((_854.xyz * _757.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _372);
    vec3 _412 = min(_855.xyz, vec3(1.0));
    vec4 _773 = _855;
    _773.x = _412.x;
    _773.y = _412.y;
    _773.z = _412.z;
    float _434 = max(_372, 0.0);
    float _661;
    if (_434 == 0.0)
    {
        _661 = 0.0;
    }
    else
    {
        _661 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_434)));
    }
    _854.x = _661;
    vec4 _821 = vec4(0.0);
    _821.x = _116.x;
    _821.y = _116.y;
    _821.z = _302;
    vec4 _859 = vec4(_773.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_188, _186.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _560 = abs((_859.xyz * 2.0) - _773.xyz);
    wxlGPlain = max(max(_560.x, _560.y), _560.z);
    gl_Position = vec4(_146.x, -_146.y, _146.zw);
    color0 = _859;
    color1 = vec4(_854.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _710;
    texcoord1 = _724;
    texcoord3 = _821;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_660, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
