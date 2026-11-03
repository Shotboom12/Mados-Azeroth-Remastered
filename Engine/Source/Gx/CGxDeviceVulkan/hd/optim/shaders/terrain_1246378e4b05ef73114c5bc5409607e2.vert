#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _642;



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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _111 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _133 = (_111.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_111.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_111.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _141 = (_111.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _133;
    vec2 _150 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _527 = _133;
    _527.x = _150.x;
    _527.y = _150.y;
    vec4 _531;
    _531.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _531.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _174 = (_527.xy * _531.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _535 = vec4(0.0);
    _535.x = _174.x;
    _535.y = _174.y;
    vec4 _539;
    _539.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _539.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _196 = (_527.xy * _539.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _543 = vec4(0.0);
    _543.x = _196.x;
    _543.y = _196.y;
    float _211 = (_111.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _548 = _111;
    _548.w = _211;
    float _216 = max(_211, 0.0);
    _548.w = _216;
    float _519;
    if (_216 == 0.0)
    {
        _519 = 0.0;
    }
    else
    {
        _519 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_216)));
    }
    _527.x = _519;
    vec3 _232 = -_548.xyz;
    float _236 = dot(_232, _232);
    vec4 _559 = _548;
    _559.w = _236;
    float _493 = inversesqrt(abs(_236));
    _559.w = _493;
    vec4 _652 = vec4(((-_559.xyz) * _559.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _493);
    vec3 _498 = _652.xyz;
    vec4 _503 = _652 * inversesqrt(dot(_498, _498));
    _527.x = _503.x;
    _527.y = _503.y;
    _527.z = _503.z;
    vec3 _276 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _652.x = _276.x;
    _652.y = _276.y;
    _652.z = _276.z;
    vec3 _291 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _652.xyz;
    vec4 _582 = _652;
    _582.x = _291.x;
    _582.y = _291.y;
    _582.z = _291.z;
    vec3 _306 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _582.xyz;
    float _308 = _306.x;
    vec4 _588 = _582;
    _588.x = _308;
    _588.y = _306.y;
    _588.z = _306.z;
    float _317 = dot(_527.xyz, _588.xyz);
    vec4 _653 = vec4(_308, _306.yz, _317);
    _653.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _653.xyz), 0.0, 1.0);
    vec4 _598 = _527;
    _598.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _598.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _598.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _348 = (_598.xyz * _653.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _604 = _653;
    _604.x = _348.x;
    _604.y = _348.y;
    _604.z = _348.z;
    vec3 _357 = min(_604.xyz, vec3(1.0));
    vec4 _610 = _604;
    _610.x = _357.x;
    _610.y = _357.y;
    _610.z = _357.z;
    float _380 = max(_317, 0.0);
    float _520;
    if (_380 == 0.0)
    {
        _520 = 0.0;
    }
    else
    {
        _520 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_380)));
    }
    _598.x = _520;
    vec4 _654 = vec4(_610.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_308, _306.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _427 = abs((_654.xyz * 2.0) - _610.xyz);
    wxlGPlain = max(max(_427.x, _427.y), _427.z);
    gl_Position = vec4(_141.x, -_141.y, _141.zw);
    color0 = _654;
    color1 = vec4(_598.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _535;
    texcoord1 = _543;
    fog0 = min(_519, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
