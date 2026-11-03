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
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _117 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _139 = (_117.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_117.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_117.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _147 = (_117.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _139;
    vec2 _156 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _687 = _139;
    _687.x = _156.x;
    _687.y = _156.y;
    vec4 _691 = vec4(0.0);
    _691.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _691.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _180 = (_687.yx * _691.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _695 = vec4(0.0);
    _695.x = _180.x;
    _695.y = _180.y;
    _691.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _691.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _707 = _691;
    _707.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _707.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _715 = _707;
    _715.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _715.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _723 = _715;
    _723.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _723.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _276 = _117.z;
    float _284 = (_276 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _732 = _687;
    _732.x = _284;
    float _288 = max(_284, 0.0);
    _732.x = _288;
    float _679;
    if (_288 == 0.0)
    {
        _679 = 0.0;
    }
    else
    {
        _679 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_288)));
    }
    vec4 _738 = _723;
    _738.x = _679;
    vec3 _308 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _732.x = _308.x;
    _732.y = _308.y;
    _732.z = _308.z;
    vec3 _323 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _732.xyz;
    vec4 _749 = _732;
    _749.x = _323.x;
    _749.y = _323.y;
    _749.z = _323.z;
    vec3 _338 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _749.xyz;
    float _340 = _338.x;
    vec3 _347 = -_117.xyz;
    float _351 = dot(_347, _347);
    vec4 _876 = vec4(_340, _338.yz, _351);
    _876.w = inversesqrt(abs(_351));
    vec3 _368 = (_347 * _876.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _738.x = _368.x;
    _738.y = _368.y;
    _738.z = _368.z;
    vec4 _663 = _738 * inversesqrt(dot(_738.xyz, _738.xyz));
    vec4 _772 = vec4(0.0);
    _772.x = _663.x;
    _772.y = _663.y;
    _772.z = _663.z;
    float _389 = dot(_772.xyz, _876.xyz);
    vec4 _778 = _876;
    _778.w = _389;
    _778.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _778.xyz), 0.0, 1.0);
    _738.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _738.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _738.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _877 = vec4((_738.xyz * _778.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _389);
    vec3 _429 = min(_877.xyz, vec3(1.0));
    vec4 _794 = _877;
    _794.x = _429.x;
    _794.y = _429.y;
    _794.z = _429.z;
    float _451 = max(_389, 0.0);
    float _680;
    if (_451 == 0.0)
    {
        _680 = 0.0;
    }
    else
    {
        _680 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_451)));
    }
    _738.x = _680;
    vec4 _842 = vec4(0.0);
    _842.x = _117.x;
    _842.y = _117.y;
    _842.z = _276;
    vec4 _881 = vec4(_794.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_340, _338.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _577 = abs((_881.xyz * 2.0) - _794.xyz);
    wxlGPlain = max(max(_577.x, _577.y), _577.z);
    gl_Position = vec4(_147.x, -_147.y, _147.zw);
    color0 = _881;
    color1 = vec4(_738.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _695;
    texcoord1 = vec4((_687.yx * _691.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_687.xy * _707.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_687.yx * _715.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_687.xy * _723.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _842;
    texcoord4 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_679, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
