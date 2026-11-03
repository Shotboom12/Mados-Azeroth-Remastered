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
    vec3 _178 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _1158 = _163;
    _1158.x = _178.x;
    _1158.y = _178.y;
    _1158.z = _178.z;
    vec3 _193 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1158.xyz;
    vec4 _1164 = _1158;
    _1164.x = _193.x;
    _1164.y = _193.y;
    _1164.z = _193.z;
    vec3 _208 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1164.xyz;
    float _210 = _208.x;
    vec4 _1170 = _1164;
    _1170.x = _210;
    _1170.y = _208.y;
    _1170.z = _208.z;
    vec3 _216 = _141.xyz;
    float _219 = dot(_216, _1170.xyz);
    vec4 _1579 = vec4(_210, _208.yz, _219);
    _1579.w = _219 + _219;
    vec3 _235 = (_1579.xyz * (-_1579.www)) + _216;
    vec4 _1182 = vec4(0.0);
    _1182.x = _235.x;
    _1182.y = _235.y;
    float _241 = _235.z;
    _1182.z = _241;
    vec3 _248 = _1182.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _1188 = vec4(0.0);
    _1188.x = _248.x;
    _1188.y = _248.y;
    _1188.z = _248.z;
    vec3 _264 = (_1182.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _1188.xyz;
    vec4 _1580 = vec4(_264.xy, _241, _264.z);
    vec3 _280 = (_1580.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _1580.xyw;
    vec4 _1200 = vec4(0.0);
    _1200.x = _280.x;
    _1200.y = _280.y;
    _1200.z = _280.z;
    vec2 _295 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _1580.x = _295.x;
    _1580.y = _295.y;
    _1188.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1188.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _1218 = _1188;
    _1218.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1218.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _345 = _141.z;
    float _353 = (_345 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1579.w = _353;
    float _357 = max(_353, 0.0);
    _1579.w = _357;
    float _1155;
    if (_357 == 0.0)
    {
        _1155 = 0.0;
    }
    else
    {
        _1155 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_357)));
    }
    vec4 _1233 = _1580;
    _1233.x = _1155;
    vec3 _374 = -_216;
    float _378 = dot(_374, _374);
    _1579.w = _378;
    _1579.w = inversesqrt(abs(_378));
    vec3 _395 = (_374 * _1579.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1233.x = _395.x;
    _1233.y = _395.y;
    _1233.z = _395.z;
    vec4 _1107 = _1233 * inversesqrt(dot(_1233.xyz, _1233.xyz));
    vec4 _1249 = _1218;
    _1249.x = _1107.x;
    _1249.y = _1107.y;
    _1249.z = _1107.z;
    float _416 = dot(_1249.xyz, _1579.xyz);
    vec4 _1255 = _1579;
    _1255.w = _416;
    float _420 = max(_416, 0.0);
    _1255.w = _420;
    float _1156;
    if (_420 == 0.0)
    {
        _1156 = 0.0;
    }
    else
    {
        _1156 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_420)));
    }
    _1233.x = _1156;
    _1255.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1255.xyz), 0.0, 1.0);
    vec4 _1271 = _1233;
    _1271.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1271.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1271.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    _1249.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1249.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1249.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _492 = _1249.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1289 = vec4(0.0);
    _1289.x = _492.x;
    _1289.y = _492.y;
    _1289.z = _492.z;
    vec4 _1295 = vec4(0.0);
    _1295.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1295.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1295.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _516 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1295.xyz) + _1289.xyz;
    vec4 _1301 = _1289;
    _1301.x = _516.x;
    _1301.y = _516.y;
    _1301.z = _516.z;
    vec4 _1307 = vec4(0.0);
    _1307.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1307.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1307.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _540 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1307.xyz) + _1301.xyz;
    vec4 _1313 = _1301;
    _1313.x = _540.x;
    _1313.y = _540.y;
    _1313.z = _540.z;
    vec3 _552 = _1313.xyz - _216;
    vec4 _1319 = _1313;
    _1319.x = _552.x;
    _1319.y = _552.y;
    _1319.z = _552.z;
    float _563 = dot(_1319.xyz, _1319.xyz);
    vec4 _1325 = _1255;
    _1325.w = _563;
    float _1127 = inversesqrt(abs(_563));
    _1325.w = _1127;
    vec3 _574 = _1319.xyz * _1325.www;
    vec4 _1330 = _1319;
    _1330.x = _574.x;
    _1330.y = _574.y;
    _1330.z = _574.z;
    float _583 = 1.0 / _1127;
    _1325.w = _583;
    vec4 _1582 = vec4((_1271.xyz * _1255.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, clamp(dot(_1330.xyz, _1325.xyz), 0.0, 1.0));
    vec3 _598 = _1582.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    vec4 _1341 = _1330;
    _1341.x = _598.x;
    _1341.y = _598.y;
    _1341.z = _598.z;
    float _613 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _583) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1582.w = _613;
    float _619 = 1.0 / (_1127 * _1127);
    _1325.w = _619;
    float _628 = (_619 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _613;
    _1325.w = _628;
    _1325.w = 1.0 / _628;
    vec4 _1584 = vec4((_1341.xyz * _1325.www) + _1582.xyz, _613);
    vec3 _654 = _1249.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1367 = _1341;
    _1367.x = _654.x;
    _1367.y = _654.y;
    _1367.z = _654.z;
    vec3 _669 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1295.xyz) + _1367.xyz;
    vec4 _1373 = _1367;
    _1373.x = _669.x;
    _1373.y = _669.y;
    _1373.z = _669.z;
    vec3 _684 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1307.xyz) + _1373.xyz;
    vec4 _1379 = _1373;
    _1379.x = _684.x;
    _1379.y = _684.y;
    _1379.z = _684.z;
    vec3 _696 = _1379.xyz - _216;
    vec4 _1385 = _1379;
    _1385.x = _696.x;
    _1385.y = _696.y;
    _1385.z = _696.z;
    float _707 = dot(_1385.xyz, _1385.xyz);
    vec4 _1391 = _1325;
    _1391.w = _707;
    float _1132 = inversesqrt(abs(_707));
    _1391.w = _1132;
    vec3 _718 = _1385.xyz * _1391.www;
    vec4 _1396 = _1385;
    _1396.x = _718.x;
    _1396.y = _718.y;
    _1396.z = _718.z;
    float _727 = 1.0 / _1132;
    _1391.w = _727;
    _1584.w = clamp(dot(_1396.xyz, _1391.xyz), 0.0, 1.0);
    vec3 _742 = _1584.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1396.x = _742.x;
    _1396.y = _742.y;
    _1396.z = _742.z;
    float _757 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _727) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1584.w = _757;
    float _763 = 1.0 / (_1132 * _1132);
    _1391.w = _763;
    float _772 = (_763 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _757;
    _1391.w = _772;
    _1391.w = 1.0 / _772;
    vec4 _1586 = vec4((_1396.xyz * _1391.www) + _1584.xyz, _757);
    vec3 _798 = _1249.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1433 = _1249;
    _1433.x = _798.x;
    _1433.y = _798.y;
    _1433.z = _798.z;
    vec3 _813 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1295.xyz) + _1433.xyz;
    vec4 _1439 = _1433;
    _1439.x = _813.x;
    _1439.y = _813.y;
    _1439.z = _813.z;
    vec3 _828 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1307.xyz) + _1439.xyz;
    vec4 _1445 = _1439;
    _1445.x = _828.x;
    _1445.y = _828.y;
    _1445.z = _828.z;
    vec3 _840 = _1445.xyz - _216;
    vec4 _1451 = _1445;
    _1451.x = _840.x;
    _1451.y = _840.y;
    _1451.z = _840.z;
    float _851 = dot(_1451.xyz, _1451.xyz);
    vec4 _1457 = _1391;
    _1457.w = _851;
    float _1137 = inversesqrt(abs(_851));
    _1457.w = _1137;
    vec3 _862 = _1451.xyz * _1457.www;
    vec4 _1462 = _1451;
    _1462.x = _862.x;
    _1462.y = _862.y;
    _1462.z = _862.z;
    float _871 = 1.0 / _1137;
    _1457.w = _871;
    _1457.x = clamp(dot(_1462.xyz, _1457.xyz), 0.0, 1.0);
    vec4 _1587 = vec4(_1457.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _871);
    float _901 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _871) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    _1586.w = _901;
    float _907 = 1.0 / (_1137 * _1137);
    _1587.w = _907;
    float _916 = (_907 * optRegs.rows[optTile*82u+17u+uint(36)].z) + _901;
    _1587.w = _916;
    float _920 = 1.0 / _916;
    _1587.w = _920;
    vec4 _1589 = vec4((_1587.xyz * _1587.www) + _1586.xyz, _920);
    vec3 _939 = min(_1589.xyz, vec3(1.0));
    vec4 _1499 = _1589;
    _1499.x = _939.x;
    _1499.y = _939.y;
    _1499.z = _939.z;
    vec4 _1535 = vec4(0.0);
    _1535.x = _141.x;
    _1535.y = _141.y;
    _1535.z = _345;
    vec4 _1144 = optPush.clipToTarget * ((_141.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _163);
    gl_Position = vec4(_1144.x, -_1144.y, _1144.zw);
    color0 = vec4(_1499.xyz * v2.xyz, 1.0);
    color1 = vec4(_1233.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1200;
    texcoord1 = vec4((_1580.yx * _1188.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_1580.xy * _1218.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _1535;
    texcoord4 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_141, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_141, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_1155, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
