#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _708;



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
    vec4 _566;
    _566.x = _130.x;
    _566.y = _130.y;
    _566.z = _130.z;
    vec3 _148 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _566.xyz;
    vec4 _572;
    _572.x = _148.x;
    _572.y = _148.y;
    _572.z = _148.z;
    vec3 _163 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _572.xyz;
    float _165 = _163.x;
    vec4 _578;
    _578.x = _165;
    _578.y = _163.y;
    _578.z = _163.z;
    vec3 _171 = _93.xyz;
    float _174 = dot(_171, _578.xyz);
    vec4 _716 = vec4(_165, _163.yz, _174);
    _716.w = _174 + _174;
    vec3 _191 = (_716.xyz * (-_716.www)) + _171;
    vec4 _590 = vec4(0.0);
    _590.x = _191.x;
    _590.y = _191.y;
    _590.z = _191.z;
    vec4 _596;
    _596.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _716.xyz), 0.0, 1.0);
    vec4 _598;
    _598.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _598.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _598.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _228 = (_598.xyz * _596.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _604;
    _604.x = _228.x;
    _604.y = _228.y;
    _604.z = _228.z;
    vec3 _237 = min(_604.xyz, vec3(1.0));
    vec4 _610;
    _610.x = _237.x;
    _610.y = _237.y;
    _610.z = _237.z;
    vec3 _263 = _590.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _622;
    _622.x = _263.x;
    _622.y = _263.y;
    _622.z = _263.z;
    vec3 _279 = (_590.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _622.xyz;
    vec4 _628;
    _628.x = _279.x;
    _628.y = _279.y;
    _628.z = _279.z;
    vec3 _295 = (_590.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _628.xyz;
    vec4 _634 = vec4(0.0);
    _634.x = _295.x;
    _634.y = _295.y;
    _634.z = _295.z;
    vec2 _310 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _640;
    _640.x = _310.x;
    _640.y = _310.y;
    _590.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _590.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _652 = _590;
    _652.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _652.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _360 = _93.z;
    float _372 = max((_360 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _558;
    if (_372 == 0.0)
    {
        _558 = 0.0;
    }
    else
    {
        _558 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_372)));
    }
    vec4 _696 = vec4(0.0);
    _696.x = _93.x;
    _696.y = _93.y;
    _696.z = _360;
    vec4 _721 = vec4(_610.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_165, _163.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _488 = abs((_721.xyz * 2.0) - _610.xyz);
    wxlGPlain = max(max(_488.x, _488.y), _488.z);
    gl_Position = vec4(_123.x, -_123.y, _123.zw);
    color0 = _721;
    color1 = vec4(0.0);
    texcoord0 = _634;
    texcoord1 = vec4((_640.yx * _590.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_640.xy * _652.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _696;
    texcoord4 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_558, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
