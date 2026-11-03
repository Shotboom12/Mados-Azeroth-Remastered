#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _640;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _111 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _133 = (_111.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_111.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_111.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _141 = (_111.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _133;
    vec2 _150 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _525 = _133;
    _525.x = _150.x;
    _525.y = _150.y;
    vec4 _529;
    _529.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _529.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _174 = (_525.xy * _529.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _533 = vec4(0.0);
    _533.x = _174.x;
    _533.y = _174.y;
    vec4 _537;
    _537.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _537.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _196 = (_525.xy * _537.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _541 = vec4(0.0);
    _541.x = _196.x;
    _541.y = _196.y;
    float _211 = (_111.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _546 = _111;
    _546.w = _211;
    float _216 = max(_211, 0.0);
    _546.w = _216;
    float _517;
    if (_216 == 0.0)
    {
        _517 = 0.0;
    }
    else
    {
        _517 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_216)));
    }
    _525.x = _517;
    vec3 _232 = -_546.xyz;
    float _236 = dot(_232, _232);
    vec4 _557 = _546;
    _557.w = _236;
    float _491 = inversesqrt(abs(_236));
    _557.w = _491;
    vec4 _650 = vec4(((-_557.xyz) * _557.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _491);
    vec3 _496 = _650.xyz;
    vec4 _501 = _650 * inversesqrt(dot(_496, _496));
    _525.x = _501.x;
    _525.y = _501.y;
    _525.z = _501.z;
    vec3 _276 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _650.x = _276.x;
    _650.y = _276.y;
    _650.z = _276.z;
    vec3 _291 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _650.xyz;
    vec4 _580 = _650;
    _580.x = _291.x;
    _580.y = _291.y;
    _580.z = _291.z;
    vec3 _306 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _580.xyz;
    float _308 = _306.x;
    vec4 _586 = _580;
    _586.x = _308;
    _586.y = _306.y;
    _586.z = _306.z;
    float _317 = dot(_525.xyz, _586.xyz);
    vec4 _651 = vec4(_308, _306.yz, _317);
    _651.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _651.xyz), 0.0, 1.0);
    vec4 _596 = _525;
    _596.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _596.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _596.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _348 = (_596.xyz * _651.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _602 = _651;
    _602.x = _348.x;
    _602.y = _348.y;
    _602.z = _348.z;
    vec3 _357 = min(_602.xyz, vec3(1.0));
    vec4 _608 = _602;
    _608.x = _357.x;
    _608.y = _357.y;
    _608.z = _357.z;
    float _379 = max(_317, 0.0);
    float _518;
    if (_379 == 0.0)
    {
        _518 = 0.0;
    }
    else
    {
        _518 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_379)));
    }
    _596.x = _518;
    vec4 _652 = vec4(_608.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_308, _306.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _425 = abs((_652.xyz * 2.0) - _608.xyz);
    wxlGPlain = max(max(_425.x, _425.y), _425.z);
    gl_Position = vec4(_141.x, -_141.y, _141.zw);
    color0 = _652;
    color1 = vec4(_596.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _533;
    texcoord1 = _541;
    fog0 = min(_517, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
