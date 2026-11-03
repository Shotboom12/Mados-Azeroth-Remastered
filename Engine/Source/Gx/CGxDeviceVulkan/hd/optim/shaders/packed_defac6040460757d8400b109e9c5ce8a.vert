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
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
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
layout(location=8)in uvec4 optNormalBytes;layout(location=9)in vec4 optColor;layout(location=10)in vec4 optLight;
layout(location=11)in vec3 optOrigin;layout(location=12)in uvec4 optUpRotation;layout(location=13)in uvec4 optScalePhase;
vec3 OptNormalize(vec3 a){float d=dot(a,a);return d>1e-12?a*inversesqrt(d):vec3(0,0,1);}
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    vec4 r1 = vec4(0.0);
    vec4 o0 = vec4(0.0);
    vec4 o1 = vec4(0.0);
    vec4 o2 = vec4(0.0);
    vec4 o3 = vec4(0.0);
    vec4 o4 = vec4(0.0);
    vec4 o5 = vec4(0.0);
    vec4 o6 = vec4(0.0);
    vec4 o7 = vec4(0.0);
    r0 = optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy;
    r0 = (v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + r0;
    r0 = (v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + r0;
    r0 += optRegs.rows[optTile*82u+17u+uint(3)];
    r1 = r0.yyyy * optRegs.rows[optTile*82u+17u+uint(5)];
    r1 = (r0.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + r1;
    r1 = (r0.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + r1;
    o0 = (r0.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + r1;
    o2.x = clamp((r0.z * optRegs.rows[optTile*82u+17u+uint(9)].x) + optRegs.rows[optTile*82u+17u+uint(9)].y, 0.0, 1.0);
    r0.w = (r0.z * optRegs.rows[optTile*82u+17u+uint(8)].x) + optRegs.rows[optTile*82u+17u+uint(8)].y;
    r0.w = max(r0.w, 0.0);
    float param = r0.w;
    float param_1 = optRegs.rows[optTile*82u+17u+uint(8)].z;
    float param_2 = param;
    float param_3 = param_1;
    r1.x = dx_pow(param_2, param_3);
    o7.x = min(r1.x, 1.0);
    vec3 _RESERVED_IDENTIFIER_FIXUP_162 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_162.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_162.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_162.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_175 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_177 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _RESERVED_IDENTIFIER_FIXUP_175.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_177.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_177.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_177.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_190 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_192 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _RESERVED_IDENTIFIER_FIXUP_190.xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_192.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_192.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_192.z;
    r0.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(10)].xyz, r1.xyz), 0.0, 1.0);
    o5.x = r1.x;
    o5.y = r1.y;
    o5.z = r1.z;
    r1.x = optRegs.rows[optTile*82u+17u+uint(12)].x;
    r1.y = optRegs.rows[optTile*82u+17u+uint(12)].y;
    r1.z = optRegs.rows[optTile*82u+17u+uint(12)].z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_226 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_235 = (_RESERVED_IDENTIFIER_FIXUP_226.xyz * r0.www) + optRegs.rows[optTile*82u+17u+uint(11)].xyz;
    r1.x = _RESERVED_IDENTIFIER_FIXUP_235.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_235.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_235.z;
    vec4 _RESERVED_IDENTIFIER_FIXUP_242 = r1;
    vec3 _RESERVED_IDENTIFIER_FIXUP_245 = min(_RESERVED_IDENTIFIER_FIXUP_242.xyz, vec3(1.0));
    r1.x = _RESERVED_IDENTIFIER_FIXUP_245.x;
    r1.y = _RESERVED_IDENTIFIER_FIXUP_245.y;
    r1.z = _RESERVED_IDENTIFIER_FIXUP_245.z;
    vec3 _RESERVED_IDENTIFIER_FIXUP_257 = r1.xyz * v2.xyz;
    o1.x = _RESERVED_IDENTIFIER_FIXUP_257.x;
    o1.y = _RESERVED_IDENTIFIER_FIXUP_257.y;
    o1.z = _RESERVED_IDENTIFIER_FIXUP_257.z;
    r1 = (r0.xyzx * vec4(1.0, 1.0, 1.0, 0.0)) + vec4(0.0, 0.0, 0.0, 1.0);
    o4.x = r0.x;
    o4.y = r0.y;
    o4.z = r0.z;
    o6.x = dot(r1, optRegs.rows[optTile*82u+17u+uint(23)]);
    o6.y = dot(r1, optRegs.rows[optTile*82u+17u+uint(24)]);
    o6.z = dot(r1, optRegs.rows[optTile*82u+17u+uint(25)]);
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
    texcoord1 = o4;
    texcoord2 = o5;
    texcoord3 = o6;
    fog0 = o7.x;
    wxlGBuf = vec4(0.0);
    wxlGClass = 0.0;
    wxlGPlain = 1.0;
}


void main(){
optTile=0u;
vec3 optN=vec3(optUpRotation.xyz)*(2.0/255.0)-1.0;optN=OptNormalize(optN);
float optD=optN.y*optN.y+optN.z*optN.z;vec3 optT=optD>1e-12?vec3(0,optN.z,-optN.y)*inversesqrt(optD):vec3(0,1,0);
vec3 optB=cross(optN,optT);float optAngle=float(optUpRotation.w)/40.584511;float optC=cos(optAngle),optS=sin(optAngle);
vec3 optPos=((optB*optC+optT*optS)*optPosition.x+(-optB*optS+optT*optC)*optPosition.y+optN*optPosition.z)*(float(optScalePhase.x)/127.5)+optOrigin;
vec4 optNormal=vec4(vec3(optNormalBytes.xyz)*(2.0/255.0)-1.0,1);
v0=vec4(optPos,1);
v1=optNormal;
v2=optColor;
v3=vec4(optUV,0,1);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
