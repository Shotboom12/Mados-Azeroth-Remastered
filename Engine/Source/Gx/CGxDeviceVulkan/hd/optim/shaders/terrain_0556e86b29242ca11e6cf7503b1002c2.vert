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
    vec4 _739 = _139;
    _739.x = _154.x;
    _739.y = _154.y;
    _739.z = _154.z;
    vec3 _172 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _739.xyz;
    vec4 _745 = _739;
    _745.x = _172.x;
    _745.y = _172.y;
    _745.z = _172.z;
    vec3 _187 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _745.xyz;
    float _189 = _187.x;
    vec4 _751 = _745;
    _751.x = _189;
    _751.y = _187.y;
    _751.z = _187.z;
    vec3 _195 = _117.xyz;
    float _198 = dot(_195, _751.xyz);
    vec4 _948 = vec4(_189, _187.yz, _198);
    _948.w = _198 + _198;
    vec3 _215 = (_948.xyz * (-_948.www)) + _195;
    vec4 _763 = vec4(0.0);
    _763.x = _215.x;
    _763.y = _215.y;
    float _221 = _215.z;
    _763.z = _221;
    vec3 _228 = _763.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _769 = vec4(0.0);
    _769.x = _228.x;
    _769.y = _228.y;
    _769.z = _228.z;
    vec3 _244 = (_763.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _769.xyz;
    vec4 _949 = vec4(_244.xy, _221, _244.z);
    vec3 _260 = (_949.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _949.xyw;
    vec4 _781 = vec4(0.0);
    _781.x = _260.x;
    _781.y = _260.y;
    _781.z = _260.z;
    vec2 _275 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _949.x = _275.x;
    _949.y = _275.y;
    _769.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _769.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _799 = _769;
    _799.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _799.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _807 = _799;
    _807.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _807.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _815 = _807;
    _815.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _815.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _369 = _117.z;
    float _377 = (_369 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _948.w = _377;
    float _381 = max(_377, 0.0);
    _948.w = _381;
    float _731;
    if (_381 == 0.0)
    {
        _731 = 0.0;
    }
    else
    {
        _731 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_381)));
    }
    vec4 _830 = _949;
    _830.x = _731;
    vec3 _397 = -_195;
    float _401 = dot(_397, _397);
    _948.w = _401;
    _948.w = inversesqrt(abs(_401));
    vec3 _418 = (_397 * _948.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _830.x = _418.x;
    _830.y = _418.y;
    _830.z = _418.z;
    vec4 _715 = _830 * inversesqrt(dot(_830.xyz, _830.xyz));
    vec4 _846 = _815;
    _846.x = _715.x;
    _846.y = _715.y;
    _846.z = _715.z;
    float _439 = dot(_846.xyz, _948.xyz);
    vec4 _852 = _948;
    _852.w = _439;
    _852.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _852.xyz), 0.0, 1.0);
    _830.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _830.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _830.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _952 = vec4((_830.xyz * _852.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _439);
    vec3 _479 = min(_952.xyz, vec3(1.0));
    vec4 _868 = _952;
    _868.x = _479.x;
    _868.y = _479.y;
    _868.z = _479.z;
    float _502 = max(_439, 0.0);
    float _732;
    if (_502 == 0.0)
    {
        _732 = 0.0;
    }
    else
    {
        _732 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_502)));
    }
    _830.x = _732;
    vec4 _916 = vec4(0.0);
    _916.x = _117.x;
    _916.y = _117.y;
    _916.z = _369;
    vec4 _956 = vec4(_868.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_189, _187.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _629 = abs((_956.xyz * 2.0) - _868.xyz);
    wxlGPlain = max(max(_629.x, _629.y), _629.z);
    gl_Position = vec4(_147.x, -_147.y, _147.zw);
    color0 = _956;
    color1 = vec4(_830.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _781;
    texcoord1 = vec4((_949.yx * _769.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_949.xy * _799.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_949.yx * _807.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_949.xy * _815.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _916;
    texcoord4 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_731, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
