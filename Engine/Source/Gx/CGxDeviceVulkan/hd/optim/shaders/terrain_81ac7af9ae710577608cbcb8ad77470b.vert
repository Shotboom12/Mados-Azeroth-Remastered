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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _87 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _109 = (_87.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_87.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_87.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _117 = (_87.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _109;
    float _130 = (_87.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _398 = _87;
    _398.x = _130;
    float _134 = max(_130, 0.0);
    _398.x = _134;
    float _392;
    if (_134 == 0.0)
    {
        _392 = 0.0;
    }
    else
    {
        _392 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_134)));
    }
    vec4 _404 = _109;
    _404.x = _392;
    vec2 _156 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _398.x = _156.x;
    _398.y = _156.y;
    _404.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _404.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _178 = (_398.xy * _404.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _417 = vec4(0.0);
    _417.x = _178.x;
    _417.y = _178.y;
    _404.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _404.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _200 = (_398.xy * _404.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _425 = vec4(0.0);
    _425.x = _200.x;
    _425.y = _200.y;
    vec3 _211 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _398.x = _211.x;
    _398.y = _211.y;
    _398.z = _211.z;
    vec3 _226 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _398.xyz;
    vec4 _435 = _398;
    _435.x = _226.x;
    _435.y = _226.y;
    _435.z = _226.z;
    vec3 _241 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _435.xyz;
    float _243 = _241.x;
    vec4 _441 = _435;
    _441.x = _243;
    _441.y = _241.y;
    _441.z = _241.z;
    _441.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _441.xyz), 0.0, 1.0);
    _404.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _404.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _404.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _278 = (_404.xyz * _441.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _455 = _441;
    _455.x = _278.x;
    _455.y = _278.y;
    _455.z = _278.z;
    vec3 _287 = min(_455.xyz, vec3(1.0));
    vec4 _461 = _455;
    _461.x = _287.x;
    _461.y = _287.y;
    _461.z = _287.z;
    vec4 _485 = vec4(_461.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_243, _241.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _330 = abs((_485.xyz * 2.0) - _461.xyz);
    wxlGPlain = max(max(_330.x, _330.y), _330.z);
    gl_Position = vec4(_117.x, -_117.y, _117.zw);
    color0 = _485;
    color1 = vec4(0.0);
    texcoord0 = _417;
    texcoord1 = _425;
    fog0 = min(_392, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
