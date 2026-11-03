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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _88 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _110 = (_88.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_88.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_88.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _118 = (_88.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _110;
    float _131 = (_88.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _423 = _88;
    _423.x = _131;
    float _135 = max(_131, 0.0);
    _423.x = _135;
    float _417;
    if (_135 == 0.0)
    {
        _417 = 0.0;
    }
    else
    {
        _417 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_135)));
    }
    vec4 _429 = _110;
    _429.x = _417;
    vec2 _157 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _423.x = _157.x;
    _423.y = _157.y;
    _429.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _429.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _179 = (_423.xy * _429.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _442 = vec4(0.0);
    _442.x = _179.x;
    _442.y = _179.y;
    _429.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _429.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _201 = (_423.xy * _429.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _450 = vec4(0.0);
    _450.x = _201.x;
    _450.y = _201.y;
    _429.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _429.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _223 = (_423.xy * _429.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _458 = vec4(0.0);
    _458.x = _223.x;
    _458.y = _223.y;
    vec3 _234 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _423.x = _234.x;
    _423.y = _234.y;
    _423.z = _234.z;
    vec3 _249 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _423.xyz;
    vec4 _468 = _423;
    _468.x = _249.x;
    _468.y = _249.y;
    _468.z = _249.z;
    vec3 _264 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _468.xyz;
    float _266 = _264.x;
    vec4 _474 = _468;
    _474.x = _266;
    _474.y = _264.y;
    _474.z = _264.z;
    _474.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _474.xyz), 0.0, 1.0);
    _429.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _429.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _429.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _301 = (_429.xyz * _474.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _488 = _474;
    _488.x = _301.x;
    _488.y = _301.y;
    _488.z = _301.z;
    vec3 _310 = min(_488.xyz, vec3(1.0));
    vec4 _494 = _488;
    _494.x = _310.x;
    _494.y = _310.y;
    _494.z = _310.z;
    vec4 _519 = vec4(_494.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_266, _264.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _353 = abs((_519.xyz * 2.0) - _494.xyz);
    wxlGPlain = max(max(_353.x, _353.y), _353.z);
    gl_Position = vec4(_118.x, -_118.y, _118.zw);
    color0 = _519;
    color1 = vec4(0.0);
    texcoord0 = _442;
    texcoord1 = _450;
    texcoord2 = _458;
    fog0 = min(_417, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
