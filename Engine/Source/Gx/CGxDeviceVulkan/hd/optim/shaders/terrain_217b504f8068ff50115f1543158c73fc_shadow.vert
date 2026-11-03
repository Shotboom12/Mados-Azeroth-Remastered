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
    vec2 _180 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _1108 = _163;
    _1108.x = _180.x;
    _1108.y = _180.y;
    vec4 _1112 = vec4(0.0);
    _1112.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1112.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _202 = (_1108.yx * _1112.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1116 = vec4(0.0);
    _1116.x = _202.x;
    _1116.y = _202.y;
    _1112.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1112.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _1128 = _1112;
    _1128.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1128.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _252 = _141.z;
    float _260 = (_252 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1137 = _1108;
    _1137.x = _260;
    float _264 = max(_260, 0.0);
    _1137.x = _264;
    float _1105;
    if (_264 == 0.0)
    {
        _1105 = 0.0;
    }
    else
    {
        _1105 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_264)));
    }
    vec4 _1143 = _1128;
    _1143.x = _1105;
    vec3 _285 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1137.x = _285.x;
    _1137.y = _285.y;
    _1137.z = _285.z;
    vec3 _300 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1137.xyz;
    vec4 _1154 = _1137;
    _1154.x = _300.x;
    _1154.y = _300.y;
    _1154.z = _300.z;
    vec3 _323 = _141.xyz;
    vec3 _324 = -_323;
    float _328 = dot(_324, _324);
    vec4 _1508 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1154.xyz, _328);
    _1508.w = inversesqrt(abs(_328));
    vec3 _345 = (_324 * _1508.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1143.x = _345.x;
    _1143.y = _345.y;
    _1143.z = _345.z;
    vec4 _1057 = _1143 * inversesqrt(dot(_1143.xyz, _1143.xyz));
    vec4 _1177 = vec4(0.0);
    _1177.x = _1057.x;
    _1177.y = _1057.y;
    _1177.z = _1057.z;
    float _366 = dot(_1177.xyz, _1508.xyz);
    vec4 _1183 = _1508;
    _1183.w = _366;
    float _370 = max(_366, 0.0);
    _1183.w = _370;
    float _1106;
    if (_370 == 0.0)
    {
        _1106 = 0.0;
    }
    else
    {
        _1106 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_370)));
    }
    _1143.x = _1106;
    _1183.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1183.xyz), 0.0, 1.0);
    vec4 _1199 = _1143;
    _1199.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1199.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1199.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1177.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1177.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1177.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _442 = _1177.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1217 = vec4(0.0);
    _1217.x = _442.x;
    _1217.y = _442.y;
    _1217.z = _442.z;
    vec4 _1223 = vec4(0.0);
    _1223.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1223.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1223.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _466 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1223.xyz) + _1217.xyz;
    vec4 _1229 = _1217;
    _1229.x = _466.x;
    _1229.y = _466.y;
    _1229.z = _466.z;
    vec4 _1235 = vec4(0.0);
    _1235.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1235.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1235.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _490 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1235.xyz) + _1229.xyz;
    vec4 _1241 = _1229;
    _1241.x = _490.x;
    _1241.y = _490.y;
    _1241.z = _490.z;
    vec3 _502 = _1241.xyz - _323;
    vec4 _1247 = _1241;
    _1247.x = _502.x;
    _1247.y = _502.y;
    _1247.z = _502.z;
    float _513 = dot(_1247.xyz, _1247.xyz);
    vec4 _1253 = _1183;
    _1253.w = _513;
    float _1077 = inversesqrt(abs(_513));
    _1253.w = _1077;
    vec3 _524 = _1247.xyz * _1253.www;
    vec4 _1258 = _1247;
    _1258.x = _524.x;
    _1258.y = _524.y;
    _1258.z = _524.z;
    float _533 = 1.0 / _1077;
    _1253.w = _533;
    vec4 _1509 = vec4((_1199.xyz * _1183.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1258.xyz, _1253.xyz), 0.0, 1.0));
    vec3 _548 = _1509.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1269 = _1258;
    _1269.x = _548.x;
    _1269.y = _548.y;
    _1269.z = _548.z;
    float _563 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _533) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1509.w = _563;
    float _569 = 1.0 / (_1077 * _1077);
    _1253.w = _569;
    float _578 = (_569 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _563;
    _1253.w = _578;
    _1253.w = 1.0 / _578;
    vec4 _1511 = vec4((_1269.xyz * _1253.www) + _1509.xyz, _563);
    vec3 _604 = _1177.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1295 = _1269;
    _1295.x = _604.x;
    _1295.y = _604.y;
    _1295.z = _604.z;
    vec3 _619 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1223.xyz) + _1295.xyz;
    vec4 _1301 = _1295;
    _1301.x = _619.x;
    _1301.y = _619.y;
    _1301.z = _619.z;
    vec3 _634 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1235.xyz) + _1301.xyz;
    vec4 _1307 = _1301;
    _1307.x = _634.x;
    _1307.y = _634.y;
    _1307.z = _634.z;
    vec3 _646 = _1307.xyz - _323;
    vec4 _1313 = _1307;
    _1313.x = _646.x;
    _1313.y = _646.y;
    _1313.z = _646.z;
    float _657 = dot(_1313.xyz, _1313.xyz);
    vec4 _1319 = _1253;
    _1319.w = _657;
    float _1082 = inversesqrt(abs(_657));
    _1319.w = _1082;
    vec3 _668 = _1313.xyz * _1319.www;
    vec4 _1324 = _1313;
    _1324.x = _668.x;
    _1324.y = _668.y;
    _1324.z = _668.z;
    float _677 = 1.0 / _1082;
    _1319.w = _677;
    _1511.w = clamp(dot(_1324.xyz, _1319.xyz), 0.0, 1.0);
    vec3 _692 = _1511.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1324.x = _692.x;
    _1324.y = _692.y;
    _1324.z = _692.z;
    float _707 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _677) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1511.w = _707;
    float _713 = 1.0 / (_1082 * _1082);
    _1319.w = _713;
    float _722 = (_713 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _707;
    _1319.w = _722;
    _1319.w = 1.0 / _722;
    vec4 _1513 = vec4((_1324.xyz * _1319.www) + _1511.xyz, _707);
    vec3 _748 = _1177.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1361 = _1177;
    _1361.x = _748.x;
    _1361.y = _748.y;
    _1361.z = _748.z;
    vec3 _763 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1223.xyz) + _1361.xyz;
    vec4 _1367 = _1361;
    _1367.x = _763.x;
    _1367.y = _763.y;
    _1367.z = _763.z;
    vec3 _778 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1235.xyz) + _1367.xyz;
    vec4 _1373 = _1367;
    _1373.x = _778.x;
    _1373.y = _778.y;
    _1373.z = _778.z;
    vec3 _790 = _1373.xyz - _323;
    vec4 _1379 = _1373;
    _1379.x = _790.x;
    _1379.y = _790.y;
    _1379.z = _790.z;
    float _801 = dot(_1379.xyz, _1379.xyz);
    vec4 _1385 = _1319;
    _1385.w = _801;
    float _1087 = inversesqrt(abs(_801));
    _1385.w = _1087;
    vec3 _812 = _1379.xyz * _1385.www;
    vec4 _1390 = _1379;
    _1390.x = _812.x;
    _1390.y = _812.y;
    _1390.z = _812.z;
    float _821 = 1.0 / _1087;
    _1385.w = _821;
    _1385.x = clamp(dot(_1390.xyz, _1385.xyz), 0.0, 1.0);
    vec4 _1514 = vec4(_1385.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _821);
    float _851 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _821) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1513.w = _851;
    float _857 = 1.0 / (_1087 * _1087);
    _1514.w = _857;
    float _866 = (_857 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _851;
    _1514.w = _866;
    float _870 = 1.0 / _866;
    _1514.w = _870;
    vec4 _1516 = vec4((_1514.xyz * _1514.www) + _1513.xyz, _870);
    vec3 _889 = min(_1516.xyz, vec3(1.0));
    vec4 _1427 = _1516;
    _1427.x = _889.x;
    _1427.y = _889.y;
    _1427.z = _889.z;
    vec4 _1463 = vec4(0.0);
    _1463.x = _141.x;
    _1463.y = _141.y;
    _1463.z = _252;
    vec4 _1094 = optPush.clipToTarget * ((_141.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _163);
    gl_Position = vec4(_1094.x, -_1094.y, _1094.zw);
    color0 = vec4(_1427.xyz * v2.xyz, 1.0);
    color1 = vec4(_1143.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1116;
    texcoord1 = vec4((_1108.yx * _1112.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_1108.xy * _1128.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _1463;
    texcoord4 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1105, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
