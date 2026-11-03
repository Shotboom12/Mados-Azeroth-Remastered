#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



vec4 v0;
vec4 v1;
vec4 v2;
vec4 v3;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 10) out float fog0;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;

float dx_pow(float x, float y)
{
    float _RESERVED_IDENTIFIER_FIXUP_17;
    if (x == 0.0)
    {
        _RESERVED_IDENTIFIER_FIXUP_17 = 0.0;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_17 = exp2(y * log2(abs(x)));
    }
    return _RESERVED_IDENTIFIER_FIXUP_17;
}


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
layout(location=0)in vec3 optPosition;layout(location=4)in vec2 optUV;layout(location=5)in vec2 optWind;
layout(location=8)in vec4 optRow0;layout(location=9)in vec4 optRow1;layout(location=10)in vec4 optRow2;
layout(location=11)in vec4 optNormal;layout(location=12)in vec4 optColor;layout(location=13)in vec4 optLight;layout(location=14)in vec4 optInstanceWind;
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 o0 = vec4(0.0);
    vec4 o1 = vec4(0.0);
    vec4 o2 = vec4(0.0);
    vec4 o3 = vec4(0.0);
    vec4 o4 = vec4(0.0);
    r0 = optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy;
    r0 = (v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + r0;
    r0 = (v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + r0;
    r0 += optRegs.rows[optTile*82u+17u+uint(3)];
    r1 = r0.yyyy * optRegs.rows[optTile*82u+17u+uint(5)];
    r1 = (r0.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + r1;
    r1 = (r0.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + r1;
    o0 = (r0.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + r1;
    o2.x = clamp((r0.z * optRegs.rows[optTile*82u+17u+uint(9)].x) + optRegs.rows[optTile*82u+17u+uint(9)].y, 0.0, 1.0);
    r0.x = (r0.z * optRegs.rows[optTile*82u+17u+uint(8)].x) + optRegs.rows[optTile*82u+17u+uint(8)].y;
    r0.x = max(r0.x, 0.0);
    float param = r0.x;
    float param_1 = optRegs.rows[optTile*82u+17u+uint(8)].z;
    float param_2 = param;
    float param_3 = param_1;
    r1.x = dx_pow(param_2, param_3);
    o4.x = min(r1.x, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_158 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    r0.x = _RESERVED_IDENTIFIER_FIXUP_158.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_158.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_158.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_171 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_173 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _RESERVED_IDENTIFIER_FIXUP_171.xyz;
    r0.x = _RESERVED_IDENTIFIER_FIXUP_173.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_173.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_173.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_186 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_188 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _RESERVED_IDENTIFIER_FIXUP_186.xyz;
    r0.x = _RESERVED_IDENTIFIER_FIXUP_188.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_188.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_188.z;
    r0.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(10)].xyz, r0.xyz), 0.0, 1.0);
    r1.x = optRegs.rows[optTile*82u+17u+uint(12)].x;
    r1.y = optRegs.rows[optTile*82u+17u+uint(12)].y;
    r1.z = optRegs.rows[optTile*82u+17u+uint(12)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_216 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_223 = (r1.xyz * _RESERVED_IDENTIFIER_FIXUP_216.xxx) + optRegs.rows[optTile*82u+17u+uint(11)].xyz;
    r0.x = _RESERVED_IDENTIFIER_FIXUP_223.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_223.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_223.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_230 = r0;
    vec3 _RESERVED_IDENTIFIER_FIXUP_233 = min(_RESERVED_IDENTIFIER_FIXUP_230.xyz, vec3(1.0));
    r0.x = _RESERVED_IDENTIFIER_FIXUP_233.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_233.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_233.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_245 = r0.xyz * v2.xyz;
    o1.x = _RESERVED_IDENTIFIER_FIXUP_245.x;
    o1.y = _RESERVED_IDENTIFIER_FIXUP_245.y;
    o1.z = _RESERVED_IDENTIFIER_FIXUP_245.z;
    o1.w = v2.w;
    o2.y = 0.0;
    o2.z = 0.0;
    o2.w = 0.0;
    o3.x = v3.x;
    o3.y = v3.y;
    gl_Position = vec4(o0.x, -o0.y, o0.z, o0.w);
    color0 = o1;
    color1 = o2;
    texcoord0 = o3;
    fog0 = o4.x;
    wxlGBuf = vec4(0.0);
    wxlGClass = 0.0;
    wxlGPlain = 1.0;
}


void main(){
optTile=0u;
vec4 optP=vec4(optPosition,1);vec3 optPos=vec3(dot(optRow0,optP),dot(optRow1,optP),dot(optRow2,optP));
v0=vec4(optPos,1);
v1=optNormal;
v2=optColor;
v3=vec4(optUV,0,1);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
