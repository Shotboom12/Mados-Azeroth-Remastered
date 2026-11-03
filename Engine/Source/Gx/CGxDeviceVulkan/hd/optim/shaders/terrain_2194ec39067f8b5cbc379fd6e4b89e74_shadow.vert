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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _110 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _132 = (_110.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_110.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_110.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    float _150 = (_110.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _417 = _110;
    _417.x = _150;
    float _154 = max(_150, 0.0);
    _417.x = _154;
    float _414;
    if (_154 == 0.0)
    {
        _414 = 0.0;
    }
    else
    {
        _414 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_154)));
    }
    vec4 _423 = _132;
    _423.x = _414;
    vec2 _177 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _417.x = _177.x;
    _417.y = _177.y;
    _423.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _423.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _199 = (_417.xy * _423.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _436 = vec4(0.0);
    _436.x = _199.x;
    _436.y = _199.y;
    _423.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _423.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _221 = (_417.xy * _423.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _444 = vec4(0.0);
    _444.x = _221.x;
    _444.y = _221.y;
    _423.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _423.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _243 = (_417.xy * _423.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _452 = vec4(0.0);
    _452.x = _243.x;
    _452.y = _243.y;
    vec3 _255 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _417.x = _255.x;
    _417.y = _255.y;
    _417.z = _255.z;
    vec3 _270 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _417.xyz;
    vec4 _462 = _417;
    _462.x = _270.x;
    _462.y = _270.y;
    _462.z = _270.z;
    vec3 _285 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _462.xyz;
    vec4 _468 = _462;
    _468.x = _285.x;
    _468.y = _285.y;
    _468.z = _285.z;
    _468.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _468.xyz), 0.0, 1.0);
    _423.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _423.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _423.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _320 = (_423.xyz * _468.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _482 = _468;
    _482.x = _320.x;
    _482.y = _320.y;
    _482.z = _320.z;
    vec3 _330 = min(_482.xyz, vec3(1.0));
    vec4 _488 = _482;
    _488.x = _330.x;
    _488.y = _330.y;
    _488.z = _330.z;
    vec4 _403 = optPush.clipToTarget * ((_110.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _132);
    gl_Position = vec4(_403.x, -_403.y, _403.zw);
    color0 = vec4(_488.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _436;
    texcoord1 = _444;
    texcoord2 = _452;
    fog0 = min(_414, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
