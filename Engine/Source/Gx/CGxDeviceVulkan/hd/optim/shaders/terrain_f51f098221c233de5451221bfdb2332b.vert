#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec4 _1025 = _138;
    _1025.x = _155.x;
    _1025.y = _155.y;
    vec4 _1029 = vec4(0.0);
    _1029.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1029.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _179 = (_1025.xy * _1029.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1033 = vec4(0.0);
    _1033.x = _179.x;
    _1033.y = _179.y;
    _1029.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1029.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _201 = (_1025.xy * _1029.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1041 = vec4(0.0);
    _1041.x = _201.x;
    _1041.y = _201.y;
    _1029.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1029.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _223 = (_1025.xy * _1029.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1049 = vec4(0.0);
    _1049.x = _223.x;
    _1049.y = _223.y;
    float _238 = (_116.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1054 = _116;
    _1054.w = _238;
    float _243 = max(_238, 0.0);
    _1054.w = _243;
    float _1020;
    if (_243 == 0.0)
    {
        _1020 = 0.0;
    }
    else
    {
        _1020 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_243)));
    }
    _1025.x = _1020;
    vec3 _259 = -_1054.xyz;
    float _263 = dot(_259, _259);
    vec4 _1065 = _1054;
    _1065.w = _263;
    _1065.w = inversesqrt(abs(_263));
    vec3 _280 = ((-_1065.xyz) * _1065.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1025.x = _280.x;
    _1025.y = _280.y;
    _1025.z = _280.z;
    vec4 _989 = _1025 * inversesqrt(dot(_1025.xyz, _1025.xyz));
    _1029.x = _989.x;
    _1029.y = _989.y;
    _1029.z = _989.z;
    vec3 _303 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1025.x = _303.x;
    _1025.y = _303.y;
    _1025.z = _303.z;
    vec3 _318 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1025.xyz;
    vec4 _1088 = _1025;
    _1088.x = _318.x;
    _1088.y = _318.y;
    _1088.z = _318.z;
    vec3 _333 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1088.xyz;
    float _335 = _333.x;
    vec4 _1094 = _1088;
    _1094.x = _335;
    _1094.y = _333.y;
    _1094.z = _333.z;
    float _344 = dot(_1029.xyz, _1094.xyz);
    _1065.w = _344;
    float _348 = max(_344, 0.0);
    _1065.w = _348;
    float _1021;
    if (_348 == 0.0)
    {
        _1021 = 0.0;
    }
    else
    {
        _1021 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_348)));
    }
    vec4 _1384 = vec4(_335, _333.yz, _1021);
    _1029.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1029.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1029.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _386 = _1029.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1120 = vec4(0.0);
    _1120.x = _386.x;
    _1120.y = _386.y;
    _1120.z = _386.z;
    vec4 _1126 = vec4(0.0);
    _1126.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1126.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1126.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _410 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1126.xyz) + _1120.xyz;
    vec4 _1132 = _1120;
    _1132.x = _410.x;
    _1132.y = _410.y;
    _1132.z = _410.z;
    vec4 _1138 = vec4(0.0);
    _1138.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1138.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1138.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _434 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1138.xyz) + _1132.xyz;
    vec4 _1144 = _1132;
    _1144.x = _434.x;
    _1144.y = _434.y;
    _1144.z = _434.z;
    vec3 _446 = _1144.xyz - _1065.xyz;
    vec4 _1150 = _1144;
    _1150.x = _446.x;
    _1150.y = _446.y;
    _1150.z = _446.z;
    float _457 = dot(_1150.xyz, _1150.xyz);
    _1065.w = _457;
    float _1009 = inversesqrt(abs(_457));
    _1065.w = _1009;
    float _466 = 1.0 / _1009;
    vec4 _1162 = _1384;
    _1162.w = _466;
    vec3 _472 = _1150.xyz * _1065.www;
    vec4 _1164 = _1150;
    _1164.x = _472.x;
    _1164.y = _472.y;
    _1164.z = _472.z;
    _1065.w = clamp(dot(_1164.xyz, _1162.xyz), 0.0, 1.0);
    vec3 _492 = _1065.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1164.x = _492.x;
    _1164.y = _492.y;
    _1164.z = _492.z;
    float _507 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _466) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1065.w = _507;
    float _513 = 1.0 / (_1009 * _1009);
    _1162.w = _513;
    float _522 = (_513 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _507;
    _1065.w = _522;
    _1065.w = 1.0 / _522;
    _1162.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1162.xyz), 0.0, 1.0);
    vec4 _1194 = vec4(0.0);
    _1194.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1194.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1194.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _557 = (_1194.xyz * _1162.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1200 = _1194;
    _1200.x = _557.x;
    _1200.y = _557.y;
    _1200.z = _557.z;
    vec3 _573 = (_1164.xyz * _1065.www) + _1200.xyz;
    vec4 _1206 = _1164;
    _1206.x = _573.x;
    _1206.y = _573.y;
    _1206.z = _573.z;
    vec3 _586 = _1029.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1212 = _1200;
    _1212.x = _586.x;
    _1212.y = _586.y;
    _1212.z = _586.z;
    vec3 _601 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1126.xyz) + _1212.xyz;
    vec4 _1218 = _1212;
    _1218.x = _601.x;
    _1218.y = _601.y;
    _1218.z = _601.z;
    vec3 _616 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1138.xyz) + _1218.xyz;
    vec4 _1224 = _1218;
    _1224.x = _616.x;
    _1224.y = _616.y;
    _1224.z = _616.z;
    vec3 _628 = _1224.xyz - _1065.xyz;
    vec4 _1230 = _1224;
    _1230.x = _628.x;
    _1230.y = _628.y;
    _1230.z = _628.z;
    float _639 = dot(_1230.xyz, _1230.xyz);
    _1065.w = _639;
    float _1014 = inversesqrt(abs(_639));
    _1065.w = _1014;
    float _648 = 1.0 / _1014;
    _1162.w = _648;
    vec3 _654 = _1230.xyz * _1065.www;
    vec4 _1244 = _1230;
    _1244.x = _654.x;
    _1244.y = _654.y;
    _1244.z = _654.z;
    _1065.w = clamp(dot(_1244.xyz, _1162.xyz), 0.0, 1.0);
    vec3 _674 = _1065.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1244.x = _674.x;
    _1244.y = _674.y;
    _1244.z = _674.z;
    float _689 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _648) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1065.w = _689;
    float _695 = 1.0 / (_1014 * _1014);
    _1162.w = _695;
    float _704 = (_695 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _689;
    _1065.w = _704;
    float _708 = 1.0 / _704;
    _1065.w = _708;
    vec3 _717 = (_1244.xyz * _1065.www) + _1206.xyz;
    vec4 _1272 = _1206;
    _1272.x = _717.x;
    _1272.y = _717.y;
    _1272.z = _717.z;
    vec3 _730 = _1029.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1278 = _1029;
    _1278.x = _730.x;
    _1278.y = _730.y;
    _1278.z = _730.z;
    vec3 _745 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1126.xyz) + _1278.xyz;
    vec4 _1284 = _1278;
    _1284.x = _745.x;
    _1284.y = _745.y;
    _1284.z = _745.z;
    vec3 _760 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1138.xyz) + _1284.xyz;
    vec4 _1290 = _1284;
    _1290.x = _760.x;
    _1290.y = _760.y;
    _1290.z = _760.z;
    vec4 _1387 = vec4(_1290.xyz - _1065.xyz, _708);
    vec3 _780 = _1387.xyz;
    float _783 = dot(_780, _780);
    vec4 _1302 = _1387;
    _1302.w = _783;
    float _1019 = inversesqrt(abs(_783));
    _1302.w = _1019;
    float _792 = 1.0 / _1019;
    _1162.w = _792;
    vec4 _1388 = vec4(_1302.xyz * _1302.www, _1019);
    _1388.x = clamp(dot(_1388.xyz, _1162.xyz), 0.0, 1.0);
    float _833 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _792) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1389 = vec4(_1388.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _833);
    float _848 = ((1.0 / (_1019 * _1019)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _833;
    _1389.w = _848;
    float _852 = 1.0 / _848;
    _1389.w = _852;
    vec4 _1391 = vec4((_1389.xyz * _1389.www) + _1272.xyz, _852);
    vec3 _870 = min(_1391.xyz, vec3(1.0));
    vec4 _1344 = _1391;
    _1344.x = _870.x;
    _1344.y = _870.y;
    _1344.z = _870.z;
    vec4 _1392 = vec4(_1344.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_335, _333.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _911 = abs((_1392.xyz * 2.0) - _1200.xyz);
    wxlGPlain = max(max(_911.x, _911.y), _911.z);
    gl_Position = vec4(_146.x, -_146.y, _146.zw);
    color0 = _1392;
    color1 = vec4(_1384.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1033;
    texcoord1 = _1041;
    texcoord2 = _1049;
    fog0 = min(_1020, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
