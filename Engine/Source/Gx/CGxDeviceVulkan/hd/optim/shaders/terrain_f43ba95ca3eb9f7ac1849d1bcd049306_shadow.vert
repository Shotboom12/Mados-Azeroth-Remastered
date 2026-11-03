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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _138 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _160 = (_138.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_138.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_138.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _177 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1019 = _160;
    _1019.x = _177.x;
    _1019.y = _177.y;
    vec4 _1023 = vec4(0.0);
    _1023.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1023.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _199 = (_1019.xy * _1023.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1027 = vec4(0.0);
    _1027.x = _199.x;
    _1027.y = _199.y;
    _1023.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1023.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _221 = (_1019.xy * _1023.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1035 = vec4(0.0);
    _1035.x = _221.x;
    _1035.y = _221.y;
    _1023.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1023.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _243 = (_1019.xy * _1023.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1043 = vec4(0.0);
    _1043.x = _243.x;
    _1043.y = _243.y;
    float _257 = (_138.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1048 = _138;
    _1048.w = _257;
    float _261 = max(_257, 0.0);
    _1048.w = _261;
    float _1016;
    if (_261 == 0.0)
    {
        _1016 = 0.0;
    }
    else
    {
        _1016 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_261)));
    }
    _1019.x = _1016;
    vec3 _278 = -_1048.xyz;
    float _282 = dot(_278, _278);
    vec4 _1059 = _1048;
    _1059.w = _282;
    _1059.w = inversesqrt(abs(_282));
    vec3 _299 = ((-_1059.xyz) * _1059.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1019.x = _299.x;
    _1019.y = _299.y;
    _1019.z = _299.z;
    vec4 _968 = _1019 * inversesqrt(dot(_1019.xyz, _1019.xyz));
    _1023.x = _968.x;
    _1023.y = _968.y;
    _1023.z = _968.z;
    vec3 _322 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1019.x = _322.x;
    _1019.y = _322.y;
    _1019.z = _322.z;
    vec3 _337 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1019.xyz;
    vec4 _1082 = _1019;
    _1082.x = _337.x;
    _1082.y = _337.y;
    _1082.z = _337.z;
    vec3 _352 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1082.xyz;
    float _354 = _352.x;
    vec4 _1088 = _1082;
    _1088.x = _354;
    _1088.y = _352.y;
    _1088.z = _352.z;
    float _363 = dot(_1023.xyz, _1088.xyz);
    _1059.w = _363;
    float _367 = max(_363, 0.0);
    _1059.w = _367;
    float _1017;
    if (_367 == 0.0)
    {
        _1017 = 0.0;
    }
    else
    {
        _1017 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_367)));
    }
    vec4 _1382 = vec4(_354, _352.yz, _1017);
    _1023.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1023.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1023.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _405 = _1023.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1114 = vec4(0.0);
    _1114.x = _405.x;
    _1114.y = _405.y;
    _1114.z = _405.z;
    vec4 _1120 = vec4(0.0);
    _1120.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1120.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1120.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _429 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1120.xyz) + _1114.xyz;
    vec4 _1126 = _1114;
    _1126.x = _429.x;
    _1126.y = _429.y;
    _1126.z = _429.z;
    vec4 _1132 = vec4(0.0);
    _1132.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1132.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1132.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _453 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1132.xyz) + _1126.xyz;
    vec4 _1138 = _1126;
    _1138.x = _453.x;
    _1138.y = _453.y;
    _1138.z = _453.z;
    vec3 _465 = _1138.xyz - _1059.xyz;
    vec4 _1144 = _1138;
    _1144.x = _465.x;
    _1144.y = _465.y;
    _1144.z = _465.z;
    float _476 = dot(_1144.xyz, _1144.xyz);
    _1059.w = _476;
    float _988 = inversesqrt(abs(_476));
    _1059.w = _988;
    float _485 = 1.0 / _988;
    vec4 _1156 = _1382;
    _1156.w = _485;
    vec3 _491 = _1144.xyz * _1059.www;
    vec4 _1158 = _1144;
    _1158.x = _491.x;
    _1158.y = _491.y;
    _1158.z = _491.z;
    _1059.w = clamp(dot(_1158.xyz, _1156.xyz), 0.0, 1.0);
    vec3 _511 = _1059.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1158.x = _511.x;
    _1158.y = _511.y;
    _1158.z = _511.z;
    float _526 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _485) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1059.w = _526;
    float _532 = 1.0 / (_988 * _988);
    _1156.w = _532;
    float _541 = (_532 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _526;
    _1059.w = _541;
    _1059.w = 1.0 / _541;
    _1156.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1156.xyz), 0.0, 1.0);
    vec4 _1188 = vec4(0.0);
    _1188.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1188.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1188.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _574 = (_1188.xyz * _1156.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1194 = _1188;
    _1194.x = _574.x;
    _1194.y = _574.y;
    _1194.z = _574.z;
    vec3 _588 = (_1158.xyz * _1059.www) + _1194.xyz;
    vec4 _1200 = _1158;
    _1200.x = _588.x;
    _1200.y = _588.y;
    _1200.z = _588.z;
    vec3 _601 = _1023.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1194.x = _601.x;
    _1194.y = _601.y;
    _1194.z = _601.z;
    vec3 _616 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1120.xyz) + _1194.xyz;
    vec4 _1212 = _1194;
    _1212.x = _616.x;
    _1212.y = _616.y;
    _1212.z = _616.z;
    vec3 _631 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1132.xyz) + _1212.xyz;
    vec4 _1218 = _1212;
    _1218.x = _631.x;
    _1218.y = _631.y;
    _1218.z = _631.z;
    vec3 _643 = _1218.xyz - _1059.xyz;
    vec4 _1224 = _1218;
    _1224.x = _643.x;
    _1224.y = _643.y;
    _1224.z = _643.z;
    float _654 = dot(_1224.xyz, _1224.xyz);
    _1059.w = _654;
    float _993 = inversesqrt(abs(_654));
    _1059.w = _993;
    float _663 = 1.0 / _993;
    _1156.w = _663;
    vec3 _669 = _1224.xyz * _1059.www;
    vec4 _1238 = _1224;
    _1238.x = _669.x;
    _1238.y = _669.y;
    _1238.z = _669.z;
    _1059.w = clamp(dot(_1238.xyz, _1156.xyz), 0.0, 1.0);
    vec3 _689 = _1059.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1238.x = _689.x;
    _1238.y = _689.y;
    _1238.z = _689.z;
    float _704 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _663) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1059.w = _704;
    float _710 = 1.0 / (_993 * _993);
    _1156.w = _710;
    float _719 = (_710 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _704;
    _1059.w = _719;
    float _723 = 1.0 / _719;
    _1059.w = _723;
    vec3 _732 = (_1238.xyz * _1059.www) + _1200.xyz;
    vec4 _1266 = _1200;
    _1266.x = _732.x;
    _1266.y = _732.y;
    _1266.z = _732.z;
    vec3 _745 = _1023.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1272 = _1023;
    _1272.x = _745.x;
    _1272.y = _745.y;
    _1272.z = _745.z;
    vec3 _760 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1120.xyz) + _1272.xyz;
    vec4 _1278 = _1272;
    _1278.x = _760.x;
    _1278.y = _760.y;
    _1278.z = _760.z;
    vec3 _775 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1132.xyz) + _1278.xyz;
    vec4 _1284 = _1278;
    _1284.x = _775.x;
    _1284.y = _775.y;
    _1284.z = _775.z;
    vec4 _1385 = vec4(_1284.xyz - _1059.xyz, _723);
    vec3 _795 = _1385.xyz;
    float _798 = dot(_795, _795);
    vec4 _1296 = _1385;
    _1296.w = _798;
    float _998 = inversesqrt(abs(_798));
    _1296.w = _998;
    float _807 = 1.0 / _998;
    _1156.w = _807;
    vec4 _1386 = vec4(_1296.xyz * _1296.www, _998);
    _1386.x = clamp(dot(_1386.xyz, _1156.xyz), 0.0, 1.0);
    float _848 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _807) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1387 = vec4(_1386.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _848);
    float _863 = ((1.0 / (_998 * _998)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _848;
    _1387.w = _863;
    float _867 = 1.0 / _863;
    _1387.w = _867;
    vec4 _1389 = vec4((_1387.xyz * _1387.www) + _1266.xyz, _867);
    vec3 _886 = min(_1389.xyz, vec3(1.0));
    vec4 _1338 = _1389;
    _1338.x = _886.x;
    _1338.y = _886.y;
    _1338.z = _886.z;
    vec4 _1005 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_1005.x, -_1005.y, _1005.zw);
    color0 = vec4(_1338.xyz * v2.xyz, 1.0);
    color1 = vec4(_1382.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1027;
    texcoord1 = _1035;
    texcoord2 = _1043;
    fog0 = min(_1016, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
