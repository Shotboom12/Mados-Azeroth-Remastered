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
    vec2 _181 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1132 = _164;
    _1132.x = _181.x;
    _1132.y = _181.y;
    vec4 _1136 = vec4(0.0);
    _1136.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1136.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _203 = (_1132.xy * _1136.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1140 = vec4(0.0);
    _1140.x = _203.x;
    _1140.y = _203.y;
    _1136.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1136.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _1152 = _1136;
    _1152.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1152.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _1160 = _1152;
    _1160.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _1160.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _269 = (_1132.xy * _1160.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _1164 = vec4(0.0);
    _1164.x = _269.x;
    _1164.y = _269.y;
    float _275 = _142.z;
    float _283 = (_275 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1169 = _1132;
    _1169.x = _283;
    float _287 = max(_283, 0.0);
    _1169.x = _287;
    float _1129;
    if (_287 == 0.0)
    {
        _1129 = 0.0;
    }
    else
    {
        _1129 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_287)));
    }
    _1160.x = _1129;
    vec3 _308 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1169.x = _308.x;
    _1169.y = _308.y;
    _1169.z = _308.z;
    vec3 _323 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1169.xyz;
    vec4 _1186 = _1169;
    _1186.x = _323.x;
    _1186.y = _323.y;
    _1186.z = _323.z;
    vec3 _346 = _142.xyz;
    vec3 _347 = -_346;
    float _351 = dot(_347, _347);
    vec4 _1540 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1186.xyz, _351);
    _1540.w = inversesqrt(abs(_351));
    vec3 _368 = (_347 * _1540.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1160.x = _368.x;
    _1160.y = _368.y;
    _1160.z = _368.z;
    vec4 _1081 = _1160 * inversesqrt(dot(_1160.xyz, _1160.xyz));
    vec4 _1209 = vec4(0.0);
    _1209.x = _1081.x;
    _1209.y = _1081.y;
    _1209.z = _1081.z;
    float _389 = dot(_1209.xyz, _1540.xyz);
    vec4 _1215 = _1540;
    _1215.w = _389;
    float _393 = max(_389, 0.0);
    _1215.w = _393;
    float _1130;
    if (_393 == 0.0)
    {
        _1130 = 0.0;
    }
    else
    {
        _1130 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_393)));
    }
    _1160.x = _1130;
    _1215.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1215.xyz), 0.0, 1.0);
    vec4 _1231 = _1160;
    _1231.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1231.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1231.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1209.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1209.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1209.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _465 = _1209.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1249 = vec4(0.0);
    _1249.x = _465.x;
    _1249.y = _465.y;
    _1249.z = _465.z;
    vec4 _1255 = vec4(0.0);
    _1255.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1255.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1255.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _489 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1255.xyz) + _1249.xyz;
    vec4 _1261 = _1249;
    _1261.x = _489.x;
    _1261.y = _489.y;
    _1261.z = _489.z;
    vec4 _1267 = vec4(0.0);
    _1267.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1267.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1267.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _513 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1267.xyz) + _1261.xyz;
    vec4 _1273 = _1261;
    _1273.x = _513.x;
    _1273.y = _513.y;
    _1273.z = _513.z;
    vec3 _525 = _1273.xyz - _346;
    vec4 _1279 = _1273;
    _1279.x = _525.x;
    _1279.y = _525.y;
    _1279.z = _525.z;
    float _536 = dot(_1279.xyz, _1279.xyz);
    vec4 _1285 = _1215;
    _1285.w = _536;
    float _1101 = inversesqrt(abs(_536));
    _1285.w = _1101;
    vec3 _547 = _1279.xyz * _1285.www;
    vec4 _1290 = _1279;
    _1290.x = _547.x;
    _1290.y = _547.y;
    _1290.z = _547.z;
    float _556 = 1.0 / _1101;
    _1285.w = _556;
    vec4 _1541 = vec4((_1231.xyz * _1215.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1290.xyz, _1285.xyz), 0.0, 1.0));
    vec3 _571 = _1541.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1301 = _1290;
    _1301.x = _571.x;
    _1301.y = _571.y;
    _1301.z = _571.z;
    float _586 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _556) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1541.w = _586;
    float _592 = 1.0 / (_1101 * _1101);
    _1285.w = _592;
    float _601 = (_592 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _586;
    _1285.w = _601;
    _1285.w = 1.0 / _601;
    vec4 _1543 = vec4((_1301.xyz * _1285.www) + _1541.xyz, _586);
    vec3 _627 = _1209.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1327 = _1301;
    _1327.x = _627.x;
    _1327.y = _627.y;
    _1327.z = _627.z;
    vec3 _642 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1255.xyz) + _1327.xyz;
    vec4 _1333 = _1327;
    _1333.x = _642.x;
    _1333.y = _642.y;
    _1333.z = _642.z;
    vec3 _657 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1267.xyz) + _1333.xyz;
    vec4 _1339 = _1333;
    _1339.x = _657.x;
    _1339.y = _657.y;
    _1339.z = _657.z;
    vec3 _669 = _1339.xyz - _346;
    vec4 _1345 = _1339;
    _1345.x = _669.x;
    _1345.y = _669.y;
    _1345.z = _669.z;
    float _680 = dot(_1345.xyz, _1345.xyz);
    vec4 _1351 = _1285;
    _1351.w = _680;
    float _1106 = inversesqrt(abs(_680));
    _1351.w = _1106;
    vec3 _691 = _1345.xyz * _1351.www;
    vec4 _1356 = _1345;
    _1356.x = _691.x;
    _1356.y = _691.y;
    _1356.z = _691.z;
    float _700 = 1.0 / _1106;
    _1351.w = _700;
    _1543.w = clamp(dot(_1356.xyz, _1351.xyz), 0.0, 1.0);
    vec3 _715 = _1543.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1356.x = _715.x;
    _1356.y = _715.y;
    _1356.z = _715.z;
    float _730 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _700) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1543.w = _730;
    float _736 = 1.0 / (_1106 * _1106);
    _1351.w = _736;
    float _745 = (_736 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _730;
    _1351.w = _745;
    _1351.w = 1.0 / _745;
    vec4 _1545 = vec4((_1356.xyz * _1351.www) + _1543.xyz, _730);
    vec3 _771 = _1209.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1393 = _1209;
    _1393.x = _771.x;
    _1393.y = _771.y;
    _1393.z = _771.z;
    vec3 _786 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1255.xyz) + _1393.xyz;
    vec4 _1399 = _1393;
    _1399.x = _786.x;
    _1399.y = _786.y;
    _1399.z = _786.z;
    vec3 _801 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1267.xyz) + _1399.xyz;
    vec4 _1405 = _1399;
    _1405.x = _801.x;
    _1405.y = _801.y;
    _1405.z = _801.z;
    vec3 _813 = _1405.xyz - _346;
    vec4 _1411 = _1405;
    _1411.x = _813.x;
    _1411.y = _813.y;
    _1411.z = _813.z;
    float _824 = dot(_1411.xyz, _1411.xyz);
    vec4 _1417 = _1351;
    _1417.w = _824;
    float _1111 = inversesqrt(abs(_824));
    _1417.w = _1111;
    vec3 _835 = _1411.xyz * _1417.www;
    vec4 _1422 = _1411;
    _1422.x = _835.x;
    _1422.y = _835.y;
    _1422.z = _835.z;
    float _844 = 1.0 / _1111;
    _1417.w = _844;
    _1417.x = clamp(dot(_1422.xyz, _1417.xyz), 0.0, 1.0);
    vec4 _1546 = vec4(_1417.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _844);
    float _874 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _844) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1545.w = _874;
    float _880 = 1.0 / (_1111 * _1111);
    _1546.w = _880;
    float _889 = (_880 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _874;
    _1546.w = _889;
    float _893 = 1.0 / _889;
    _1546.w = _893;
    vec4 _1548 = vec4((_1546.xyz * _1546.www) + _1545.xyz, _893);
    vec3 _912 = min(_1548.xyz, vec3(1.0));
    vec4 _1459 = _1548;
    _1459.x = _912.x;
    _1459.y = _912.y;
    _1459.z = _912.z;
    vec4 _1495 = vec4(0.0);
    _1495.x = _142.x;
    _1495.y = _142.y;
    _1495.z = _275;
    vec4 _1118 = optPush.clipToTarget * ((_142.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _164);
    gl_Position = vec4(_1118.x, -_1118.y, _1118.zw);
    color0 = vec4(_1459.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1160.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1140;
    texcoord1 = vec4((_1132.xy * _1136.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_1132.yx * _1152.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _1164;
    texcoord3 = _1495;
    texcoord4 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1129, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
