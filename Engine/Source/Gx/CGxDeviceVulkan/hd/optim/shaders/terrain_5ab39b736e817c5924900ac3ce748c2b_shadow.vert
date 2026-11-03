#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _766;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
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
    vec4 _604;
    _604.x = _154.x;
    _604.y = _154.y;
    _604.z = _154.z;
    vec3 _169 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _604.xyz;
    vec4 _610;
    _610.x = _169.x;
    _610.y = _169.y;
    _610.z = _169.z;
    vec3 _184 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _610.xyz;
    float _186 = _184.x;
    vec4 _616;
    _616.x = _186;
    _616.y = _184.y;
    _616.z = _184.z;
    vec3 _192 = _116.xyz;
    float _195 = dot(_192, _616.xyz);
    vec4 _774 = vec4(_186, _184.yz, _195);
    _774.w = _195 + _195;
    vec3 _211 = (_774.xyz * (-_774.www)) + _192;
    vec4 _628 = vec4(0.0);
    _628.x = _211.x;
    _628.y = _211.y;
    _628.z = _211.z;
    vec4 _634;
    _634.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _774.xyz), 0.0, 1.0);
    vec4 _636;
    _636.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _636.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _636.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _247 = (_636.xyz * _634.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _642;
    _642.x = _247.x;
    _642.y = _247.y;
    _642.z = _247.z;
    vec3 _257 = min(_642.xyz, vec3(1.0));
    vec4 _648;
    _648.x = _257.x;
    _648.y = _257.y;
    _648.z = _257.z;
    vec3 _282 = _628.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _660;
    _660.x = _282.x;
    _660.y = _282.y;
    _660.z = _282.z;
    vec3 _298 = (_628.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _660.xyz;
    vec4 _666;
    _666.x = _298.x;
    _666.y = _298.y;
    _666.z = _298.z;
    vec3 _314 = (_628.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _666.xyz;
    vec4 _672 = vec4(0.0);
    _672.x = _314.x;
    _672.y = _314.y;
    _672.z = _314.z;
    vec2 _329 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _678;
    _678.x = _329.x;
    _678.y = _329.y;
    _628.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _628.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _690 = _628;
    _690.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _690.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _698 = _690;
    _698.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _698.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _706 = _698;
    _706.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _706.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _423 = _116.z;
    float _435 = max((_423 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _602;
    if (_435 == 0.0)
    {
        _602 = 0.0;
    }
    else
    {
        _602 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_435)));
    }
    vec4 _750 = vec4(0.0);
    _750.x = _116.x;
    _750.y = _116.y;
    _750.z = _423;
    vec4 _591 = optPush.clipToTarget * ((_116.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_116.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_116.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_116.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_591.x, -_591.y, _591.zw);
    color0 = vec4(_648.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _672;
    texcoord1 = vec4((_678.yx * _628.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_678.xy * _690.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_678.yx * _698.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_678.xy * _706.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _750;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_602, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
