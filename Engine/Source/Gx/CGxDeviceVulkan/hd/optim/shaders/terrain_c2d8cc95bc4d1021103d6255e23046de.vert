#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _812;



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
    vec4 _115 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _137 = (_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _145 = (_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _137;
    vec3 _152 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _651 = _137;
    _651.x = _152.x;
    _651.y = _152.y;
    _651.z = _152.z;
    vec3 _170 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _651.xyz;
    vec4 _657 = _651;
    _657.x = _170.x;
    _657.y = _170.y;
    _657.z = _170.z;
    vec3 _185 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _657.xyz;
    float _187 = _185.x;
    vec4 _663 = _657;
    _663.x = _187;
    _663.y = _185.y;
    _663.z = _185.z;
    float _196 = dot(_115.xyz, _663.xyz);
    vec4 _669 = _115;
    _669.w = _196;
    _669.w = _196 + _196;
    vec3 _213 = (_663.xyz * (-_669.www)) + _669.xyz;
    vec4 _675 = vec4(0.0);
    _675.x = _213.x;
    _675.y = _213.y;
    float _219 = _213.z;
    _675.z = _219;
    vec3 _226 = _675.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _681;
    _681.x = _226.x;
    _681.y = _226.y;
    _681.z = _226.z;
    vec3 _242 = (_675.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _681.xyz;
    vec4 _823 = vec4(_242.xy, _219, _242.z);
    vec3 _258 = (_823.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _823.xyw;
    vec4 _693 = vec4(0.0);
    _693.x = _258.x;
    _693.y = _258.y;
    _693.z = _258.z;
    vec2 _273 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _823.x = _273.x;
    _823.y = _273.y;
    vec4 _703;
    _703.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _703.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _295 = (_823.xy * _703.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _707 = vec4(0.0);
    _707.x = _295.x;
    _707.y = _295.y;
    vec4 _711;
    _711.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _711.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _317 = (_823.xy * _711.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _715 = vec4(0.0);
    _715.x = _317.x;
    _715.y = _317.y;
    vec4 _719;
    _719.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _719.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _339 = (_823.xy * _719.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _723 = vec4(0.0);
    _723.x = _339.x;
    _723.y = _339.y;
    vec4 _727;
    _727.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _727.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _361 = (_823.xy * _727.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _731 = vec4(0.0);
    _731.x = _361.x;
    _731.y = _361.y;
    float _375 = (_115.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _669.w = _375;
    float _379 = max(_375, 0.0);
    _669.w = _379;
    float _643;
    if (_379 == 0.0)
    {
        _643 = 0.0;
    }
    else
    {
        _643 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_379)));
    }
    vec4 _824 = vec4(_187, _185.yz, _643);
    vec3 _395 = -_669.xyz;
    float _399 = dot(_395, _395);
    vec4 _747 = _669;
    _747.w = _399;
    float _617 = inversesqrt(abs(_399));
    _747.w = _617;
    vec4 _825 = vec4(((-_747.xyz) * _747.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _617);
    vec3 _622 = _825.xyz;
    vec4 _627 = _825 * inversesqrt(dot(_622, _622));
    _823.x = _627.x;
    _823.y = _627.y;
    _823.z = _627.z;
    vec3 _436 = _824.xyz;
    float _437 = dot(_823.xyz, _436);
    _825.x = _437;
    _825.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _436), 0.0, 1.0);
    vec4 _768 = _824;
    _768.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _768.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _768.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _826 = vec4(_437, (_768.xyz * _825.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _477 = min(_826.yzw, vec3(1.0));
    vec4 _780 = _826;
    _780.y = _477.x;
    _780.z = _477.y;
    _780.w = _477.z;
    float _499 = max(_437, 0.0);
    float _644;
    if (_499 == 0.0)
    {
        _644 = 0.0;
    }
    else
    {
        _644 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_499)));
    }
    _768.x = _644;
    vec4 _828 = vec4(_780.yzw * vec3(0.5), 1.0);
    wxlGBuf = vec4(_187, _185.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _545 = abs((_828.xyz * 2.0) - _780.yzw);
    wxlGPlain = max(max(_545.x, _545.y), _545.z);
    gl_Position = vec4(_145.x, -_145.y, _145.zw);
    color0 = _828;
    color1 = vec4(_768.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _693;
    texcoord1 = _707;
    texcoord2 = _715;
    texcoord3 = _723;
    texcoord4 = _731;
    fog0 = min(_643, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
