#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _112 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _134 = (_112.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_112.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_112.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    float _152 = (_112.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _467 = _112;
    _467.x = _152;
    float _156 = max(_152, 0.0);
    _467.x = _156;
    float _464;
    if (_156 == 0.0)
    {
        _464 = 0.0;
    }
    else
    {
        _464 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_156)));
    }
    vec4 _473 = _134;
    _473.x = _464;
    vec2 _179 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _467.x = _179.x;
    _467.y = _179.y;
    _473.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _473.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _201 = (_467.xy * _473.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _486 = vec4(0.0);
    _486.x = _201.x;
    _486.y = _201.y;
    _473.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _473.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _223 = (_467.xy * _473.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _494 = vec4(0.0);
    _494.x = _223.x;
    _494.y = _223.y;
    _473.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _473.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _245 = (_467.xy * _473.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _502 = vec4(0.0);
    _502.x = _245.x;
    _502.y = _245.y;
    _473.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _473.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _267 = (_467.xy * _473.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _510 = vec4(0.0);
    _510.x = _267.x;
    _510.y = _267.y;
    _473.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _473.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _289 = (_467.xy * _473.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _518 = vec4(0.0);
    _518.x = _289.x;
    _518.y = _289.y;
    vec3 _301 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _467.x = _301.x;
    _467.y = _301.y;
    _467.z = _301.z;
    vec3 _316 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _467.xyz;
    vec4 _528 = _467;
    _528.x = _316.x;
    _528.y = _316.y;
    _528.z = _316.z;
    vec3 _331 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _528.xyz;
    vec4 _534 = _528;
    _534.x = _331.x;
    _534.y = _331.y;
    _534.z = _331.z;
    _534.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _534.xyz), 0.0, 1.0);
    _473.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _473.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _473.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _366 = (_473.xyz * _534.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _548 = _534;
    _548.x = _366.x;
    _548.y = _366.y;
    _548.z = _366.z;
    vec3 _376 = min(_548.xyz, vec3(1.0));
    vec4 _554 = _548;
    _554.x = _376.x;
    _554.y = _376.y;
    _554.z = _376.z;
    vec4 _453 = optPush.clipToTarget * ((_112.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _134);
    gl_Position = vec4(_453.x, -_453.y, _453.zw);
    color0 = vec4(_554.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _486;
    texcoord1 = _494;
    texcoord2 = _502;
    texcoord3 = _510;
    texcoord4 = _518;
    fog0 = min(_464, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
