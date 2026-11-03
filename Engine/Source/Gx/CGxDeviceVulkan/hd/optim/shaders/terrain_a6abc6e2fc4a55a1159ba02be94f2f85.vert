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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _115 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _137 = (_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _145 = (_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _137;
    vec2 _154 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1002 = _137;
    _1002.x = _154.x;
    _1002.y = _154.y;
    vec4 _1006 = vec4(0.0);
    _1006.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1006.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _178 = (_1002.xy * _1006.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1010 = vec4(0.0);
    _1010.x = _178.x;
    _1010.y = _178.y;
    _1006.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1006.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _200 = (_1002.xy * _1006.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1018 = vec4(0.0);
    _1018.x = _200.x;
    _1018.y = _200.y;
    float _215 = (_115.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1023 = _115;
    _1023.w = _215;
    float _220 = max(_215, 0.0);
    _1023.w = _220;
    float _997;
    if (_220 == 0.0)
    {
        _997 = 0.0;
    }
    else
    {
        _997 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_220)));
    }
    _1002.x = _997;
    vec3 _236 = -_1023.xyz;
    float _240 = dot(_236, _236);
    vec4 _1034 = _1023;
    _1034.w = _240;
    _1034.w = inversesqrt(abs(_240));
    vec3 _257 = ((-_1034.xyz) * _1034.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1002.x = _257.x;
    _1002.y = _257.y;
    _1002.z = _257.z;
    vec4 _966 = _1002 * inversesqrt(dot(_1002.xyz, _1002.xyz));
    _1006.x = _966.x;
    _1006.y = _966.y;
    _1006.z = _966.z;
    vec3 _280 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1002.x = _280.x;
    _1002.y = _280.y;
    _1002.z = _280.z;
    vec3 _295 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1002.xyz;
    vec4 _1057 = _1002;
    _1057.x = _295.x;
    _1057.y = _295.y;
    _1057.z = _295.z;
    vec3 _310 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1057.xyz;
    float _312 = _310.x;
    vec4 _1063 = _1057;
    _1063.x = _312;
    _1063.y = _310.y;
    _1063.z = _310.z;
    float _321 = dot(_1006.xyz, _1063.xyz);
    _1034.w = _321;
    float _325 = max(_321, 0.0);
    _1034.w = _325;
    float _998;
    if (_325 == 0.0)
    {
        _998 = 0.0;
    }
    else
    {
        _998 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_325)));
    }
    vec4 _1353 = vec4(_312, _310.yz, _998);
    _1006.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1006.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1006.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _363 = _1006.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1089 = vec4(0.0);
    _1089.x = _363.x;
    _1089.y = _363.y;
    _1089.z = _363.z;
    vec4 _1095 = vec4(0.0);
    _1095.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1095.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1095.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _387 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1095.xyz) + _1089.xyz;
    vec4 _1101 = _1089;
    _1101.x = _387.x;
    _1101.y = _387.y;
    _1101.z = _387.z;
    vec4 _1107 = vec4(0.0);
    _1107.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1107.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1107.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _411 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1107.xyz) + _1101.xyz;
    vec4 _1113 = _1101;
    _1113.x = _411.x;
    _1113.y = _411.y;
    _1113.z = _411.z;
    vec3 _423 = _1113.xyz - _1034.xyz;
    vec4 _1119 = _1113;
    _1119.x = _423.x;
    _1119.y = _423.y;
    _1119.z = _423.z;
    float _434 = dot(_1119.xyz, _1119.xyz);
    _1034.w = _434;
    float _986 = inversesqrt(abs(_434));
    _1034.w = _986;
    float _443 = 1.0 / _986;
    vec4 _1131 = _1353;
    _1131.w = _443;
    vec3 _449 = _1119.xyz * _1034.www;
    vec4 _1133 = _1119;
    _1133.x = _449.x;
    _1133.y = _449.y;
    _1133.z = _449.z;
    _1034.w = clamp(dot(_1133.xyz, _1131.xyz), 0.0, 1.0);
    vec3 _469 = _1034.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1133.x = _469.x;
    _1133.y = _469.y;
    _1133.z = _469.z;
    float _484 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _443) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1034.w = _484;
    float _490 = 1.0 / (_986 * _986);
    _1131.w = _490;
    float _499 = (_490 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _484;
    _1034.w = _499;
    _1034.w = 1.0 / _499;
    _1131.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1131.xyz), 0.0, 1.0);
    vec4 _1163 = vec4(0.0);
    _1163.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1163.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1163.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _534 = (_1163.xyz * _1131.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1169 = _1163;
    _1169.x = _534.x;
    _1169.y = _534.y;
    _1169.z = _534.z;
    vec3 _550 = (_1133.xyz * _1034.www) + _1169.xyz;
    vec4 _1175 = _1133;
    _1175.x = _550.x;
    _1175.y = _550.y;
    _1175.z = _550.z;
    vec3 _563 = _1006.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1181 = _1169;
    _1181.x = _563.x;
    _1181.y = _563.y;
    _1181.z = _563.z;
    vec3 _578 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1095.xyz) + _1181.xyz;
    vec4 _1187 = _1181;
    _1187.x = _578.x;
    _1187.y = _578.y;
    _1187.z = _578.z;
    vec3 _593 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1107.xyz) + _1187.xyz;
    vec4 _1193 = _1187;
    _1193.x = _593.x;
    _1193.y = _593.y;
    _1193.z = _593.z;
    vec3 _605 = _1193.xyz - _1034.xyz;
    vec4 _1199 = _1193;
    _1199.x = _605.x;
    _1199.y = _605.y;
    _1199.z = _605.z;
    float _616 = dot(_1199.xyz, _1199.xyz);
    _1034.w = _616;
    float _991 = inversesqrt(abs(_616));
    _1034.w = _991;
    float _625 = 1.0 / _991;
    _1131.w = _625;
    vec3 _631 = _1199.xyz * _1034.www;
    vec4 _1213 = _1199;
    _1213.x = _631.x;
    _1213.y = _631.y;
    _1213.z = _631.z;
    _1034.w = clamp(dot(_1213.xyz, _1131.xyz), 0.0, 1.0);
    vec3 _651 = _1034.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1213.x = _651.x;
    _1213.y = _651.y;
    _1213.z = _651.z;
    float _666 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _625) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1034.w = _666;
    float _672 = 1.0 / (_991 * _991);
    _1131.w = _672;
    float _681 = (_672 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _666;
    _1034.w = _681;
    float _685 = 1.0 / _681;
    _1034.w = _685;
    vec3 _694 = (_1213.xyz * _1034.www) + _1175.xyz;
    vec4 _1241 = _1175;
    _1241.x = _694.x;
    _1241.y = _694.y;
    _1241.z = _694.z;
    vec3 _707 = _1006.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1247 = _1006;
    _1247.x = _707.x;
    _1247.y = _707.y;
    _1247.z = _707.z;
    vec3 _722 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1095.xyz) + _1247.xyz;
    vec4 _1253 = _1247;
    _1253.x = _722.x;
    _1253.y = _722.y;
    _1253.z = _722.z;
    vec3 _737 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1107.xyz) + _1253.xyz;
    vec4 _1259 = _1253;
    _1259.x = _737.x;
    _1259.y = _737.y;
    _1259.z = _737.z;
    vec4 _1356 = vec4(_1259.xyz - _1034.xyz, _685);
    vec3 _757 = _1356.xyz;
    float _760 = dot(_757, _757);
    vec4 _1271 = _1356;
    _1271.w = _760;
    float _996 = inversesqrt(abs(_760));
    _1271.w = _996;
    float _769 = 1.0 / _996;
    _1131.w = _769;
    vec4 _1357 = vec4(_1271.xyz * _1271.www, _996);
    _1357.x = clamp(dot(_1357.xyz, _1131.xyz), 0.0, 1.0);
    float _810 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _769) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1358 = vec4(_1357.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _810);
    float _825 = ((1.0 / (_996 * _996)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _810;
    _1358.w = _825;
    float _829 = 1.0 / _825;
    _1358.w = _829;
    vec4 _1360 = vec4((_1358.xyz * _1358.www) + _1241.xyz, _829);
    vec3 _847 = min(_1360.xyz, vec3(1.0));
    vec4 _1313 = _1360;
    _1313.x = _847.x;
    _1313.y = _847.y;
    _1313.z = _847.z;
    vec4 _1361 = vec4(_1313.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_312, _310.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _890 = abs((_1361.xyz * 2.0) - _1169.xyz);
    wxlGPlain = max(max(_890.x, _890.y), _890.z);
    gl_Position = vec4(_145.x, -_145.y, _145.zw);
    color0 = _1361;
    color1 = vec4(_1353.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1010;
    texcoord1 = _1018;
    fog0 = min(_997, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
