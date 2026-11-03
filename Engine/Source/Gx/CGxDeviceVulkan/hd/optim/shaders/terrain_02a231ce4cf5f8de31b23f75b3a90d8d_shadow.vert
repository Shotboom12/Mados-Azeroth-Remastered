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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _140 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _162 = (_140.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_140.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_140.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _179 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1069 = _162;
    _1069.x = _179.x;
    _1069.y = _179.y;
    vec4 _1073 = vec4(0.0);
    _1073.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1073.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _201 = (_1069.xy * _1073.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1077 = vec4(0.0);
    _1077.x = _201.x;
    _1077.y = _201.y;
    _1073.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1073.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _223 = (_1069.xy * _1073.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1085 = vec4(0.0);
    _1085.x = _223.x;
    _1085.y = _223.y;
    _1073.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1073.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _245 = (_1069.xy * _1073.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1093 = vec4(0.0);
    _1093.x = _245.x;
    _1093.y = _245.y;
    _1073.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _1073.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _267 = (_1069.xy * _1073.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _1101 = vec4(0.0);
    _1101.x = _267.x;
    _1101.y = _267.y;
    _1073.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _1073.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _289 = (_1069.xy * _1073.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _1109 = vec4(0.0);
    _1109.x = _289.x;
    _1109.y = _289.y;
    float _303 = (_140.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1114 = _140;
    _1114.w = _303;
    float _307 = max(_303, 0.0);
    _1114.w = _307;
    float _1066;
    if (_307 == 0.0)
    {
        _1066 = 0.0;
    }
    else
    {
        _1066 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_307)));
    }
    _1069.x = _1066;
    vec3 _324 = -_1114.xyz;
    float _328 = dot(_324, _324);
    vec4 _1125 = _1114;
    _1125.w = _328;
    _1125.w = inversesqrt(abs(_328));
    vec3 _345 = ((-_1125.xyz) * _1125.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1069.x = _345.x;
    _1069.y = _345.y;
    _1069.z = _345.z;
    vec4 _1018 = _1069 * inversesqrt(dot(_1069.xyz, _1069.xyz));
    _1073.x = _1018.x;
    _1073.y = _1018.y;
    _1073.z = _1018.z;
    vec3 _368 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1069.x = _368.x;
    _1069.y = _368.y;
    _1069.z = _368.z;
    vec3 _383 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1069.xyz;
    vec4 _1148 = _1069;
    _1148.x = _383.x;
    _1148.y = _383.y;
    _1148.z = _383.z;
    vec3 _398 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1148.xyz;
    float _400 = _398.x;
    vec4 _1154 = _1148;
    _1154.x = _400;
    _1154.y = _398.y;
    _1154.z = _398.z;
    float _409 = dot(_1073.xyz, _1154.xyz);
    _1125.w = _409;
    float _413 = max(_409, 0.0);
    _1125.w = _413;
    float _1067;
    if (_413 == 0.0)
    {
        _1067 = 0.0;
    }
    else
    {
        _1067 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_413)));
    }
    vec4 _1448 = vec4(_400, _398.yz, _1067);
    _1073.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1073.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1073.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _451 = _1073.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1180 = vec4(0.0);
    _1180.x = _451.x;
    _1180.y = _451.y;
    _1180.z = _451.z;
    vec4 _1186 = vec4(0.0);
    _1186.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1186.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1186.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _475 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1186.xyz) + _1180.xyz;
    vec4 _1192 = _1180;
    _1192.x = _475.x;
    _1192.y = _475.y;
    _1192.z = _475.z;
    vec4 _1198 = vec4(0.0);
    _1198.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1198.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1198.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _499 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1198.xyz) + _1192.xyz;
    vec4 _1204 = _1192;
    _1204.x = _499.x;
    _1204.y = _499.y;
    _1204.z = _499.z;
    vec3 _511 = _1204.xyz - _1125.xyz;
    vec4 _1210 = _1204;
    _1210.x = _511.x;
    _1210.y = _511.y;
    _1210.z = _511.z;
    float _522 = dot(_1210.xyz, _1210.xyz);
    _1125.w = _522;
    float _1038 = inversesqrt(abs(_522));
    _1125.w = _1038;
    float _531 = 1.0 / _1038;
    vec4 _1222 = _1448;
    _1222.w = _531;
    vec3 _537 = _1210.xyz * _1125.www;
    vec4 _1224 = _1210;
    _1224.x = _537.x;
    _1224.y = _537.y;
    _1224.z = _537.z;
    _1125.w = clamp(dot(_1224.xyz, _1222.xyz), 0.0, 1.0);
    vec3 _557 = _1125.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1224.x = _557.x;
    _1224.y = _557.y;
    _1224.z = _557.z;
    float _572 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _531) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1125.w = _572;
    float _578 = 1.0 / (_1038 * _1038);
    _1222.w = _578;
    float _587 = (_578 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _572;
    _1125.w = _587;
    _1125.w = 1.0 / _587;
    _1222.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1222.xyz), 0.0, 1.0);
    vec4 _1254 = vec4(0.0);
    _1254.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1254.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1254.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _620 = (_1254.xyz * _1222.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1260 = _1254;
    _1260.x = _620.x;
    _1260.y = _620.y;
    _1260.z = _620.z;
    vec3 _634 = (_1224.xyz * _1125.www) + _1260.xyz;
    vec4 _1266 = _1224;
    _1266.x = _634.x;
    _1266.y = _634.y;
    _1266.z = _634.z;
    vec3 _647 = _1073.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1260.x = _647.x;
    _1260.y = _647.y;
    _1260.z = _647.z;
    vec3 _662 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1186.xyz) + _1260.xyz;
    vec4 _1278 = _1260;
    _1278.x = _662.x;
    _1278.y = _662.y;
    _1278.z = _662.z;
    vec3 _677 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1198.xyz) + _1278.xyz;
    vec4 _1284 = _1278;
    _1284.x = _677.x;
    _1284.y = _677.y;
    _1284.z = _677.z;
    vec3 _689 = _1284.xyz - _1125.xyz;
    vec4 _1290 = _1284;
    _1290.x = _689.x;
    _1290.y = _689.y;
    _1290.z = _689.z;
    float _700 = dot(_1290.xyz, _1290.xyz);
    _1125.w = _700;
    float _1043 = inversesqrt(abs(_700));
    _1125.w = _1043;
    float _709 = 1.0 / _1043;
    _1222.w = _709;
    vec3 _715 = _1290.xyz * _1125.www;
    vec4 _1304 = _1290;
    _1304.x = _715.x;
    _1304.y = _715.y;
    _1304.z = _715.z;
    _1125.w = clamp(dot(_1304.xyz, _1222.xyz), 0.0, 1.0);
    vec3 _735 = _1125.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1304.x = _735.x;
    _1304.y = _735.y;
    _1304.z = _735.z;
    float _750 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _709) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1125.w = _750;
    float _756 = 1.0 / (_1043 * _1043);
    _1222.w = _756;
    float _765 = (_756 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _750;
    _1125.w = _765;
    float _769 = 1.0 / _765;
    _1125.w = _769;
    vec3 _778 = (_1304.xyz * _1125.www) + _1266.xyz;
    vec4 _1332 = _1266;
    _1332.x = _778.x;
    _1332.y = _778.y;
    _1332.z = _778.z;
    vec3 _791 = _1073.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1338 = _1073;
    _1338.x = _791.x;
    _1338.y = _791.y;
    _1338.z = _791.z;
    vec3 _806 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1186.xyz) + _1338.xyz;
    vec4 _1344 = _1338;
    _1344.x = _806.x;
    _1344.y = _806.y;
    _1344.z = _806.z;
    vec3 _821 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1198.xyz) + _1344.xyz;
    vec4 _1350 = _1344;
    _1350.x = _821.x;
    _1350.y = _821.y;
    _1350.z = _821.z;
    vec4 _1451 = vec4(_1350.xyz - _1125.xyz, _769);
    vec3 _841 = _1451.xyz;
    float _844 = dot(_841, _841);
    vec4 _1362 = _1451;
    _1362.w = _844;
    float _1048 = inversesqrt(abs(_844));
    _1362.w = _1048;
    float _853 = 1.0 / _1048;
    _1222.w = _853;
    vec4 _1452 = vec4(_1362.xyz * _1362.www, _1048);
    _1452.x = clamp(dot(_1452.xyz, _1222.xyz), 0.0, 1.0);
    float _894 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _853) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1453 = vec4(_1452.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _894);
    float _909 = ((1.0 / (_1048 * _1048)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _894;
    _1453.w = _909;
    float _913 = 1.0 / _909;
    _1453.w = _913;
    vec4 _1455 = vec4((_1453.xyz * _1453.www) + _1332.xyz, _913);
    vec3 _932 = min(_1455.xyz, vec3(1.0));
    vec4 _1404 = _1455;
    _1404.x = _932.x;
    _1404.y = _932.y;
    _1404.z = _932.z;
    vec4 _1055 = optPush.clipToTarget * ((_140.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _162);
    gl_Position = vec4(_1055.x, -_1055.y, _1055.zw);
    color0 = vec4(_1404.xyz * v2.xyz, 1.0);
    color1 = vec4(_1448.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1077;
    texcoord1 = _1085;
    texcoord2 = _1093;
    texcoord3 = _1101;
    texcoord4 = _1109;
    fog0 = min(_1066, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
