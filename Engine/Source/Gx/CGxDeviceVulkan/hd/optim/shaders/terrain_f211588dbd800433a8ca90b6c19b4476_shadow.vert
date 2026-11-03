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
    vec2 _181 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1133 = _164;
    _1133.x = _181.x;
    _1133.y = _181.y;
    vec4 _1137 = vec4(0.0);
    _1137.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1137.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _203 = (_1133.xy * _1137.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1141 = vec4(0.0);
    _1141.x = _203.x;
    _1141.y = _203.y;
    _1137.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1137.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _1153 = _1137;
    _1153.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1153.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _1161 = _1153;
    _1161.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _1161.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _269 = (_1133.xy * _1161.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _1165 = vec4(0.0);
    _1165.x = _269.x;
    _1165.y = _269.y;
    float _275 = _142.z;
    float _283 = (_275 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1170 = _1133;
    _1170.x = _283;
    float _287 = max(_283, 0.0);
    _1170.x = _287;
    float _1130;
    if (_287 == 0.0)
    {
        _1130 = 0.0;
    }
    else
    {
        _1130 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_287)));
    }
    _1161.x = _1130;
    vec3 _308 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1170.x = _308.x;
    _1170.y = _308.y;
    _1170.z = _308.z;
    vec3 _323 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1170.xyz;
    vec4 _1187 = _1170;
    _1187.x = _323.x;
    _1187.y = _323.y;
    _1187.z = _323.z;
    vec3 _346 = _142.xyz;
    vec3 _347 = -_346;
    float _351 = dot(_347, _347);
    vec4 _1541 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1187.xyz, _351);
    _1541.w = inversesqrt(abs(_351));
    vec3 _368 = (_347 * _1541.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1161.x = _368.x;
    _1161.y = _368.y;
    _1161.z = _368.z;
    vec4 _1082 = _1161 * inversesqrt(dot(_1161.xyz, _1161.xyz));
    vec4 _1210 = vec4(0.0);
    _1210.x = _1082.x;
    _1210.y = _1082.y;
    _1210.z = _1082.z;
    float _389 = dot(_1210.xyz, _1541.xyz);
    vec4 _1216 = _1541;
    _1216.w = _389;
    float _393 = max(_389, 0.0);
    _1216.w = _393;
    float _1131;
    if (_393 == 0.0)
    {
        _1131 = 0.0;
    }
    else
    {
        _1131 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_393)));
    }
    _1161.x = _1131;
    _1216.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1216.xyz), 0.0, 1.0);
    vec4 _1232 = _1161;
    _1232.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1232.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1232.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1210.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1210.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1210.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _465 = _1210.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1250 = vec4(0.0);
    _1250.x = _465.x;
    _1250.y = _465.y;
    _1250.z = _465.z;
    vec4 _1256 = vec4(0.0);
    _1256.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1256.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1256.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _489 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1256.xyz) + _1250.xyz;
    vec4 _1262 = _1250;
    _1262.x = _489.x;
    _1262.y = _489.y;
    _1262.z = _489.z;
    vec4 _1268 = vec4(0.0);
    _1268.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1268.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1268.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _513 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1268.xyz) + _1262.xyz;
    vec4 _1274 = _1262;
    _1274.x = _513.x;
    _1274.y = _513.y;
    _1274.z = _513.z;
    vec3 _525 = _1274.xyz - _346;
    vec4 _1280 = _1274;
    _1280.x = _525.x;
    _1280.y = _525.y;
    _1280.z = _525.z;
    float _536 = dot(_1280.xyz, _1280.xyz);
    vec4 _1286 = _1216;
    _1286.w = _536;
    float _1102 = inversesqrt(abs(_536));
    _1286.w = _1102;
    vec3 _547 = _1280.xyz * _1286.www;
    vec4 _1291 = _1280;
    _1291.x = _547.x;
    _1291.y = _547.y;
    _1291.z = _547.z;
    float _556 = 1.0 / _1102;
    _1286.w = _556;
    vec4 _1542 = vec4((_1232.xyz * _1216.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1291.xyz, _1286.xyz), 0.0, 1.0));
    vec3 _571 = _1542.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1302 = _1291;
    _1302.x = _571.x;
    _1302.y = _571.y;
    _1302.z = _571.z;
    float _586 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _556) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1542.w = _586;
    float _592 = 1.0 / (_1102 * _1102);
    _1286.w = _592;
    float _601 = (_592 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _586;
    _1286.w = _601;
    _1286.w = 1.0 / _601;
    vec4 _1544 = vec4((_1302.xyz * _1286.www) + _1542.xyz, _586);
    vec3 _627 = _1210.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1328 = _1302;
    _1328.x = _627.x;
    _1328.y = _627.y;
    _1328.z = _627.z;
    vec3 _642 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1256.xyz) + _1328.xyz;
    vec4 _1334 = _1328;
    _1334.x = _642.x;
    _1334.y = _642.y;
    _1334.z = _642.z;
    vec3 _657 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1268.xyz) + _1334.xyz;
    vec4 _1340 = _1334;
    _1340.x = _657.x;
    _1340.y = _657.y;
    _1340.z = _657.z;
    vec3 _669 = _1340.xyz - _346;
    vec4 _1346 = _1340;
    _1346.x = _669.x;
    _1346.y = _669.y;
    _1346.z = _669.z;
    float _680 = dot(_1346.xyz, _1346.xyz);
    vec4 _1352 = _1286;
    _1352.w = _680;
    float _1107 = inversesqrt(abs(_680));
    _1352.w = _1107;
    vec3 _691 = _1346.xyz * _1352.www;
    vec4 _1357 = _1346;
    _1357.x = _691.x;
    _1357.y = _691.y;
    _1357.z = _691.z;
    float _700 = 1.0 / _1107;
    _1352.w = _700;
    _1544.w = clamp(dot(_1357.xyz, _1352.xyz), 0.0, 1.0);
    vec3 _715 = _1544.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1357.x = _715.x;
    _1357.y = _715.y;
    _1357.z = _715.z;
    float _730 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _700) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1544.w = _730;
    float _736 = 1.0 / (_1107 * _1107);
    _1352.w = _736;
    float _745 = (_736 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _730;
    _1352.w = _745;
    _1352.w = 1.0 / _745;
    vec4 _1546 = vec4((_1357.xyz * _1352.www) + _1544.xyz, _730);
    vec3 _771 = _1210.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1394 = _1210;
    _1394.x = _771.x;
    _1394.y = _771.y;
    _1394.z = _771.z;
    vec3 _786 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1256.xyz) + _1394.xyz;
    vec4 _1400 = _1394;
    _1400.x = _786.x;
    _1400.y = _786.y;
    _1400.z = _786.z;
    vec3 _801 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1268.xyz) + _1400.xyz;
    vec4 _1406 = _1400;
    _1406.x = _801.x;
    _1406.y = _801.y;
    _1406.z = _801.z;
    vec3 _813 = _1406.xyz - _346;
    vec4 _1412 = _1406;
    _1412.x = _813.x;
    _1412.y = _813.y;
    _1412.z = _813.z;
    float _824 = dot(_1412.xyz, _1412.xyz);
    vec4 _1418 = _1352;
    _1418.w = _824;
    float _1112 = inversesqrt(abs(_824));
    _1418.w = _1112;
    vec3 _835 = _1412.xyz * _1418.www;
    vec4 _1423 = _1412;
    _1423.x = _835.x;
    _1423.y = _835.y;
    _1423.z = _835.z;
    float _844 = 1.0 / _1112;
    _1418.w = _844;
    _1418.x = clamp(dot(_1423.xyz, _1418.xyz), 0.0, 1.0);
    vec4 _1547 = vec4(_1418.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _844);
    float _874 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _844) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1546.w = _874;
    float _880 = 1.0 / (_1112 * _1112);
    _1547.w = _880;
    float _889 = (_880 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _874;
    _1547.w = _889;
    float _893 = 1.0 / _889;
    _1547.w = _893;
    vec4 _1549 = vec4((_1547.xyz * _1547.www) + _1546.xyz, _893);
    vec3 _912 = min(_1549.xyz, vec3(1.0));
    vec4 _1460 = _1549;
    _1460.x = _912.x;
    _1460.y = _912.y;
    _1460.z = _912.z;
    vec4 _1496 = vec4(0.0);
    _1496.x = _142.x;
    _1496.y = _142.y;
    _1496.z = _275;
    vec4 _1119 = optPush.clipToTarget * ((_142.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _164);
    gl_Position = vec4(_1119.x, -_1119.y, _1119.zw);
    color0 = vec4(_1460.xyz * v2.xyz, 1.0);
    color1 = vec4(_1161.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1141;
    texcoord1 = vec4((_1133.xy * _1137.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_1133.yx * _1153.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _1165;
    texcoord3 = _1496;
    texcoord4 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_142, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_142, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1130, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
