#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _701;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
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
    vec4 _566 = _157;
    _566.x = _174.x;
    _566.y = _174.y;
    vec4 _570;
    _570.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _570.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _196 = (_566.xy * _570.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _574 = vec4(0.0);
    _574.x = _196.x;
    _574.y = _196.y;
    vec4 _578;
    _578.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _578.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _218 = (_566.xy * _578.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _582 = vec4(0.0);
    _582.x = _218.x;
    _582.y = _218.y;
    vec4 _586;
    _586.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _586.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _240 = (_566.xy * _586.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _590 = vec4(0.0);
    _590.x = _240.x;
    _590.y = _240.y;
    vec4 _594;
    _594.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _594.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _262 = (_566.xy * _594.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _598 = vec4(0.0);
    _598.x = _262.x;
    _598.y = _262.y;
    float _276 = (_135.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _603 = _135;
    _603.w = _276;
    float _280 = max(_276, 0.0);
    _603.w = _280;
    float _563;
    if (_280 == 0.0)
    {
        _563 = 0.0;
    }
    else
    {
        _563 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_280)));
    }
    _566.x = _563;
    vec3 _297 = -_603.xyz;
    float _301 = dot(_297, _297);
    vec4 _614 = _603;
    _614.w = _301;
    float _520 = inversesqrt(abs(_301));
    _614.w = _520;
    vec4 _711 = vec4(((-_614.xyz) * _614.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _520);
    vec3 _525 = _711.xyz;
    vec4 _530 = _711 * inversesqrt(dot(_525, _525));
    _566.x = _530.x;
    _566.y = _530.y;
    _566.z = _530.z;
    vec3 _341 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _711.x = _341.x;
    _711.y = _341.y;
    _711.z = _341.z;
    vec3 _356 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _711.xyz;
    vec4 _637 = _711;
    _637.x = _356.x;
    _637.y = _356.y;
    _637.z = _356.z;
    vec3 _371 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _637.xyz;
    float _373 = _371.x;
    vec4 _643 = _637;
    _643.x = _373;
    _643.y = _371.y;
    _643.z = _371.z;
    float _382 = dot(_566.xyz, _643.xyz);
    vec4 _712 = vec4(_373, _371.yz, _382);
    _712.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _712.xyz), 0.0, 1.0);
    vec4 _653 = _566;
    _653.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _653.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _653.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _411 = (_653.xyz * _712.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _659 = _712;
    _659.x = _411.x;
    _659.y = _411.y;
    _659.z = _411.z;
    vec3 _421 = min(_659.xyz, vec3(1.0));
    vec4 _665 = _659;
    _665.x = _421.x;
    _665.y = _421.y;
    _665.z = _421.z;
    float _442 = max(_382, 0.0);
    float _564;
    if (_442 == 0.0)
    {
        _564 = 0.0;
    }
    else
    {
        _564 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_442)));
    }
    _653.x = _564;
    vec4 _552 = optPush.clipToTarget * ((_135.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _157);
    gl_Position = vec4(_552.x, -_552.y, _552.zw);
    color0 = vec4(_665.xyz * v2.xyz, 1.0);
    color1 = vec4(_653.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _574;
    texcoord1 = _582;
    texcoord2 = _590;
    texcoord3 = _598;
    fog0 = min(_563, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
