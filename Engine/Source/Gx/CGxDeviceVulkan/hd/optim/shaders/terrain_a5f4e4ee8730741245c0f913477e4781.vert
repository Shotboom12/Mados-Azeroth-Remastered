#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _741;



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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _114 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _136 = (_114.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_114.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_114.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _144 = (_114.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _136;
    vec2 _153 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _602 = _136;
    _602.x = _153.x;
    _602.y = _153.y;
    vec4 _606;
    _606.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _606.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _177 = (_602.xy * _606.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _610 = vec4(0.0);
    _610.x = _177.x;
    _610.y = _177.y;
    vec4 _614;
    _614.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _614.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _199 = (_602.xy * _614.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _618 = vec4(0.0);
    _618.x = _199.x;
    _618.y = _199.y;
    vec4 _622;
    _622.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _622.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _221 = (_602.xy * _622.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _626 = vec4(0.0);
    _626.x = _221.x;
    _626.y = _221.y;
    vec4 _630;
    _630.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _630.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _243 = (_602.xy * _630.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _634 = vec4(0.0);
    _634.x = _243.x;
    _634.y = _243.y;
    vec4 _638;
    _638.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _638.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _265 = (_602.xy * _638.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _642 = vec4(0.0);
    _642.x = _265.x;
    _642.y = _265.y;
    float _280 = (_114.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _647 = _114;
    _647.w = _280;
    float _285 = max(_280, 0.0);
    _647.w = _285;
    float _594;
    if (_285 == 0.0)
    {
        _594 = 0.0;
    }
    else
    {
        _594 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_285)));
    }
    _602.x = _594;
    vec3 _301 = -_647.xyz;
    float _305 = dot(_301, _301);
    vec4 _658 = _647;
    _658.w = _305;
    float _568 = inversesqrt(abs(_305));
    _658.w = _568;
    vec4 _751 = vec4(((-_658.xyz) * _658.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _568);
    vec3 _573 = _751.xyz;
    vec4 _578 = _751 * inversesqrt(dot(_573, _573));
    _602.x = _578.x;
    _602.y = _578.y;
    _602.z = _578.z;
    vec3 _345 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _751.x = _345.x;
    _751.y = _345.y;
    _751.z = _345.z;
    vec3 _360 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _751.xyz;
    vec4 _681 = _751;
    _681.x = _360.x;
    _681.y = _360.y;
    _681.z = _360.z;
    vec3 _375 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _681.xyz;
    float _377 = _375.x;
    vec4 _687 = _681;
    _687.x = _377;
    _687.y = _375.y;
    _687.z = _375.z;
    float _386 = dot(_602.xyz, _687.xyz);
    vec4 _752 = vec4(_377, _375.yz, _386);
    _752.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _752.xyz), 0.0, 1.0);
    vec4 _697 = _602;
    _697.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _697.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _697.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _417 = (_697.xyz * _752.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _703 = _752;
    _703.x = _417.x;
    _703.y = _417.y;
    _703.z = _417.z;
    vec3 _426 = min(_703.xyz, vec3(1.0));
    vec4 _709 = _703;
    _709.x = _426.x;
    _709.y = _426.y;
    _709.z = _426.z;
    float _449 = max(_386, 0.0);
    float _595;
    if (_449 == 0.0)
    {
        _595 = 0.0;
    }
    else
    {
        _595 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_449)));
    }
    _697.x = _595;
    vec4 _753 = vec4(_709.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_377, _375.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _496 = abs((_753.xyz * 2.0) - _709.xyz);
    wxlGPlain = max(max(_496.x, _496.y), _496.z);
    gl_Position = vec4(_144.x, -_144.y, _144.zw);
    color0 = _753;
    color1 = vec4(_697.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _610;
    texcoord1 = _618;
    texcoord2 = _626;
    texcoord3 = _634;
    texcoord4 = _642;
    fog0 = min(_594, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
