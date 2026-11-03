#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) out vec4 oC0;
layout(location = 7) in vec4 texcoord5;
layout(location = 1) out vec4 hdAlbedo;
layout(location = 2) out vec4 hdNormal;
layout(location = 3) out vec4 hdLight;
layout(location = 4) out vec4 hdLow;
layout(location = 5) out vec4 hdHigh;
int hdOverride;
bool hdKilled;


layout(location=11)flat in uint optTileIn;layout(location=12)in float optClipIn;
float dx_rsq(float x)
{
    return inversesqrt(abs(x));
}

void HDActual()
{
    vec4 r0 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = texcoord5;
    vec3 _RESERVED_IDENTIFIER_FIXUP_46 = optRegs.rows[optTile*82u+uint(1)].www * v0.xyz;
    r0.x = _RESERVED_IDENTIFIER_FIXUP_46.x;
    r0.y = _RESERVED_IDENTIFIER_FIXUP_46.y;
    r0.z = _RESERVED_IDENTIFIER_FIXUP_46.z;
    r0.x = dot(r0.xyz, r0.xyz);
    float param = r0.x;
    float param_1 = param;
    r0.y = dx_rsq(param_1);
    oC0.y = r0.x;
    oC0.x = 1.0 / r0.y;
    oC0.z = 1.0;
    oC0.w = 1.0;
    bool _RESERVED_IDENTIFIER_FIXUP_87 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool _RESERVED_IDENTIFIER_FIXUP_95;
    if (_RESERVED_IDENTIFIER_FIXUP_87)
    {
        _RESERVED_IDENTIFIER_FIXUP_95 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        _RESERVED_IDENTIFIER_FIXUP_95 = _RESERVED_IDENTIFIER_FIXUP_87;
    }
    if (_RESERVED_IDENTIFIER_FIXUP_95)
    {
        hdKilled = true;
        return;
    }
    hdAlbedo = vec4(0.0);
    hdNormal = vec4(0.0, 0.0, 0.0, -(0.50499999523162841796875 + (0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) / 16.0, 0.0, 1.0))));
    hdLight = vec4(0.0);
}

float hdBasedx_rsq(float x)
{
    return inversesqrt(abs(x));
}

void HDEndpoint()
{
    vec4 r0 = vec4(0.0);
    oC0 = vec4(0.0);
    vec4 v0 = texcoord5;
    vec3 hdB46 = optRegs.rows[optTile*82u+uint(1)].www * v0.xyz;
    r0.x = hdB46.x;
    r0.y = hdB46.y;
    r0.z = hdB46.z;
    r0.x = dot(r0.xyz, r0.xyz);
    float param = r0.x;
    float param_1 = param;
    r0.y = hdBasedx_rsq(param_1);
    oC0.y = r0.x;
    oC0.x = 1.0 / r0.y;
    oC0.z = 1.0;
    oC0.w = 1.0;
    bool hdB87 = optRegs.rows[optTile*82u+16u].x > 0.0;
    bool hdB95;
    if (hdB87)
    {
        hdB95 = oC0.w < optRegs.rows[optTile*82u+16u].x;
    }
    else
    {
        hdB95 = hdB87;
    }
    if (hdB95)
    {
        hdKilled = true;
        return;
    }
}


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;
void OptNativeMain()
{
    hdOverride = -1;
    hdKilled = false;
    hdOverride = -1;
    hdKilled = false;
    HDActual();
    bool hdDiscardActual = hdKilled;
    vec4 hdSaved0 = oC0;
    vec4 hdSaved1 = hdAlbedo;
    vec4 hdSaved2 = hdNormal;
    vec4 hdSaved3 = hdLight;
    hdLow = vec4(0.0);
    hdHigh = vec4(0.0);
    bool _226 = optRegs.rows[optTile*82u+uint(14)].w >= 65536.0;
    bool _235;
    if (_226)
    {
        _235 = (uint(round(optRegs.rows[optTile*82u+uint(14)].z)) & 0u) != 0u;
    }
    else
    {
        _235 = _226;
    }
    if (_235)
    {
        hdOverride = 0;
        hdKilled = false;
        HDEndpoint();
        vec3 lo = oC0.xyz;
        hdOverride = 1;
        hdKilled = false;
        HDEndpoint();
        vec3 hi = oC0.xyz;
        float tag = 0.50499999523162841796875 + (0.4900000095367431640625 * clamp((log2(max(1.0 / gl_FragCoord.w, 0.0625)) + 4.0) / 16.0, 0.0, 1.0));
        bool _260 = optRegs.rows[optTile*82u+uint(14)].y > 0.5;
        bool _275;
        if (!_260)
        {
            _275 = ((uint(round(optRegs.rows[optTile*82u+uint(14)].w)) & uint(round(optRegs.rows[optTile*82u+uint(14)].z))) & 0u) != 0u;
        }
        else
        {
            _275 = _260;
        }
        if (_275)
        {
            tag = -tag;
        }
        vec3 hdStored = clamp(hdSaved0.xyz, vec3(0.0), vec3(1.0));
        hdLow = vec4(clamp(lo, vec3(0.0), vec3(1.0)) - hdStored, tag);
        hdHigh = vec4(clamp(hi, vec3(0.0), vec3(1.0)) - hdStored, tag);
    }
    oC0 = hdSaved0;
    hdAlbedo = hdSaved1;
    hdNormal = hdSaved2;
    hdLight = hdSaved3;
    if (hdDiscardActual)
    {
        discard;
    }
}


void main(){optTile=min(optTileIn,3u);if((optPush.flags&2u)!=0u&&optClipIn<0)discard;OptNativeMain();}
