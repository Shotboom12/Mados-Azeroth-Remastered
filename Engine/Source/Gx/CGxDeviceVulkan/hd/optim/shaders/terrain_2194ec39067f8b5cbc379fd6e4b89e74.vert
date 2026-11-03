#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _88 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _110 = (_88.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_88.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_88.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _118 = (_88.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _110;
    float _131 = (_88.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _425 = _88;
    _425.x = _131;
    float _135 = max(_131, 0.0);
    _425.x = _135;
    float _419;
    if (_135 == 0.0)
    {
        _419 = 0.0;
    }
    else
    {
        _419 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_135)));
    }
    vec4 _431 = _110;
    _431.x = _419;
    vec2 _157 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _425.x = _157.x;
    _425.y = _157.y;
    _431.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _431.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _179 = (_425.xy * _431.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _444 = vec4(0.0);
    _444.x = _179.x;
    _444.y = _179.y;
    _431.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _431.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _201 = (_425.xy * _431.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _452 = vec4(0.0);
    _452.x = _201.x;
    _452.y = _201.y;
    _431.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _431.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _223 = (_425.xy * _431.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _460 = vec4(0.0);
    _460.x = _223.x;
    _460.y = _223.y;
    vec3 _234 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _425.x = _234.x;
    _425.y = _234.y;
    _425.z = _234.z;
    vec3 _249 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _425.xyz;
    vec4 _470 = _425;
    _470.x = _249.x;
    _470.y = _249.y;
    _470.z = _249.z;
    vec3 _264 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _470.xyz;
    float _266 = _264.x;
    vec4 _476 = _470;
    _476.x = _266;
    _476.y = _264.y;
    _476.z = _264.z;
    _476.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _476.xyz), 0.0, 1.0);
    _431.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _431.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _431.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _301 = (_431.xyz * _476.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _490 = _476;
    _490.x = _301.x;
    _490.y = _301.y;
    _490.z = _301.z;
    vec3 _310 = min(_490.xyz, vec3(1.0));
    vec4 _496 = _490;
    _496.x = _310.x;
    _496.y = _310.y;
    _496.z = _310.z;
    vec4 _521 = vec4(_496.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_266, _264.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _355 = abs((_521.xyz * 2.0) - _496.xyz);
    wxlGPlain = max(max(_355.x, _355.y), _355.z);
    gl_Position = vec4(_118.x, -_118.y, _118.zw);
    color0 = _521;
    color1 = vec4(0.0);
    texcoord0 = _444;
    texcoord1 = _452;
    texcoord2 = _460;
    fog0 = min(_419, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
