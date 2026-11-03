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
    vec4 _737 = _139;
    _737.x = _154.x;
    _737.y = _154.y;
    _737.z = _154.z;
    vec3 _172 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _737.xyz;
    vec4 _743 = _737;
    _743.x = _172.x;
    _743.y = _172.y;
    _743.z = _172.z;
    vec3 _187 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _743.xyz;
    float _189 = _187.x;
    vec4 _749 = _743;
    _749.x = _189;
    _749.y = _187.y;
    _749.z = _187.z;
    vec3 _195 = _117.xyz;
    float _198 = dot(_195, _749.xyz);
    vec4 _946 = vec4(_189, _187.yz, _198);
    _946.w = _198 + _198;
    vec3 _215 = (_946.xyz * (-_946.www)) + _195;
    vec4 _761 = vec4(0.0);
    _761.x = _215.x;
    _761.y = _215.y;
    float _221 = _215.z;
    _761.z = _221;
    vec3 _228 = _761.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _767 = vec4(0.0);
    _767.x = _228.x;
    _767.y = _228.y;
    _767.z = _228.z;
    vec3 _244 = (_761.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _767.xyz;
    vec4 _947 = vec4(_244.xy, _221, _244.z);
    vec3 _260 = (_947.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _947.xyw;
    vec4 _779 = vec4(0.0);
    _779.x = _260.x;
    _779.y = _260.y;
    _779.z = _260.z;
    vec2 _275 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _947.x = _275.x;
    _947.y = _275.y;
    _767.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _767.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _797 = _767;
    _797.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _797.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _805 = _797;
    _805.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _805.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _813 = _805;
    _813.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _813.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _369 = _117.z;
    float _377 = (_369 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _946.w = _377;
    float _381 = max(_377, 0.0);
    _946.w = _381;
    float _729;
    if (_381 == 0.0)
    {
        _729 = 0.0;
    }
    else
    {
        _729 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_381)));
    }
    vec4 _828 = _947;
    _828.x = _729;
    vec3 _397 = -_195;
    float _401 = dot(_397, _397);
    _946.w = _401;
    _946.w = inversesqrt(abs(_401));
    vec3 _418 = (_397 * _946.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _828.x = _418.x;
    _828.y = _418.y;
    _828.z = _418.z;
    vec4 _713 = _828 * inversesqrt(dot(_828.xyz, _828.xyz));
    vec4 _844 = _813;
    _844.x = _713.x;
    _844.y = _713.y;
    _844.z = _713.z;
    float _439 = dot(_844.xyz, _946.xyz);
    vec4 _850 = _946;
    _850.w = _439;
    _850.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _850.xyz), 0.0, 1.0);
    _828.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _828.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _828.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _950 = vec4((_828.xyz * _850.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _439);
    vec3 _479 = min(_950.xyz, vec3(1.0));
    vec4 _866 = _950;
    _866.x = _479.x;
    _866.y = _479.y;
    _866.z = _479.z;
    float _501 = max(_439, 0.0);
    float _730;
    if (_501 == 0.0)
    {
        _730 = 0.0;
    }
    else
    {
        _730 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_501)));
    }
    _828.x = _730;
    vec4 _914 = vec4(0.0);
    _914.x = _117.x;
    _914.y = _117.y;
    _914.z = _369;
    vec4 _954 = vec4(_866.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_189, _187.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _627 = abs((_954.xyz * 2.0) - _866.xyz);
    wxlGPlain = max(max(_627.x, _627.y), _627.z);
    gl_Position = vec4(_147.x, -_147.y, _147.zw);
    color0 = _954;
    color1 = vec4(_828.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _779;
    texcoord1 = vec4((_947.yx * _767.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_947.xy * _797.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_947.yx * _805.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_947.xy * _813.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _914;
    texcoord4 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_117, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_117, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_729, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
