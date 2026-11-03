#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _779;



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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _114 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _136 = (_114.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_114.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_114.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _144 = (_114.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _136;
    vec3 _151 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _626 = _136;
    _626.x = _151.x;
    _626.y = _151.y;
    _626.z = _151.z;
    vec3 _169 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _626.xyz;
    vec4 _632 = _626;
    _632.x = _169.x;
    _632.y = _169.y;
    _632.z = _169.z;
    vec3 _184 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _632.xyz;
    float _186 = _184.x;
    vec4 _638 = _632;
    _638.x = _186;
    _638.y = _184.y;
    _638.z = _184.z;
    float _195 = dot(_114.xyz, _638.xyz);
    vec4 _644 = _114;
    _644.w = _195;
    _644.w = _195 + _195;
    vec3 _212 = (_638.xyz * (-_644.www)) + _644.xyz;
    vec4 _650 = vec4(0.0);
    _650.x = _212.x;
    _650.y = _212.y;
    float _218 = _212.z;
    _650.z = _218;
    vec3 _225 = _650.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _656;
    _656.x = _225.x;
    _656.y = _225.y;
    _656.z = _225.z;
    vec3 _241 = (_650.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _656.xyz;
    vec4 _790 = vec4(_241.xy, _218, _241.z);
    vec3 _257 = (_790.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _790.xyw;
    vec4 _668 = vec4(0.0);
    _668.x = _257.x;
    _668.y = _257.y;
    _668.z = _257.z;
    vec2 _272 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _790.x = _272.x;
    _790.y = _272.y;
    vec4 _678;
    _678.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _678.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _294 = (_790.xy * _678.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _682 = vec4(0.0);
    _682.x = _294.x;
    _682.y = _294.y;
    vec4 _686;
    _686.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _686.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _316 = (_790.xy * _686.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _690 = vec4(0.0);
    _690.x = _316.x;
    _690.y = _316.y;
    vec4 _694;
    _694.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _694.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _338 = (_790.xy * _694.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _698 = vec4(0.0);
    _698.x = _338.x;
    _698.y = _338.y;
    float _352 = (_114.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _644.w = _352;
    float _356 = max(_352, 0.0);
    _644.w = _356;
    float _618;
    if (_356 == 0.0)
    {
        _618 = 0.0;
    }
    else
    {
        _618 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_356)));
    }
    vec4 _791 = vec4(_186, _184.yz, _618);
    vec3 _372 = -_644.xyz;
    float _376 = dot(_372, _372);
    vec4 _714 = _644;
    _714.w = _376;
    float _592 = inversesqrt(abs(_376));
    _714.w = _592;
    vec4 _792 = vec4(((-_714.xyz) * _714.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _592);
    vec3 _597 = _792.xyz;
    vec4 _602 = _792 * inversesqrt(dot(_597, _597));
    _790.x = _602.x;
    _790.y = _602.y;
    _790.z = _602.z;
    vec3 _413 = _791.xyz;
    float _414 = dot(_790.xyz, _413);
    _792.x = _414;
    _792.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _413), 0.0, 1.0);
    vec4 _735 = _791;
    _735.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _735.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _735.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _793 = vec4(_414, (_735.xyz * _792.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _454 = min(_793.yzw, vec3(1.0));
    vec4 _747 = _793;
    _747.y = _454.x;
    _747.z = _454.y;
    _747.w = _454.z;
    float _476 = max(_414, 0.0);
    float _619;
    if (_476 == 0.0)
    {
        _619 = 0.0;
    }
    else
    {
        _619 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_476)));
    }
    _735.x = _619;
    vec4 _795 = vec4(_747.yzw * vec3(0.5), 1.0);
    wxlGBuf = vec4(_186, _184.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _522 = abs((_795.xyz * 2.0) - _747.yzw);
    wxlGPlain = max(max(_522.x, _522.y), _522.z);
    gl_Position = vec4(_144.x, -_144.y, _144.zw);
    color0 = _795;
    color1 = vec4(_735.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _668;
    texcoord1 = _682;
    texcoord2 = _690;
    texcoord3 = _698;
    fog0 = min(_618, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
