#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _141 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _163 = (_141.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_141.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_141.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _178 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _1136 = _163;
    _1136.x = _178.x;
    _1136.y = _178.y;
    _1136.z = _178.z;
    vec3 _193 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1136.xyz;
    vec4 _1142 = _1136;
    _1142.x = _193.x;
    _1142.y = _193.y;
    _1142.z = _193.z;
    vec3 _208 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1142.xyz;
    float _210 = _208.x;
    vec4 _1148 = _1142;
    _1148.x = _210;
    _1148.y = _208.y;
    _1148.z = _208.z;
    vec3 _216 = _141.xyz;
    float _219 = dot(_216, _1148.xyz);
    vec4 _1549 = vec4(_210, _208.yz, _219);
    _1549.w = _219 + _219;
    vec3 _235 = (_1549.xyz * (-_1549.www)) + _216;
    vec4 _1160 = vec4(0.0);
    _1160.x = _235.x;
    _1160.y = _235.y;
    float _241 = _235.z;
    _1160.z = _241;
    vec3 _248 = _1160.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _1166 = vec4(0.0);
    _1166.x = _248.x;
    _1166.y = _248.y;
    _1166.z = _248.z;
    vec3 _264 = (_1160.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _1166.xyz;
    vec4 _1550 = vec4(_264.xy, _241, _264.z);
    vec3 _280 = (_1550.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _1550.xyw;
    vec4 _1178 = vec4(0.0);
    _1178.x = _280.x;
    _1178.y = _280.y;
    _1178.z = _280.z;
    vec2 _295 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _1550.x = _295.x;
    _1550.y = _295.y;
    _1166.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1166.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _317 = (_1550.xy * _1166.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1192 = vec4(0.0);
    _1192.x = _317.x;
    _1192.y = _317.y;
    float _323 = _141.z;
    float _331 = (_323 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1549.w = _331;
    float _335 = max(_331, 0.0);
    _1549.w = _335;
    float _1133;
    if (_335 == 0.0)
    {
        _1133 = 0.0;
    }
    else
    {
        _1133 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_335)));
    }
    _1550.x = _1133;
    vec3 _352 = -_216;
    float _356 = dot(_352, _352);
    _1549.w = _356;
    _1549.w = inversesqrt(abs(_356));
    vec3 _373 = (_352 * _1549.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1550.x = _373.x;
    _1550.y = _373.y;
    _1550.z = _373.z;
    vec4 _1085 = _1550 * inversesqrt(dot(_1550.xyz, _1550.xyz));
    _1166.x = _1085.x;
    _1166.y = _1085.y;
    _1166.z = _1085.z;
    float _394 = dot(_1166.xyz, _1549.xyz);
    vec4 _1225 = _1549;
    _1225.w = _394;
    float _398 = max(_394, 0.0);
    _1225.w = _398;
    float _1134;
    if (_398 == 0.0)
    {
        _1134 = 0.0;
    }
    else
    {
        _1134 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_398)));
    }
    _1550.x = _1134;
    _1225.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1225.xyz), 0.0, 1.0);
    vec4 _1241 = _1550;
    _1241.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1241.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1241.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1166.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1166.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1166.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _470 = _1166.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1259 = vec4(0.0);
    _1259.x = _470.x;
    _1259.y = _470.y;
    _1259.z = _470.z;
    vec4 _1265 = vec4(0.0);
    _1265.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1265.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1265.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _494 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1265.xyz) + _1259.xyz;
    vec4 _1271 = _1259;
    _1271.x = _494.x;
    _1271.y = _494.y;
    _1271.z = _494.z;
    vec4 _1277 = vec4(0.0);
    _1277.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1277.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1277.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _518 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1277.xyz) + _1271.xyz;
    vec4 _1283 = _1271;
    _1283.x = _518.x;
    _1283.y = _518.y;
    _1283.z = _518.z;
    vec3 _530 = _1283.xyz - _216;
    vec4 _1289 = _1283;
    _1289.x = _530.x;
    _1289.y = _530.y;
    _1289.z = _530.z;
    float _541 = dot(_1289.xyz, _1289.xyz);
    vec4 _1295 = _1225;
    _1295.w = _541;
    float _1105 = inversesqrt(abs(_541));
    _1295.w = _1105;
    vec3 _552 = _1289.xyz * _1295.www;
    vec4 _1300 = _1289;
    _1300.x = _552.x;
    _1300.y = _552.y;
    _1300.z = _552.z;
    float _561 = 1.0 / _1105;
    _1295.w = _561;
    vec4 _1551 = vec4((_1241.xyz * _1225.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1300.xyz, _1295.xyz), 0.0, 1.0));
    vec3 _576 = _1551.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1311 = _1300;
    _1311.x = _576.x;
    _1311.y = _576.y;
    _1311.z = _576.z;
    float _591 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _561) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1551.w = _591;
    float _597 = 1.0 / (_1105 * _1105);
    _1295.w = _597;
    float _606 = (_597 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _591;
    _1295.w = _606;
    _1295.w = 1.0 / _606;
    vec4 _1553 = vec4((_1311.xyz * _1295.www) + _1551.xyz, _591);
    vec3 _632 = _1166.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1337 = _1311;
    _1337.x = _632.x;
    _1337.y = _632.y;
    _1337.z = _632.z;
    vec3 _647 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1265.xyz) + _1337.xyz;
    vec4 _1343 = _1337;
    _1343.x = _647.x;
    _1343.y = _647.y;
    _1343.z = _647.z;
    vec3 _662 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1277.xyz) + _1343.xyz;
    vec4 _1349 = _1343;
    _1349.x = _662.x;
    _1349.y = _662.y;
    _1349.z = _662.z;
    vec3 _674 = _1349.xyz - _216;
    vec4 _1355 = _1349;
    _1355.x = _674.x;
    _1355.y = _674.y;
    _1355.z = _674.z;
    float _685 = dot(_1355.xyz, _1355.xyz);
    vec4 _1361 = _1295;
    _1361.w = _685;
    float _1110 = inversesqrt(abs(_685));
    _1361.w = _1110;
    vec3 _696 = _1355.xyz * _1361.www;
    vec4 _1366 = _1355;
    _1366.x = _696.x;
    _1366.y = _696.y;
    _1366.z = _696.z;
    float _705 = 1.0 / _1110;
    _1361.w = _705;
    _1553.w = clamp(dot(_1366.xyz, _1361.xyz), 0.0, 1.0);
    vec3 _720 = _1553.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1366.x = _720.x;
    _1366.y = _720.y;
    _1366.z = _720.z;
    float _735 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _705) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1553.w = _735;
    float _741 = 1.0 / (_1110 * _1110);
    _1361.w = _741;
    float _750 = (_741 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _735;
    _1361.w = _750;
    _1361.w = 1.0 / _750;
    vec4 _1555 = vec4((_1366.xyz * _1361.www) + _1553.xyz, _735);
    vec3 _776 = _1166.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1403 = _1166;
    _1403.x = _776.x;
    _1403.y = _776.y;
    _1403.z = _776.z;
    vec3 _791 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1265.xyz) + _1403.xyz;
    vec4 _1409 = _1403;
    _1409.x = _791.x;
    _1409.y = _791.y;
    _1409.z = _791.z;
    vec3 _806 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1277.xyz) + _1409.xyz;
    vec4 _1415 = _1409;
    _1415.x = _806.x;
    _1415.y = _806.y;
    _1415.z = _806.z;
    vec3 _818 = _1415.xyz - _216;
    vec4 _1421 = _1415;
    _1421.x = _818.x;
    _1421.y = _818.y;
    _1421.z = _818.z;
    float _829 = dot(_1421.xyz, _1421.xyz);
    vec4 _1427 = _1361;
    _1427.w = _829;
    float _1115 = inversesqrt(abs(_829));
    _1427.w = _1115;
    vec3 _840 = _1421.xyz * _1427.www;
    vec4 _1432 = _1421;
    _1432.x = _840.x;
    _1432.y = _840.y;
    _1432.z = _840.z;
    float _849 = 1.0 / _1115;
    _1427.w = _849;
    _1427.x = clamp(dot(_1432.xyz, _1427.xyz), 0.0, 1.0);
    vec4 _1556 = vec4(_1427.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _849);
    float _879 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _849) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1555.w = _879;
    float _885 = 1.0 / (_1115 * _1115);
    _1556.w = _885;
    float _894 = (_885 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _879;
    _1556.w = _894;
    float _898 = 1.0 / _894;
    _1556.w = _898;
    vec4 _1558 = vec4((_1556.xyz * _1556.www) + _1555.xyz, _898);
    vec3 _917 = min(_1558.xyz, vec3(1.0));
    vec4 _1469 = _1558;
    _1469.x = _917.x;
    _1469.y = _917.y;
    _1469.z = _917.z;
    vec4 _1505 = vec4(0.0);
    _1505.x = _141.x;
    _1505.y = _141.y;
    _1505.z = _323;
    vec4 _1122 = optPush.clipToTarget * ((_141.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _163);
    gl_Position = vec4(_1122.x, -_1122.y, _1122.zw);
    color0 = vec4(_1469.xyz * v2.xyz, 1.0);
    color1 = vec4(_1550.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1178;
    texcoord1 = _1192;
    texcoord3 = _1505;
    texcoord4 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1133, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
