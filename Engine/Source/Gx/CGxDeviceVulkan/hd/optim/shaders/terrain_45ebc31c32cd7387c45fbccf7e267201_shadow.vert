#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _736;





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
    vec4 _582;
    _582.x = _154.x;
    _582.y = _154.y;
    _582.z = _154.z;
    vec3 _169 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _582.xyz;
    vec4 _588;
    _588.x = _169.x;
    _588.y = _169.y;
    _588.z = _169.z;
    vec3 _184 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _588.xyz;
    float _186 = _184.x;
    vec4 _594;
    _594.x = _186;
    _594.y = _184.y;
    _594.z = _184.z;
    vec3 _192 = _116.xyz;
    float _195 = dot(_192, _594.xyz);
    vec4 _744 = vec4(_186, _184.yz, _195);
    _744.w = _195 + _195;
    vec3 _211 = (_744.xyz * (-_744.www)) + _192;
    vec4 _606 = vec4(0.0);
    _606.x = _211.x;
    _606.y = _211.y;
    _606.z = _211.z;
    vec4 _612;
    _612.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _744.xyz), 0.0, 1.0);
    vec4 _614;
    _614.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _614.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _614.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _247 = (_614.xyz * _612.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _620;
    _620.x = _247.x;
    _620.y = _247.y;
    _620.z = _247.z;
    vec3 _257 = min(_620.xyz, vec3(1.0));
    vec4 _626;
    _626.x = _257.x;
    _626.y = _257.y;
    _626.z = _257.z;
    vec3 _282 = _606.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _638;
    _638.x = _282.x;
    _638.y = _282.y;
    _638.z = _282.z;
    vec3 _298 = (_606.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _638.xyz;
    vec4 _644;
    _644.x = _298.x;
    _644.y = _298.y;
    _644.z = _298.z;
    vec3 _314 = (_606.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _644.xyz;
    vec4 _650 = vec4(0.0);
    _650.x = _314.x;
    _650.y = _314.y;
    _650.z = _314.z;
    vec2 _329 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _656;
    _656.x = _329.x;
    _656.y = _329.y;
    _606.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _606.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _668 = _606;
    _668.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _668.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _676 = _668;
    _676.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _676.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _395 = (_656.xy * _676.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _680 = vec4(0.0);
    _680.x = _395.x;
    _680.y = _395.y;
    float _401 = _116.z;
    float _413 = max((_401 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y, 0.0);
    float _580;
    if (_413 == 0.0)
    {
        _580 = 0.0;
    }
    else
    {
        _580 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_413)));
    }
    vec4 _720 = vec4(0.0);
    _720.x = _116.x;
    _720.y = _116.y;
    _720.z = _401;
    vec4 _569 = optPush.clipToTarget * ((_116.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + ((_116.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_116.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_116.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]))));
    gl_Position = vec4(_569.x, -_569.y, _569.zw);
    color0 = vec4(_626.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _650;
    texcoord1 = vec4((_656.xy * _606.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_656.yx * _668.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _680;
    texcoord3 = _720;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_580, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
