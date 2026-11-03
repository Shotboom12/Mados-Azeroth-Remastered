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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _87 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _109 = (_87.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_87.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_87.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _117 = (_87.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _109;
    float _130 = (_87.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _400 = _87;
    _400.x = _130;
    float _134 = max(_130, 0.0);
    _400.x = _134;
    float _394;
    if (_134 == 0.0)
    {
        _394 = 0.0;
    }
    else
    {
        _394 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_134)));
    }
    vec4 _406 = _109;
    _406.x = _394;
    vec2 _156 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _400.x = _156.x;
    _400.y = _156.y;
    _406.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _406.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _178 = (_400.xy * _406.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _419 = vec4(0.0);
    _419.x = _178.x;
    _419.y = _178.y;
    _406.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _406.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _200 = (_400.xy * _406.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _427 = vec4(0.0);
    _427.x = _200.x;
    _427.y = _200.y;
    vec3 _211 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _400.x = _211.x;
    _400.y = _211.y;
    _400.z = _211.z;
    vec3 _226 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _400.xyz;
    vec4 _437 = _400;
    _437.x = _226.x;
    _437.y = _226.y;
    _437.z = _226.z;
    vec3 _241 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _437.xyz;
    float _243 = _241.x;
    vec4 _443 = _437;
    _443.x = _243;
    _443.y = _241.y;
    _443.z = _241.z;
    _443.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _443.xyz), 0.0, 1.0);
    _406.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _406.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _406.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _278 = (_406.xyz * _443.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _457 = _443;
    _457.x = _278.x;
    _457.y = _278.y;
    _457.z = _278.z;
    vec3 _287 = min(_457.xyz, vec3(1.0));
    vec4 _463 = _457;
    _463.x = _287.x;
    _463.y = _287.y;
    _463.z = _287.z;
    vec4 _487 = vec4(_463.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_243, _241.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _332 = abs((_487.xyz * 2.0) - _463.xyz);
    wxlGPlain = max(max(_332.x, _332.y), _332.z);
    gl_Position = vec4(_117.x, -_117.y, _117.zw);
    color0 = _487;
    color1 = vec4(0.0);
    texcoord0 = _419;
    texcoord1 = _427;
    fog0 = min(_394, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
