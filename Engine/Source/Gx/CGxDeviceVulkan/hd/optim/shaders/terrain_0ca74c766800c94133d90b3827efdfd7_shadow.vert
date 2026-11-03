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
    vec3 _175 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _1069 = _160;
    _1069.x = _175.x;
    _1069.y = _175.y;
    _1069.z = _175.z;
    vec3 _190 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1069.xyz;
    vec4 _1075 = _1069;
    _1075.x = _190.x;
    _1075.y = _190.y;
    _1075.z = _190.z;
    vec3 _205 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1075.xyz;
    float _207 = _205.x;
    vec4 _1081 = _1075;
    _1081.x = _207;
    _1081.y = _205.y;
    _1081.z = _205.z;
    float _216 = dot(_138.xyz, _1081.xyz);
    vec4 _1087 = _138;
    _1087.w = _216;
    _1087.w = _216 + _216;
    vec3 _232 = (_1081.xyz * (-_1087.www)) + _1087.xyz;
    vec4 _1093 = vec4(0.0);
    _1093.x = _232.x;
    _1093.y = _232.y;
    float _238 = _232.z;
    _1093.z = _238;
    vec3 _245 = _1093.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _1099 = vec4(0.0);
    _1099.x = _245.x;
    _1099.y = _245.y;
    _1099.z = _245.z;
    vec3 _261 = (_1093.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _1099.xyz;
    vec4 _1454 = vec4(_261.xy, _238, _261.z);
    vec3 _277 = (_1454.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _1454.xyw;
    vec4 _1111 = vec4(0.0);
    _1111.x = _277.x;
    _1111.y = _277.y;
    _1111.z = _277.z;
    vec2 _292 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _1454.x = _292.x;
    _1454.y = _292.y;
    _1099.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1099.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _314 = (_1454.xy * _1099.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1125 = vec4(0.0);
    _1125.x = _314.x;
    _1125.y = _314.y;
    _1099.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1099.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _336 = (_1454.xy * _1099.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1133 = vec4(0.0);
    _1133.x = _336.x;
    _1133.y = _336.y;
    float _350 = (_138.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1087.w = _350;
    float _354 = max(_350, 0.0);
    _1087.w = _354;
    float _1066;
    if (_354 == 0.0)
    {
        _1066 = 0.0;
    }
    else
    {
        _1066 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_354)));
    }
    vec4 _1455 = vec4(_207, _205.yz, _1066);
    vec3 _371 = -_1087.xyz;
    float _375 = dot(_371, _371);
    vec4 _1149 = _1087;
    _1149.w = _375;
    _1149.w = inversesqrt(abs(_375));
    vec3 _392 = ((-_1149.xyz) * _1149.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1454.x = _392.x;
    _1454.y = _392.y;
    _1454.z = _392.z;
    vec4 _1018 = _1454 * inversesqrt(dot(_1454.xyz, _1454.xyz));
    _1099.x = _1018.x;
    _1099.y = _1018.y;
    _1099.z = _1018.z;
    float _413 = dot(_1099.xyz, _1455.xyz);
    _1149.w = _413;
    float _417 = max(_413, 0.0);
    _1149.w = _417;
    float _1067;
    if (_417 == 0.0)
    {
        _1067 = 0.0;
    }
    else
    {
        _1067 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_417)));
    }
    _1455.w = _1067;
    _1454.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1454.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1454.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _455 = _1454.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    _1099.x = _455.x;
    _1099.y = _455.y;
    _1099.z = _455.z;
    vec4 _1192 = vec4(0.0);
    _1192.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1192.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1192.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _479 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1192.xyz) + _1099.xyz;
    vec4 _1198 = _1099;
    _1198.x = _479.x;
    _1198.y = _479.y;
    _1198.z = _479.z;
    vec4 _1204 = vec4(0.0);
    _1204.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1204.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1204.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _503 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1204.xyz) + _1198.xyz;
    vec4 _1210 = _1198;
    _1210.x = _503.x;
    _1210.y = _503.y;
    _1210.z = _503.z;
    vec3 _515 = _1210.xyz - _1149.xyz;
    vec4 _1216 = _1210;
    _1216.x = _515.x;
    _1216.y = _515.y;
    _1216.z = _515.z;
    float _526 = dot(_1216.xyz, _1216.xyz);
    _1149.w = _526;
    float _1038 = inversesqrt(abs(_526));
    _1149.w = _1038;
    float _535 = 1.0 / _1038;
    vec4 _1228 = _1455;
    _1228.w = _535;
    vec3 _541 = _1216.xyz * _1149.www;
    vec4 _1230 = _1216;
    _1230.x = _541.x;
    _1230.y = _541.y;
    _1230.z = _541.z;
    _1149.w = clamp(dot(_1230.xyz, _1228.xyz), 0.0, 1.0);
    vec3 _561 = _1149.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1230.x = _561.x;
    _1230.y = _561.y;
    _1230.z = _561.z;
    float _576 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _535) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1149.w = _576;
    float _582 = 1.0 / (_1038 * _1038);
    _1228.w = _582;
    float _591 = (_582 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _576;
    _1149.w = _591;
    _1149.w = 1.0 / _591;
    _1228.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1228.xyz), 0.0, 1.0);
    vec4 _1260 = vec4(0.0);
    _1260.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1260.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1260.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _624 = (_1260.xyz * _1228.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1266 = _1260;
    _1266.x = _624.x;
    _1266.y = _624.y;
    _1266.z = _624.z;
    vec3 _638 = (_1230.xyz * _1149.www) + _1266.xyz;
    vec4 _1272 = _1230;
    _1272.x = _638.x;
    _1272.y = _638.y;
    _1272.z = _638.z;
    vec3 _651 = _1454.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1266.x = _651.x;
    _1266.y = _651.y;
    _1266.z = _651.z;
    vec3 _666 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1192.xyz) + _1266.xyz;
    vec4 _1284 = _1266;
    _1284.x = _666.x;
    _1284.y = _666.y;
    _1284.z = _666.z;
    vec3 _681 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1204.xyz) + _1284.xyz;
    vec4 _1290 = _1284;
    _1290.x = _681.x;
    _1290.y = _681.y;
    _1290.z = _681.z;
    vec3 _693 = _1290.xyz - _1149.xyz;
    vec4 _1296 = _1290;
    _1296.x = _693.x;
    _1296.y = _693.y;
    _1296.z = _693.z;
    float _704 = dot(_1296.xyz, _1296.xyz);
    _1149.w = _704;
    float _1043 = inversesqrt(abs(_704));
    _1149.w = _1043;
    float _713 = 1.0 / _1043;
    _1228.w = _713;
    vec3 _719 = _1296.xyz * _1149.www;
    vec4 _1310 = _1296;
    _1310.x = _719.x;
    _1310.y = _719.y;
    _1310.z = _719.z;
    _1149.w = clamp(dot(_1310.xyz, _1228.xyz), 0.0, 1.0);
    vec3 _739 = _1149.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1310.x = _739.x;
    _1310.y = _739.y;
    _1310.z = _739.z;
    float _754 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _713) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1149.w = _754;
    float _760 = 1.0 / (_1043 * _1043);
    _1228.w = _760;
    float _769 = (_760 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _754;
    _1149.w = _769;
    float _773 = 1.0 / _769;
    _1149.w = _773;
    vec3 _782 = (_1310.xyz * _1149.www) + _1272.xyz;
    vec4 _1338 = _1272;
    _1338.x = _782.x;
    _1338.y = _782.y;
    _1338.z = _782.z;
    vec3 _795 = _1454.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1344 = _1454;
    _1344.x = _795.x;
    _1344.y = _795.y;
    _1344.z = _795.z;
    vec3 _810 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1192.xyz) + _1344.xyz;
    vec4 _1350 = _1344;
    _1350.x = _810.x;
    _1350.y = _810.y;
    _1350.z = _810.z;
    vec3 _825 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1204.xyz) + _1350.xyz;
    vec4 _1356 = _1350;
    _1356.x = _825.x;
    _1356.y = _825.y;
    _1356.z = _825.z;
    vec4 _1458 = vec4(_1356.xyz - _1149.xyz, _773);
    vec3 _845 = _1458.xyz;
    float _848 = dot(_845, _845);
    vec4 _1368 = _1458;
    _1368.w = _848;
    float _1048 = inversesqrt(abs(_848));
    _1368.w = _1048;
    float _857 = 1.0 / _1048;
    _1228.w = _857;
    vec4 _1459 = vec4(_1368.xyz * _1368.www, _1048);
    _1459.x = clamp(dot(_1459.xyz, _1228.xyz), 0.0, 1.0);
    float _898 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _857) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1460 = vec4(_1459.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _898);
    float _913 = ((1.0 / (_1048 * _1048)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _898;
    _1460.w = _913;
    float _917 = 1.0 / _913;
    _1460.w = _917;
    vec4 _1462 = vec4((_1460.xyz * _1460.www) + _1338.xyz, _917);
    vec3 _936 = min(_1462.xyz, vec3(1.0));
    vec4 _1410 = _1462;
    _1410.x = _936.x;
    _1410.y = _936.y;
    _1410.z = _936.z;
    vec4 _1055 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_1055.x, -_1055.y, _1055.zw);
    color0 = vec4(_1410.xyz * v2.xyz, 1.0);
    color1 = vec4(_1455.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1111;
    texcoord1 = _1125;
    texcoord2 = _1133;
    fog0 = min(_1066, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
