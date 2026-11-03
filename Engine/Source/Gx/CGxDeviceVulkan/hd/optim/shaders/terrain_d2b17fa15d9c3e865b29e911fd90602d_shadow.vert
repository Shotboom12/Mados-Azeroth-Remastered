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
layout(location = 6) out vec4 texcoord4;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _140 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _162 = (_140.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_140.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_140.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _179 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1068 = _162;
    _1068.x = _179.x;
    _1068.y = _179.y;
    vec4 _1072 = vec4(0.0);
    _1072.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1072.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _201 = (_1068.xy * _1072.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1076 = vec4(0.0);
    _1076.x = _201.x;
    _1076.y = _201.y;
    _1072.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1072.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _223 = (_1068.xy * _1072.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1084 = vec4(0.0);
    _1084.x = _223.x;
    _1084.y = _223.y;
    _1072.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1072.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _245 = (_1068.xy * _1072.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1092 = vec4(0.0);
    _1092.x = _245.x;
    _1092.y = _245.y;
    _1072.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _1072.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _267 = (_1068.xy * _1072.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _1100 = vec4(0.0);
    _1100.x = _267.x;
    _1100.y = _267.y;
    _1072.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _1072.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _289 = (_1068.xy * _1072.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _1108 = vec4(0.0);
    _1108.x = _289.x;
    _1108.y = _289.y;
    float _303 = (_140.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1113 = _140;
    _1113.w = _303;
    float _307 = max(_303, 0.0);
    _1113.w = _307;
    float _1065;
    if (_307 == 0.0)
    {
        _1065 = 0.0;
    }
    else
    {
        _1065 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_307)));
    }
    _1068.x = _1065;
    vec3 _324 = -_1113.xyz;
    float _328 = dot(_324, _324);
    vec4 _1124 = _1113;
    _1124.w = _328;
    _1124.w = inversesqrt(abs(_328));
    vec3 _345 = ((-_1124.xyz) * _1124.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1068.x = _345.x;
    _1068.y = _345.y;
    _1068.z = _345.z;
    vec4 _1017 = _1068 * inversesqrt(dot(_1068.xyz, _1068.xyz));
    _1072.x = _1017.x;
    _1072.y = _1017.y;
    _1072.z = _1017.z;
    vec3 _368 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1068.x = _368.x;
    _1068.y = _368.y;
    _1068.z = _368.z;
    vec3 _383 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1068.xyz;
    vec4 _1147 = _1068;
    _1147.x = _383.x;
    _1147.y = _383.y;
    _1147.z = _383.z;
    vec3 _398 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1147.xyz;
    float _400 = _398.x;
    vec4 _1153 = _1147;
    _1153.x = _400;
    _1153.y = _398.y;
    _1153.z = _398.z;
    float _409 = dot(_1072.xyz, _1153.xyz);
    _1124.w = _409;
    float _413 = max(_409, 0.0);
    _1124.w = _413;
    float _1066;
    if (_413 == 0.0)
    {
        _1066 = 0.0;
    }
    else
    {
        _1066 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_413)));
    }
    vec4 _1447 = vec4(_400, _398.yz, _1066);
    _1072.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1072.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1072.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _451 = _1072.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1179 = vec4(0.0);
    _1179.x = _451.x;
    _1179.y = _451.y;
    _1179.z = _451.z;
    vec4 _1185 = vec4(0.0);
    _1185.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1185.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1185.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _475 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1185.xyz) + _1179.xyz;
    vec4 _1191 = _1179;
    _1191.x = _475.x;
    _1191.y = _475.y;
    _1191.z = _475.z;
    vec4 _1197 = vec4(0.0);
    _1197.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1197.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1197.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _499 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1197.xyz) + _1191.xyz;
    vec4 _1203 = _1191;
    _1203.x = _499.x;
    _1203.y = _499.y;
    _1203.z = _499.z;
    vec3 _511 = _1203.xyz - _1124.xyz;
    vec4 _1209 = _1203;
    _1209.x = _511.x;
    _1209.y = _511.y;
    _1209.z = _511.z;
    float _522 = dot(_1209.xyz, _1209.xyz);
    _1124.w = _522;
    float _1037 = inversesqrt(abs(_522));
    _1124.w = _1037;
    float _531 = 1.0 / _1037;
    vec4 _1221 = _1447;
    _1221.w = _531;
    vec3 _537 = _1209.xyz * _1124.www;
    vec4 _1223 = _1209;
    _1223.x = _537.x;
    _1223.y = _537.y;
    _1223.z = _537.z;
    _1124.w = clamp(dot(_1223.xyz, _1221.xyz), 0.0, 1.0);
    vec3 _557 = _1124.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1223.x = _557.x;
    _1223.y = _557.y;
    _1223.z = _557.z;
    float _572 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _531) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1124.w = _572;
    float _578 = 1.0 / (_1037 * _1037);
    _1221.w = _578;
    float _587 = (_578 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _572;
    _1124.w = _587;
    _1124.w = 1.0 / _587;
    _1221.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1221.xyz), 0.0, 1.0);
    vec4 _1253 = vec4(0.0);
    _1253.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1253.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1253.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _620 = (_1253.xyz * _1221.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1259 = _1253;
    _1259.x = _620.x;
    _1259.y = _620.y;
    _1259.z = _620.z;
    vec3 _634 = (_1223.xyz * _1124.www) + _1259.xyz;
    vec4 _1265 = _1223;
    _1265.x = _634.x;
    _1265.y = _634.y;
    _1265.z = _634.z;
    vec3 _647 = _1072.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1259.x = _647.x;
    _1259.y = _647.y;
    _1259.z = _647.z;
    vec3 _662 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1185.xyz) + _1259.xyz;
    vec4 _1277 = _1259;
    _1277.x = _662.x;
    _1277.y = _662.y;
    _1277.z = _662.z;
    vec3 _677 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1197.xyz) + _1277.xyz;
    vec4 _1283 = _1277;
    _1283.x = _677.x;
    _1283.y = _677.y;
    _1283.z = _677.z;
    vec3 _689 = _1283.xyz - _1124.xyz;
    vec4 _1289 = _1283;
    _1289.x = _689.x;
    _1289.y = _689.y;
    _1289.z = _689.z;
    float _700 = dot(_1289.xyz, _1289.xyz);
    _1124.w = _700;
    float _1042 = inversesqrt(abs(_700));
    _1124.w = _1042;
    float _709 = 1.0 / _1042;
    _1221.w = _709;
    vec3 _715 = _1289.xyz * _1124.www;
    vec4 _1303 = _1289;
    _1303.x = _715.x;
    _1303.y = _715.y;
    _1303.z = _715.z;
    _1124.w = clamp(dot(_1303.xyz, _1221.xyz), 0.0, 1.0);
    vec3 _735 = _1124.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1303.x = _735.x;
    _1303.y = _735.y;
    _1303.z = _735.z;
    float _750 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _709) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1124.w = _750;
    float _756 = 1.0 / (_1042 * _1042);
    _1221.w = _756;
    float _765 = (_756 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _750;
    _1124.w = _765;
    float _769 = 1.0 / _765;
    _1124.w = _769;
    vec3 _778 = (_1303.xyz * _1124.www) + _1265.xyz;
    vec4 _1331 = _1265;
    _1331.x = _778.x;
    _1331.y = _778.y;
    _1331.z = _778.z;
    vec3 _791 = _1072.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1337 = _1072;
    _1337.x = _791.x;
    _1337.y = _791.y;
    _1337.z = _791.z;
    vec3 _806 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1185.xyz) + _1337.xyz;
    vec4 _1343 = _1337;
    _1343.x = _806.x;
    _1343.y = _806.y;
    _1343.z = _806.z;
    vec3 _821 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1197.xyz) + _1343.xyz;
    vec4 _1349 = _1343;
    _1349.x = _821.x;
    _1349.y = _821.y;
    _1349.z = _821.z;
    vec4 _1450 = vec4(_1349.xyz - _1124.xyz, _769);
    vec3 _841 = _1450.xyz;
    float _844 = dot(_841, _841);
    vec4 _1361 = _1450;
    _1361.w = _844;
    float _1047 = inversesqrt(abs(_844));
    _1361.w = _1047;
    float _853 = 1.0 / _1047;
    _1221.w = _853;
    vec4 _1451 = vec4(_1361.xyz * _1361.www, _1047);
    _1451.x = clamp(dot(_1451.xyz, _1221.xyz), 0.0, 1.0);
    float _894 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _853) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1452 = vec4(_1451.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _894);
    float _909 = ((1.0 / (_1047 * _1047)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _894;
    _1452.w = _909;
    float _913 = 1.0 / _909;
    _1452.w = _913;
    vec4 _1454 = vec4((_1452.xyz * _1452.www) + _1331.xyz, _913);
    vec3 _932 = min(_1454.xyz, vec3(1.0));
    vec4 _1403 = _1454;
    _1403.x = _932.x;
    _1403.y = _932.y;
    _1403.z = _932.z;
    vec4 _1054 = optPush.clipToTarget * ((_140.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _162);
    gl_Position = vec4(_1054.x, -_1054.y, _1054.zw);
    color0 = vec4(_1403.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1447.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1076;
    texcoord1 = _1084;
    texcoord2 = _1092;
    texcoord3 = _1100;
    texcoord4 = _1108;
    fog0 = min(_1065, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
