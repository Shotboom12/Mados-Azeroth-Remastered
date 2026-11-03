#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec4 _1043 = _159;
    _1043.x = _174.x;
    _1043.y = _174.y;
    _1043.z = _174.z;
    vec3 _189 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1043.xyz;
    vec4 _1049 = _1043;
    _1049.x = _189.x;
    _1049.y = _189.y;
    _1049.z = _189.z;
    vec3 _204 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1049.xyz;
    float _206 = _204.x;
    vec4 _1055 = _1049;
    _1055.x = _206;
    _1055.y = _204.y;
    _1055.z = _204.z;
    float _215 = dot(_137.xyz, _1055.xyz);
    vec4 _1061 = _137;
    _1061.w = _215;
    _1061.w = _215 + _215;
    vec3 _231 = (_1055.xyz * (-_1061.www)) + _1061.xyz;
    vec4 _1067 = vec4(0.0);
    _1067.x = _231.x;
    _1067.y = _231.y;
    float _237 = _231.z;
    _1067.z = _237;
    vec3 _244 = _1067.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _1073 = vec4(0.0);
    _1073.x = _244.x;
    _1073.y = _244.y;
    _1073.z = _244.z;
    vec3 _260 = (_1067.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _1073.xyz;
    vec4 _1420 = vec4(_260.xy, _237, _260.z);
    vec3 _276 = (_1420.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _1420.xyw;
    vec4 _1085 = vec4(0.0);
    _1085.x = _276.x;
    _1085.y = _276.y;
    _1085.z = _276.z;
    vec2 _291 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _1420.x = _291.x;
    _1420.y = _291.y;
    _1073.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1073.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _313 = (_1420.xy * _1073.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1099 = vec4(0.0);
    _1099.x = _313.x;
    _1099.y = _313.y;
    float _327 = (_137.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1061.w = _327;
    float _331 = max(_327, 0.0);
    _1061.w = _331;
    float _1040;
    if (_331 == 0.0)
    {
        _1040 = 0.0;
    }
    else
    {
        _1040 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_331)));
    }
    vec4 _1421 = vec4(_206, _204.yz, _1040);
    vec3 _348 = -_1061.xyz;
    float _352 = dot(_348, _348);
    vec4 _1115 = _1061;
    _1115.w = _352;
    _1115.w = inversesqrt(abs(_352));
    vec3 _369 = ((-_1115.xyz) * _1115.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1420.x = _369.x;
    _1420.y = _369.y;
    _1420.z = _369.z;
    vec4 _992 = _1420 * inversesqrt(dot(_1420.xyz, _1420.xyz));
    _1073.x = _992.x;
    _1073.y = _992.y;
    _1073.z = _992.z;
    float _390 = dot(_1073.xyz, _1421.xyz);
    _1115.w = _390;
    float _394 = max(_390, 0.0);
    _1115.w = _394;
    float _1041;
    if (_394 == 0.0)
    {
        _1041 = 0.0;
    }
    else
    {
        _1041 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_394)));
    }
    _1421.w = _1041;
    _1420.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1420.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1420.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _432 = _1420.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    _1073.x = _432.x;
    _1073.y = _432.y;
    _1073.z = _432.z;
    vec4 _1158 = vec4(0.0);
    _1158.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1158.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1158.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _456 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1158.xyz) + _1073.xyz;
    vec4 _1164 = _1073;
    _1164.x = _456.x;
    _1164.y = _456.y;
    _1164.z = _456.z;
    vec4 _1170 = vec4(0.0);
    _1170.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1170.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1170.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _480 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1170.xyz) + _1164.xyz;
    vec4 _1176 = _1164;
    _1176.x = _480.x;
    _1176.y = _480.y;
    _1176.z = _480.z;
    vec3 _492 = _1176.xyz - _1115.xyz;
    vec4 _1182 = _1176;
    _1182.x = _492.x;
    _1182.y = _492.y;
    _1182.z = _492.z;
    float _503 = dot(_1182.xyz, _1182.xyz);
    _1115.w = _503;
    float _1012 = inversesqrt(abs(_503));
    _1115.w = _1012;
    float _512 = 1.0 / _1012;
    vec4 _1194 = _1421;
    _1194.w = _512;
    vec3 _518 = _1182.xyz * _1115.www;
    vec4 _1196 = _1182;
    _1196.x = _518.x;
    _1196.y = _518.y;
    _1196.z = _518.z;
    _1115.w = clamp(dot(_1196.xyz, _1194.xyz), 0.0, 1.0);
    vec3 _538 = _1115.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1196.x = _538.x;
    _1196.y = _538.y;
    _1196.z = _538.z;
    float _553 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _512) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1115.w = _553;
    float _559 = 1.0 / (_1012 * _1012);
    _1194.w = _559;
    float _568 = (_559 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _553;
    _1115.w = _568;
    _1115.w = 1.0 / _568;
    _1194.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1194.xyz), 0.0, 1.0);
    vec4 _1226 = vec4(0.0);
    _1226.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1226.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1226.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _601 = (_1226.xyz * _1194.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1232 = _1226;
    _1232.x = _601.x;
    _1232.y = _601.y;
    _1232.z = _601.z;
    vec3 _615 = (_1196.xyz * _1115.www) + _1232.xyz;
    vec4 _1238 = _1196;
    _1238.x = _615.x;
    _1238.y = _615.y;
    _1238.z = _615.z;
    vec3 _628 = _1420.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1232.x = _628.x;
    _1232.y = _628.y;
    _1232.z = _628.z;
    vec3 _643 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1158.xyz) + _1232.xyz;
    vec4 _1250 = _1232;
    _1250.x = _643.x;
    _1250.y = _643.y;
    _1250.z = _643.z;
    vec3 _658 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1170.xyz) + _1250.xyz;
    vec4 _1256 = _1250;
    _1256.x = _658.x;
    _1256.y = _658.y;
    _1256.z = _658.z;
    vec3 _670 = _1256.xyz - _1115.xyz;
    vec4 _1262 = _1256;
    _1262.x = _670.x;
    _1262.y = _670.y;
    _1262.z = _670.z;
    float _681 = dot(_1262.xyz, _1262.xyz);
    _1115.w = _681;
    float _1017 = inversesqrt(abs(_681));
    _1115.w = _1017;
    float _690 = 1.0 / _1017;
    _1194.w = _690;
    vec3 _696 = _1262.xyz * _1115.www;
    vec4 _1276 = _1262;
    _1276.x = _696.x;
    _1276.y = _696.y;
    _1276.z = _696.z;
    _1115.w = clamp(dot(_1276.xyz, _1194.xyz), 0.0, 1.0);
    vec3 _716 = _1115.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1276.x = _716.x;
    _1276.y = _716.y;
    _1276.z = _716.z;
    float _731 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _690) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1115.w = _731;
    float _737 = 1.0 / (_1017 * _1017);
    _1194.w = _737;
    float _746 = (_737 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _731;
    _1115.w = _746;
    float _750 = 1.0 / _746;
    _1115.w = _750;
    vec3 _759 = (_1276.xyz * _1115.www) + _1238.xyz;
    vec4 _1304 = _1238;
    _1304.x = _759.x;
    _1304.y = _759.y;
    _1304.z = _759.z;
    vec3 _772 = _1420.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1310 = _1420;
    _1310.x = _772.x;
    _1310.y = _772.y;
    _1310.z = _772.z;
    vec3 _787 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1158.xyz) + _1310.xyz;
    vec4 _1316 = _1310;
    _1316.x = _787.x;
    _1316.y = _787.y;
    _1316.z = _787.z;
    vec3 _802 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1170.xyz) + _1316.xyz;
    vec4 _1322 = _1316;
    _1322.x = _802.x;
    _1322.y = _802.y;
    _1322.z = _802.z;
    vec4 _1424 = vec4(_1322.xyz - _1115.xyz, _750);
    vec3 _822 = _1424.xyz;
    float _825 = dot(_822, _822);
    vec4 _1334 = _1424;
    _1334.w = _825;
    float _1022 = inversesqrt(abs(_825));
    _1334.w = _1022;
    float _834 = 1.0 / _1022;
    _1194.w = _834;
    vec4 _1425 = vec4(_1334.xyz * _1334.www, _1022);
    _1425.x = clamp(dot(_1425.xyz, _1194.xyz), 0.0, 1.0);
    float _875 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _834) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1426 = vec4(_1425.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _875);
    float _890 = ((1.0 / (_1022 * _1022)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _875;
    _1426.w = _890;
    float _894 = 1.0 / _890;
    _1426.w = _894;
    vec4 _1428 = vec4((_1426.xyz * _1426.www) + _1304.xyz, _894);
    vec3 _913 = min(_1428.xyz, vec3(1.0));
    vec4 _1376 = _1428;
    _1376.x = _913.x;
    _1376.y = _913.y;
    _1376.z = _913.z;
    vec4 _1029 = optPush.clipToTarget * ((_137.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _159);
    gl_Position = vec4(_1029.x, -_1029.y, _1029.zw);
    color0 = vec4(_1376.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1421.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1085;
    texcoord1 = _1099;
    fog0 = min(_1040, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
