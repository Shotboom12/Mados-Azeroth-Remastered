#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;
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
    vec4 _90 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _112 = (_90.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_90.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_90.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _120 = (_90.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _112;
    float _133 = (_90.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _473 = _90;
    _473.x = _133;
    float _137 = max(_133, 0.0);
    _473.x = _137;
    float _467;
    if (_137 == 0.0)
    {
        _467 = 0.0;
    }
    else
    {
        _467 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_137)));
    }
    vec4 _479 = _112;
    _479.x = _467;
    vec2 _159 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _473.x = _159.x;
    _473.y = _159.y;
    _479.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _479.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _181 = (_473.xy * _479.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _492 = vec4(0.0);
    _492.x = _181.x;
    _492.y = _181.y;
    _479.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _479.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _203 = (_473.xy * _479.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _500 = vec4(0.0);
    _500.x = _203.x;
    _500.y = _203.y;
    _479.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _479.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _225 = (_473.xy * _479.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _508 = vec4(0.0);
    _508.x = _225.x;
    _508.y = _225.y;
    _479.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _479.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _247 = (_473.xy * _479.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _516 = vec4(0.0);
    _516.x = _247.x;
    _516.y = _247.y;
    _479.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _479.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _269 = (_473.xy * _479.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _524 = vec4(0.0);
    _524.x = _269.x;
    _524.y = _269.y;
    vec3 _280 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _473.x = _280.x;
    _473.y = _280.y;
    _473.z = _280.z;
    vec3 _295 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _473.xyz;
    vec4 _534 = _473;
    _534.x = _295.x;
    _534.y = _295.y;
    _534.z = _295.z;
    vec3 _310 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _534.xyz;
    float _312 = _310.x;
    vec4 _540 = _534;
    _540.x = _312;
    _540.y = _310.y;
    _540.z = _310.z;
    _540.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _540.xyz), 0.0, 1.0);
    _479.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _479.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _479.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _347 = (_479.xyz * _540.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _554 = _540;
    _554.x = _347.x;
    _554.y = _347.y;
    _554.z = _347.z;
    vec3 _356 = min(_554.xyz, vec3(1.0));
    vec4 _560 = _554;
    _560.x = _356.x;
    _560.y = _356.y;
    _560.z = _356.z;
    vec4 _587 = vec4(_560.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_312, _310.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _399 = abs((_587.xyz * 2.0) - _560.xyz);
    wxlGPlain = max(max(_399.x, _399.y), _399.z);
    gl_Position = vec4(_120.x, -_120.y, _120.zw);
    color0 = _587;
    color1 = vec4(0.0);
    texcoord0 = _492;
    texcoord1 = _500;
    texcoord2 = _508;
    texcoord3 = _516;
    texcoord4 = _524;
    fog0 = min(_467, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
