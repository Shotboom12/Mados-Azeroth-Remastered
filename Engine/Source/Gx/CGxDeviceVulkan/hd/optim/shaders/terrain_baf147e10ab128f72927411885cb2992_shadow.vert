#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec4 _466 = _112;
    _466.x = _152;
    float _156 = max(_152, 0.0);
    _466.x = _156;
    float _463;
    if (_156 == 0.0)
    {
        _463 = 0.0;
    }
    else
    {
        _463 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_156)));
    }
    vec4 _472 = _134;
    _472.x = _463;
    vec2 _179 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _466.x = _179.x;
    _466.y = _179.y;
    _472.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _472.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _201 = (_466.xy * _472.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _485 = vec4(0.0);
    _485.x = _201.x;
    _485.y = _201.y;
    _472.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _472.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _223 = (_466.xy * _472.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _493 = vec4(0.0);
    _493.x = _223.x;
    _493.y = _223.y;
    _472.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _472.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _245 = (_466.xy * _472.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _501 = vec4(0.0);
    _501.x = _245.x;
    _501.y = _245.y;
    _472.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _472.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _267 = (_466.xy * _472.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _509 = vec4(0.0);
    _509.x = _267.x;
    _509.y = _267.y;
    _472.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _472.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _289 = (_466.xy * _472.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _517 = vec4(0.0);
    _517.x = _289.x;
    _517.y = _289.y;
    vec3 _301 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _466.x = _301.x;
    _466.y = _301.y;
    _466.z = _301.z;
    vec3 _316 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _466.xyz;
    vec4 _527 = _466;
    _527.x = _316.x;
    _527.y = _316.y;
    _527.z = _316.z;
    vec3 _331 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _527.xyz;
    vec4 _533 = _527;
    _533.x = _331.x;
    _533.y = _331.y;
    _533.z = _331.z;
    _533.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _533.xyz), 0.0, 1.0);
    _472.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _472.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _472.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _366 = (_472.xyz * _533.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _547 = _533;
    _547.x = _366.x;
    _547.y = _366.y;
    _547.z = _366.z;
    vec3 _376 = min(_547.xyz, vec3(1.0));
    vec4 _553 = _547;
    _553.x = _376.x;
    _553.y = _376.y;
    _553.z = _376.z;
    vec4 _452 = optPush.clipToTarget * ((_112.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _134);
    gl_Position = vec4(_452.x, -_452.y, _452.zw);
    color0 = vec4(_553.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _485;
    texcoord1 = _493;
    texcoord2 = _501;
    texcoord3 = _509;
    texcoord4 = _517;
    fog0 = min(_463, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
