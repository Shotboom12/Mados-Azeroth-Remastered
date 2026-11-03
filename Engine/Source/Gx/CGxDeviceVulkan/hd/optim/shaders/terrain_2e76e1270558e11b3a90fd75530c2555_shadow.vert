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
    vec2 _180 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1086 = _163;
    _1086.x = _180.x;
    _1086.y = _180.y;
    vec4 _1090 = vec4(0.0);
    _1090.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1090.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _202 = (_1086.xy * _1090.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1094 = vec4(0.0);
    _1094.x = _202.x;
    _1094.y = _202.y;
    _1090.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1090.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _224 = (_1086.xy * _1090.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1102 = vec4(0.0);
    _1102.x = _224.x;
    _1102.y = _224.y;
    float _230 = _141.z;
    float _238 = (_230 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1086.x = _238;
    float _242 = max(_238, 0.0);
    _1086.x = _242;
    float _1083;
    if (_242 == 0.0)
    {
        _1083 = 0.0;
    }
    else
    {
        _1083 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_242)));
    }
    _1090.x = _1083;
    vec3 _263 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1086.x = _263.x;
    _1086.y = _263.y;
    _1086.z = _263.z;
    vec3 _278 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1086.xyz;
    vec4 _1124 = _1086;
    _1124.x = _278.x;
    _1124.y = _278.y;
    _1124.z = _278.z;
    vec3 _301 = _141.xyz;
    vec3 _302 = -_301;
    float _306 = dot(_302, _302);
    vec4 _1477 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1124.xyz, _306);
    _1477.w = inversesqrt(abs(_306));
    vec3 _323 = (_302 * _1477.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1090.x = _323.x;
    _1090.y = _323.y;
    _1090.z = _323.z;
    vec4 _1035 = _1090 * inversesqrt(dot(_1090.xyz, _1090.xyz));
    vec4 _1147 = vec4(0.0);
    _1147.x = _1035.x;
    _1147.y = _1035.y;
    _1147.z = _1035.z;
    float _344 = dot(_1147.xyz, _1477.xyz);
    vec4 _1153 = _1477;
    _1153.w = _344;
    float _348 = max(_344, 0.0);
    _1153.w = _348;
    float _1084;
    if (_348 == 0.0)
    {
        _1084 = 0.0;
    }
    else
    {
        _1084 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_348)));
    }
    _1090.x = _1084;
    _1153.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1153.xyz), 0.0, 1.0);
    vec4 _1169 = _1090;
    _1169.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1169.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1169.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1147.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1147.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1147.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _420 = _1147.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1187 = vec4(0.0);
    _1187.x = _420.x;
    _1187.y = _420.y;
    _1187.z = _420.z;
    vec4 _1193 = vec4(0.0);
    _1193.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1193.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1193.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _444 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1193.xyz) + _1187.xyz;
    vec4 _1199 = _1187;
    _1199.x = _444.x;
    _1199.y = _444.y;
    _1199.z = _444.z;
    vec4 _1205 = vec4(0.0);
    _1205.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1205.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1205.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _468 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1205.xyz) + _1199.xyz;
    vec4 _1211 = _1199;
    _1211.x = _468.x;
    _1211.y = _468.y;
    _1211.z = _468.z;
    vec3 _480 = _1211.xyz - _301;
    vec4 _1217 = _1211;
    _1217.x = _480.x;
    _1217.y = _480.y;
    _1217.z = _480.z;
    float _491 = dot(_1217.xyz, _1217.xyz);
    vec4 _1223 = _1153;
    _1223.w = _491;
    float _1055 = inversesqrt(abs(_491));
    _1223.w = _1055;
    vec3 _502 = _1217.xyz * _1223.www;
    vec4 _1228 = _1217;
    _1228.x = _502.x;
    _1228.y = _502.y;
    _1228.z = _502.z;
    float _511 = 1.0 / _1055;
    _1223.w = _511;
    vec4 _1478 = vec4((_1169.xyz * _1153.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1228.xyz, _1223.xyz), 0.0, 1.0));
    vec3 _526 = _1478.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1239 = _1228;
    _1239.x = _526.x;
    _1239.y = _526.y;
    _1239.z = _526.z;
    float _541 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _511) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1478.w = _541;
    float _547 = 1.0 / (_1055 * _1055);
    _1223.w = _547;
    float _556 = (_547 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _541;
    _1223.w = _556;
    _1223.w = 1.0 / _556;
    vec4 _1480 = vec4((_1239.xyz * _1223.www) + _1478.xyz, _541);
    vec3 _582 = _1147.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1265 = _1239;
    _1265.x = _582.x;
    _1265.y = _582.y;
    _1265.z = _582.z;
    vec3 _597 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1193.xyz) + _1265.xyz;
    vec4 _1271 = _1265;
    _1271.x = _597.x;
    _1271.y = _597.y;
    _1271.z = _597.z;
    vec3 _612 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1205.xyz) + _1271.xyz;
    vec4 _1277 = _1271;
    _1277.x = _612.x;
    _1277.y = _612.y;
    _1277.z = _612.z;
    vec3 _624 = _1277.xyz - _301;
    vec4 _1283 = _1277;
    _1283.x = _624.x;
    _1283.y = _624.y;
    _1283.z = _624.z;
    float _635 = dot(_1283.xyz, _1283.xyz);
    vec4 _1289 = _1223;
    _1289.w = _635;
    float _1060 = inversesqrt(abs(_635));
    _1289.w = _1060;
    vec3 _646 = _1283.xyz * _1289.www;
    vec4 _1294 = _1283;
    _1294.x = _646.x;
    _1294.y = _646.y;
    _1294.z = _646.z;
    float _655 = 1.0 / _1060;
    _1289.w = _655;
    _1480.w = clamp(dot(_1294.xyz, _1289.xyz), 0.0, 1.0);
    vec3 _670 = _1480.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1294.x = _670.x;
    _1294.y = _670.y;
    _1294.z = _670.z;
    float _685 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _655) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1480.w = _685;
    float _691 = 1.0 / (_1060 * _1060);
    _1289.w = _691;
    float _700 = (_691 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _685;
    _1289.w = _700;
    _1289.w = 1.0 / _700;
    vec4 _1482 = vec4((_1294.xyz * _1289.www) + _1480.xyz, _685);
    vec3 _726 = _1147.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1331 = _1147;
    _1331.x = _726.x;
    _1331.y = _726.y;
    _1331.z = _726.z;
    vec3 _741 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1193.xyz) + _1331.xyz;
    vec4 _1337 = _1331;
    _1337.x = _741.x;
    _1337.y = _741.y;
    _1337.z = _741.z;
    vec3 _756 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1205.xyz) + _1337.xyz;
    vec4 _1343 = _1337;
    _1343.x = _756.x;
    _1343.y = _756.y;
    _1343.z = _756.z;
    vec3 _768 = _1343.xyz - _301;
    vec4 _1349 = _1343;
    _1349.x = _768.x;
    _1349.y = _768.y;
    _1349.z = _768.z;
    float _779 = dot(_1349.xyz, _1349.xyz);
    vec4 _1355 = _1289;
    _1355.w = _779;
    float _1065 = inversesqrt(abs(_779));
    _1355.w = _1065;
    vec3 _790 = _1349.xyz * _1355.www;
    vec4 _1360 = _1349;
    _1360.x = _790.x;
    _1360.y = _790.y;
    _1360.z = _790.z;
    float _799 = 1.0 / _1065;
    _1355.w = _799;
    _1355.x = clamp(dot(_1360.xyz, _1355.xyz), 0.0, 1.0);
    vec4 _1483 = vec4(_1355.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _799);
    float _829 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _799) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1482.w = _829;
    float _835 = 1.0 / (_1065 * _1065);
    _1483.w = _835;
    float _844 = (_835 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _829;
    _1483.w = _844;
    float _848 = 1.0 / _844;
    _1483.w = _848;
    vec4 _1485 = vec4((_1483.xyz * _1483.www) + _1482.xyz, _848);
    vec3 _867 = min(_1485.xyz, vec3(1.0));
    vec4 _1397 = _1485;
    _1397.x = _867.x;
    _1397.y = _867.y;
    _1397.z = _867.z;
    vec4 _1433 = vec4(0.0);
    _1433.x = _141.x;
    _1433.y = _141.y;
    _1433.z = _230;
    vec4 _1072 = optPush.clipToTarget * ((_141.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _163);
    gl_Position = vec4(_1072.x, -_1072.y, _1072.zw);
    color0 = vec4(_1397.xyz * v2.xyz, 1.0);
    color1 = vec4(_1090.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1094;
    texcoord1 = _1102;
    texcoord3 = _1433;
    texcoord4 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1083, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
