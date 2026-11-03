#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _735;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _116 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec3 _154 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _581;
    _581.x = _154.x;
    _581.y = _154.y;
    _581.z = _154.z;
    vec3 _169 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _581.xyz;
    vec4 _587;
    _587.x = _169.x;
    _587.y = _169.y;
    _587.z = _169.z;
    vec3 _184 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _587.xyz;
    float _186 = _184.x;
    vec4 _593;
    _593.x = _186;
    _593.y = _184.y;
    _593.z = _184.z;
    vec3 _192 = _116.xyz;
    float _195 = dot(_192, _593.xyz);
    vec4 _743 = vec4(_186, _184.yz, _195);
    _743.w = _195 + _195;
    vec3 _211 = (_743.xyz * (-_743.www)) + _192;
    vec4 _605 = vec4(0.0);
    _605.x = _211.x;
    _605.y = _211.y;
    _605.z = _211.z;
    vec4 _611;
    _611.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _743.xyz), 0.0, 1.0);
    vec4 _613;
    _613.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _613.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _613.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _247 = (_613.xyz * _611.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _619;
    _619.x = _247.x;
    _619.y = _247.y;
    _619.z = _247.z;
    vec3 _257 = min(_619.xyz, vec3(1.0));
    vec4 _625;
    _625.x = _257.x;
    _625.y = _257.y;
    _625.z = _257.z;
    vec3 _281 = _605.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _637;
    _637.x = _281.x;
    _637.y = _281.y;
    _637.z = _281.z;
    vec3 _297 = (_605.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _637.xyz;
    vec4 _643;
    _643.x = _297.x;
    _643.y = _297.y;
    _643.z = _297.z;
    vec3 _313 = (_605.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _643.xyz;
    vec4 _649 = vec4(0.0);
    _649.x = _313.x;
    _649.y = _313.y;
    _649.z = _313.z;
    vec2 _328 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _655;
    _655.x = _328.x;
    _655.y = _328.y;
    _605.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _605.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _667 = _605;
    _667.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _667.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _675 = _667;
    _675.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _675.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _394 = (_655.xy * _675.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _679 = vec4(0.0);
    _679.x = _394.x;
    _679.y = _394.y;
    float _400 = _116.z;
    float _412 = max((_400 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _579;
    if (_412 == 0.0)
    {
        _579 = 0.0;
    }
    else
    {
        _579 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_412)));
    }
    vec4 _719 = vec4(0.0);
    _719.x = _116.x;
    _719.y = _116.y;
    _719.z = _400;
    vec4 _568 = optPush.clipToTarget * ((_116.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_116.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_116.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_116.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_568.x, -_568.y, _568.zw);
    color0 = vec4(_625.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _649;
    texcoord1 = vec4((_655.xy * _605.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_655.yx * _667.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _679;
    texcoord3 = _719;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_579, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
