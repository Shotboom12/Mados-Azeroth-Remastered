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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _139 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _161 = (_139.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_139.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_139.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _178 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1044 = _161;
    _1044.x = _178.x;
    _1044.y = _178.y;
    vec4 _1048 = vec4(0.0);
    _1048.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1048.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _200 = (_1044.xy * _1048.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1052 = vec4(0.0);
    _1052.x = _200.x;
    _1052.y = _200.y;
    _1048.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1048.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _222 = (_1044.xy * _1048.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1060 = vec4(0.0);
    _1060.x = _222.x;
    _1060.y = _222.y;
    _1048.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1048.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _244 = (_1044.xy * _1048.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1068 = vec4(0.0);
    _1068.x = _244.x;
    _1068.y = _244.y;
    _1048.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _1048.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _266 = (_1044.xy * _1048.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _1076 = vec4(0.0);
    _1076.x = _266.x;
    _1076.y = _266.y;
    float _280 = (_139.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1081 = _139;
    _1081.w = _280;
    float _284 = max(_280, 0.0);
    _1081.w = _284;
    float _1041;
    if (_284 == 0.0)
    {
        _1041 = 0.0;
    }
    else
    {
        _1041 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_284)));
    }
    _1044.x = _1041;
    vec3 _301 = -_1081.xyz;
    float _305 = dot(_301, _301);
    vec4 _1092 = _1081;
    _1092.w = _305;
    _1092.w = inversesqrt(abs(_305));
    vec3 _322 = ((-_1092.xyz) * _1092.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1044.x = _322.x;
    _1044.y = _322.y;
    _1044.z = _322.z;
    vec4 _993 = _1044 * inversesqrt(dot(_1044.xyz, _1044.xyz));
    _1048.x = _993.x;
    _1048.y = _993.y;
    _1048.z = _993.z;
    vec3 _345 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1044.x = _345.x;
    _1044.y = _345.y;
    _1044.z = _345.z;
    vec3 _360 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1044.xyz;
    vec4 _1115 = _1044;
    _1115.x = _360.x;
    _1115.y = _360.y;
    _1115.z = _360.z;
    vec3 _375 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1115.xyz;
    float _377 = _375.x;
    vec4 _1121 = _1115;
    _1121.x = _377;
    _1121.y = _375.y;
    _1121.z = _375.z;
    float _386 = dot(_1048.xyz, _1121.xyz);
    _1092.w = _386;
    float _390 = max(_386, 0.0);
    _1092.w = _390;
    float _1042;
    if (_390 == 0.0)
    {
        _1042 = 0.0;
    }
    else
    {
        _1042 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_390)));
    }
    vec4 _1415 = vec4(_377, _375.yz, _1042);
    _1048.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1048.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1048.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _428 = _1048.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1147 = vec4(0.0);
    _1147.x = _428.x;
    _1147.y = _428.y;
    _1147.z = _428.z;
    vec4 _1153 = vec4(0.0);
    _1153.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1153.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1153.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _452 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1153.xyz) + _1147.xyz;
    vec4 _1159 = _1147;
    _1159.x = _452.x;
    _1159.y = _452.y;
    _1159.z = _452.z;
    vec4 _1165 = vec4(0.0);
    _1165.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1165.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1165.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _476 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1165.xyz) + _1159.xyz;
    vec4 _1171 = _1159;
    _1171.x = _476.x;
    _1171.y = _476.y;
    _1171.z = _476.z;
    vec3 _488 = _1171.xyz - _1092.xyz;
    vec4 _1177 = _1171;
    _1177.x = _488.x;
    _1177.y = _488.y;
    _1177.z = _488.z;
    float _499 = dot(_1177.xyz, _1177.xyz);
    _1092.w = _499;
    float _1013 = inversesqrt(abs(_499));
    _1092.w = _1013;
    float _508 = 1.0 / _1013;
    vec4 _1189 = _1415;
    _1189.w = _508;
    vec3 _514 = _1177.xyz * _1092.www;
    vec4 _1191 = _1177;
    _1191.x = _514.x;
    _1191.y = _514.y;
    _1191.z = _514.z;
    _1092.w = clamp(dot(_1191.xyz, _1189.xyz), 0.0, 1.0);
    vec3 _534 = _1092.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1191.x = _534.x;
    _1191.y = _534.y;
    _1191.z = _534.z;
    float _549 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _508) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1092.w = _549;
    float _555 = 1.0 / (_1013 * _1013);
    _1189.w = _555;
    float _564 = (_555 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _549;
    _1092.w = _564;
    _1092.w = 1.0 / _564;
    _1189.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1189.xyz), 0.0, 1.0);
    vec4 _1221 = vec4(0.0);
    _1221.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1221.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1221.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _597 = (_1221.xyz * _1189.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1227 = _1221;
    _1227.x = _597.x;
    _1227.y = _597.y;
    _1227.z = _597.z;
    vec3 _611 = (_1191.xyz * _1092.www) + _1227.xyz;
    vec4 _1233 = _1191;
    _1233.x = _611.x;
    _1233.y = _611.y;
    _1233.z = _611.z;
    vec3 _624 = _1048.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1227.x = _624.x;
    _1227.y = _624.y;
    _1227.z = _624.z;
    vec3 _639 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1153.xyz) + _1227.xyz;
    vec4 _1245 = _1227;
    _1245.x = _639.x;
    _1245.y = _639.y;
    _1245.z = _639.z;
    vec3 _654 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1165.xyz) + _1245.xyz;
    vec4 _1251 = _1245;
    _1251.x = _654.x;
    _1251.y = _654.y;
    _1251.z = _654.z;
    vec3 _666 = _1251.xyz - _1092.xyz;
    vec4 _1257 = _1251;
    _1257.x = _666.x;
    _1257.y = _666.y;
    _1257.z = _666.z;
    float _677 = dot(_1257.xyz, _1257.xyz);
    _1092.w = _677;
    float _1018 = inversesqrt(abs(_677));
    _1092.w = _1018;
    float _686 = 1.0 / _1018;
    _1189.w = _686;
    vec3 _692 = _1257.xyz * _1092.www;
    vec4 _1271 = _1257;
    _1271.x = _692.x;
    _1271.y = _692.y;
    _1271.z = _692.z;
    _1092.w = clamp(dot(_1271.xyz, _1189.xyz), 0.0, 1.0);
    vec3 _712 = _1092.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1271.x = _712.x;
    _1271.y = _712.y;
    _1271.z = _712.z;
    float _727 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _686) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1092.w = _727;
    float _733 = 1.0 / (_1018 * _1018);
    _1189.w = _733;
    float _742 = (_733 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _727;
    _1092.w = _742;
    float _746 = 1.0 / _742;
    _1092.w = _746;
    vec3 _755 = (_1271.xyz * _1092.www) + _1233.xyz;
    vec4 _1299 = _1233;
    _1299.x = _755.x;
    _1299.y = _755.y;
    _1299.z = _755.z;
    vec3 _768 = _1048.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1305 = _1048;
    _1305.x = _768.x;
    _1305.y = _768.y;
    _1305.z = _768.z;
    vec3 _783 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1153.xyz) + _1305.xyz;
    vec4 _1311 = _1305;
    _1311.x = _783.x;
    _1311.y = _783.y;
    _1311.z = _783.z;
    vec3 _798 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1165.xyz) + _1311.xyz;
    vec4 _1317 = _1311;
    _1317.x = _798.x;
    _1317.y = _798.y;
    _1317.z = _798.z;
    vec4 _1418 = vec4(_1317.xyz - _1092.xyz, _746);
    vec3 _818 = _1418.xyz;
    float _821 = dot(_818, _818);
    vec4 _1329 = _1418;
    _1329.w = _821;
    float _1023 = inversesqrt(abs(_821));
    _1329.w = _1023;
    float _830 = 1.0 / _1023;
    _1189.w = _830;
    vec4 _1419 = vec4(_1329.xyz * _1329.www, _1023);
    _1419.x = clamp(dot(_1419.xyz, _1189.xyz), 0.0, 1.0);
    float _871 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _830) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1420 = vec4(_1419.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _871);
    float _886 = ((1.0 / (_1023 * _1023)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _871;
    _1420.w = _886;
    float _890 = 1.0 / _886;
    _1420.w = _890;
    vec4 _1422 = vec4((_1420.xyz * _1420.www) + _1299.xyz, _890);
    vec3 _909 = min(_1422.xyz, vec3(1.0));
    vec4 _1371 = _1422;
    _1371.x = _909.x;
    _1371.y = _909.y;
    _1371.z = _909.z;
    vec4 _1030 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_1030.x, -_1030.y, _1030.zw);
    color0 = vec4(_1371.xyz * v2.xyz, 1.0);
    color1 = vec4(_1415.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1052;
    texcoord1 = _1060;
    texcoord2 = _1068;
    texcoord3 = _1076;
    fog0 = min(_1041, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
