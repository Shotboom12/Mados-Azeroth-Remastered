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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _115 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _137 = (_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _145 = (_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _137;
    vec2 _154 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _1000 = _137;
    _1000.x = _154.x;
    _1000.y = _154.y;
    vec4 _1004 = vec4(0.0);
    _1004.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _1004.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _178 = (_1000.xy * _1004.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1008 = vec4(0.0);
    _1008.x = _178.x;
    _1008.y = _178.y;
    _1004.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1004.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _200 = (_1000.xy * _1004.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1016 = vec4(0.0);
    _1016.x = _200.x;
    _1016.y = _200.y;
    float _215 = (_115.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1021 = _115;
    _1021.w = _215;
    float _220 = max(_215, 0.0);
    _1021.w = _220;
    float _995;
    if (_220 == 0.0)
    {
        _995 = 0.0;
    }
    else
    {
        _995 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_220)));
    }
    _1000.x = _995;
    vec3 _236 = -_1021.xyz;
    float _240 = dot(_236, _236);
    vec4 _1032 = _1021;
    _1032.w = _240;
    _1032.w = inversesqrt(abs(_240));
    vec3 _257 = ((-_1032.xyz) * _1032.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1000.x = _257.x;
    _1000.y = _257.y;
    _1000.z = _257.z;
    vec4 _964 = _1000 * inversesqrt(dot(_1000.xyz, _1000.xyz));
    _1004.x = _964.x;
    _1004.y = _964.y;
    _1004.z = _964.z;
    vec3 _280 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _1000.x = _280.x;
    _1000.y = _280.y;
    _1000.z = _280.z;
    vec3 _295 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1000.xyz;
    vec4 _1055 = _1000;
    _1055.x = _295.x;
    _1055.y = _295.y;
    _1055.z = _295.z;
    vec3 _310 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1055.xyz;
    float _312 = _310.x;
    vec4 _1061 = _1055;
    _1061.x = _312;
    _1061.y = _310.y;
    _1061.z = _310.z;
    float _321 = dot(_1004.xyz, _1061.xyz);
    _1032.w = _321;
    float _325 = max(_321, 0.0);
    _1032.w = _325;
    float _996;
    if (_325 == 0.0)
    {
        _996 = 0.0;
    }
    else
    {
        _996 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_325)));
    }
    vec4 _1351 = vec4(_312, _310.yz, _996);
    _1004.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1004.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1004.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _363 = _1004.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1087 = vec4(0.0);
    _1087.x = _363.x;
    _1087.y = _363.y;
    _1087.z = _363.z;
    vec4 _1093 = vec4(0.0);
    _1093.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1093.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1093.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _387 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1093.xyz) + _1087.xyz;
    vec4 _1099 = _1087;
    _1099.x = _387.x;
    _1099.y = _387.y;
    _1099.z = _387.z;
    vec4 _1105 = vec4(0.0);
    _1105.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1105.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1105.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _411 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1105.xyz) + _1099.xyz;
    vec4 _1111 = _1099;
    _1111.x = _411.x;
    _1111.y = _411.y;
    _1111.z = _411.z;
    vec3 _423 = _1111.xyz - _1032.xyz;
    vec4 _1117 = _1111;
    _1117.x = _423.x;
    _1117.y = _423.y;
    _1117.z = _423.z;
    float _434 = dot(_1117.xyz, _1117.xyz);
    _1032.w = _434;
    float _984 = inversesqrt(abs(_434));
    _1032.w = _984;
    float _443 = 1.0 / _984;
    vec4 _1129 = _1351;
    _1129.w = _443;
    vec3 _449 = _1117.xyz * _1032.www;
    vec4 _1131 = _1117;
    _1131.x = _449.x;
    _1131.y = _449.y;
    _1131.z = _449.z;
    _1032.w = clamp(dot(_1131.xyz, _1129.xyz), 0.0, 1.0);
    vec3 _469 = _1032.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1131.x = _469.x;
    _1131.y = _469.y;
    _1131.z = _469.z;
    float _484 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _443) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1032.w = _484;
    float _490 = 1.0 / (_984 * _984);
    _1129.w = _490;
    float _499 = (_490 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _484;
    _1032.w = _499;
    _1032.w = 1.0 / _499;
    _1129.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1129.xyz), 0.0, 1.0);
    vec4 _1161 = vec4(0.0);
    _1161.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1161.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1161.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _534 = (_1161.xyz * _1129.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1167 = _1161;
    _1167.x = _534.x;
    _1167.y = _534.y;
    _1167.z = _534.z;
    vec3 _550 = (_1131.xyz * _1032.www) + _1167.xyz;
    vec4 _1173 = _1131;
    _1173.x = _550.x;
    _1173.y = _550.y;
    _1173.z = _550.z;
    vec3 _563 = _1004.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    vec4 _1179 = _1167;
    _1179.x = _563.x;
    _1179.y = _563.y;
    _1179.z = _563.z;
    vec3 _578 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1093.xyz) + _1179.xyz;
    vec4 _1185 = _1179;
    _1185.x = _578.x;
    _1185.y = _578.y;
    _1185.z = _578.z;
    vec3 _593 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1105.xyz) + _1185.xyz;
    vec4 _1191 = _1185;
    _1191.x = _593.x;
    _1191.y = _593.y;
    _1191.z = _593.z;
    vec3 _605 = _1191.xyz - _1032.xyz;
    vec4 _1197 = _1191;
    _1197.x = _605.x;
    _1197.y = _605.y;
    _1197.z = _605.z;
    float _616 = dot(_1197.xyz, _1197.xyz);
    _1032.w = _616;
    float _989 = inversesqrt(abs(_616));
    _1032.w = _989;
    float _625 = 1.0 / _989;
    _1129.w = _625;
    vec3 _631 = _1197.xyz * _1032.www;
    vec4 _1211 = _1197;
    _1211.x = _631.x;
    _1211.y = _631.y;
    _1211.z = _631.z;
    _1032.w = clamp(dot(_1211.xyz, _1129.xyz), 0.0, 1.0);
    vec3 _651 = _1032.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1211.x = _651.x;
    _1211.y = _651.y;
    _1211.z = _651.z;
    float _666 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _625) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1032.w = _666;
    float _672 = 1.0 / (_989 * _989);
    _1129.w = _672;
    float _681 = (_672 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _666;
    _1032.w = _681;
    float _685 = 1.0 / _681;
    _1032.w = _685;
    vec3 _694 = (_1211.xyz * _1032.www) + _1173.xyz;
    vec4 _1239 = _1173;
    _1239.x = _694.x;
    _1239.y = _694.y;
    _1239.z = _694.z;
    vec3 _707 = _1004.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1245 = _1004;
    _1245.x = _707.x;
    _1245.y = _707.y;
    _1245.z = _707.z;
    vec3 _722 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1093.xyz) + _1245.xyz;
    vec4 _1251 = _1245;
    _1251.x = _722.x;
    _1251.y = _722.y;
    _1251.z = _722.z;
    vec3 _737 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1105.xyz) + _1251.xyz;
    vec4 _1257 = _1251;
    _1257.x = _737.x;
    _1257.y = _737.y;
    _1257.z = _737.z;
    vec4 _1354 = vec4(_1257.xyz - _1032.xyz, _685);
    vec3 _757 = _1354.xyz;
    float _760 = dot(_757, _757);
    vec4 _1269 = _1354;
    _1269.w = _760;
    float _994 = inversesqrt(abs(_760));
    _1269.w = _994;
    float _769 = 1.0 / _994;
    _1129.w = _769;
    vec4 _1355 = vec4(_1269.xyz * _1269.www, _994);
    _1355.x = clamp(dot(_1355.xyz, _1129.xyz), 0.0, 1.0);
    float _810 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _769) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1356 = vec4(_1355.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _810);
    float _825 = ((1.0 / (_994 * _994)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _810;
    _1356.w = _825;
    float _829 = 1.0 / _825;
    _1356.w = _829;
    vec4 _1358 = vec4((_1356.xyz * _1356.www) + _1239.xyz, _829);
    vec3 _847 = min(_1358.xyz, vec3(1.0));
    vec4 _1311 = _1358;
    _1311.x = _847.x;
    _1311.y = _847.y;
    _1311.z = _847.z;
    vec4 _1359 = vec4(_1311.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_312, _310.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _888 = abs((_1359.xyz * 2.0) - _1167.xyz);
    wxlGPlain = max(max(_888.x, _888.y), _888.z);
    gl_Position = vec4(_145.x, -_145.y, _145.zw);
    color0 = _1359;
    color1 = vec4(_1351.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1008;
    texcoord1 = _1016;
    fog0 = min(_995, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
