#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _680;



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
    vec4 _93 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _123 = (_93.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_93.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_93.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_93.yyyy * optRegs.rows[optTile*82u+17u+uint(5)])));
    vec3 _130 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _546;
    _546.x = _130.x;
    _546.y = _130.y;
    _546.z = _130.z;
    vec3 _148 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _546.xyz;
    vec4 _552;
    _552.x = _148.x;
    _552.y = _148.y;
    _552.z = _148.z;
    vec3 _163 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _552.xyz;
    float _165 = _163.x;
    vec4 _558;
    _558.x = _165;
    _558.y = _163.y;
    _558.z = _163.z;
    vec3 _171 = _93.xyz;
    float _174 = dot(_171, _558.xyz);
    vec4 _688 = vec4(_165, _163.yz, _174);
    _688.w = _174 + _174;
    vec3 _191 = (_688.xyz * (-_688.www)) + _171;
    vec4 _570 = vec4(0.0);
    _570.x = _191.x;
    _570.y = _191.y;
    _570.z = _191.z;
    vec4 _576;
    _576.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _688.xyz), 0.0, 1.0);
    vec4 _578;
    _578.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _578.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _578.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _228 = (_578.xyz * _576.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _584;
    _584.x = _228.x;
    _584.y = _228.y;
    _584.z = _228.z;
    vec3 _237 = min(_584.xyz, vec3(1.0));
    vec4 _590;
    _590.x = _237.x;
    _590.y = _237.y;
    _590.z = _237.z;
    vec3 _264 = _570.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _602;
    _602.x = _264.x;
    _602.y = _264.y;
    _602.z = _264.z;
    vec3 _280 = (_570.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _602.xyz;
    vec4 _608;
    _608.x = _280.x;
    _608.y = _280.y;
    _608.z = _280.z;
    vec3 _296 = (_570.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _608.xyz;
    vec4 _614 = vec4(0.0);
    _614.x = _296.x;
    _614.y = _296.y;
    _614.z = _296.z;
    vec2 _311 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _620;
    _620.x = _311.x;
    _620.y = _311.y;
    _570.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _570.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _333 = (_620.xy * _570.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _628 = vec4(0.0);
    _628.x = _333.x;
    _628.y = _333.y;
    float _339 = _93.z;
    float _351 = max((_339 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _538;
    if (_351 == 0.0)
    {
        _538 = 0.0;
    }
    else
    {
        _538 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_351)));
    }
    vec4 _668 = vec4(0.0);
    _668.x = _93.x;
    _668.y = _93.y;
    _668.z = _339;
    vec4 _692 = vec4(_590.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_165, _163.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _468 = abs((_692.xyz * 2.0) - _590.xyz);
    wxlGPlain = max(max(_468.x, _468.y), _468.z);
    gl_Position = vec4(_123.x, -_123.y, _123.zw);
    color0 = _692;
    color1 = vec4(0.0);
    texcoord0 = _614;
    texcoord1 = _628;
    texcoord3 = _668;
    texcoord4 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_538, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
