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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _137 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _159 = (_137.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_137.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_137.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _174 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _1044 = _159;
    _1044.x = _174.x;
    _1044.y = _174.y;
    _1044.z = _174.z;
    vec3 _189 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1044.xyz;
    vec4 _1050 = _1044;
    _1050.x = _189.x;
    _1050.y = _189.y;
    _1050.z = _189.z;
    vec3 _204 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1050.xyz;
    float _206 = _204.x;
    vec4 _1056 = _1050;
    _1056.x = _206;
    _1056.y = _204.y;
    _1056.z = _204.z;
    float _215 = dot(_137.xyz, _1056.xyz);
    vec4 _1062 = _137;
    _1062.w = _215;
    _1062.w = _215 + _215;
    vec3 _231 = (_1056.xyz * (-_1062.www)) + _1062.xyz;
    vec4 _1068 = vec4(0.0);
    _1068.x = _231.x;
    _1068.y = _231.y;
    float _237 = _231.z;
    _1068.z = _237;
    vec3 _244 = _1068.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _1074 = vec4(0.0);
    _1074.x = _244.x;
    _1074.y = _244.y;
    _1074.z = _244.z;
    vec3 _260 = (_1068.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _1074.xyz;
    vec4 _1421 = vec4(_260.xy, _237, _260.z);
    vec3 _276 = (_1421.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _1421.xyw;
    vec4 _1086 = vec4(0.0);
    _1086.x = _276.x;
    _1086.y = _276.y;
    _1086.z = _276.z;
    vec2 _291 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _1421.x = _291.x;
    _1421.y = _291.y;
    _1074.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1074.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _313 = (_1421.xy * _1074.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1100 = vec4(0.0);
    _1100.x = _313.x;
    _1100.y = _313.y;
    float _327 = (_137.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1062.w = _327;
    float _331 = max(_327, 0.0);
    _1062.w = _331;
    float _1041;
    if (_331 == 0.0)
    {
        _1041 = 0.0;
    }
    else
    {
        _1041 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_331)));
    }
    vec4 _1422 = vec4(_206, _204.yz, _1041);
    vec3 _348 = -_1062.xyz;
    float _352 = dot(_348, _348);
    vec4 _1116 = _1062;
    _1116.w = _352;
    _1116.w = inversesqrt(abs(_352));
    vec3 _369 = ((-_1116.xyz) * _1116.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1421.x = _369.x;
    _1421.y = _369.y;
    _1421.z = _369.z;
    vec4 _993 = _1421 * inversesqrt(dot(_1421.xyz, _1421.xyz));
    _1074.x = _993.x;
    _1074.y = _993.y;
    _1074.z = _993.z;
    float _390 = dot(_1074.xyz, _1422.xyz);
    _1116.w = _390;
    float _394 = max(_390, 0.0);
    _1116.w = _394;
    float _1042;
    if (_394 == 0.0)
    {
        _1042 = 0.0;
    }
    else
    {
        _1042 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_394)));
    }
    _1422.w = _1042;
    _1421.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1421.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1421.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _432 = _1421.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    _1074.x = _432.x;
    _1074.y = _432.y;
    _1074.z = _432.z;
    vec4 _1159 = vec4(0.0);
    _1159.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1159.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1159.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _456 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1159.xyz) + _1074.xyz;
    vec4 _1165 = _1074;
    _1165.x = _456.x;
    _1165.y = _456.y;
    _1165.z = _456.z;
    vec4 _1171 = vec4(0.0);
    _1171.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1171.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1171.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _480 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1171.xyz) + _1165.xyz;
    vec4 _1177 = _1165;
    _1177.x = _480.x;
    _1177.y = _480.y;
    _1177.z = _480.z;
    vec3 _492 = _1177.xyz - _1116.xyz;
    vec4 _1183 = _1177;
    _1183.x = _492.x;
    _1183.y = _492.y;
    _1183.z = _492.z;
    float _503 = dot(_1183.xyz, _1183.xyz);
    _1116.w = _503;
    float _1013 = inversesqrt(abs(_503));
    _1116.w = _1013;
    float _512 = 1.0 / _1013;
    vec4 _1195 = _1422;
    _1195.w = _512;
    vec3 _518 = _1183.xyz * _1116.www;
    vec4 _1197 = _1183;
    _1197.x = _518.x;
    _1197.y = _518.y;
    _1197.z = _518.z;
    _1116.w = clamp(dot(_1197.xyz, _1195.xyz), 0.0, 1.0);
    vec3 _538 = _1116.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1197.x = _538.x;
    _1197.y = _538.y;
    _1197.z = _538.z;
    float _553 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _512) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1116.w = _553;
    float _559 = 1.0 / (_1013 * _1013);
    _1195.w = _559;
    float _568 = (_559 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _553;
    _1116.w = _568;
    _1116.w = 1.0 / _568;
    _1195.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1195.xyz), 0.0, 1.0);
    vec4 _1227 = vec4(0.0);
    _1227.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1227.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1227.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _601 = (_1227.xyz * _1195.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1233 = _1227;
    _1233.x = _601.x;
    _1233.y = _601.y;
    _1233.z = _601.z;
    vec3 _615 = (_1197.xyz * _1116.www) + _1233.xyz;
    vec4 _1239 = _1197;
    _1239.x = _615.x;
    _1239.y = _615.y;
    _1239.z = _615.z;
    vec3 _628 = _1421.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1233.x = _628.x;
    _1233.y = _628.y;
    _1233.z = _628.z;
    vec3 _643 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1159.xyz) + _1233.xyz;
    vec4 _1251 = _1233;
    _1251.x = _643.x;
    _1251.y = _643.y;
    _1251.z = _643.z;
    vec3 _658 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1171.xyz) + _1251.xyz;
    vec4 _1257 = _1251;
    _1257.x = _658.x;
    _1257.y = _658.y;
    _1257.z = _658.z;
    vec3 _670 = _1257.xyz - _1116.xyz;
    vec4 _1263 = _1257;
    _1263.x = _670.x;
    _1263.y = _670.y;
    _1263.z = _670.z;
    float _681 = dot(_1263.xyz, _1263.xyz);
    _1116.w = _681;
    float _1018 = inversesqrt(abs(_681));
    _1116.w = _1018;
    float _690 = 1.0 / _1018;
    _1195.w = _690;
    vec3 _696 = _1263.xyz * _1116.www;
    vec4 _1277 = _1263;
    _1277.x = _696.x;
    _1277.y = _696.y;
    _1277.z = _696.z;
    _1116.w = clamp(dot(_1277.xyz, _1195.xyz), 0.0, 1.0);
    vec3 _716 = _1116.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1277.x = _716.x;
    _1277.y = _716.y;
    _1277.z = _716.z;
    float _731 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _690) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1116.w = _731;
    float _737 = 1.0 / (_1018 * _1018);
    _1195.w = _737;
    float _746 = (_737 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _731;
    _1116.w = _746;
    float _750 = 1.0 / _746;
    _1116.w = _750;
    vec3 _759 = (_1277.xyz * _1116.www) + _1239.xyz;
    vec4 _1305 = _1239;
    _1305.x = _759.x;
    _1305.y = _759.y;
    _1305.z = _759.z;
    vec3 _772 = _1421.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1311 = _1421;
    _1311.x = _772.x;
    _1311.y = _772.y;
    _1311.z = _772.z;
    vec3 _787 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1159.xyz) + _1311.xyz;
    vec4 _1317 = _1311;
    _1317.x = _787.x;
    _1317.y = _787.y;
    _1317.z = _787.z;
    vec3 _802 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1171.xyz) + _1317.xyz;
    vec4 _1323 = _1317;
    _1323.x = _802.x;
    _1323.y = _802.y;
    _1323.z = _802.z;
    vec4 _1425 = vec4(_1323.xyz - _1116.xyz, _750);
    vec3 _822 = _1425.xyz;
    float _825 = dot(_822, _822);
    vec4 _1335 = _1425;
    _1335.w = _825;
    float _1023 = inversesqrt(abs(_825));
    _1335.w = _1023;
    float _834 = 1.0 / _1023;
    _1195.w = _834;
    vec4 _1426 = vec4(_1335.xyz * _1335.www, _1023);
    _1426.x = clamp(dot(_1426.xyz, _1195.xyz), 0.0, 1.0);
    float _875 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _834) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1427 = vec4(_1426.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _875);
    float _890 = ((1.0 / (_1023 * _1023)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _875;
    _1427.w = _890;
    float _894 = 1.0 / _890;
    _1427.w = _894;
    vec4 _1429 = vec4((_1427.xyz * _1427.www) + _1305.xyz, _894);
    vec3 _913 = min(_1429.xyz, vec3(1.0));
    vec4 _1377 = _1429;
    _1377.x = _913.x;
    _1377.y = _913.y;
    _1377.z = _913.z;
    vec4 _1030 = optPush.clipToTarget * ((_137.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _159);
    gl_Position = vec4(_1030.x, -_1030.y, _1030.zw);
    color0 = vec4(_1377.xyz * v2.xyz, 1.0);
    color1 = vec4(_1422.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1086;
    texcoord1 = _1100;
    fog0 = min(_1041, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
