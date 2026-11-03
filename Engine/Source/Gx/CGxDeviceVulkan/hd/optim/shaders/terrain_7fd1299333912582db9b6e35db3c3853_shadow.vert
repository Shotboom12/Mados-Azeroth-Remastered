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
layout(location = 5) out vec4 texcoord3;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _139 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _161 = (_139.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_139.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_139.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _178 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1043 = _161;
    _1043.x = _178.x;
    _1043.y = _178.y;
    vec4 _1047 = vec4(0.0);
    _1047.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1047.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _200 = (_1043.xy * _1047.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1051 = vec4(0.0);
    _1051.x = _200.x;
    _1051.y = _200.y;
    _1047.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1047.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _222 = (_1043.xy * _1047.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1059 = vec4(0.0);
    _1059.x = _222.x;
    _1059.y = _222.y;
    _1047.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1047.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _244 = (_1043.xy * _1047.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1067 = vec4(0.0);
    _1067.x = _244.x;
    _1067.y = _244.y;
    _1047.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _1047.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _266 = (_1043.xy * _1047.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _1075 = vec4(0.0);
    _1075.x = _266.x;
    _1075.y = _266.y;
    float _280 = (_139.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1080 = _139;
    _1080.w = _280;
    float _284 = max(_280, 0.0);
    _1080.w = _284;
    float _1040;
    if (_284 == 0.0)
    {
        _1040 = 0.0;
    }
    else
    {
        _1040 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_284)));
    }
    _1043.x = _1040;
    vec3 _301 = -_1080.xyz;
    float _305 = dot(_301, _301);
    vec4 _1091 = _1080;
    _1091.w = _305;
    _1091.w = inversesqrt(abs(_305));
    vec3 _322 = ((-_1091.xyz) * _1091.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1043.x = _322.x;
    _1043.y = _322.y;
    _1043.z = _322.z;
    vec4 _992 = _1043 * inversesqrt(dot(_1043.xyz, _1043.xyz));
    _1047.x = _992.x;
    _1047.y = _992.y;
    _1047.z = _992.z;
    vec3 _345 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1043.x = _345.x;
    _1043.y = _345.y;
    _1043.z = _345.z;
    vec3 _360 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1043.xyz;
    vec4 _1114 = _1043;
    _1114.x = _360.x;
    _1114.y = _360.y;
    _1114.z = _360.z;
    vec3 _375 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1114.xyz;
    float _377 = _375.x;
    vec4 _1120 = _1114;
    _1120.x = _377;
    _1120.y = _375.y;
    _1120.z = _375.z;
    float _386 = dot(_1047.xyz, _1120.xyz);
    _1091.w = _386;
    float _390 = max(_386, 0.0);
    _1091.w = _390;
    float _1041;
    if (_390 == 0.0)
    {
        _1041 = 0.0;
    }
    else
    {
        _1041 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_390)));
    }
    vec4 _1414 = vec4(_377, _375.yz, _1041);
    _1047.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1047.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1047.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _428 = _1047.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1146 = vec4(0.0);
    _1146.x = _428.x;
    _1146.y = _428.y;
    _1146.z = _428.z;
    vec4 _1152 = vec4(0.0);
    _1152.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1152.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1152.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _452 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1152.xyz) + _1146.xyz;
    vec4 _1158 = _1146;
    _1158.x = _452.x;
    _1158.y = _452.y;
    _1158.z = _452.z;
    vec4 _1164 = vec4(0.0);
    _1164.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1164.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1164.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _476 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1164.xyz) + _1158.xyz;
    vec4 _1170 = _1158;
    _1170.x = _476.x;
    _1170.y = _476.y;
    _1170.z = _476.z;
    vec3 _488 = _1170.xyz - _1091.xyz;
    vec4 _1176 = _1170;
    _1176.x = _488.x;
    _1176.y = _488.y;
    _1176.z = _488.z;
    float _499 = dot(_1176.xyz, _1176.xyz);
    _1091.w = _499;
    float _1012 = inversesqrt(abs(_499));
    _1091.w = _1012;
    float _508 = 1.0 / _1012;
    vec4 _1188 = _1414;
    _1188.w = _508;
    vec3 _514 = _1176.xyz * _1091.www;
    vec4 _1190 = _1176;
    _1190.x = _514.x;
    _1190.y = _514.y;
    _1190.z = _514.z;
    _1091.w = clamp(dot(_1190.xyz, _1188.xyz), 0.0, 1.0);
    vec3 _534 = _1091.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1190.x = _534.x;
    _1190.y = _534.y;
    _1190.z = _534.z;
    float _549 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _508) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1091.w = _549;
    float _555 = 1.0 / (_1012 * _1012);
    _1188.w = _555;
    float _564 = (_555 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _549;
    _1091.w = _564;
    _1091.w = 1.0 / _564;
    _1188.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1188.xyz), 0.0, 1.0);
    vec4 _1220 = vec4(0.0);
    _1220.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1220.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1220.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _597 = (_1220.xyz * _1188.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1226 = _1220;
    _1226.x = _597.x;
    _1226.y = _597.y;
    _1226.z = _597.z;
    vec3 _611 = (_1190.xyz * _1091.www) + _1226.xyz;
    vec4 _1232 = _1190;
    _1232.x = _611.x;
    _1232.y = _611.y;
    _1232.z = _611.z;
    vec3 _624 = _1047.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1226.x = _624.x;
    _1226.y = _624.y;
    _1226.z = _624.z;
    vec3 _639 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1152.xyz) + _1226.xyz;
    vec4 _1244 = _1226;
    _1244.x = _639.x;
    _1244.y = _639.y;
    _1244.z = _639.z;
    vec3 _654 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1164.xyz) + _1244.xyz;
    vec4 _1250 = _1244;
    _1250.x = _654.x;
    _1250.y = _654.y;
    _1250.z = _654.z;
    vec3 _666 = _1250.xyz - _1091.xyz;
    vec4 _1256 = _1250;
    _1256.x = _666.x;
    _1256.y = _666.y;
    _1256.z = _666.z;
    float _677 = dot(_1256.xyz, _1256.xyz);
    _1091.w = _677;
    float _1017 = inversesqrt(abs(_677));
    _1091.w = _1017;
    float _686 = 1.0 / _1017;
    _1188.w = _686;
    vec3 _692 = _1256.xyz * _1091.www;
    vec4 _1270 = _1256;
    _1270.x = _692.x;
    _1270.y = _692.y;
    _1270.z = _692.z;
    _1091.w = clamp(dot(_1270.xyz, _1188.xyz), 0.0, 1.0);
    vec3 _712 = _1091.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1270.x = _712.x;
    _1270.y = _712.y;
    _1270.z = _712.z;
    float _727 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _686) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1091.w = _727;
    float _733 = 1.0 / (_1017 * _1017);
    _1188.w = _733;
    float _742 = (_733 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _727;
    _1091.w = _742;
    float _746 = 1.0 / _742;
    _1091.w = _746;
    vec3 _755 = (_1270.xyz * _1091.www) + _1232.xyz;
    vec4 _1298 = _1232;
    _1298.x = _755.x;
    _1298.y = _755.y;
    _1298.z = _755.z;
    vec3 _768 = _1047.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1304 = _1047;
    _1304.x = _768.x;
    _1304.y = _768.y;
    _1304.z = _768.z;
    vec3 _783 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1152.xyz) + _1304.xyz;
    vec4 _1310 = _1304;
    _1310.x = _783.x;
    _1310.y = _783.y;
    _1310.z = _783.z;
    vec3 _798 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1164.xyz) + _1310.xyz;
    vec4 _1316 = _1310;
    _1316.x = _798.x;
    _1316.y = _798.y;
    _1316.z = _798.z;
    vec4 _1417 = vec4(_1316.xyz - _1091.xyz, _746);
    vec3 _818 = _1417.xyz;
    float _821 = dot(_818, _818);
    vec4 _1328 = _1417;
    _1328.w = _821;
    float _1022 = inversesqrt(abs(_821));
    _1328.w = _1022;
    float _830 = 1.0 / _1022;
    _1188.w = _830;
    vec4 _1418 = vec4(_1328.xyz * _1328.www, _1022);
    _1418.x = clamp(dot(_1418.xyz, _1188.xyz), 0.0, 1.0);
    float _871 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _830) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1419 = vec4(_1418.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _871);
    float _886 = ((1.0 / (_1022 * _1022)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _871;
    _1419.w = _886;
    float _890 = 1.0 / _886;
    _1419.w = _890;
    vec4 _1421 = vec4((_1419.xyz * _1419.www) + _1298.xyz, _890);
    vec3 _909 = min(_1421.xyz, vec3(1.0));
    vec4 _1370 = _1421;
    _1370.x = _909.x;
    _1370.y = _909.y;
    _1370.z = _909.z;
    vec4 _1029 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_1029.x, -_1029.y, _1029.zw);
    color0 = vec4(_1370.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1414.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1051;
    texcoord1 = _1059;
    texcoord2 = _1067;
    texcoord3 = _1075;
    fog0 = min(_1040, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
