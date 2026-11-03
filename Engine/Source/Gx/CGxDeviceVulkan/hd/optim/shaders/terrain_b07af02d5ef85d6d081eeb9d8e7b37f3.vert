#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _781;



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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _114 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _136 = (_114.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_114.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_114.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _144 = (_114.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _136;
    vec3 _151 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _628 = _136;
    _628.x = _151.x;
    _628.y = _151.y;
    _628.z = _151.z;
    vec3 _169 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _628.xyz;
    vec4 _634 = _628;
    _634.x = _169.x;
    _634.y = _169.y;
    _634.z = _169.z;
    vec3 _184 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _634.xyz;
    float _186 = _184.x;
    vec4 _640 = _634;
    _640.x = _186;
    _640.y = _184.y;
    _640.z = _184.z;
    float _195 = dot(_114.xyz, _640.xyz);
    vec4 _646 = _114;
    _646.w = _195;
    _646.w = _195 + _195;
    vec3 _212 = (_640.xyz * (-_646.www)) + _646.xyz;
    vec4 _652 = vec4(0.0);
    _652.x = _212.x;
    _652.y = _212.y;
    float _218 = _212.z;
    _652.z = _218;
    vec3 _225 = _652.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _658;
    _658.x = _225.x;
    _658.y = _225.y;
    _658.z = _225.z;
    vec3 _241 = (_652.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _658.xyz;
    vec4 _792 = vec4(_241.xy, _218, _241.z);
    vec3 _257 = (_792.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _792.xyw;
    vec4 _670 = vec4(0.0);
    _670.x = _257.x;
    _670.y = _257.y;
    _670.z = _257.z;
    vec2 _272 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _792.x = _272.x;
    _792.y = _272.y;
    vec4 _680;
    _680.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _680.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _294 = (_792.xy * _680.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _684 = vec4(0.0);
    _684.x = _294.x;
    _684.y = _294.y;
    vec4 _688;
    _688.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _688.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _316 = (_792.xy * _688.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _692 = vec4(0.0);
    _692.x = _316.x;
    _692.y = _316.y;
    vec4 _696;
    _696.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _696.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _338 = (_792.xy * _696.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _700 = vec4(0.0);
    _700.x = _338.x;
    _700.y = _338.y;
    float _352 = (_114.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _646.w = _352;
    float _356 = max(_352, 0.0);
    _646.w = _356;
    float _620;
    if (_356 == 0.0)
    {
        _620 = 0.0;
    }
    else
    {
        _620 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_356)));
    }
    vec4 _793 = vec4(_186, _184.yz, _620);
    vec3 _372 = -_646.xyz;
    float _376 = dot(_372, _372);
    vec4 _716 = _646;
    _716.w = _376;
    float _594 = inversesqrt(abs(_376));
    _716.w = _594;
    vec4 _794 = vec4(((-_716.xyz) * _716.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _594);
    vec3 _599 = _794.xyz;
    vec4 _604 = _794 * inversesqrt(dot(_599, _599));
    _792.x = _604.x;
    _792.y = _604.y;
    _792.z = _604.z;
    vec3 _413 = _793.xyz;
    float _414 = dot(_792.xyz, _413);
    _794.x = _414;
    _794.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _413), 0.0, 1.0);
    vec4 _737 = _793;
    _737.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _737.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _737.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _795 = vec4(_414, (_737.xyz * _794.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _454 = min(_795.yzw, vec3(1.0));
    vec4 _749 = _795;
    _749.y = _454.x;
    _749.z = _454.y;
    _749.w = _454.z;
    float _477 = max(_414, 0.0);
    float _621;
    if (_477 == 0.0)
    {
        _621 = 0.0;
    }
    else
    {
        _621 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_477)));
    }
    _737.x = _621;
    vec4 _797 = vec4(_749.yzw * v2.xyz, 1.0);
    wxlGBuf = vec4(_186, _184.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _524 = abs((_797.xyz * 2.0) - _749.yzw);
    wxlGPlain = max(max(_524.x, _524.y), _524.z);
    gl_Position = vec4(_144.x, -_144.y, _144.zw);
    color0 = _797;
    color1 = vec4(_737.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _670;
    texcoord1 = _684;
    texcoord2 = _692;
    texcoord3 = _700;
    fog0 = min(_620, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
