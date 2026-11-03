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
    vec4 _1157 = _163;
    _1157.x = _178.x;
    _1157.y = _178.y;
    _1157.z = _178.z;
    vec3 _193 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1157.xyz;
    vec4 _1163 = _1157;
    _1163.x = _193.x;
    _1163.y = _193.y;
    _1163.z = _193.z;
    vec3 _208 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1163.xyz;
    float _210 = _208.x;
    vec4 _1169 = _1163;
    _1169.x = _210;
    _1169.y = _208.y;
    _1169.z = _208.z;
    vec3 _216 = _141.xyz;
    float _219 = dot(_216, _1169.xyz);
    vec4 _1578 = vec4(_210, _208.yz, _219);
    _1578.w = _219 + _219;
    vec3 _235 = (_1578.xyz * (-_1578.www)) + _216;
    vec4 _1181 = vec4(0.0);
    _1181.x = _235.x;
    _1181.y = _235.y;
    float _241 = _235.z;
    _1181.z = _241;
    vec3 _248 = _1181.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _1187 = vec4(0.0);
    _1187.x = _248.x;
    _1187.y = _248.y;
    _1187.z = _248.z;
    vec3 _264 = (_1181.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _1187.xyz;
    vec4 _1579 = vec4(_264.xy, _241, _264.z);
    vec3 _280 = (_1579.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _1579.xyw;
    vec4 _1199 = vec4(0.0);
    _1199.x = _280.x;
    _1199.y = _280.y;
    _1199.z = _280.z;
    vec2 _295 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _1579.x = _295.x;
    _1579.y = _295.y;
    _1187.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1187.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _1217 = _1187;
    _1217.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1217.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _345 = _141.z;
    float _353 = (_345 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1578.w = _353;
    float _357 = max(_353, 0.0);
    _1578.w = _357;
    float _1154;
    if (_357 == 0.0)
    {
        _1154 = 0.0;
    }
    else
    {
        _1154 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_357)));
    }
    vec4 _1232 = _1579;
    _1232.x = _1154;
    vec3 _374 = -_216;
    float _378 = dot(_374, _374);
    _1578.w = _378;
    _1578.w = inversesqrt(abs(_378));
    vec3 _395 = (_374 * _1578.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1232.x = _395.x;
    _1232.y = _395.y;
    _1232.z = _395.z;
    vec4 _1106 = _1232 * inversesqrt(dot(_1232.xyz, _1232.xyz));
    vec4 _1248 = _1217;
    _1248.x = _1106.x;
    _1248.y = _1106.y;
    _1248.z = _1106.z;
    float _416 = dot(_1248.xyz, _1578.xyz);
    vec4 _1254 = _1578;
    _1254.w = _416;
    float _420 = max(_416, 0.0);
    _1254.w = _420;
    float _1155;
    if (_420 == 0.0)
    {
        _1155 = 0.0;
    }
    else
    {
        _1155 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_420)));
    }
    _1232.x = _1155;
    _1254.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1254.xyz), 0.0, 1.0);
    vec4 _1270 = _1232;
    _1270.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1270.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1270.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1248.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1248.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1248.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _492 = _1248.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1288 = vec4(0.0);
    _1288.x = _492.x;
    _1288.y = _492.y;
    _1288.z = _492.z;
    vec4 _1294 = vec4(0.0);
    _1294.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1294.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1294.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _516 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1294.xyz) + _1288.xyz;
    vec4 _1300 = _1288;
    _1300.x = _516.x;
    _1300.y = _516.y;
    _1300.z = _516.z;
    vec4 _1306 = vec4(0.0);
    _1306.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1306.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1306.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _540 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1306.xyz) + _1300.xyz;
    vec4 _1312 = _1300;
    _1312.x = _540.x;
    _1312.y = _540.y;
    _1312.z = _540.z;
    vec3 _552 = _1312.xyz - _216;
    vec4 _1318 = _1312;
    _1318.x = _552.x;
    _1318.y = _552.y;
    _1318.z = _552.z;
    float _563 = dot(_1318.xyz, _1318.xyz);
    vec4 _1324 = _1254;
    _1324.w = _563;
    float _1126 = inversesqrt(abs(_563));
    _1324.w = _1126;
    vec3 _574 = _1318.xyz * _1324.www;
    vec4 _1329 = _1318;
    _1329.x = _574.x;
    _1329.y = _574.y;
    _1329.z = _574.z;
    float _583 = 1.0 / _1126;
    _1324.w = _583;
    vec4 _1581 = vec4((_1270.xyz * _1254.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1329.xyz, _1324.xyz), 0.0, 1.0));
    vec3 _598 = _1581.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1340 = _1329;
    _1340.x = _598.x;
    _1340.y = _598.y;
    _1340.z = _598.z;
    float _613 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _583) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1581.w = _613;
    float _619 = 1.0 / (_1126 * _1126);
    _1324.w = _619;
    float _628 = (_619 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _613;
    _1324.w = _628;
    _1324.w = 1.0 / _628;
    vec4 _1583 = vec4((_1340.xyz * _1324.www) + _1581.xyz, _613);
    vec3 _654 = _1248.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1366 = _1340;
    _1366.x = _654.x;
    _1366.y = _654.y;
    _1366.z = _654.z;
    vec3 _669 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1294.xyz) + _1366.xyz;
    vec4 _1372 = _1366;
    _1372.x = _669.x;
    _1372.y = _669.y;
    _1372.z = _669.z;
    vec3 _684 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1306.xyz) + _1372.xyz;
    vec4 _1378 = _1372;
    _1378.x = _684.x;
    _1378.y = _684.y;
    _1378.z = _684.z;
    vec3 _696 = _1378.xyz - _216;
    vec4 _1384 = _1378;
    _1384.x = _696.x;
    _1384.y = _696.y;
    _1384.z = _696.z;
    float _707 = dot(_1384.xyz, _1384.xyz);
    vec4 _1390 = _1324;
    _1390.w = _707;
    float _1131 = inversesqrt(abs(_707));
    _1390.w = _1131;
    vec3 _718 = _1384.xyz * _1390.www;
    vec4 _1395 = _1384;
    _1395.x = _718.x;
    _1395.y = _718.y;
    _1395.z = _718.z;
    float _727 = 1.0 / _1131;
    _1390.w = _727;
    _1583.w = clamp(dot(_1395.xyz, _1390.xyz), 0.0, 1.0);
    vec3 _742 = _1583.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1395.x = _742.x;
    _1395.y = _742.y;
    _1395.z = _742.z;
    float _757 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _727) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1583.w = _757;
    float _763 = 1.0 / (_1131 * _1131);
    _1390.w = _763;
    float _772 = (_763 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _757;
    _1390.w = _772;
    _1390.w = 1.0 / _772;
    vec4 _1585 = vec4((_1395.xyz * _1390.www) + _1583.xyz, _757);
    vec3 _798 = _1248.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1432 = _1248;
    _1432.x = _798.x;
    _1432.y = _798.y;
    _1432.z = _798.z;
    vec3 _813 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1294.xyz) + _1432.xyz;
    vec4 _1438 = _1432;
    _1438.x = _813.x;
    _1438.y = _813.y;
    _1438.z = _813.z;
    vec3 _828 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1306.xyz) + _1438.xyz;
    vec4 _1444 = _1438;
    _1444.x = _828.x;
    _1444.y = _828.y;
    _1444.z = _828.z;
    vec3 _840 = _1444.xyz - _216;
    vec4 _1450 = _1444;
    _1450.x = _840.x;
    _1450.y = _840.y;
    _1450.z = _840.z;
    float _851 = dot(_1450.xyz, _1450.xyz);
    vec4 _1456 = _1390;
    _1456.w = _851;
    float _1136 = inversesqrt(abs(_851));
    _1456.w = _1136;
    vec3 _862 = _1450.xyz * _1456.www;
    vec4 _1461 = _1450;
    _1461.x = _862.x;
    _1461.y = _862.y;
    _1461.z = _862.z;
    float _871 = 1.0 / _1136;
    _1456.w = _871;
    _1456.x = clamp(dot(_1461.xyz, _1456.xyz), 0.0, 1.0);
    vec4 _1586 = vec4(_1456.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _871);
    float _901 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _871) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1585.w = _901;
    float _907 = 1.0 / (_1136 * _1136);
    _1586.w = _907;
    float _916 = (_907 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _901;
    _1586.w = _916;
    float _920 = 1.0 / _916;
    _1586.w = _920;
    vec4 _1588 = vec4((_1586.xyz * _1586.www) + _1585.xyz, _920);
    vec3 _939 = min(_1588.xyz, vec3(1.0));
    vec4 _1498 = _1588;
    _1498.x = _939.x;
    _1498.y = _939.y;
    _1498.z = _939.z;
    vec4 _1534 = vec4(0.0);
    _1534.x = _141.x;
    _1534.y = _141.y;
    _1534.z = _345;
    vec4 _1143 = optPush.clipToTarget * ((_141.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _163);
    gl_Position = vec4(_1143.x, -_1143.y, _1143.zw);
    color0 = vec4(_1498.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1232.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1199;
    texcoord1 = vec4((_1579.yx * _1187.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_1579.xy * _1217.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _1534;
    texcoord4 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1154, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
