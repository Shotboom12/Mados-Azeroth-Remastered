#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





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
    vec4 _142 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _164 = (_142.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_142.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_142.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _181 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _1154 = _164;
    _1154.x = _181.x;
    _1154.y = _181.y;
    vec4 _1158 = vec4(0.0);
    _1158.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1158.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _203 = (_1154.yx * _1158.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1162 = vec4(0.0);
    _1162.x = _203.x;
    _1162.y = _203.y;
    _1158.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1158.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _1174 = _1158;
    _1174.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1174.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _1182 = _1174;
    _1182.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _1182.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _1190 = _1182;
    _1190.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _1190.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _297 = _142.z;
    float _305 = (_297 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1199 = _1154;
    _1199.x = _305;
    float _309 = max(_305, 0.0);
    _1199.x = _309;
    float _1151;
    if (_309 == 0.0)
    {
        _1151 = 0.0;
    }
    else
    {
        _1151 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_309)));
    }
    vec4 _1205 = _1190;
    _1205.x = _1151;
    vec3 _330 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1199.x = _330.x;
    _1199.y = _330.y;
    _1199.z = _330.z;
    vec3 _345 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1199.xyz;
    vec4 _1216 = _1199;
    _1216.x = _345.x;
    _1216.y = _345.y;
    _1216.z = _345.z;
    vec3 _368 = _142.xyz;
    vec3 _369 = -_368;
    float _373 = dot(_369, _369);
    vec4 _1571 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1216.xyz, _373);
    _1571.w = inversesqrt(abs(_373));
    vec3 _390 = (_369 * _1571.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1205.x = _390.x;
    _1205.y = _390.y;
    _1205.z = _390.z;
    vec4 _1103 = _1205 * inversesqrt(dot(_1205.xyz, _1205.xyz));
    vec4 _1239 = vec4(0.0);
    _1239.x = _1103.x;
    _1239.y = _1103.y;
    _1239.z = _1103.z;
    float _411 = dot(_1239.xyz, _1571.xyz);
    vec4 _1245 = _1571;
    _1245.w = _411;
    float _415 = max(_411, 0.0);
    _1245.w = _415;
    float _1152;
    if (_415 == 0.0)
    {
        _1152 = 0.0;
    }
    else
    {
        _1152 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_415)));
    }
    _1205.x = _1152;
    _1245.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1245.xyz), 0.0, 1.0);
    vec4 _1261 = _1205;
    _1261.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1261.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1261.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1239.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1239.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1239.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _487 = _1239.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1279 = vec4(0.0);
    _1279.x = _487.x;
    _1279.y = _487.y;
    _1279.z = _487.z;
    vec4 _1285 = vec4(0.0);
    _1285.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1285.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1285.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _511 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1285.xyz) + _1279.xyz;
    vec4 _1291 = _1279;
    _1291.x = _511.x;
    _1291.y = _511.y;
    _1291.z = _511.z;
    vec4 _1297 = vec4(0.0);
    _1297.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1297.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1297.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _535 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1297.xyz) + _1291.xyz;
    vec4 _1303 = _1291;
    _1303.x = _535.x;
    _1303.y = _535.y;
    _1303.z = _535.z;
    vec3 _547 = _1303.xyz - _368;
    vec4 _1309 = _1303;
    _1309.x = _547.x;
    _1309.y = _547.y;
    _1309.z = _547.z;
    float _558 = dot(_1309.xyz, _1309.xyz);
    vec4 _1315 = _1245;
    _1315.w = _558;
    float _1123 = inversesqrt(abs(_558));
    _1315.w = _1123;
    vec3 _569 = _1309.xyz * _1315.www;
    vec4 _1320 = _1309;
    _1320.x = _569.x;
    _1320.y = _569.y;
    _1320.z = _569.z;
    float _578 = 1.0 / _1123;
    _1315.w = _578;
    vec4 _1572 = vec4((_1261.xyz * _1245.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1320.xyz, _1315.xyz), 0.0, 1.0));
    vec3 _593 = _1572.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1331 = _1320;
    _1331.x = _593.x;
    _1331.y = _593.y;
    _1331.z = _593.z;
    float _608 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _578) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1572.w = _608;
    float _614 = 1.0 / (_1123 * _1123);
    _1315.w = _614;
    float _623 = (_614 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _608;
    _1315.w = _623;
    _1315.w = 1.0 / _623;
    vec4 _1574 = vec4((_1331.xyz * _1315.www) + _1572.xyz, _608);
    vec3 _649 = _1239.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1357 = _1331;
    _1357.x = _649.x;
    _1357.y = _649.y;
    _1357.z = _649.z;
    vec3 _664 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1285.xyz) + _1357.xyz;
    vec4 _1363 = _1357;
    _1363.x = _664.x;
    _1363.y = _664.y;
    _1363.z = _664.z;
    vec3 _679 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1297.xyz) + _1363.xyz;
    vec4 _1369 = _1363;
    _1369.x = _679.x;
    _1369.y = _679.y;
    _1369.z = _679.z;
    vec3 _691 = _1369.xyz - _368;
    vec4 _1375 = _1369;
    _1375.x = _691.x;
    _1375.y = _691.y;
    _1375.z = _691.z;
    float _702 = dot(_1375.xyz, _1375.xyz);
    vec4 _1381 = _1315;
    _1381.w = _702;
    float _1128 = inversesqrt(abs(_702));
    _1381.w = _1128;
    vec3 _713 = _1375.xyz * _1381.www;
    vec4 _1386 = _1375;
    _1386.x = _713.x;
    _1386.y = _713.y;
    _1386.z = _713.z;
    float _722 = 1.0 / _1128;
    _1381.w = _722;
    _1574.w = clamp(dot(_1386.xyz, _1381.xyz), 0.0, 1.0);
    vec3 _737 = _1574.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1386.x = _737.x;
    _1386.y = _737.y;
    _1386.z = _737.z;
    float _752 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _722) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1574.w = _752;
    float _758 = 1.0 / (_1128 * _1128);
    _1381.w = _758;
    float _767 = (_758 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _752;
    _1381.w = _767;
    _1381.w = 1.0 / _767;
    vec4 _1576 = vec4((_1386.xyz * _1381.www) + _1574.xyz, _752);
    vec3 _793 = _1239.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1423 = _1239;
    _1423.x = _793.x;
    _1423.y = _793.y;
    _1423.z = _793.z;
    vec3 _808 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1285.xyz) + _1423.xyz;
    vec4 _1429 = _1423;
    _1429.x = _808.x;
    _1429.y = _808.y;
    _1429.z = _808.z;
    vec3 _823 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1297.xyz) + _1429.xyz;
    vec4 _1435 = _1429;
    _1435.x = _823.x;
    _1435.y = _823.y;
    _1435.z = _823.z;
    vec3 _835 = _1435.xyz - _368;
    vec4 _1441 = _1435;
    _1441.x = _835.x;
    _1441.y = _835.y;
    _1441.z = _835.z;
    float _846 = dot(_1441.xyz, _1441.xyz);
    vec4 _1447 = _1381;
    _1447.w = _846;
    float _1133 = inversesqrt(abs(_846));
    _1447.w = _1133;
    vec3 _857 = _1441.xyz * _1447.www;
    vec4 _1452 = _1441;
    _1452.x = _857.x;
    _1452.y = _857.y;
    _1452.z = _857.z;
    float _866 = 1.0 / _1133;
    _1447.w = _866;
    _1447.x = clamp(dot(_1452.xyz, _1447.xyz), 0.0, 1.0);
    vec4 _1577 = vec4(_1447.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _866);
    float _896 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _866) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1576.w = _896;
    float _902 = 1.0 / (_1133 * _1133);
    _1577.w = _902;
    float _911 = (_902 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _896;
    _1577.w = _911;
    float _915 = 1.0 / _911;
    _1577.w = _915;
    vec4 _1579 = vec4((_1577.xyz * _1577.www) + _1576.xyz, _915);
    vec3 _934 = min(_1579.xyz, vec3(1.0));
    vec4 _1489 = _1579;
    _1489.x = _934.x;
    _1489.y = _934.y;
    _1489.z = _934.z;
    vec4 _1525 = vec4(0.0);
    _1525.x = _142.x;
    _1525.y = _142.y;
    _1525.z = _297;
    vec4 _1140 = optPush.clipToTarget * ((_142.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _164);
    gl_Position = vec4(_1140.x, -_1140.y, _1140.zw);
    color0 = vec4(_1489.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1205.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1162;
    texcoord1 = vec4((_1154.yx * _1158.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_1154.xy * _1174.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_1154.yx * _1182.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_1154.xy * _1190.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _1525;
    texcoord4 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1151, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
