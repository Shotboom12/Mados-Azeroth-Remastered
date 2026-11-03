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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _137 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _159 = (_137.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_137.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_137.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _176 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _994 = _159;
    _994.x = _176.x;
    _994.y = _176.y;
    vec4 _998 = vec4(0.0);
    _998.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _998.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _198 = (_994.xy * _998.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1002 = vec4(0.0);
    _1002.x = _198.x;
    _1002.y = _198.y;
    _998.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _998.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _220 = (_994.xy * _998.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1010 = vec4(0.0);
    _1010.x = _220.x;
    _1010.y = _220.y;
    float _234 = (_137.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1015 = _137;
    _1015.w = _234;
    float _238 = max(_234, 0.0);
    _1015.w = _238;
    float _991;
    if (_238 == 0.0)
    {
        _991 = 0.0;
    }
    else
    {
        _991 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_238)));
    }
    _994.x = _991;
    vec3 _255 = -_1015.xyz;
    float _259 = dot(_255, _255);
    vec4 _1026 = _1015;
    _1026.w = _259;
    _1026.w = inversesqrt(abs(_259));
    vec3 _276 = ((-_1026.xyz) * _1026.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _994.x = _276.x;
    _994.y = _276.y;
    _994.z = _276.z;
    vec4 _943 = _994 * inversesqrt(dot(_994.xyz, _994.xyz));
    _998.x = _943.x;
    _998.y = _943.y;
    _998.z = _943.z;
    vec3 _299 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _994.x = _299.x;
    _994.y = _299.y;
    _994.z = _299.z;
    vec3 _314 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _994.xyz;
    vec4 _1049 = _994;
    _1049.x = _314.x;
    _1049.y = _314.y;
    _1049.z = _314.z;
    vec3 _329 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1049.xyz;
    float _331 = _329.x;
    vec4 _1055 = _1049;
    _1055.x = _331;
    _1055.y = _329.y;
    _1055.z = _329.z;
    float _340 = dot(_998.xyz, _1055.xyz);
    _1026.w = _340;
    float _344 = max(_340, 0.0);
    _1026.w = _344;
    float _992;
    if (_344 == 0.0)
    {
        _992 = 0.0;
    }
    else
    {
        _992 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_344)));
    }
    vec4 _1349 = vec4(_331, _329.yz, _992);
    _998.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _998.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _998.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _382 = _998.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1081 = vec4(0.0);
    _1081.x = _382.x;
    _1081.y = _382.y;
    _1081.z = _382.z;
    vec4 _1087 = vec4(0.0);
    _1087.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1087.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1087.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _406 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1087.xyz) + _1081.xyz;
    vec4 _1093 = _1081;
    _1093.x = _406.x;
    _1093.y = _406.y;
    _1093.z = _406.z;
    vec4 _1099 = vec4(0.0);
    _1099.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1099.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1099.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _430 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1099.xyz) + _1093.xyz;
    vec4 _1105 = _1093;
    _1105.x = _430.x;
    _1105.y = _430.y;
    _1105.z = _430.z;
    vec3 _442 = _1105.xyz - _1026.xyz;
    vec4 _1111 = _1105;
    _1111.x = _442.x;
    _1111.y = _442.y;
    _1111.z = _442.z;
    float _453 = dot(_1111.xyz, _1111.xyz);
    _1026.w = _453;
    float _963 = inversesqrt(abs(_453));
    _1026.w = _963;
    float _462 = 1.0 / _963;
    vec4 _1123 = _1349;
    _1123.w = _462;
    vec3 _468 = _1111.xyz * _1026.www;
    vec4 _1125 = _1111;
    _1125.x = _468.x;
    _1125.y = _468.y;
    _1125.z = _468.z;
    _1026.w = clamp(dot(_1125.xyz, _1123.xyz), 0.0, 1.0);
    vec3 _488 = _1026.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1125.x = _488.x;
    _1125.y = _488.y;
    _1125.z = _488.z;
    float _503 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _462) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1026.w = _503;
    float _509 = 1.0 / (_963 * _963);
    _1123.w = _509;
    float _518 = (_509 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _503;
    _1026.w = _518;
    _1026.w = 1.0 / _518;
    _1123.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1123.xyz), 0.0, 1.0);
    vec4 _1155 = vec4(0.0);
    _1155.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1155.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1155.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _551 = (_1155.xyz * _1123.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1161 = _1155;
    _1161.x = _551.x;
    _1161.y = _551.y;
    _1161.z = _551.z;
    vec3 _565 = (_1125.xyz * _1026.www) + _1161.xyz;
    vec4 _1167 = _1125;
    _1167.x = _565.x;
    _1167.y = _565.y;
    _1167.z = _565.z;
    vec3 _578 = _998.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1161.x = _578.x;
    _1161.y = _578.y;
    _1161.z = _578.z;
    vec3 _593 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1087.xyz) + _1161.xyz;
    vec4 _1179 = _1161;
    _1179.x = _593.x;
    _1179.y = _593.y;
    _1179.z = _593.z;
    vec3 _608 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1099.xyz) + _1179.xyz;
    vec4 _1185 = _1179;
    _1185.x = _608.x;
    _1185.y = _608.y;
    _1185.z = _608.z;
    vec3 _620 = _1185.xyz - _1026.xyz;
    vec4 _1191 = _1185;
    _1191.x = _620.x;
    _1191.y = _620.y;
    _1191.z = _620.z;
    float _631 = dot(_1191.xyz, _1191.xyz);
    _1026.w = _631;
    float _968 = inversesqrt(abs(_631));
    _1026.w = _968;
    float _640 = 1.0 / _968;
    _1123.w = _640;
    vec3 _646 = _1191.xyz * _1026.www;
    vec4 _1205 = _1191;
    _1205.x = _646.x;
    _1205.y = _646.y;
    _1205.z = _646.z;
    _1026.w = clamp(dot(_1205.xyz, _1123.xyz), 0.0, 1.0);
    vec3 _666 = _1026.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1205.x = _666.x;
    _1205.y = _666.y;
    _1205.z = _666.z;
    float _681 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _640) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1026.w = _681;
    float _687 = 1.0 / (_968 * _968);
    _1123.w = _687;
    float _696 = (_687 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _681;
    _1026.w = _696;
    float _700 = 1.0 / _696;
    _1026.w = _700;
    vec3 _709 = (_1205.xyz * _1026.www) + _1167.xyz;
    vec4 _1233 = _1167;
    _1233.x = _709.x;
    _1233.y = _709.y;
    _1233.z = _709.z;
    vec3 _722 = _998.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1239 = _998;
    _1239.x = _722.x;
    _1239.y = _722.y;
    _1239.z = _722.z;
    vec3 _737 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1087.xyz) + _1239.xyz;
    vec4 _1245 = _1239;
    _1245.x = _737.x;
    _1245.y = _737.y;
    _1245.z = _737.z;
    vec3 _752 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1099.xyz) + _1245.xyz;
    vec4 _1251 = _1245;
    _1251.x = _752.x;
    _1251.y = _752.y;
    _1251.z = _752.z;
    vec4 _1352 = vec4(_1251.xyz - _1026.xyz, _700);
    vec3 _772 = _1352.xyz;
    float _775 = dot(_772, _772);
    vec4 _1263 = _1352;
    _1263.w = _775;
    float _973 = inversesqrt(abs(_775));
    _1263.w = _973;
    float _784 = 1.0 / _973;
    _1123.w = _784;
    vec4 _1353 = vec4(_1263.xyz * _1263.www, _973);
    _1353.x = clamp(dot(_1353.xyz, _1123.xyz), 0.0, 1.0);
    float _825 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _784) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1354 = vec4(_1353.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _825);
    float _840 = ((1.0 / (_973 * _973)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _825;
    _1354.w = _840;
    float _844 = 1.0 / _840;
    _1354.w = _844;
    vec4 _1356 = vec4((_1354.xyz * _1354.www) + _1233.xyz, _844);
    vec3 _863 = min(_1356.xyz, vec3(1.0));
    vec4 _1305 = _1356;
    _1305.x = _863.x;
    _1305.y = _863.y;
    _1305.z = _863.z;
    vec4 _980 = optPush.clipToTarget * ((_137.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _159);
    gl_Position = vec4(_980.x, -_980.y, _980.zw);
    color0 = vec4(_1305.xyz * v2.xyz, 1.0);
    color1 = vec4(_1349.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1002;
    texcoord1 = _1010;
    fog0 = min(_991, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
