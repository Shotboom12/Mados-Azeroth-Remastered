#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec2 _180 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _1107 = _163;
    _1107.x = _180.x;
    _1107.y = _180.y;
    vec4 _1111 = vec4(0.0);
    _1111.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1111.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _202 = (_1107.yx * _1111.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1115 = vec4(0.0);
    _1115.x = _202.x;
    _1115.y = _202.y;
    _1111.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1111.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _1127 = _1111;
    _1127.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1127.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _252 = _141.z;
    float _260 = (_252 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1136 = _1107;
    _1136.x = _260;
    float _264 = max(_260, 0.0);
    _1136.x = _264;
    float _1104;
    if (_264 == 0.0)
    {
        _1104 = 0.0;
    }
    else
    {
        _1104 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_264)));
    }
    vec4 _1142 = _1127;
    _1142.x = _1104;
    vec3 _285 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1136.x = _285.x;
    _1136.y = _285.y;
    _1136.z = _285.z;
    vec3 _300 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1136.xyz;
    vec4 _1153 = _1136;
    _1153.x = _300.x;
    _1153.y = _300.y;
    _1153.z = _300.z;
    vec3 _323 = _141.xyz;
    vec3 _324 = -_323;
    float _328 = dot(_324, _324);
    vec4 _1507 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1153.xyz, _328);
    _1507.w = inversesqrt(abs(_328));
    vec3 _345 = (_324 * _1507.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1142.x = _345.x;
    _1142.y = _345.y;
    _1142.z = _345.z;
    vec4 _1056 = _1142 * inversesqrt(dot(_1142.xyz, _1142.xyz));
    vec4 _1176 = vec4(0.0);
    _1176.x = _1056.x;
    _1176.y = _1056.y;
    _1176.z = _1056.z;
    float _366 = dot(_1176.xyz, _1507.xyz);
    vec4 _1182 = _1507;
    _1182.w = _366;
    float _370 = max(_366, 0.0);
    _1182.w = _370;
    float _1105;
    if (_370 == 0.0)
    {
        _1105 = 0.0;
    }
    else
    {
        _1105 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_370)));
    }
    _1142.x = _1105;
    _1182.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1182.xyz), 0.0, 1.0);
    vec4 _1198 = _1142;
    _1198.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1198.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1198.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1176.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1176.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1176.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _442 = _1176.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1216 = vec4(0.0);
    _1216.x = _442.x;
    _1216.y = _442.y;
    _1216.z = _442.z;
    vec4 _1222 = vec4(0.0);
    _1222.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1222.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1222.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _466 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1222.xyz) + _1216.xyz;
    vec4 _1228 = _1216;
    _1228.x = _466.x;
    _1228.y = _466.y;
    _1228.z = _466.z;
    vec4 _1234 = vec4(0.0);
    _1234.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1234.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1234.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _490 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1234.xyz) + _1228.xyz;
    vec4 _1240 = _1228;
    _1240.x = _490.x;
    _1240.y = _490.y;
    _1240.z = _490.z;
    vec3 _502 = _1240.xyz - _323;
    vec4 _1246 = _1240;
    _1246.x = _502.x;
    _1246.y = _502.y;
    _1246.z = _502.z;
    float _513 = dot(_1246.xyz, _1246.xyz);
    vec4 _1252 = _1182;
    _1252.w = _513;
    float _1076 = inversesqrt(abs(_513));
    _1252.w = _1076;
    vec3 _524 = _1246.xyz * _1252.www;
    vec4 _1257 = _1246;
    _1257.x = _524.x;
    _1257.y = _524.y;
    _1257.z = _524.z;
    float _533 = 1.0 / _1076;
    _1252.w = _533;
    vec4 _1508 = vec4((_1198.xyz * _1182.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1257.xyz, _1252.xyz), 0.0, 1.0));
    vec3 _548 = _1508.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1268 = _1257;
    _1268.x = _548.x;
    _1268.y = _548.y;
    _1268.z = _548.z;
    float _563 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _533) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1508.w = _563;
    float _569 = 1.0 / (_1076 * _1076);
    _1252.w = _569;
    float _578 = (_569 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _563;
    _1252.w = _578;
    _1252.w = 1.0 / _578;
    vec4 _1510 = vec4((_1268.xyz * _1252.www) + _1508.xyz, _563);
    vec3 _604 = _1176.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1294 = _1268;
    _1294.x = _604.x;
    _1294.y = _604.y;
    _1294.z = _604.z;
    vec3 _619 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1222.xyz) + _1294.xyz;
    vec4 _1300 = _1294;
    _1300.x = _619.x;
    _1300.y = _619.y;
    _1300.z = _619.z;
    vec3 _634 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1234.xyz) + _1300.xyz;
    vec4 _1306 = _1300;
    _1306.x = _634.x;
    _1306.y = _634.y;
    _1306.z = _634.z;
    vec3 _646 = _1306.xyz - _323;
    vec4 _1312 = _1306;
    _1312.x = _646.x;
    _1312.y = _646.y;
    _1312.z = _646.z;
    float _657 = dot(_1312.xyz, _1312.xyz);
    vec4 _1318 = _1252;
    _1318.w = _657;
    float _1081 = inversesqrt(abs(_657));
    _1318.w = _1081;
    vec3 _668 = _1312.xyz * _1318.www;
    vec4 _1323 = _1312;
    _1323.x = _668.x;
    _1323.y = _668.y;
    _1323.z = _668.z;
    float _677 = 1.0 / _1081;
    _1318.w = _677;
    _1510.w = clamp(dot(_1323.xyz, _1318.xyz), 0.0, 1.0);
    vec3 _692 = _1510.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1323.x = _692.x;
    _1323.y = _692.y;
    _1323.z = _692.z;
    float _707 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _677) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1510.w = _707;
    float _713 = 1.0 / (_1081 * _1081);
    _1318.w = _713;
    float _722 = (_713 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _707;
    _1318.w = _722;
    _1318.w = 1.0 / _722;
    vec4 _1512 = vec4((_1323.xyz * _1318.www) + _1510.xyz, _707);
    vec3 _748 = _1176.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1360 = _1176;
    _1360.x = _748.x;
    _1360.y = _748.y;
    _1360.z = _748.z;
    vec3 _763 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1222.xyz) + _1360.xyz;
    vec4 _1366 = _1360;
    _1366.x = _763.x;
    _1366.y = _763.y;
    _1366.z = _763.z;
    vec3 _778 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1234.xyz) + _1366.xyz;
    vec4 _1372 = _1366;
    _1372.x = _778.x;
    _1372.y = _778.y;
    _1372.z = _778.z;
    vec3 _790 = _1372.xyz - _323;
    vec4 _1378 = _1372;
    _1378.x = _790.x;
    _1378.y = _790.y;
    _1378.z = _790.z;
    float _801 = dot(_1378.xyz, _1378.xyz);
    vec4 _1384 = _1318;
    _1384.w = _801;
    float _1086 = inversesqrt(abs(_801));
    _1384.w = _1086;
    vec3 _812 = _1378.xyz * _1384.www;
    vec4 _1389 = _1378;
    _1389.x = _812.x;
    _1389.y = _812.y;
    _1389.z = _812.z;
    float _821 = 1.0 / _1086;
    _1384.w = _821;
    _1384.x = clamp(dot(_1389.xyz, _1384.xyz), 0.0, 1.0);
    vec4 _1513 = vec4(_1384.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _821);
    float _851 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _821) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1512.w = _851;
    float _857 = 1.0 / (_1086 * _1086);
    _1513.w = _857;
    float _866 = (_857 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _851;
    _1513.w = _866;
    float _870 = 1.0 / _866;
    _1513.w = _870;
    vec4 _1515 = vec4((_1513.xyz * _1513.www) + _1512.xyz, _870);
    vec3 _889 = min(_1515.xyz, vec3(1.0));
    vec4 _1426 = _1515;
    _1426.x = _889.x;
    _1426.y = _889.y;
    _1426.z = _889.z;
    vec4 _1462 = vec4(0.0);
    _1462.x = _141.x;
    _1462.y = _141.y;
    _1462.z = _252;
    vec4 _1093 = optPush.clipToTarget * ((_141.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _163);
    gl_Position = vec4(_1093.x, -_1093.y, _1093.zw);
    color0 = vec4(_1426.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1142.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1115;
    texcoord1 = vec4((_1107.yx * _1111.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_1107.xy * _1127.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _1462;
    texcoord4 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1104, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
