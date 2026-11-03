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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _111 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _133 = (_111.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_111.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_111.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    float _151 = (_111.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _442 = _111;
    _442.x = _151;
    float _155 = max(_151, 0.0);
    _442.x = _155;
    float _439;
    if (_155 == 0.0)
    {
        _439 = 0.0;
    }
    else
    {
        _439 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_155)));
    }
    vec4 _448 = _133;
    _448.x = _439;
    vec2 _178 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _442.x = _178.x;
    _442.y = _178.y;
    _448.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _448.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _200 = (_442.xy * _448.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _461 = vec4(0.0);
    _461.x = _200.x;
    _461.y = _200.y;
    _448.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _448.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _222 = (_442.xy * _448.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _469 = vec4(0.0);
    _469.x = _222.x;
    _469.y = _222.y;
    _448.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _448.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _244 = (_442.xy * _448.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _477 = vec4(0.0);
    _477.x = _244.x;
    _477.y = _244.y;
    _448.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _448.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _266 = (_442.xy * _448.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _485 = vec4(0.0);
    _485.x = _266.x;
    _485.y = _266.y;
    vec3 _278 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _442.x = _278.x;
    _442.y = _278.y;
    _442.z = _278.z;
    vec3 _293 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _442.xyz;
    vec4 _495 = _442;
    _495.x = _293.x;
    _495.y = _293.y;
    _495.z = _293.z;
    vec3 _308 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _495.xyz;
    vec4 _501 = _495;
    _501.x = _308.x;
    _501.y = _308.y;
    _501.z = _308.z;
    _501.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _501.xyz), 0.0, 1.0);
    _448.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _448.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _448.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _343 = (_448.xyz * _501.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _515 = _501;
    _515.x = _343.x;
    _515.y = _343.y;
    _515.z = _343.z;
    vec3 _353 = min(_515.xyz, vec3(1.0));
    vec4 _521 = _515;
    _521.x = _353.x;
    _521.y = _353.y;
    _521.z = _353.z;
    vec4 _428 = optPush.clipToTarget * ((_111.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _133);
    gl_Position = vec4(_428.x, -_428.y, _428.zw);
    color0 = vec4(_521.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _461;
    texcoord1 = _469;
    texcoord2 = _477;
    texcoord3 = _485;
    fog0 = min(_439, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
