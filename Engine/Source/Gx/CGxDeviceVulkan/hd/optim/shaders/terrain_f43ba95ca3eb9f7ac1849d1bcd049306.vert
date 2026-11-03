#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _116 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _138 = (_116.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_116.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_116.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _146 = (_116.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _138;
    vec2 _155 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1027 = _138;
    _1027.x = _155.x;
    _1027.y = _155.y;
    vec4 _1031 = vec4(0.0);
    _1031.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1031.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _179 = (_1027.xy * _1031.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1035 = vec4(0.0);
    _1035.x = _179.x;
    _1035.y = _179.y;
    _1031.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1031.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _201 = (_1027.xy * _1031.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1043 = vec4(0.0);
    _1043.x = _201.x;
    _1043.y = _201.y;
    _1031.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1031.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _223 = (_1027.xy * _1031.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1051 = vec4(0.0);
    _1051.x = _223.x;
    _1051.y = _223.y;
    float _238 = (_116.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1056 = _116;
    _1056.w = _238;
    float _243 = max(_238, 0.0);
    _1056.w = _243;
    float _1022;
    if (_243 == 0.0)
    {
        _1022 = 0.0;
    }
    else
    {
        _1022 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_243)));
    }
    _1027.x = _1022;
    vec3 _259 = -_1056.xyz;
    float _263 = dot(_259, _259);
    vec4 _1067 = _1056;
    _1067.w = _263;
    _1067.w = inversesqrt(abs(_263));
    vec3 _280 = ((-_1067.xyz) * _1067.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1027.x = _280.x;
    _1027.y = _280.y;
    _1027.z = _280.z;
    vec4 _991 = _1027 * inversesqrt(dot(_1027.xyz, _1027.xyz));
    _1031.x = _991.x;
    _1031.y = _991.y;
    _1031.z = _991.z;
    vec3 _303 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1027.x = _303.x;
    _1027.y = _303.y;
    _1027.z = _303.z;
    vec3 _318 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1027.xyz;
    vec4 _1090 = _1027;
    _1090.x = _318.x;
    _1090.y = _318.y;
    _1090.z = _318.z;
    vec3 _333 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1090.xyz;
    float _335 = _333.x;
    vec4 _1096 = _1090;
    _1096.x = _335;
    _1096.y = _333.y;
    _1096.z = _333.z;
    float _344 = dot(_1031.xyz, _1096.xyz);
    _1067.w = _344;
    float _348 = max(_344, 0.0);
    _1067.w = _348;
    float _1023;
    if (_348 == 0.0)
    {
        _1023 = 0.0;
    }
    else
    {
        _1023 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_348)));
    }
    vec4 _1386 = vec4(_335, _333.yz, _1023);
    _1031.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1031.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1031.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _386 = _1031.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1122 = vec4(0.0);
    _1122.x = _386.x;
    _1122.y = _386.y;
    _1122.z = _386.z;
    vec4 _1128 = vec4(0.0);
    _1128.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1128.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1128.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _410 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1128.xyz) + _1122.xyz;
    vec4 _1134 = _1122;
    _1134.x = _410.x;
    _1134.y = _410.y;
    _1134.z = _410.z;
    vec4 _1140 = vec4(0.0);
    _1140.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1140.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1140.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _434 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1140.xyz) + _1134.xyz;
    vec4 _1146 = _1134;
    _1146.x = _434.x;
    _1146.y = _434.y;
    _1146.z = _434.z;
    vec3 _446 = _1146.xyz - _1067.xyz;
    vec4 _1152 = _1146;
    _1152.x = _446.x;
    _1152.y = _446.y;
    _1152.z = _446.z;
    float _457 = dot(_1152.xyz, _1152.xyz);
    _1067.w = _457;
    float _1011 = inversesqrt(abs(_457));
    _1067.w = _1011;
    float _466 = 1.0 / _1011;
    vec4 _1164 = _1386;
    _1164.w = _466;
    vec3 _472 = _1152.xyz * _1067.www;
    vec4 _1166 = _1152;
    _1166.x = _472.x;
    _1166.y = _472.y;
    _1166.z = _472.z;
    _1067.w = clamp(dot(_1166.xyz, _1164.xyz), 0.0, 1.0);
    vec3 _492 = _1067.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1166.x = _492.x;
    _1166.y = _492.y;
    _1166.z = _492.z;
    float _507 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _466) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1067.w = _507;
    float _513 = 1.0 / (_1011 * _1011);
    _1164.w = _513;
    float _522 = (_513 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _507;
    _1067.w = _522;
    _1067.w = 1.0 / _522;
    _1164.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1164.xyz), 0.0, 1.0);
    vec4 _1196 = vec4(0.0);
    _1196.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1196.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1196.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _557 = (_1196.xyz * _1164.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1202 = _1196;
    _1202.x = _557.x;
    _1202.y = _557.y;
    _1202.z = _557.z;
    vec3 _573 = (_1166.xyz * _1067.www) + _1202.xyz;
    vec4 _1208 = _1166;
    _1208.x = _573.x;
    _1208.y = _573.y;
    _1208.z = _573.z;
    vec3 _586 = _1031.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1214 = _1202;
    _1214.x = _586.x;
    _1214.y = _586.y;
    _1214.z = _586.z;
    vec3 _601 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1128.xyz) + _1214.xyz;
    vec4 _1220 = _1214;
    _1220.x = _601.x;
    _1220.y = _601.y;
    _1220.z = _601.z;
    vec3 _616 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1140.xyz) + _1220.xyz;
    vec4 _1226 = _1220;
    _1226.x = _616.x;
    _1226.y = _616.y;
    _1226.z = _616.z;
    vec3 _628 = _1226.xyz - _1067.xyz;
    vec4 _1232 = _1226;
    _1232.x = _628.x;
    _1232.y = _628.y;
    _1232.z = _628.z;
    float _639 = dot(_1232.xyz, _1232.xyz);
    _1067.w = _639;
    float _1016 = inversesqrt(abs(_639));
    _1067.w = _1016;
    float _648 = 1.0 / _1016;
    _1164.w = _648;
    vec3 _654 = _1232.xyz * _1067.www;
    vec4 _1246 = _1232;
    _1246.x = _654.x;
    _1246.y = _654.y;
    _1246.z = _654.z;
    _1067.w = clamp(dot(_1246.xyz, _1164.xyz), 0.0, 1.0);
    vec3 _674 = _1067.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1246.x = _674.x;
    _1246.y = _674.y;
    _1246.z = _674.z;
    float _689 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _648) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1067.w = _689;
    float _695 = 1.0 / (_1016 * _1016);
    _1164.w = _695;
    float _704 = (_695 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _689;
    _1067.w = _704;
    float _708 = 1.0 / _704;
    _1067.w = _708;
    vec3 _717 = (_1246.xyz * _1067.www) + _1208.xyz;
    vec4 _1274 = _1208;
    _1274.x = _717.x;
    _1274.y = _717.y;
    _1274.z = _717.z;
    vec3 _730 = _1031.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1280 = _1031;
    _1280.x = _730.x;
    _1280.y = _730.y;
    _1280.z = _730.z;
    vec3 _745 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1128.xyz) + _1280.xyz;
    vec4 _1286 = _1280;
    _1286.x = _745.x;
    _1286.y = _745.y;
    _1286.z = _745.z;
    vec3 _760 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1140.xyz) + _1286.xyz;
    vec4 _1292 = _1286;
    _1292.x = _760.x;
    _1292.y = _760.y;
    _1292.z = _760.z;
    vec4 _1389 = vec4(_1292.xyz - _1067.xyz, _708);
    vec3 _780 = _1389.xyz;
    float _783 = dot(_780, _780);
    vec4 _1304 = _1389;
    _1304.w = _783;
    float _1021 = inversesqrt(abs(_783));
    _1304.w = _1021;
    float _792 = 1.0 / _1021;
    _1164.w = _792;
    vec4 _1390 = vec4(_1304.xyz * _1304.www, _1021);
    _1390.x = clamp(dot(_1390.xyz, _1164.xyz), 0.0, 1.0);
    float _833 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _792) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1391 = vec4(_1390.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _833);
    float _848 = ((1.0 / (_1021 * _1021)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _833;
    _1391.w = _848;
    float _852 = 1.0 / _848;
    _1391.w = _852;
    vec4 _1393 = vec4((_1391.xyz * _1391.www) + _1274.xyz, _852);
    vec3 _870 = min(_1393.xyz, vec3(1.0));
    vec4 _1346 = _1393;
    _1346.x = _870.x;
    _1346.y = _870.y;
    _1346.z = _870.z;
    vec4 _1394 = vec4(_1346.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_335, _333.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _913 = abs((_1394.xyz * 2.0) - _1202.xyz);
    wxlGPlain = max(max(_913.x, _913.y), _913.z);
    gl_Position = vec4(_146.x, -_146.y, _146.zw);
    color0 = _1394;
    color1 = vec4(_1386.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1035;
    texcoord1 = _1043;
    texcoord2 = _1051;
    fog0 = min(_1022, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
