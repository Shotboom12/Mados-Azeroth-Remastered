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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _111 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _133 = (_111.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_111.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_111.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    float _151 = (_111.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _441 = _111;
    _441.x = _151;
    float _155 = max(_151, 0.0);
    _441.x = _155;
    float _438;
    if (_155 == 0.0)
    {
        _438 = 0.0;
    }
    else
    {
        _438 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_155)));
    }
    vec4 _447 = _133;
    _447.x = _438;
    vec2 _178 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _441.x = _178.x;
    _441.y = _178.y;
    _447.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _447.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _200 = (_441.xy * _447.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _460 = vec4(0.0);
    _460.x = _200.x;
    _460.y = _200.y;
    _447.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _447.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _222 = (_441.xy * _447.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _468 = vec4(0.0);
    _468.x = _222.x;
    _468.y = _222.y;
    _447.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _447.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _244 = (_441.xy * _447.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _476 = vec4(0.0);
    _476.x = _244.x;
    _476.y = _244.y;
    _447.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _447.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _266 = (_441.xy * _447.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _484 = vec4(0.0);
    _484.x = _266.x;
    _484.y = _266.y;
    vec3 _278 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _441.x = _278.x;
    _441.y = _278.y;
    _441.z = _278.z;
    vec3 _293 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _441.xyz;
    vec4 _494 = _441;
    _494.x = _293.x;
    _494.y = _293.y;
    _494.z = _293.z;
    vec3 _308 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _494.xyz;
    vec4 _500 = _494;
    _500.x = _308.x;
    _500.y = _308.y;
    _500.z = _308.z;
    _500.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _500.xyz), 0.0, 1.0);
    _447.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _447.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _447.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _343 = (_447.xyz * _500.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _514 = _500;
    _514.x = _343.x;
    _514.y = _343.y;
    _514.z = _343.z;
    vec3 _353 = min(_514.xyz, vec3(1.0));
    vec4 _520 = _514;
    _520.x = _353.x;
    _520.y = _353.y;
    _520.z = _353.z;
    vec4 _427 = optPush.clipToTarget * ((_111.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _133);
    gl_Position = vec4(_427.x, -_427.y, _427.zw);
    color0 = vec4(_520.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _460;
    texcoord1 = _468;
    texcoord2 = _476;
    texcoord3 = _484;
    fog0 = min(_438, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
