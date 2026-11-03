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
    vec3 _125 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _474 = _110;
    _474.x = _125.x;
    _474.y = _125.y;
    _474.z = _125.z;
    vec3 _143 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _474.xyz;
    vec4 _480 = _474;
    _480.x = _143.x;
    _480.y = _143.y;
    _480.z = _143.z;
    vec3 _158 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _480.xyz;
    float _160 = _158.x;
    vec4 _486 = _480;
    _486.x = _160;
    _486.y = _158.y;
    _486.z = _158.z;
    float _169 = dot(_88.xyz, _486.xyz);
    vec4 _492 = _88;
    _492.w = _169;
    _492.w = _169 + _169;
    vec3 _186 = (_486.xyz * (-_492.www)) + _492.xyz;
    float _202 = (_88.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _593 = vec4(_186.xy, _202, _186.z);
    float _206 = max(_202, 0.0);
    _593.z = _206;
    float _469;
    if (_206 == 0.0)
    {
        _469 = 0.0;
    }
    else
    {
        _469 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_206)));
    }
    vec4 _594 = vec4(_160, _158.yz, _469);
    _593.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _594.xyz), 0.0, 1.0);
    _594.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _594.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _594.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _250 = (_594.xyz * _593.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _524 = _594;
    _524.x = _250.x;
    _524.y = _250.y;
    _524.z = _250.z;
    vec3 _259 = min(_524.xyz, vec3(1.0));
    vec4 _530 = _524;
    _530.x = _259.x;
    _530.y = _259.y;
    _530.z = _259.z;
    vec3 _286 = _593.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _542 = _530;
    _542.x = _286.x;
    _542.y = _286.y;
    _542.z = _286.z;
    vec3 _302 = (_593.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _542.xyz;
    vec4 _548 = _593;
    _548.x = _302.x;
    _548.y = _302.y;
    _548.z = _302.z;
    vec3 _318 = (_548.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _548.xyz;
    vec4 _554 = vec4(0.0);
    _554.x = _318.x;
    _554.y = _318.y;
    _554.z = _318.z;
    vec2 _333 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _548.x = _333.x;
    _548.y = _333.y;
    _542.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _542.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _355 = (_548.xy * _542.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _568 = vec4(0.0);
    _568.x = _355.x;
    _568.y = _355.y;
    _542.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _542.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _377 = (_548.xy * _542.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _576 = vec4(0.0);
    _576.x = _377.x;
    _576.y = _377.y;
    vec4 _595 = vec4(_530.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_160, _158.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _405 = abs((_595.xyz * 2.0) - _530.xyz);
    wxlGPlain = max(max(_405.x, _405.y), _405.z);
    gl_Position = vec4(_118.x, -_118.y, _118.zw);
    color0 = _595;
    color1 = vec4(0.0);
    texcoord0 = _554;
    texcoord1 = _568;
    texcoord2 = _576;
    fog0 = min(_469, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
