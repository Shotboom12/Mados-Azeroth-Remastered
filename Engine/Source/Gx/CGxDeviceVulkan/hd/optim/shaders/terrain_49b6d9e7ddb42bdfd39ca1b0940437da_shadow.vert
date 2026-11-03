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
    vec3 _175 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _1068 = _160;
    _1068.x = _175.x;
    _1068.y = _175.y;
    _1068.z = _175.z;
    vec3 _190 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1068.xyz;
    vec4 _1074 = _1068;
    _1074.x = _190.x;
    _1074.y = _190.y;
    _1074.z = _190.z;
    vec3 _205 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1074.xyz;
    float _207 = _205.x;
    vec4 _1080 = _1074;
    _1080.x = _207;
    _1080.y = _205.y;
    _1080.z = _205.z;
    float _216 = dot(_138.xyz, _1080.xyz);
    vec4 _1086 = _138;
    _1086.w = _216;
    _1086.w = _216 + _216;
    vec3 _232 = (_1080.xyz * (-_1086.www)) + _1086.xyz;
    vec4 _1092 = vec4(0.0);
    _1092.x = _232.x;
    _1092.y = _232.y;
    float _238 = _232.z;
    _1092.z = _238;
    vec3 _245 = _1092.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _1098 = vec4(0.0);
    _1098.x = _245.x;
    _1098.y = _245.y;
    _1098.z = _245.z;
    vec3 _261 = (_1092.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _1098.xyz;
    vec4 _1453 = vec4(_261.xy, _238, _261.z);
    vec3 _277 = (_1453.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _1453.xyw;
    vec4 _1110 = vec4(0.0);
    _1110.x = _277.x;
    _1110.y = _277.y;
    _1110.z = _277.z;
    vec2 _292 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _1453.x = _292.x;
    _1453.y = _292.y;
    _1098.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1098.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _314 = (_1453.xy * _1098.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1124 = vec4(0.0);
    _1124.x = _314.x;
    _1124.y = _314.y;
    _1098.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1098.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _336 = (_1453.xy * _1098.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1132 = vec4(0.0);
    _1132.x = _336.x;
    _1132.y = _336.y;
    float _350 = (_138.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1086.w = _350;
    float _354 = max(_350, 0.0);
    _1086.w = _354;
    float _1065;
    if (_354 == 0.0)
    {
        _1065 = 0.0;
    }
    else
    {
        _1065 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_354)));
    }
    vec4 _1454 = vec4(_207, _205.yz, _1065);
    vec3 _371 = -_1086.xyz;
    float _375 = dot(_371, _371);
    vec4 _1148 = _1086;
    _1148.w = _375;
    _1148.w = inversesqrt(abs(_375));
    vec3 _392 = ((-_1148.xyz) * _1148.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1453.x = _392.x;
    _1453.y = _392.y;
    _1453.z = _392.z;
    vec4 _1017 = _1453 * inversesqrt(dot(_1453.xyz, _1453.xyz));
    _1098.x = _1017.x;
    _1098.y = _1017.y;
    _1098.z = _1017.z;
    float _413 = dot(_1098.xyz, _1454.xyz);
    _1148.w = _413;
    float _417 = max(_413, 0.0);
    _1148.w = _417;
    float _1066;
    if (_417 == 0.0)
    {
        _1066 = 0.0;
    }
    else
    {
        _1066 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_417)));
    }
    _1454.w = _1066;
    _1453.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1453.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1453.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _455 = _1453.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    _1098.x = _455.x;
    _1098.y = _455.y;
    _1098.z = _455.z;
    vec4 _1191 = vec4(0.0);
    _1191.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1191.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1191.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _479 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1191.xyz) + _1098.xyz;
    vec4 _1197 = _1098;
    _1197.x = _479.x;
    _1197.y = _479.y;
    _1197.z = _479.z;
    vec4 _1203 = vec4(0.0);
    _1203.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1203.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1203.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _503 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1203.xyz) + _1197.xyz;
    vec4 _1209 = _1197;
    _1209.x = _503.x;
    _1209.y = _503.y;
    _1209.z = _503.z;
    vec3 _515 = _1209.xyz - _1148.xyz;
    vec4 _1215 = _1209;
    _1215.x = _515.x;
    _1215.y = _515.y;
    _1215.z = _515.z;
    float _526 = dot(_1215.xyz, _1215.xyz);
    _1148.w = _526;
    float _1037 = inversesqrt(abs(_526));
    _1148.w = _1037;
    float _535 = 1.0 / _1037;
    vec4 _1227 = _1454;
    _1227.w = _535;
    vec3 _541 = _1215.xyz * _1148.www;
    vec4 _1229 = _1215;
    _1229.x = _541.x;
    _1229.y = _541.y;
    _1229.z = _541.z;
    _1148.w = clamp(dot(_1229.xyz, _1227.xyz), 0.0, 1.0);
    vec3 _561 = _1148.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1229.x = _561.x;
    _1229.y = _561.y;
    _1229.z = _561.z;
    float _576 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _535) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1148.w = _576;
    float _582 = 1.0 / (_1037 * _1037);
    _1227.w = _582;
    float _591 = (_582 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _576;
    _1148.w = _591;
    _1148.w = 1.0 / _591;
    _1227.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1227.xyz), 0.0, 1.0);
    vec4 _1259 = vec4(0.0);
    _1259.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1259.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1259.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _624 = (_1259.xyz * _1227.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1265 = _1259;
    _1265.x = _624.x;
    _1265.y = _624.y;
    _1265.z = _624.z;
    vec3 _638 = (_1229.xyz * _1148.www) + _1265.xyz;
    vec4 _1271 = _1229;
    _1271.x = _638.x;
    _1271.y = _638.y;
    _1271.z = _638.z;
    vec3 _651 = _1453.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1265.x = _651.x;
    _1265.y = _651.y;
    _1265.z = _651.z;
    vec3 _666 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1191.xyz) + _1265.xyz;
    vec4 _1283 = _1265;
    _1283.x = _666.x;
    _1283.y = _666.y;
    _1283.z = _666.z;
    vec3 _681 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1203.xyz) + _1283.xyz;
    vec4 _1289 = _1283;
    _1289.x = _681.x;
    _1289.y = _681.y;
    _1289.z = _681.z;
    vec3 _693 = _1289.xyz - _1148.xyz;
    vec4 _1295 = _1289;
    _1295.x = _693.x;
    _1295.y = _693.y;
    _1295.z = _693.z;
    float _704 = dot(_1295.xyz, _1295.xyz);
    _1148.w = _704;
    float _1042 = inversesqrt(abs(_704));
    _1148.w = _1042;
    float _713 = 1.0 / _1042;
    _1227.w = _713;
    vec3 _719 = _1295.xyz * _1148.www;
    vec4 _1309 = _1295;
    _1309.x = _719.x;
    _1309.y = _719.y;
    _1309.z = _719.z;
    _1148.w = clamp(dot(_1309.xyz, _1227.xyz), 0.0, 1.0);
    vec3 _739 = _1148.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1309.x = _739.x;
    _1309.y = _739.y;
    _1309.z = _739.z;
    float _754 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _713) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1148.w = _754;
    float _760 = 1.0 / (_1042 * _1042);
    _1227.w = _760;
    float _769 = (_760 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _754;
    _1148.w = _769;
    float _773 = 1.0 / _769;
    _1148.w = _773;
    vec3 _782 = (_1309.xyz * _1148.www) + _1271.xyz;
    vec4 _1337 = _1271;
    _1337.x = _782.x;
    _1337.y = _782.y;
    _1337.z = _782.z;
    vec3 _795 = _1453.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1343 = _1453;
    _1343.x = _795.x;
    _1343.y = _795.y;
    _1343.z = _795.z;
    vec3 _810 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1191.xyz) + _1343.xyz;
    vec4 _1349 = _1343;
    _1349.x = _810.x;
    _1349.y = _810.y;
    _1349.z = _810.z;
    vec3 _825 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1203.xyz) + _1349.xyz;
    vec4 _1355 = _1349;
    _1355.x = _825.x;
    _1355.y = _825.y;
    _1355.z = _825.z;
    vec4 _1457 = vec4(_1355.xyz - _1148.xyz, _773);
    vec3 _845 = _1457.xyz;
    float _848 = dot(_845, _845);
    vec4 _1367 = _1457;
    _1367.w = _848;
    float _1047 = inversesqrt(abs(_848));
    _1367.w = _1047;
    float _857 = 1.0 / _1047;
    _1227.w = _857;
    vec4 _1458 = vec4(_1367.xyz * _1367.www, _1047);
    _1458.x = clamp(dot(_1458.xyz, _1227.xyz), 0.0, 1.0);
    float _898 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _857) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1459 = vec4(_1458.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _898);
    float _913 = ((1.0 / (_1047 * _1047)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _898;
    _1459.w = _913;
    float _917 = 1.0 / _913;
    _1459.w = _917;
    vec4 _1461 = vec4((_1459.xyz * _1459.www) + _1337.xyz, _917);
    vec3 _936 = min(_1461.xyz, vec3(1.0));
    vec4 _1409 = _1461;
    _1409.x = _936.x;
    _1409.y = _936.y;
    _1409.z = _936.z;
    vec4 _1054 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_1054.x, -_1054.y, _1054.zw);
    color0 = vec4(_1409.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1454.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1110;
    texcoord1 = _1124;
    texcoord2 = _1132;
    fog0 = min(_1065, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
