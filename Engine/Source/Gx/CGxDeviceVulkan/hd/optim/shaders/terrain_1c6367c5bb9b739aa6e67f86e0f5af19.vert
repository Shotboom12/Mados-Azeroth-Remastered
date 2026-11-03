#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _739;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _114 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _136 = (_114.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_114.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_114.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _144 = (_114.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _136;
    vec2 _153 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _600 = _136;
    _600.x = _153.x;
    _600.y = _153.y;
    vec4 _604;
    _604.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _604.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _177 = (_600.xy * _604.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _608 = vec4(0.0);
    _608.x = _177.x;
    _608.y = _177.y;
    vec4 _612;
    _612.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _612.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _199 = (_600.xy * _612.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _616 = vec4(0.0);
    _616.x = _199.x;
    _616.y = _199.y;
    vec4 _620;
    _620.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _620.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _221 = (_600.xy * _620.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _624 = vec4(0.0);
    _624.x = _221.x;
    _624.y = _221.y;
    vec4 _628;
    _628.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _628.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _243 = (_600.xy * _628.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _632 = vec4(0.0);
    _632.x = _243.x;
    _632.y = _243.y;
    vec4 _636;
    _636.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _636.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _265 = (_600.xy * _636.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _640 = vec4(0.0);
    _640.x = _265.x;
    _640.y = _265.y;
    float _280 = (_114.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _645 = _114;
    _645.w = _280;
    float _285 = max(_280, 0.0);
    _645.w = _285;
    float _592;
    if (_285 == 0.0)
    {
        _592 = 0.0;
    }
    else
    {
        _592 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_285)));
    }
    _600.x = _592;
    vec3 _301 = -_645.xyz;
    float _305 = dot(_301, _301);
    vec4 _656 = _645;
    _656.w = _305;
    float _566 = inversesqrt(abs(_305));
    _656.w = _566;
    vec4 _749 = vec4(((-_656.xyz) * _656.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _566);
    vec3 _571 = _749.xyz;
    vec4 _576 = _749 * inversesqrt(dot(_571, _571));
    _600.x = _576.x;
    _600.y = _576.y;
    _600.z = _576.z;
    vec3 _345 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _749.x = _345.x;
    _749.y = _345.y;
    _749.z = _345.z;
    vec3 _360 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _749.xyz;
    vec4 _679 = _749;
    _679.x = _360.x;
    _679.y = _360.y;
    _679.z = _360.z;
    vec3 _375 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _679.xyz;
    float _377 = _375.x;
    vec4 _685 = _679;
    _685.x = _377;
    _685.y = _375.y;
    _685.z = _375.z;
    float _386 = dot(_600.xyz, _685.xyz);
    vec4 _750 = vec4(_377, _375.yz, _386);
    _750.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _750.xyz), 0.0, 1.0);
    vec4 _695 = _600;
    _695.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _695.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _695.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _417 = (_695.xyz * _750.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _701 = _750;
    _701.x = _417.x;
    _701.y = _417.y;
    _701.z = _417.z;
    vec3 _426 = min(_701.xyz, vec3(1.0));
    vec4 _707 = _701;
    _707.x = _426.x;
    _707.y = _426.y;
    _707.z = _426.z;
    float _448 = max(_386, 0.0);
    float _593;
    if (_448 == 0.0)
    {
        _593 = 0.0;
    }
    else
    {
        _593 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_448)));
    }
    _695.x = _593;
    vec4 _751 = vec4(_707.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_377, _375.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _494 = abs((_751.xyz * 2.0) - _707.xyz);
    wxlGPlain = max(max(_494.x, _494.y), _494.z);
    gl_Position = vec4(_144.x, -_144.y, _144.zw);
    color0 = _751;
    color1 = vec4(_695.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _608;
    texcoord1 = _616;
    texcoord2 = _624;
    texcoord3 = _632;
    texcoord4 = _640;
    fog0 = min(_592, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
