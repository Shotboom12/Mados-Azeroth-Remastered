#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _700;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec4 _135 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _157 = (_135.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_135.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_135.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _174 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _565 = _157;
    _565.x = _174.x;
    _565.y = _174.y;
    vec4 _569;
    _569.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _569.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _196 = (_565.xy * _569.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _573 = vec4(0.0);
    _573.x = _196.x;
    _573.y = _196.y;
    vec4 _577;
    _577.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _577.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _218 = (_565.xy * _577.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _581 = vec4(0.0);
    _581.x = _218.x;
    _581.y = _218.y;
    vec4 _585;
    _585.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _585.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _240 = (_565.xy * _585.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _589 = vec4(0.0);
    _589.x = _240.x;
    _589.y = _240.y;
    vec4 _593;
    _593.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _593.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _262 = (_565.xy * _593.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _597 = vec4(0.0);
    _597.x = _262.x;
    _597.y = _262.y;
    float _276 = (_135.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _602 = _135;
    _602.w = _276;
    float _280 = max(_276, 0.0);
    _602.w = _280;
    float _562;
    if (_280 == 0.0)
    {
        _562 = 0.0;
    }
    else
    {
        _562 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_280)));
    }
    _565.x = _562;
    vec3 _297 = -_602.xyz;
    float _301 = dot(_297, _297);
    vec4 _613 = _602;
    _613.w = _301;
    float _519 = inversesqrt(abs(_301));
    _613.w = _519;
    vec4 _710 = vec4(((-_613.xyz) * _613.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _519);
    vec3 _524 = _710.xyz;
    vec4 _529 = _710 * inversesqrt(dot(_524, _524));
    _565.x = _529.x;
    _565.y = _529.y;
    _565.z = _529.z;
    vec3 _341 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _710.x = _341.x;
    _710.y = _341.y;
    _710.z = _341.z;
    vec3 _356 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _710.xyz;
    vec4 _636 = _710;
    _636.x = _356.x;
    _636.y = _356.y;
    _636.z = _356.z;
    vec3 _371 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _636.xyz;
    float _373 = _371.x;
    vec4 _642 = _636;
    _642.x = _373;
    _642.y = _371.y;
    _642.z = _371.z;
    float _382 = dot(_565.xyz, _642.xyz);
    vec4 _711 = vec4(_373, _371.yz, _382);
    _711.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _711.xyz), 0.0, 1.0);
    vec4 _652 = _565;
    _652.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _652.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _652.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _411 = (_652.xyz * _711.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _658 = _711;
    _658.x = _411.x;
    _658.y = _411.y;
    _658.z = _411.z;
    vec3 _421 = min(_658.xyz, vec3(1.0));
    vec4 _664 = _658;
    _664.x = _421.x;
    _664.y = _421.y;
    _664.z = _421.z;
    float _441 = max(_382, 0.0);
    float _563;
    if (_441 == 0.0)
    {
        _563 = 0.0;
    }
    else
    {
        _563 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_441)));
    }
    _652.x = _563;
    vec4 _551 = optPush.clipToTarget * ((_135.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _157);
    gl_Position = vec4(_551.x, -_551.y, _551.zw);
    color0 = vec4(_664.xyz * vec3(0.5), 1.0);
    color1 = vec4(_652.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _573;
    texcoord1 = _581;
    texcoord2 = _589;
    texcoord3 = _597;
    fog0 = min(_562, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
