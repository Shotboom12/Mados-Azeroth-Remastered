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
    vec3 _178 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _1135 = _163;
    _1135.x = _178.x;
    _1135.y = _178.y;
    _1135.z = _178.z;
    vec3 _193 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1135.xyz;
    vec4 _1141 = _1135;
    _1141.x = _193.x;
    _1141.y = _193.y;
    _1141.z = _193.z;
    vec3 _208 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1141.xyz;
    float _210 = _208.x;
    vec4 _1147 = _1141;
    _1147.x = _210;
    _1147.y = _208.y;
    _1147.z = _208.z;
    vec3 _216 = _141.xyz;
    float _219 = dot(_216, _1147.xyz);
    vec4 _1548 = vec4(_210, _208.yz, _219);
    _1548.w = _219 + _219;
    vec3 _235 = (_1548.xyz * (-_1548.www)) + _216;
    vec4 _1159 = vec4(0.0);
    _1159.x = _235.x;
    _1159.y = _235.y;
    float _241 = _235.z;
    _1159.z = _241;
    vec3 _248 = _1159.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _1165 = vec4(0.0);
    _1165.x = _248.x;
    _1165.y = _248.y;
    _1165.z = _248.z;
    vec3 _264 = (_1159.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _1165.xyz;
    vec4 _1549 = vec4(_264.xy, _241, _264.z);
    vec3 _280 = (_1549.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _1549.xyw;
    vec4 _1177 = vec4(0.0);
    _1177.x = _280.x;
    _1177.y = _280.y;
    _1177.z = _280.z;
    vec2 _295 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _1549.x = _295.x;
    _1549.y = _295.y;
    _1165.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1165.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _317 = (_1549.xy * _1165.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1191 = vec4(0.0);
    _1191.x = _317.x;
    _1191.y = _317.y;
    float _323 = _141.z;
    float _331 = (_323 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1548.w = _331;
    float _335 = max(_331, 0.0);
    _1548.w = _335;
    float _1132;
    if (_335 == 0.0)
    {
        _1132 = 0.0;
    }
    else
    {
        _1132 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_335)));
    }
    _1549.x = _1132;
    vec3 _352 = -_216;
    float _356 = dot(_352, _352);
    _1548.w = _356;
    _1548.w = inversesqrt(abs(_356));
    vec3 _373 = (_352 * _1548.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1549.x = _373.x;
    _1549.y = _373.y;
    _1549.z = _373.z;
    vec4 _1084 = _1549 * inversesqrt(dot(_1549.xyz, _1549.xyz));
    _1165.x = _1084.x;
    _1165.y = _1084.y;
    _1165.z = _1084.z;
    float _394 = dot(_1165.xyz, _1548.xyz);
    vec4 _1224 = _1548;
    _1224.w = _394;
    float _398 = max(_394, 0.0);
    _1224.w = _398;
    float _1133;
    if (_398 == 0.0)
    {
        _1133 = 0.0;
    }
    else
    {
        _1133 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_398)));
    }
    _1549.x = _1133;
    _1224.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1224.xyz), 0.0, 1.0);
    vec4 _1240 = _1549;
    _1240.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1240.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1240.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1165.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1165.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1165.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _470 = _1165.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1258 = vec4(0.0);
    _1258.x = _470.x;
    _1258.y = _470.y;
    _1258.z = _470.z;
    vec4 _1264 = vec4(0.0);
    _1264.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1264.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1264.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _494 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1264.xyz) + _1258.xyz;
    vec4 _1270 = _1258;
    _1270.x = _494.x;
    _1270.y = _494.y;
    _1270.z = _494.z;
    vec4 _1276 = vec4(0.0);
    _1276.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1276.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1276.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _518 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1276.xyz) + _1270.xyz;
    vec4 _1282 = _1270;
    _1282.x = _518.x;
    _1282.y = _518.y;
    _1282.z = _518.z;
    vec3 _530 = _1282.xyz - _216;
    vec4 _1288 = _1282;
    _1288.x = _530.x;
    _1288.y = _530.y;
    _1288.z = _530.z;
    float _541 = dot(_1288.xyz, _1288.xyz);
    vec4 _1294 = _1224;
    _1294.w = _541;
    float _1104 = inversesqrt(abs(_541));
    _1294.w = _1104;
    vec3 _552 = _1288.xyz * _1294.www;
    vec4 _1299 = _1288;
    _1299.x = _552.x;
    _1299.y = _552.y;
    _1299.z = _552.z;
    float _561 = 1.0 / _1104;
    _1294.w = _561;
    vec4 _1550 = vec4((_1240.xyz * _1224.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1299.xyz, _1294.xyz), 0.0, 1.0));
    vec3 _576 = _1550.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1310 = _1299;
    _1310.x = _576.x;
    _1310.y = _576.y;
    _1310.z = _576.z;
    float _591 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _561) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1550.w = _591;
    float _597 = 1.0 / (_1104 * _1104);
    _1294.w = _597;
    float _606 = (_597 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _591;
    _1294.w = _606;
    _1294.w = 1.0 / _606;
    vec4 _1552 = vec4((_1310.xyz * _1294.www) + _1550.xyz, _591);
    vec3 _632 = _1165.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1336 = _1310;
    _1336.x = _632.x;
    _1336.y = _632.y;
    _1336.z = _632.z;
    vec3 _647 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1264.xyz) + _1336.xyz;
    vec4 _1342 = _1336;
    _1342.x = _647.x;
    _1342.y = _647.y;
    _1342.z = _647.z;
    vec3 _662 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1276.xyz) + _1342.xyz;
    vec4 _1348 = _1342;
    _1348.x = _662.x;
    _1348.y = _662.y;
    _1348.z = _662.z;
    vec3 _674 = _1348.xyz - _216;
    vec4 _1354 = _1348;
    _1354.x = _674.x;
    _1354.y = _674.y;
    _1354.z = _674.z;
    float _685 = dot(_1354.xyz, _1354.xyz);
    vec4 _1360 = _1294;
    _1360.w = _685;
    float _1109 = inversesqrt(abs(_685));
    _1360.w = _1109;
    vec3 _696 = _1354.xyz * _1360.www;
    vec4 _1365 = _1354;
    _1365.x = _696.x;
    _1365.y = _696.y;
    _1365.z = _696.z;
    float _705 = 1.0 / _1109;
    _1360.w = _705;
    _1552.w = clamp(dot(_1365.xyz, _1360.xyz), 0.0, 1.0);
    vec3 _720 = _1552.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1365.x = _720.x;
    _1365.y = _720.y;
    _1365.z = _720.z;
    float _735 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _705) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1552.w = _735;
    float _741 = 1.0 / (_1109 * _1109);
    _1360.w = _741;
    float _750 = (_741 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _735;
    _1360.w = _750;
    _1360.w = 1.0 / _750;
    vec4 _1554 = vec4((_1365.xyz * _1360.www) + _1552.xyz, _735);
    vec3 _776 = _1165.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1402 = _1165;
    _1402.x = _776.x;
    _1402.y = _776.y;
    _1402.z = _776.z;
    vec3 _791 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1264.xyz) + _1402.xyz;
    vec4 _1408 = _1402;
    _1408.x = _791.x;
    _1408.y = _791.y;
    _1408.z = _791.z;
    vec3 _806 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1276.xyz) + _1408.xyz;
    vec4 _1414 = _1408;
    _1414.x = _806.x;
    _1414.y = _806.y;
    _1414.z = _806.z;
    vec3 _818 = _1414.xyz - _216;
    vec4 _1420 = _1414;
    _1420.x = _818.x;
    _1420.y = _818.y;
    _1420.z = _818.z;
    float _829 = dot(_1420.xyz, _1420.xyz);
    vec4 _1426 = _1360;
    _1426.w = _829;
    float _1114 = inversesqrt(abs(_829));
    _1426.w = _1114;
    vec3 _840 = _1420.xyz * _1426.www;
    vec4 _1431 = _1420;
    _1431.x = _840.x;
    _1431.y = _840.y;
    _1431.z = _840.z;
    float _849 = 1.0 / _1114;
    _1426.w = _849;
    _1426.x = clamp(dot(_1431.xyz, _1426.xyz), 0.0, 1.0);
    vec4 _1555 = vec4(_1426.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _849);
    float _879 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _849) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1554.w = _879;
    float _885 = 1.0 / (_1114 * _1114);
    _1555.w = _885;
    float _894 = (_885 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _879;
    _1555.w = _894;
    float _898 = 1.0 / _894;
    _1555.w = _898;
    vec4 _1557 = vec4((_1555.xyz * _1555.www) + _1554.xyz, _898);
    vec3 _917 = min(_1557.xyz, vec3(1.0));
    vec4 _1468 = _1557;
    _1468.x = _917.x;
    _1468.y = _917.y;
    _1468.z = _917.z;
    vec4 _1504 = vec4(0.0);
    _1504.x = _141.x;
    _1504.y = _141.y;
    _1504.z = _323;
    vec4 _1121 = optPush.clipToTarget * ((_141.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _163);
    gl_Position = vec4(_1121.x, -_1121.y, _1121.zw);
    color0 = vec4(_1468.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1549.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1177;
    texcoord1 = _1191;
    texcoord3 = _1504;
    texcoord4 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1132, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
