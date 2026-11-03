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
    vec3 _154 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _715 = _139;
    _715.x = _154.x;
    _715.y = _154.y;
    _715.z = _154.z;
    vec3 _172 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _715.xyz;
    vec4 _721 = _715;
    _721.x = _172.x;
    _721.y = _172.y;
    _721.z = _172.z;
    vec3 _187 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _721.xyz;
    float _189 = _187.x;
    vec4 _727 = _721;
    _727.x = _189;
    _727.y = _187.y;
    _727.z = _187.z;
    vec3 _195 = _117.xyz;
    float _198 = dot(_195, _727.xyz);
    vec4 _916 = vec4(_189, _187.yz, _198);
    _916.w = _198 + _198;
    vec3 _215 = (_916.xyz * (-_916.www)) + _195;
    vec4 _739 = vec4(0.0);
    _739.x = _215.x;
    _739.y = _215.y;
    float _221 = _215.z;
    _739.z = _221;
    vec3 _228 = _739.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _745 = vec4(0.0);
    _745.x = _228.x;
    _745.y = _228.y;
    _745.z = _228.z;
    vec3 _244 = (_739.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _745.xyz;
    vec4 _917 = vec4(_244.xy, _221, _244.z);
    vec3 _260 = (_917.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _917.xyw;
    vec4 _757 = vec4(0.0);
    _757.x = _260.x;
    _757.y = _260.y;
    _757.z = _260.z;
    vec2 _275 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _917.x = _275.x;
    _917.y = _275.y;
    _745.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _745.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _775 = _745;
    _775.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _775.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _783 = _775;
    _783.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _783.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _341 = (_917.xy * _783.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _787 = vec4(0.0);
    _787.x = _341.x;
    _787.y = _341.y;
    float _347 = _117.z;
    float _355 = (_347 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _916.w = _355;
    float _359 = max(_355, 0.0);
    _916.w = _359;
    float _707;
    if (_359 == 0.0)
    {
        _707 = 0.0;
    }
    else
    {
        _707 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_359)));
    }
    vec4 _798 = _917;
    _798.x = _707;
    vec3 _375 = -_195;
    float _379 = dot(_375, _375);
    _916.w = _379;
    _916.w = inversesqrt(abs(_379));
    vec3 _396 = (_375 * _916.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _798.x = _396.x;
    _798.y = _396.y;
    _798.z = _396.z;
    vec4 _691 = _798 * inversesqrt(dot(_798.xyz, _798.xyz));
    _783.x = _691.x;
    _783.y = _691.y;
    _783.z = _691.z;
    float _417 = dot(_783.xyz, _916.xyz);
    vec4 _820 = _916;
    _820.w = _417;
    _820.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _820.xyz), 0.0, 1.0);
    _798.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _798.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _798.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _919 = vec4((_798.xyz * _820.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _417);
    vec3 _457 = min(_919.xyz, vec3(1.0));
    vec4 _836 = _919;
    _836.x = _457.x;
    _836.y = _457.y;
    _836.z = _457.z;
    float _479 = max(_417, 0.0);
    float _708;
    if (_479 == 0.0)
    {
        _708 = 0.0;
    }
    else
    {
        _708 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_479)));
    }
    _798.x = _708;
    vec4 _884 = vec4(0.0);
    _884.x = _117.x;
    _884.y = _117.y;
    _884.z = _347;
    vec4 _923 = vec4(_836.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_189, _187.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _605 = abs((_923.xyz * 2.0) - _836.xyz);
    wxlGPlain = max(max(_605.x, _605.y), _605.z);
    gl_Position = vec4(_147.x, -_147.y, _147.zw);
    color0 = _923;
    color1 = vec4(_798.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _757;
    texcoord1 = vec4((_917.xy * _745.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_917.yx * _775.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _787;
    texcoord3 = _884;
    texcoord4 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_707, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
