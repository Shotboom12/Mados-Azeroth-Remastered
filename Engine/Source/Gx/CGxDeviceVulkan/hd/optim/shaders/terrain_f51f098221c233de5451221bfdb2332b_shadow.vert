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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _138 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _160 = (_138.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_138.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_138.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _177 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1018 = _160;
    _1018.x = _177.x;
    _1018.y = _177.y;
    vec4 _1022 = vec4(0.0);
    _1022.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1022.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _199 = (_1018.xy * _1022.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1026 = vec4(0.0);
    _1026.x = _199.x;
    _1026.y = _199.y;
    _1022.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1022.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _221 = (_1018.xy * _1022.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1034 = vec4(0.0);
    _1034.x = _221.x;
    _1034.y = _221.y;
    _1022.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1022.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _243 = (_1018.xy * _1022.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1042 = vec4(0.0);
    _1042.x = _243.x;
    _1042.y = _243.y;
    float _257 = (_138.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1047 = _138;
    _1047.w = _257;
    float _261 = max(_257, 0.0);
    _1047.w = _261;
    float _1015;
    if (_261 == 0.0)
    {
        _1015 = 0.0;
    }
    else
    {
        _1015 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_261)));
    }
    _1018.x = _1015;
    vec3 _278 = -_1047.xyz;
    float _282 = dot(_278, _278);
    vec4 _1058 = _1047;
    _1058.w = _282;
    _1058.w = inversesqrt(abs(_282));
    vec3 _299 = ((-_1058.xyz) * _1058.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1018.x = _299.x;
    _1018.y = _299.y;
    _1018.z = _299.z;
    vec4 _967 = _1018 * inversesqrt(dot(_1018.xyz, _1018.xyz));
    _1022.x = _967.x;
    _1022.y = _967.y;
    _1022.z = _967.z;
    vec3 _322 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1018.x = _322.x;
    _1018.y = _322.y;
    _1018.z = _322.z;
    vec3 _337 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1018.xyz;
    vec4 _1081 = _1018;
    _1081.x = _337.x;
    _1081.y = _337.y;
    _1081.z = _337.z;
    vec3 _352 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1081.xyz;
    float _354 = _352.x;
    vec4 _1087 = _1081;
    _1087.x = _354;
    _1087.y = _352.y;
    _1087.z = _352.z;
    float _363 = dot(_1022.xyz, _1087.xyz);
    _1058.w = _363;
    float _367 = max(_363, 0.0);
    _1058.w = _367;
    float _1016;
    if (_367 == 0.0)
    {
        _1016 = 0.0;
    }
    else
    {
        _1016 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_367)));
    }
    vec4 _1381 = vec4(_354, _352.yz, _1016);
    _1022.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1022.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1022.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _405 = _1022.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1113 = vec4(0.0);
    _1113.x = _405.x;
    _1113.y = _405.y;
    _1113.z = _405.z;
    vec4 _1119 = vec4(0.0);
    _1119.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1119.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1119.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _429 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1119.xyz) + _1113.xyz;
    vec4 _1125 = _1113;
    _1125.x = _429.x;
    _1125.y = _429.y;
    _1125.z = _429.z;
    vec4 _1131 = vec4(0.0);
    _1131.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1131.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1131.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _453 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1131.xyz) + _1125.xyz;
    vec4 _1137 = _1125;
    _1137.x = _453.x;
    _1137.y = _453.y;
    _1137.z = _453.z;
    vec3 _465 = _1137.xyz - _1058.xyz;
    vec4 _1143 = _1137;
    _1143.x = _465.x;
    _1143.y = _465.y;
    _1143.z = _465.z;
    float _476 = dot(_1143.xyz, _1143.xyz);
    _1058.w = _476;
    float _987 = inversesqrt(abs(_476));
    _1058.w = _987;
    float _485 = 1.0 / _987;
    vec4 _1155 = _1381;
    _1155.w = _485;
    vec3 _491 = _1143.xyz * _1058.www;
    vec4 _1157 = _1143;
    _1157.x = _491.x;
    _1157.y = _491.y;
    _1157.z = _491.z;
    _1058.w = clamp(dot(_1157.xyz, _1155.xyz), 0.0, 1.0);
    vec3 _511 = _1058.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1157.x = _511.x;
    _1157.y = _511.y;
    _1157.z = _511.z;
    float _526 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _485) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1058.w = _526;
    float _532 = 1.0 / (_987 * _987);
    _1155.w = _532;
    float _541 = (_532 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _526;
    _1058.w = _541;
    _1058.w = 1.0 / _541;
    _1155.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1155.xyz), 0.0, 1.0);
    vec4 _1187 = vec4(0.0);
    _1187.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1187.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1187.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _574 = (_1187.xyz * _1155.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1193 = _1187;
    _1193.x = _574.x;
    _1193.y = _574.y;
    _1193.z = _574.z;
    vec3 _588 = (_1157.xyz * _1058.www) + _1193.xyz;
    vec4 _1199 = _1157;
    _1199.x = _588.x;
    _1199.y = _588.y;
    _1199.z = _588.z;
    vec3 _601 = _1022.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1193.x = _601.x;
    _1193.y = _601.y;
    _1193.z = _601.z;
    vec3 _616 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1119.xyz) + _1193.xyz;
    vec4 _1211 = _1193;
    _1211.x = _616.x;
    _1211.y = _616.y;
    _1211.z = _616.z;
    vec3 _631 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1131.xyz) + _1211.xyz;
    vec4 _1217 = _1211;
    _1217.x = _631.x;
    _1217.y = _631.y;
    _1217.z = _631.z;
    vec3 _643 = _1217.xyz - _1058.xyz;
    vec4 _1223 = _1217;
    _1223.x = _643.x;
    _1223.y = _643.y;
    _1223.z = _643.z;
    float _654 = dot(_1223.xyz, _1223.xyz);
    _1058.w = _654;
    float _992 = inversesqrt(abs(_654));
    _1058.w = _992;
    float _663 = 1.0 / _992;
    _1155.w = _663;
    vec3 _669 = _1223.xyz * _1058.www;
    vec4 _1237 = _1223;
    _1237.x = _669.x;
    _1237.y = _669.y;
    _1237.z = _669.z;
    _1058.w = clamp(dot(_1237.xyz, _1155.xyz), 0.0, 1.0);
    vec3 _689 = _1058.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1237.x = _689.x;
    _1237.y = _689.y;
    _1237.z = _689.z;
    float _704 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _663) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1058.w = _704;
    float _710 = 1.0 / (_992 * _992);
    _1155.w = _710;
    float _719 = (_710 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _704;
    _1058.w = _719;
    float _723 = 1.0 / _719;
    _1058.w = _723;
    vec3 _732 = (_1237.xyz * _1058.www) + _1199.xyz;
    vec4 _1265 = _1199;
    _1265.x = _732.x;
    _1265.y = _732.y;
    _1265.z = _732.z;
    vec3 _745 = _1022.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1271 = _1022;
    _1271.x = _745.x;
    _1271.y = _745.y;
    _1271.z = _745.z;
    vec3 _760 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1119.xyz) + _1271.xyz;
    vec4 _1277 = _1271;
    _1277.x = _760.x;
    _1277.y = _760.y;
    _1277.z = _760.z;
    vec3 _775 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1131.xyz) + _1277.xyz;
    vec4 _1283 = _1277;
    _1283.x = _775.x;
    _1283.y = _775.y;
    _1283.z = _775.z;
    vec4 _1384 = vec4(_1283.xyz - _1058.xyz, _723);
    vec3 _795 = _1384.xyz;
    float _798 = dot(_795, _795);
    vec4 _1295 = _1384;
    _1295.w = _798;
    float _997 = inversesqrt(abs(_798));
    _1295.w = _997;
    float _807 = 1.0 / _997;
    _1155.w = _807;
    vec4 _1385 = vec4(_1295.xyz * _1295.www, _997);
    _1385.x = clamp(dot(_1385.xyz, _1155.xyz), 0.0, 1.0);
    float _848 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _807) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1386 = vec4(_1385.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _848);
    float _863 = ((1.0 / (_997 * _997)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _848;
    _1386.w = _863;
    float _867 = 1.0 / _863;
    _1386.w = _867;
    vec4 _1388 = vec4((_1386.xyz * _1386.www) + _1265.xyz, _867);
    vec3 _886 = min(_1388.xyz, vec3(1.0));
    vec4 _1337 = _1388;
    _1337.x = _886.x;
    _1337.y = _886.y;
    _1337.z = _886.z;
    vec4 _1004 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_1004.x, -_1004.y, _1004.zw);
    color0 = vec4(_1337.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1381.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1026;
    texcoord1 = _1034;
    texcoord2 = _1042;
    fog0 = min(_1015, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
