#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec4 _993 = _159;
    _993.x = _176.x;
    _993.y = _176.y;
    vec4 _997 = vec4(0.0);
    _997.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _997.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _198 = (_993.xy * _997.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _1001 = vec4(0.0);
    _1001.x = _198.x;
    _1001.y = _198.y;
    _997.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _997.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _220 = (_993.xy * _997.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1009 = vec4(0.0);
    _1009.x = _220.x;
    _1009.y = _220.y;
    float _234 = (_137.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _1014 = _137;
    _1014.w = _234;
    float _238 = max(_234, 0.0);
    _1014.w = _238;
    float _990;
    if (_238 == 0.0)
    {
        _990 = 0.0;
    }
    else
    {
        _990 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_238)));
    }
    _993.x = _990;
    vec3 _255 = -_1014.xyz;
    float _259 = dot(_255, _255);
    vec4 _1025 = _1014;
    _1025.w = _259;
    _1025.w = inversesqrt(abs(_259));
    vec3 _276 = ((-_1025.xyz) * _1025.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _993.x = _276.x;
    _993.y = _276.y;
    _993.z = _276.z;
    vec4 _942 = _993 * inversesqrt(dot(_993.xyz, _993.xyz));
    _997.x = _942.x;
    _997.y = _942.y;
    _997.z = _942.z;
    vec3 _299 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _993.x = _299.x;
    _993.y = _299.y;
    _993.z = _299.z;
    vec3 _314 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _993.xyz;
    vec4 _1048 = _993;
    _1048.x = _314.x;
    _1048.y = _314.y;
    _1048.z = _314.z;
    vec3 _329 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1048.xyz;
    float _331 = _329.x;
    vec4 _1054 = _1048;
    _1054.x = _331;
    _1054.y = _329.y;
    _1054.z = _329.z;
    float _340 = dot(_997.xyz, _1054.xyz);
    _1025.w = _340;
    float _344 = max(_340, 0.0);
    _1025.w = _344;
    float _991;
    if (_344 == 0.0)
    {
        _991 = 0.0;
    }
    else
    {
        _991 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_344)));
    }
    vec4 _1348 = vec4(_331, _329.yz, _991);
    _997.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _997.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _997.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _382 = _997.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    vec4 _1080 = vec4(0.0);
    _1080.x = _382.x;
    _1080.y = _382.y;
    _1080.z = _382.z;
    vec4 _1086 = vec4(0.0);
    _1086.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1086.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1086.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _406 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1086.xyz) + _1080.xyz;
    vec4 _1092 = _1080;
    _1092.x = _406.x;
    _1092.y = _406.y;
    _1092.z = _406.z;
    vec4 _1098 = vec4(0.0);
    _1098.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1098.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1098.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _430 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1098.xyz) + _1092.xyz;
    vec4 _1104 = _1092;
    _1104.x = _430.x;
    _1104.y = _430.y;
    _1104.z = _430.z;
    vec3 _442 = _1104.xyz - _1025.xyz;
    vec4 _1110 = _1104;
    _1110.x = _442.x;
    _1110.y = _442.y;
    _1110.z = _442.z;
    float _453 = dot(_1110.xyz, _1110.xyz);
    _1025.w = _453;
    float _962 = inversesqrt(abs(_453));
    _1025.w = _962;
    float _462 = 1.0 / _962;
    vec4 _1122 = _1348;
    _1122.w = _462;
    vec3 _468 = _1110.xyz * _1025.www;
    vec4 _1124 = _1110;
    _1124.x = _468.x;
    _1124.y = _468.y;
    _1124.z = _468.z;
    _1025.w = clamp(dot(_1124.xyz, _1122.xyz), 0.0, 1.0);
    vec3 _488 = _1025.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1124.x = _488.x;
    _1124.y = _488.y;
    _1124.z = _488.z;
    float _503 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _462) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1025.w = _503;
    float _509 = 1.0 / (_962 * _962);
    _1122.w = _509;
    float _518 = (_509 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _503;
    _1025.w = _518;
    _1025.w = 1.0 / _518;
    _1122.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1122.xyz), 0.0, 1.0);
    vec4 _1154 = vec4(0.0);
    _1154.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1154.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1154.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _551 = (_1154.xyz * _1122.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1160 = _1154;
    _1160.x = _551.x;
    _1160.y = _551.y;
    _1160.z = _551.z;
    vec3 _565 = (_1124.xyz * _1025.www) + _1160.xyz;
    vec4 _1166 = _1124;
    _1166.x = _565.x;
    _1166.y = _565.y;
    _1166.z = _565.z;
    vec3 _578 = _997.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1160.x = _578.x;
    _1160.y = _578.y;
    _1160.z = _578.z;
    vec3 _593 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1086.xyz) + _1160.xyz;
    vec4 _1178 = _1160;
    _1178.x = _593.x;
    _1178.y = _593.y;
    _1178.z = _593.z;
    vec3 _608 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1098.xyz) + _1178.xyz;
    vec4 _1184 = _1178;
    _1184.x = _608.x;
    _1184.y = _608.y;
    _1184.z = _608.z;
    vec3 _620 = _1184.xyz - _1025.xyz;
    vec4 _1190 = _1184;
    _1190.x = _620.x;
    _1190.y = _620.y;
    _1190.z = _620.z;
    float _631 = dot(_1190.xyz, _1190.xyz);
    _1025.w = _631;
    float _967 = inversesqrt(abs(_631));
    _1025.w = _967;
    float _640 = 1.0 / _967;
    _1122.w = _640;
    vec3 _646 = _1190.xyz * _1025.www;
    vec4 _1204 = _1190;
    _1204.x = _646.x;
    _1204.y = _646.y;
    _1204.z = _646.z;
    _1025.w = clamp(dot(_1204.xyz, _1122.xyz), 0.0, 1.0);
    vec3 _666 = _1025.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1204.x = _666.x;
    _1204.y = _666.y;
    _1204.z = _666.z;
    float _681 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _640) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1025.w = _681;
    float _687 = 1.0 / (_967 * _967);
    _1122.w = _687;
    float _696 = (_687 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _681;
    _1025.w = _696;
    float _700 = 1.0 / _696;
    _1025.w = _700;
    vec3 _709 = (_1204.xyz * _1025.www) + _1166.xyz;
    vec4 _1232 = _1166;
    _1232.x = _709.x;
    _1232.y = _709.y;
    _1232.z = _709.z;
    vec3 _722 = _997.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1238 = _997;
    _1238.x = _722.x;
    _1238.y = _722.y;
    _1238.z = _722.z;
    vec3 _737 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1086.xyz) + _1238.xyz;
    vec4 _1244 = _1238;
    _1244.x = _737.x;
    _1244.y = _737.y;
    _1244.z = _737.z;
    vec3 _752 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1098.xyz) + _1244.xyz;
    vec4 _1250 = _1244;
    _1250.x = _752.x;
    _1250.y = _752.y;
    _1250.z = _752.z;
    vec4 _1351 = vec4(_1250.xyz - _1025.xyz, _700);
    vec3 _772 = _1351.xyz;
    float _775 = dot(_772, _772);
    vec4 _1262 = _1351;
    _1262.w = _775;
    float _972 = inversesqrt(abs(_775));
    _1262.w = _972;
    float _784 = 1.0 / _972;
    _1122.w = _784;
    vec4 _1352 = vec4(_1262.xyz * _1262.www, _972);
    _1352.x = clamp(dot(_1352.xyz, _1122.xyz), 0.0, 1.0);
    float _825 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _784) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1353 = vec4(_1352.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _825);
    float _840 = ((1.0 / (_972 * _972)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _825;
    _1353.w = _840;
    float _844 = 1.0 / _840;
    _1353.w = _844;
    vec4 _1355 = vec4((_1353.xyz * _1353.www) + _1232.xyz, _844);
    vec3 _863 = min(_1355.xyz, vec3(1.0));
    vec4 _1304 = _1355;
    _1304.x = _863.x;
    _1304.y = _863.y;
    _1304.z = _863.z;
    vec4 _979 = optPush.clipToTarget * ((_137.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _159);
    gl_Position = vec4(_979.x, -_979.y, _979.zw);
    color0 = vec4(_1304.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1348.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1001;
    texcoord1 = _1009;
    fog0 = min(_990, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
