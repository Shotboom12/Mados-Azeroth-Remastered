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
    vec4 _142 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _164 = (_142.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_142.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_142.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _181 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _1155 = _164;
    _1155.x = _181.x;
    _1155.y = _181.y;
    vec4 _1159 = vec4(0.0);
    _1159.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1159.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _203 = (_1155.yx * _1159.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1163 = vec4(0.0);
    _1163.x = _203.x;
    _1163.y = _203.y;
    _1159.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1159.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _1175 = _1159;
    _1175.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1175.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _1183 = _1175;
    _1183.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _1183.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _1191 = _1183;
    _1191.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _1191.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _297 = _142.z;
    float _305 = (_297 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1200 = _1155;
    _1200.x = _305;
    float _309 = max(_305, 0.0);
    _1200.x = _309;
    float _1152;
    if (_309 == 0.0)
    {
        _1152 = 0.0;
    }
    else
    {
        _1152 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_309)));
    }
    vec4 _1206 = _1191;
    _1206.x = _1152;
    vec3 _330 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1200.x = _330.x;
    _1200.y = _330.y;
    _1200.z = _330.z;
    vec3 _345 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1200.xyz;
    vec4 _1217 = _1200;
    _1217.x = _345.x;
    _1217.y = _345.y;
    _1217.z = _345.z;
    vec3 _368 = _142.xyz;
    vec3 _369 = -_368;
    float _373 = dot(_369, _369);
    vec4 _1572 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1217.xyz, _373);
    _1572.w = inversesqrt(abs(_373));
    vec3 _390 = (_369 * _1572.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1206.x = _390.x;
    _1206.y = _390.y;
    _1206.z = _390.z;
    vec4 _1104 = _1206 * inversesqrt(dot(_1206.xyz, _1206.xyz));
    vec4 _1240 = vec4(0.0);
    _1240.x = _1104.x;
    _1240.y = _1104.y;
    _1240.z = _1104.z;
    float _411 = dot(_1240.xyz, _1572.xyz);
    vec4 _1246 = _1572;
    _1246.w = _411;
    float _415 = max(_411, 0.0);
    _1246.w = _415;
    float _1153;
    if (_415 == 0.0)
    {
        _1153 = 0.0;
    }
    else
    {
        _1153 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_415)));
    }
    _1206.x = _1153;
    _1246.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1246.xyz), 0.0, 1.0);
    vec4 _1262 = _1206;
    _1262.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1262.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1262.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1240.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1240.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1240.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _487 = _1240.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1280 = vec4(0.0);
    _1280.x = _487.x;
    _1280.y = _487.y;
    _1280.z = _487.z;
    vec4 _1286 = vec4(0.0);
    _1286.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1286.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1286.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _511 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1286.xyz) + _1280.xyz;
    vec4 _1292 = _1280;
    _1292.x = _511.x;
    _1292.y = _511.y;
    _1292.z = _511.z;
    vec4 _1298 = vec4(0.0);
    _1298.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1298.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1298.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _535 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1298.xyz) + _1292.xyz;
    vec4 _1304 = _1292;
    _1304.x = _535.x;
    _1304.y = _535.y;
    _1304.z = _535.z;
    vec3 _547 = _1304.xyz - _368;
    vec4 _1310 = _1304;
    _1310.x = _547.x;
    _1310.y = _547.y;
    _1310.z = _547.z;
    float _558 = dot(_1310.xyz, _1310.xyz);
    vec4 _1316 = _1246;
    _1316.w = _558;
    float _1124 = inversesqrt(abs(_558));
    _1316.w = _1124;
    vec3 _569 = _1310.xyz * _1316.www;
    vec4 _1321 = _1310;
    _1321.x = _569.x;
    _1321.y = _569.y;
    _1321.z = _569.z;
    float _578 = 1.0 / _1124;
    _1316.w = _578;
    vec4 _1573 = vec4((_1262.xyz * _1246.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1321.xyz, _1316.xyz), 0.0, 1.0));
    vec3 _593 = _1573.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1332 = _1321;
    _1332.x = _593.x;
    _1332.y = _593.y;
    _1332.z = _593.z;
    float _608 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _578) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1573.w = _608;
    float _614 = 1.0 / (_1124 * _1124);
    _1316.w = _614;
    float _623 = (_614 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _608;
    _1316.w = _623;
    _1316.w = 1.0 / _623;
    vec4 _1575 = vec4((_1332.xyz * _1316.www) + _1573.xyz, _608);
    vec3 _649 = _1240.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1358 = _1332;
    _1358.x = _649.x;
    _1358.y = _649.y;
    _1358.z = _649.z;
    vec3 _664 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1286.xyz) + _1358.xyz;
    vec4 _1364 = _1358;
    _1364.x = _664.x;
    _1364.y = _664.y;
    _1364.z = _664.z;
    vec3 _679 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1298.xyz) + _1364.xyz;
    vec4 _1370 = _1364;
    _1370.x = _679.x;
    _1370.y = _679.y;
    _1370.z = _679.z;
    vec3 _691 = _1370.xyz - _368;
    vec4 _1376 = _1370;
    _1376.x = _691.x;
    _1376.y = _691.y;
    _1376.z = _691.z;
    float _702 = dot(_1376.xyz, _1376.xyz);
    vec4 _1382 = _1316;
    _1382.w = _702;
    float _1129 = inversesqrt(abs(_702));
    _1382.w = _1129;
    vec3 _713 = _1376.xyz * _1382.www;
    vec4 _1387 = _1376;
    _1387.x = _713.x;
    _1387.y = _713.y;
    _1387.z = _713.z;
    float _722 = 1.0 / _1129;
    _1382.w = _722;
    _1575.w = clamp(dot(_1387.xyz, _1382.xyz), 0.0, 1.0);
    vec3 _737 = _1575.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1387.x = _737.x;
    _1387.y = _737.y;
    _1387.z = _737.z;
    float _752 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _722) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1575.w = _752;
    float _758 = 1.0 / (_1129 * _1129);
    _1382.w = _758;
    float _767 = (_758 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _752;
    _1382.w = _767;
    _1382.w = 1.0 / _767;
    vec4 _1577 = vec4((_1387.xyz * _1382.www) + _1575.xyz, _752);
    vec3 _793 = _1240.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1424 = _1240;
    _1424.x = _793.x;
    _1424.y = _793.y;
    _1424.z = _793.z;
    vec3 _808 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1286.xyz) + _1424.xyz;
    vec4 _1430 = _1424;
    _1430.x = _808.x;
    _1430.y = _808.y;
    _1430.z = _808.z;
    vec3 _823 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1298.xyz) + _1430.xyz;
    vec4 _1436 = _1430;
    _1436.x = _823.x;
    _1436.y = _823.y;
    _1436.z = _823.z;
    vec3 _835 = _1436.xyz - _368;
    vec4 _1442 = _1436;
    _1442.x = _835.x;
    _1442.y = _835.y;
    _1442.z = _835.z;
    float _846 = dot(_1442.xyz, _1442.xyz);
    vec4 _1448 = _1382;
    _1448.w = _846;
    float _1134 = inversesqrt(abs(_846));
    _1448.w = _1134;
    vec3 _857 = _1442.xyz * _1448.www;
    vec4 _1453 = _1442;
    _1453.x = _857.x;
    _1453.y = _857.y;
    _1453.z = _857.z;
    float _866 = 1.0 / _1134;
    _1448.w = _866;
    _1448.x = clamp(dot(_1453.xyz, _1448.xyz), 0.0, 1.0);
    vec4 _1578 = vec4(_1448.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _866);
    float _896 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _866) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1577.w = _896;
    float _902 = 1.0 / (_1134 * _1134);
    _1578.w = _902;
    float _911 = (_902 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _896;
    _1578.w = _911;
    float _915 = 1.0 / _911;
    _1578.w = _915;
    vec4 _1580 = vec4((_1578.xyz * _1578.www) + _1577.xyz, _915);
    vec3 _934 = min(_1580.xyz, vec3(1.0));
    vec4 _1490 = _1580;
    _1490.x = _934.x;
    _1490.y = _934.y;
    _1490.z = _934.z;
    vec4 _1526 = vec4(0.0);
    _1526.x = _142.x;
    _1526.y = _142.y;
    _1526.z = _297;
    vec4 _1141 = optPush.clipToTarget * ((_142.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _164);
    gl_Position = vec4(_1141.x, -_1141.y, _1141.zw);
    color0 = vec4(_1490.xyz * v2.xyz, 1.0);
    color1 = vec4(_1206.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1163;
    texcoord1 = vec4((_1155.yx * _1159.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_1155.xy * _1175.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_1155.yx * _1183.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_1155.xy * _1191.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _1526;
    texcoord4 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1152, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
