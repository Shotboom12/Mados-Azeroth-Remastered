#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _708;



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
    vec4 _113 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _135 = (_113.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_113.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_113.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _143 = (_113.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _135;
    vec2 _152 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _577 = _135;
    _577.x = _152.x;
    _577.y = _152.y;
    vec4 _581;
    _581.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _581.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _176 = (_577.xy * _581.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _585 = vec4(0.0);
    _585.x = _176.x;
    _585.y = _176.y;
    vec4 _589;
    _589.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _589.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _198 = (_577.xy * _589.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _593 = vec4(0.0);
    _593.x = _198.x;
    _593.y = _198.y;
    vec4 _597;
    _597.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _597.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _220 = (_577.xy * _597.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _601 = vec4(0.0);
    _601.x = _220.x;
    _601.y = _220.y;
    vec4 _605;
    _605.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _605.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _242 = (_577.xy * _605.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _609 = vec4(0.0);
    _609.x = _242.x;
    _609.y = _242.y;
    float _257 = (_113.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _614 = _113;
    _614.w = _257;
    float _262 = max(_257, 0.0);
    _614.w = _262;
    float _569;
    if (_262 == 0.0)
    {
        _569 = 0.0;
    }
    else
    {
        _569 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_262)));
    }
    _577.x = _569;
    vec3 _278 = -_614.xyz;
    float _282 = dot(_278, _278);
    vec4 _625 = _614;
    _625.w = _282;
    float _543 = inversesqrt(abs(_282));
    _625.w = _543;
    vec4 _718 = vec4(((-_625.xyz) * _625.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _543);
    vec3 _548 = _718.xyz;
    vec4 _553 = _718 * inversesqrt(dot(_548, _548));
    _577.x = _553.x;
    _577.y = _553.y;
    _577.z = _553.z;
    vec3 _322 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _718.x = _322.x;
    _718.y = _322.y;
    _718.z = _322.z;
    vec3 _337 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _718.xyz;
    vec4 _648 = _718;
    _648.x = _337.x;
    _648.y = _337.y;
    _648.z = _337.z;
    vec3 _352 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _648.xyz;
    float _354 = _352.x;
    vec4 _654 = _648;
    _654.x = _354;
    _654.y = _352.y;
    _654.z = _352.z;
    float _363 = dot(_577.xyz, _654.xyz);
    vec4 _719 = vec4(_354, _352.yz, _363);
    _719.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _719.xyz), 0.0, 1.0);
    vec4 _664 = _577;
    _664.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _664.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _664.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _394 = (_664.xyz * _719.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _670 = _719;
    _670.x = _394.x;
    _670.y = _394.y;
    _670.z = _394.z;
    vec3 _403 = min(_670.xyz, vec3(1.0));
    vec4 _676 = _670;
    _676.x = _403.x;
    _676.y = _403.y;
    _676.z = _403.z;
    float _426 = max(_363, 0.0);
    float _570;
    if (_426 == 0.0)
    {
        _570 = 0.0;
    }
    else
    {
        _570 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_426)));
    }
    _664.x = _570;
    vec4 _720 = vec4(_676.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_354, _352.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _473 = abs((_720.xyz * 2.0) - _676.xyz);
    wxlGPlain = max(max(_473.x, _473.y), _473.z);
    gl_Position = vec4(_143.x, -_143.y, _143.zw);
    color0 = _720;
    color1 = vec4(_664.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _585;
    texcoord1 = _593;
    texcoord2 = _601;
    texcoord3 = _609;
    fog0 = min(_569, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
