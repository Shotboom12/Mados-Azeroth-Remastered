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
    vec4 _670 = _138;
    _670.x = _153.x;
    _670.y = _153.y;
    _670.z = _153.z;
    vec3 _171 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _670.xyz;
    vec4 _676 = _670;
    _676.x = _171.x;
    _676.y = _171.y;
    _676.z = _171.z;
    vec3 _186 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _676.xyz;
    float _188 = _186.x;
    vec4 _682 = _676;
    _682.x = _188;
    _682.y = _186.y;
    _682.z = _186.z;
    vec3 _194 = _116.xyz;
    float _197 = dot(_194, _682.xyz);
    vec4 _855 = vec4(_188, _186.yz, _197);
    _855.w = _197 + _197;
    vec3 _214 = (_855.xyz * (-_855.www)) + _194;
    vec4 _694 = vec4(0.0);
    _694.x = _214.x;
    _694.y = _214.y;
    float _220 = _214.z;
    _694.z = _220;
    vec3 _227 = _694.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _700 = vec4(0.0);
    _700.x = _227.x;
    _700.y = _227.y;
    _700.z = _227.z;
    vec3 _243 = (_694.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _700.xyz;
    vec4 _856 = vec4(_243.xy, _220, _243.z);
    vec3 _259 = (_856.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _856.xyw;
    vec4 _712 = vec4(0.0);
    _712.x = _259.x;
    _712.y = _259.y;
    _712.z = _259.z;
    vec2 _274 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _856.x = _274.x;
    _856.y = _274.y;
    _700.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _700.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _296 = (_856.xy * _700.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _726 = vec4(0.0);
    _726.x = _296.x;
    _726.y = _296.y;
    float _302 = _116.z;
    float _310 = (_302 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _855.w = _310;
    float _314 = max(_310, 0.0);
    _855.w = _314;
    float _662;
    if (_314 == 0.0)
    {
        _662 = 0.0;
    }
    else
    {
        _662 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_314)));
    }
    _856.x = _662;
    vec3 _330 = -_194;
    float _334 = dot(_330, _330);
    _855.w = _334;
    _855.w = inversesqrt(abs(_334));
    vec3 _351 = (_330 * _855.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _856.x = _351.x;
    _856.y = _351.y;
    _856.z = _351.z;
    vec4 _646 = _856 * inversesqrt(dot(_856.xyz, _856.xyz));
    _700.x = _646.x;
    _700.y = _646.y;
    _700.z = _646.z;
    float _372 = dot(_700.xyz, _855.xyz);
    vec4 _759 = _855;
    _759.w = _372;
    _759.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _759.xyz), 0.0, 1.0);
    _856.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _856.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _856.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _857 = vec4((_856.xyz * _759.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _372);
    vec3 _412 = min(_857.xyz, vec3(1.0));
    vec4 _775 = _857;
    _775.x = _412.x;
    _775.y = _412.y;
    _775.z = _412.z;
    float _435 = max(_372, 0.0);
    float _663;
    if (_435 == 0.0)
    {
        _663 = 0.0;
    }
    else
    {
        _663 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_435)));
    }
    _856.x = _663;
    vec4 _823 = vec4(0.0);
    _823.x = _116.x;
    _823.y = _116.y;
    _823.z = _302;
    vec4 _861 = vec4(_775.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_188, _186.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _562 = abs((_861.xyz * 2.0) - _775.xyz);
    wxlGPlain = max(max(_562.x, _562.y), _562.z);
    gl_Position = vec4(_146.x, -_146.y, _146.zw);
    color0 = _861;
    color1 = vec4(_856.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _712;
    texcoord1 = _726;
    texcoord3 = _823;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_662, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
