#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _710;



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
    vec4 _568;
    _568.x = _130.x;
    _568.y = _130.y;
    _568.z = _130.z;
    vec3 _148 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _568.xyz;
    vec4 _574;
    _574.x = _148.x;
    _574.y = _148.y;
    _574.z = _148.z;
    vec3 _163 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _574.xyz;
    float _165 = _163.x;
    vec4 _580;
    _580.x = _165;
    _580.y = _163.y;
    _580.z = _163.z;
    vec3 _171 = _93.xyz;
    float _174 = dot(_171, _580.xyz);
    vec4 _718 = vec4(_165, _163.yz, _174);
    _718.w = _174 + _174;
    vec3 _191 = (_718.xyz * (-_718.www)) + _171;
    vec4 _592 = vec4(0.0);
    _592.x = _191.x;
    _592.y = _191.y;
    _592.z = _191.z;
    vec4 _598;
    _598.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _718.xyz), 0.0, 1.0);
    vec4 _600;
    _600.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _600.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _600.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _228 = (_600.xyz * _598.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _606;
    _606.x = _228.x;
    _606.y = _228.y;
    _606.z = _228.z;
    vec3 _237 = min(_606.xyz, vec3(1.0));
    vec4 _612;
    _612.x = _237.x;
    _612.y = _237.y;
    _612.z = _237.z;
    vec3 _264 = _592.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _624;
    _624.x = _264.x;
    _624.y = _264.y;
    _624.z = _264.z;
    vec3 _280 = (_592.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _624.xyz;
    vec4 _630;
    _630.x = _280.x;
    _630.y = _280.y;
    _630.z = _280.z;
    vec3 _296 = (_592.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _630.xyz;
    vec4 _636 = vec4(0.0);
    _636.x = _296.x;
    _636.y = _296.y;
    _636.z = _296.z;
    vec2 _311 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _642;
    _642.x = _311.x;
    _642.y = _311.y;
    _592.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _592.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _654 = _592;
    _654.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _654.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _361 = _93.z;
    float _373 = max((_361 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _560;
    if (_373 == 0.0)
    {
        _560 = 0.0;
    }
    else
    {
        _560 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_373)));
    }
    vec4 _698 = vec4(0.0);
    _698.x = _93.x;
    _698.y = _93.y;
    _698.z = _361;
    vec4 _723 = vec4(_612.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_165, _163.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _490 = abs((_723.xyz * 2.0) - _612.xyz);
    wxlGPlain = max(max(_490.x, _490.y), _490.z);
    gl_Position = vec4(_123.x, -_123.y, _123.zw);
    color0 = _723;
    color1 = vec4(0.0);
    texcoord0 = _636;
    texcoord1 = vec4((_642.yx * _592.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_642.xy * _654.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _698;
    texcoord4 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_560, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
