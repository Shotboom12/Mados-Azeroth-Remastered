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
    vec2 _155 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _620 = _138;
    _620.x = _155.x;
    _620.y = _155.y;
    vec4 _624 = vec4(0.0);
    _624.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _624.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _179 = (_620.xy * _624.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _628 = vec4(0.0);
    _628.x = _179.x;
    _628.y = _179.y;
    _624.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _624.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _201 = (_620.xy * _624.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _636 = vec4(0.0);
    _636.x = _201.x;
    _636.y = _201.y;
    float _208 = _116.z;
    float _216 = (_208 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _620.x = _216;
    float _220 = max(_216, 0.0);
    _620.x = _220;
    float _612;
    if (_220 == 0.0)
    {
        _612 = 0.0;
    }
    else
    {
        _612 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_220)));
    }
    _624.x = _612;
    vec3 _240 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _620.x = _240.x;
    _620.y = _240.y;
    _620.z = _240.z;
    vec3 _255 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _620.xyz;
    vec4 _658 = _620;
    _658.x = _255.x;
    _658.y = _255.y;
    _658.z = _255.z;
    vec3 _270 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _658.xyz;
    float _272 = _270.x;
    vec3 _279 = -_116.xyz;
    float _283 = dot(_279, _279);
    vec4 _783 = vec4(_272, _270.yz, _283);
    _783.w = inversesqrt(abs(_283));
    vec3 _301 = (_279 * _783.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _624.x = _301.x;
    _624.y = _301.y;
    _624.z = _301.z;
    vec4 _596 = _624 * inversesqrt(dot(_624.xyz, _624.xyz));
    vec4 _681 = vec4(0.0);
    _681.x = _596.x;
    _681.y = _596.y;
    _681.z = _596.z;
    float _322 = dot(_681.xyz, _783.xyz);
    vec4 _687 = _783;
    _687.w = _322;
    _687.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _687.xyz), 0.0, 1.0);
    _624.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _624.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _624.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _784 = vec4((_624.xyz * _687.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _322);
    vec3 _362 = min(_784.xyz, vec3(1.0));
    vec4 _703 = _784;
    _703.x = _362.x;
    _703.y = _362.y;
    _703.z = _362.z;
    float _385 = max(_322, 0.0);
    float _613;
    if (_385 == 0.0)
    {
        _613 = 0.0;
    }
    else
    {
        _613 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_385)));
    }
    _624.x = _613;
    vec4 _751 = vec4(0.0);
    _751.x = _116.x;
    _751.y = _116.y;
    _751.z = _208;
    vec4 _788 = vec4(_703.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_272, _270.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _512 = abs((_788.xyz * 2.0) - _703.xyz);
    wxlGPlain = max(max(_512.x, _512.y), _512.z);
    gl_Position = vec4(_146.x, -_146.y, _146.zw);
    color0 = _788;
    color1 = vec4(_624.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _628;
    texcoord1 = _636;
    texcoord3 = _751;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_612, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
