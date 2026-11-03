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
    vec4 _717 = _139;
    _717.x = _154.x;
    _717.y = _154.y;
    _717.z = _154.z;
    vec3 _172 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _717.xyz;
    vec4 _723 = _717;
    _723.x = _172.x;
    _723.y = _172.y;
    _723.z = _172.z;
    vec3 _187 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _723.xyz;
    float _189 = _187.x;
    vec4 _729 = _723;
    _729.x = _189;
    _729.y = _187.y;
    _729.z = _187.z;
    vec3 _195 = _117.xyz;
    float _198 = dot(_195, _729.xyz);
    vec4 _918 = vec4(_189, _187.yz, _198);
    _918.w = _198 + _198;
    vec3 _215 = (_918.xyz * (-_918.www)) + _195;
    vec4 _741 = vec4(0.0);
    _741.x = _215.x;
    _741.y = _215.y;
    float _221 = _215.z;
    _741.z = _221;
    vec3 _228 = _741.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _747 = vec4(0.0);
    _747.x = _228.x;
    _747.y = _228.y;
    _747.z = _228.z;
    vec3 _244 = (_741.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _747.xyz;
    vec4 _919 = vec4(_244.xy, _221, _244.z);
    vec3 _260 = (_919.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _919.xyw;
    vec4 _759 = vec4(0.0);
    _759.x = _260.x;
    _759.y = _260.y;
    _759.z = _260.z;
    vec2 _275 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _919.x = _275.x;
    _919.y = _275.y;
    _747.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _747.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _777 = _747;
    _777.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _777.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _785 = _777;
    _785.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _785.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _341 = (_919.xy * _785.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _789 = vec4(0.0);
    _789.x = _341.x;
    _789.y = _341.y;
    float _347 = _117.z;
    float _355 = (_347 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _918.w = _355;
    float _359 = max(_355, 0.0);
    _918.w = _359;
    float _709;
    if (_359 == 0.0)
    {
        _709 = 0.0;
    }
    else
    {
        _709 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_359)));
    }
    vec4 _800 = _919;
    _800.x = _709;
    vec3 _375 = -_195;
    float _379 = dot(_375, _375);
    _918.w = _379;
    _918.w = inversesqrt(abs(_379));
    vec3 _396 = (_375 * _918.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _800.x = _396.x;
    _800.y = _396.y;
    _800.z = _396.z;
    vec4 _693 = _800 * inversesqrt(dot(_800.xyz, _800.xyz));
    _785.x = _693.x;
    _785.y = _693.y;
    _785.z = _693.z;
    float _417 = dot(_785.xyz, _918.xyz);
    vec4 _822 = _918;
    _822.w = _417;
    _822.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _822.xyz), 0.0, 1.0);
    _800.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _800.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _800.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _921 = vec4((_800.xyz * _822.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _417);
    vec3 _457 = min(_921.xyz, vec3(1.0));
    vec4 _838 = _921;
    _838.x = _457.x;
    _838.y = _457.y;
    _838.z = _457.z;
    float _480 = max(_417, 0.0);
    float _710;
    if (_480 == 0.0)
    {
        _710 = 0.0;
    }
    else
    {
        _710 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_480)));
    }
    _800.x = _710;
    vec4 _886 = vec4(0.0);
    _886.x = _117.x;
    _886.y = _117.y;
    _886.z = _347;
    vec4 _925 = vec4(_838.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_189, _187.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _607 = abs((_925.xyz * 2.0) - _838.xyz);
    wxlGPlain = max(max(_607.x, _607.y), _607.z);
    gl_Position = vec4(_147.x, -_147.y, _147.zw);
    color0 = _925;
    color1 = vec4(_800.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _759;
    texcoord1 = vec4((_919.xy * _747.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_919.yx * _777.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _789;
    texcoord3 = _886;
    texcoord4 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_709, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
