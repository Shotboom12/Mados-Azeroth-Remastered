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
    vec2 _180 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1085 = _163;
    _1085.x = _180.x;
    _1085.y = _180.y;
    vec4 _1089 = vec4(0.0);
    _1089.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1089.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _202 = (_1085.xy * _1089.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1093 = vec4(0.0);
    _1093.x = _202.x;
    _1093.y = _202.y;
    _1089.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1089.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _224 = (_1085.xy * _1089.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1101 = vec4(0.0);
    _1101.x = _224.x;
    _1101.y = _224.y;
    float _230 = _141.z;
    float _238 = (_230 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1085.x = _238;
    float _242 = max(_238, 0.0);
    _1085.x = _242;
    float _1082;
    if (_242 == 0.0)
    {
        _1082 = 0.0;
    }
    else
    {
        _1082 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_242)));
    }
    _1089.x = _1082;
    vec3 _263 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1085.x = _263.x;
    _1085.y = _263.y;
    _1085.z = _263.z;
    vec3 _278 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1085.xyz;
    vec4 _1123 = _1085;
    _1123.x = _278.x;
    _1123.y = _278.y;
    _1123.z = _278.z;
    vec3 _301 = _141.xyz;
    vec3 _302 = -_301;
    float _306 = dot(_302, _302);
    vec4 _1476 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1123.xyz, _306);
    _1476.w = inversesqrt(abs(_306));
    vec3 _323 = (_302 * _1476.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1089.x = _323.x;
    _1089.y = _323.y;
    _1089.z = _323.z;
    vec4 _1034 = _1089 * inversesqrt(dot(_1089.xyz, _1089.xyz));
    vec4 _1146 = vec4(0.0);
    _1146.x = _1034.x;
    _1146.y = _1034.y;
    _1146.z = _1034.z;
    float _344 = dot(_1146.xyz, _1476.xyz);
    vec4 _1152 = _1476;
    _1152.w = _344;
    float _348 = max(_344, 0.0);
    _1152.w = _348;
    float _1083;
    if (_348 == 0.0)
    {
        _1083 = 0.0;
    }
    else
    {
        _1083 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_348)));
    }
    _1089.x = _1083;
    _1152.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1152.xyz), 0.0, 1.0);
    vec4 _1168 = _1089;
    _1168.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1168.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1168.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1146.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1146.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1146.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _420 = _1146.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1186 = vec4(0.0);
    _1186.x = _420.x;
    _1186.y = _420.y;
    _1186.z = _420.z;
    vec4 _1192 = vec4(0.0);
    _1192.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1192.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1192.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _444 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1192.xyz) + _1186.xyz;
    vec4 _1198 = _1186;
    _1198.x = _444.x;
    _1198.y = _444.y;
    _1198.z = _444.z;
    vec4 _1204 = vec4(0.0);
    _1204.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1204.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1204.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _468 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1204.xyz) + _1198.xyz;
    vec4 _1210 = _1198;
    _1210.x = _468.x;
    _1210.y = _468.y;
    _1210.z = _468.z;
    vec3 _480 = _1210.xyz - _301;
    vec4 _1216 = _1210;
    _1216.x = _480.x;
    _1216.y = _480.y;
    _1216.z = _480.z;
    float _491 = dot(_1216.xyz, _1216.xyz);
    vec4 _1222 = _1152;
    _1222.w = _491;
    float _1054 = inversesqrt(abs(_491));
    _1222.w = _1054;
    vec3 _502 = _1216.xyz * _1222.www;
    vec4 _1227 = _1216;
    _1227.x = _502.x;
    _1227.y = _502.y;
    _1227.z = _502.z;
    float _511 = 1.0 / _1054;
    _1222.w = _511;
    vec4 _1477 = vec4((_1168.xyz * _1152.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1227.xyz, _1222.xyz), 0.0, 1.0));
    vec3 _526 = _1477.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1238 = _1227;
    _1238.x = _526.x;
    _1238.y = _526.y;
    _1238.z = _526.z;
    float _541 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _511) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1477.w = _541;
    float _547 = 1.0 / (_1054 * _1054);
    _1222.w = _547;
    float _556 = (_547 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _541;
    _1222.w = _556;
    _1222.w = 1.0 / _556;
    vec4 _1479 = vec4((_1238.xyz * _1222.www) + _1477.xyz, _541);
    vec3 _582 = _1146.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1264 = _1238;
    _1264.x = _582.x;
    _1264.y = _582.y;
    _1264.z = _582.z;
    vec3 _597 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1192.xyz) + _1264.xyz;
    vec4 _1270 = _1264;
    _1270.x = _597.x;
    _1270.y = _597.y;
    _1270.z = _597.z;
    vec3 _612 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1204.xyz) + _1270.xyz;
    vec4 _1276 = _1270;
    _1276.x = _612.x;
    _1276.y = _612.y;
    _1276.z = _612.z;
    vec3 _624 = _1276.xyz - _301;
    vec4 _1282 = _1276;
    _1282.x = _624.x;
    _1282.y = _624.y;
    _1282.z = _624.z;
    float _635 = dot(_1282.xyz, _1282.xyz);
    vec4 _1288 = _1222;
    _1288.w = _635;
    float _1059 = inversesqrt(abs(_635));
    _1288.w = _1059;
    vec3 _646 = _1282.xyz * _1288.www;
    vec4 _1293 = _1282;
    _1293.x = _646.x;
    _1293.y = _646.y;
    _1293.z = _646.z;
    float _655 = 1.0 / _1059;
    _1288.w = _655;
    _1479.w = clamp(dot(_1293.xyz, _1288.xyz), 0.0, 1.0);
    vec3 _670 = _1479.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1293.x = _670.x;
    _1293.y = _670.y;
    _1293.z = _670.z;
    float _685 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _655) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1479.w = _685;
    float _691 = 1.0 / (_1059 * _1059);
    _1288.w = _691;
    float _700 = (_691 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _685;
    _1288.w = _700;
    _1288.w = 1.0 / _700;
    vec4 _1481 = vec4((_1293.xyz * _1288.www) + _1479.xyz, _685);
    vec3 _726 = _1146.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1330 = _1146;
    _1330.x = _726.x;
    _1330.y = _726.y;
    _1330.z = _726.z;
    vec3 _741 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1192.xyz) + _1330.xyz;
    vec4 _1336 = _1330;
    _1336.x = _741.x;
    _1336.y = _741.y;
    _1336.z = _741.z;
    vec3 _756 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1204.xyz) + _1336.xyz;
    vec4 _1342 = _1336;
    _1342.x = _756.x;
    _1342.y = _756.y;
    _1342.z = _756.z;
    vec3 _768 = _1342.xyz - _301;
    vec4 _1348 = _1342;
    _1348.x = _768.x;
    _1348.y = _768.y;
    _1348.z = _768.z;
    float _779 = dot(_1348.xyz, _1348.xyz);
    vec4 _1354 = _1288;
    _1354.w = _779;
    float _1064 = inversesqrt(abs(_779));
    _1354.w = _1064;
    vec3 _790 = _1348.xyz * _1354.www;
    vec4 _1359 = _1348;
    _1359.x = _790.x;
    _1359.y = _790.y;
    _1359.z = _790.z;
    float _799 = 1.0 / _1064;
    _1354.w = _799;
    _1354.x = clamp(dot(_1359.xyz, _1354.xyz), 0.0, 1.0);
    vec4 _1482 = vec4(_1354.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _799);
    float _829 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _799) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1481.w = _829;
    float _835 = 1.0 / (_1064 * _1064);
    _1482.w = _835;
    float _844 = (_835 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _829;
    _1482.w = _844;
    float _848 = 1.0 / _844;
    _1482.w = _848;
    vec4 _1484 = vec4((_1482.xyz * _1482.www) + _1481.xyz, _848);
    vec3 _867 = min(_1484.xyz, vec3(1.0));
    vec4 _1396 = _1484;
    _1396.x = _867.x;
    _1396.y = _867.y;
    _1396.z = _867.z;
    vec4 _1432 = vec4(0.0);
    _1432.x = _141.x;
    _1432.y = _141.y;
    _1432.z = _230;
    vec4 _1071 = optPush.clipToTarget * ((_141.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _163);
    gl_Position = vec4(_1071.x, -_1071.y, _1071.zw);
    color0 = vec4(_1396.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1089.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1093;
    texcoord1 = _1101;
    texcoord3 = _1432;
    texcoord4 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1082, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
