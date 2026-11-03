#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _678;



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
    vec4 _93 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _123 = (_93.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_93.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_93.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_93.yyyy * optRegs.rows[optTile*82u+17u+uint(5)])));
    vec3 _130 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _544;
    _544.x = _130.x;
    _544.y = _130.y;
    _544.z = _130.z;
    vec3 _148 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _544.xyz;
    vec4 _550;
    _550.x = _148.x;
    _550.y = _148.y;
    _550.z = _148.z;
    vec3 _163 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _550.xyz;
    float _165 = _163.x;
    vec4 _556;
    _556.x = _165;
    _556.y = _163.y;
    _556.z = _163.z;
    vec3 _171 = _93.xyz;
    float _174 = dot(_171, _556.xyz);
    vec4 _686 = vec4(_165, _163.yz, _174);
    _686.w = _174 + _174;
    vec3 _191 = (_686.xyz * (-_686.www)) + _171;
    vec4 _568 = vec4(0.0);
    _568.x = _191.x;
    _568.y = _191.y;
    _568.z = _191.z;
    vec4 _574;
    _574.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _686.xyz), 0.0, 1.0);
    vec4 _576;
    _576.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _576.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _576.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _228 = (_576.xyz * _574.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _582;
    _582.x = _228.x;
    _582.y = _228.y;
    _582.z = _228.z;
    vec3 _237 = min(_582.xyz, vec3(1.0));
    vec4 _588;
    _588.x = _237.x;
    _588.y = _237.y;
    _588.z = _237.z;
    vec3 _263 = _568.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _600;
    _600.x = _263.x;
    _600.y = _263.y;
    _600.z = _263.z;
    vec3 _279 = (_568.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _600.xyz;
    vec4 _606;
    _606.x = _279.x;
    _606.y = _279.y;
    _606.z = _279.z;
    vec3 _295 = (_568.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _606.xyz;
    vec4 _612 = vec4(0.0);
    _612.x = _295.x;
    _612.y = _295.y;
    _612.z = _295.z;
    vec2 _310 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _618;
    _618.x = _310.x;
    _618.y = _310.y;
    _568.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _568.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _332 = (_618.xy * _568.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _626 = vec4(0.0);
    _626.x = _332.x;
    _626.y = _332.y;
    float _338 = _93.z;
    float _350 = max((_338 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _536;
    if (_350 == 0.0)
    {
        _536 = 0.0;
    }
    else
    {
        _536 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_350)));
    }
    vec4 _666 = vec4(0.0);
    _666.x = _93.x;
    _666.y = _93.y;
    _666.z = _338;
    vec4 _690 = vec4(_588.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_165, _163.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _466 = abs((_690.xyz * 2.0) - _588.xyz);
    wxlGPlain = max(max(_466.x, _466.y), _466.z);
    gl_Position = vec4(_123.x, -_123.y, _123.zw);
    color0 = _690;
    color1 = vec4(0.0);
    texcoord0 = _612;
    texcoord1 = _626;
    texcoord3 = _666;
    texcoord4 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_536, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
