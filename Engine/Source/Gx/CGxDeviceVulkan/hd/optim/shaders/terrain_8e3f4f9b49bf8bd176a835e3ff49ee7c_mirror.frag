#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) out vec4 oC0;
layout(location = 7) in vec4 texcoord5;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
float dx_rsq(float x)
{
    return inversesqrt(abs(x));
}


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;
void OptNativeMain()
{
    vec4 r0 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = texcoord5;
    vec3 _46 = optRegs.rows[optTile*82u+uint(1)].www * v0.xyz;
    r0.x = _46.x;
    r0.y = _46.y;
    r0.z = _46.z;
    r0.x = dot(r0.xyz, r0.xyz);
    float param = r0.x;
    r0.y = dx_rsq(param);
    oC0.y = r0.x;
    oC0.x = 1.0 / r0.y;
    oC0.z = 1.0;
    oC0.w = 1.0;
    bool _87 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _95;
    if (_87)
    {
        _95 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _95 = _87;
    }
    if (_95)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
