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
    vec4 _123 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _145 = (_123.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_123.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_123.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _162 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _879 = _145;
    _879.x = _162.x;
    _879.y = _162.y;
    vec4 _883 = vec4(0.0);
    _883.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _883.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _184 = (_879.xy * _883.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _887 = vec4(0.0);
    _887.x = _184.x;
    _887.y = _184.y;
    _883.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _883.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _206 = (_879.xy * _883.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _895 = vec4(0.0);
    _895.x = _206.x;
    _895.y = _206.y;
    float _220 = (_123.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _900 = _123;
    _900.w = _220;
    float _224 = max(_220, 0.0);
    _900.w = _224;
    float _877;
    if (_224 == 0.0)
    {
        _877 = 0.0;
    }
    else
    {
        _877 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_224)));
    }
    _879.x = _877;
    _879.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _879.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _879.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _255 = _879.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    _883.x = _255.x;
    _883.y = _255.y;
    _883.z = _255.z;
    vec4 _923 = vec4(0.0);
    _923.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _923.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _923.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _279 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _923.xyz) + _883.xyz;
    vec4 _929 = _883;
    _929.x = _279.x;
    _929.y = _279.y;
    _929.z = _279.z;
    vec4 _935 = vec4(0.0);
    _935.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _935.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _935.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _303 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _935.xyz) + _929.xyz;
    vec4 _941 = _929;
    _941.x = _303.x;
    _941.y = _303.y;
    _941.z = _303.z;
    vec3 _315 = _941.xyz - _900.xyz;
    vec4 _947 = _941;
    _947.x = _315.x;
    _947.y = _315.y;
    _947.z = _315.z;
    float _326 = dot(_947.xyz, _947.xyz);
    _900.w = _326;
    float _849 = inversesqrt(abs(_326));
    _900.w = _849;
    float _335 = 1.0 / _849;
    vec4 _1190 = vec4(optRegs.rows[optTile*82u+17u+uint(1)].xyz, _335);
    vec3 _341 = _947.xyz * _900.www;
    vec4 _961 = _947;
    _961.x = _341.x;
    _961.y = _341.y;
    _961.z = _341.z;
    float _356 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _335) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _900.w = _356;
    float _362 = 1.0 / (_849 * _849);
    _1190.w = _362;
    float _371 = (_362 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _356;
    _900.w = _371;
    _900.w = 1.0 / _371;
    vec3 _383 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _981 = vec4(0.0);
    _981.x = _383.x;
    _981.y = _383.y;
    _981.z = _383.z;
    vec3 _398 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _981.xyz;
    vec4 _987 = _981;
    _987.x = _398.x;
    _987.y = _398.y;
    _987.z = _398.z;
    vec3 _413 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _987.xyz;
    vec4 _993 = _987;
    _993.x = _413.x;
    _993.y = _413.y;
    _993.z = _413.z;
    _1190.w = clamp(dot(_961.xyz, _993.xyz), 0.0, 1.0);
    vec3 _433 = _1190.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _961.x = _433.x;
    _961.y = _433.y;
    _961.z = _433.z;
    _1190.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _993.xyz), 0.0, 1.0);
    vec4 _1009 = vec4(0.0);
    _1009.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1009.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1009.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _468 = (_1009.xyz * _1190.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1015 = _1009;
    _1015.x = _468.x;
    _1015.y = _468.y;
    _1015.z = _468.z;
    vec3 _482 = (_961.xyz * _900.www) + _1015.xyz;
    vec4 _1021 = _961;
    _1021.x = _482.x;
    _1021.y = _482.y;
    _1021.z = _482.z;
    vec3 _495 = _1190.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1015.x = _495.x;
    _1015.y = _495.y;
    _1015.z = _495.z;
    vec3 _510 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _923.xyz) + _1015.xyz;
    vec4 _1033 = _1015;
    _1033.x = _510.x;
    _1033.y = _510.y;
    _1033.z = _510.z;
    vec3 _525 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _935.xyz) + _1033.xyz;
    vec4 _1039 = _1033;
    _1039.x = _525.x;
    _1039.y = _525.y;
    _1039.z = _525.z;
    vec3 _537 = _1039.xyz - _900.xyz;
    vec4 _1045 = _1039;
    _1045.x = _537.x;
    _1045.y = _537.y;
    _1045.z = _537.z;
    float _548 = dot(_1045.xyz, _1045.xyz);
    _900.w = _548;
    float _854 = inversesqrt(abs(_548));
    _900.w = _854;
    float _557 = 1.0 / _854;
    _1190.w = _557;
    vec3 _563 = _1045.xyz * _900.www;
    vec4 _1059 = _1045;
    _1059.x = _563.x;
    _1059.y = _563.y;
    _1059.z = _563.z;
    _900.w = clamp(dot(_1059.xyz, _993.xyz), 0.0, 1.0);
    vec3 _583 = _900.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1059.x = _583.x;
    _1059.y = _583.y;
    _1059.z = _583.z;
    float _598 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _557) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _900.w = _598;
    float _604 = 1.0 / (_854 * _854);
    _1190.w = _604;
    float _613 = (_604 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _598;
    _900.w = _613;
    float _617 = 1.0 / _613;
    _900.w = _617;
    vec3 _626 = (_1059.xyz * _900.www) + _1021.xyz;
    vec4 _1087 = _1021;
    _1087.x = _626.x;
    _1087.y = _626.y;
    _1087.z = _626.z;
    vec4 _1193 = vec4(_1190.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy, _604);
    vec3 _654 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _923.xyz) + _1193.xyz;
    vec4 _1099 = _1193;
    _1099.x = _654.x;
    _1099.y = _654.y;
    _1099.z = _654.z;
    vec3 _669 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _935.xyz) + _1099.xyz;
    vec4 _1105 = _1099;
    _1105.x = _669.x;
    _1105.y = _669.y;
    _1105.z = _669.z;
    vec4 _1194 = vec4(_1105.xyz - _900.xyz, _617);
    vec3 _689 = _1194.xyz;
    float _692 = dot(_689, _689);
    vec4 _1117 = _1194;
    _1117.w = _692;
    float _859 = inversesqrt(abs(_692));
    _1117.w = _859;
    vec4 _1195 = vec4(_1117.xyz * _1117.www, _859);
    _1195.x = clamp(dot(_1195.xyz, _993.xyz), 0.0, 1.0);
    float _742 = (optRegs.rows[optTile*82u+17u+uint(36)].y * (1.0 / _859)) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1196 = vec4(_1195.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _742);
    float _757 = ((1.0 / (_859 * _859)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _742;
    _1196.w = _757;
    float _761 = 1.0 / _757;
    _1196.w = _761;
    vec4 _1198 = vec4((_1196.xyz * _1196.www) + _1087.xyz, _761);
    vec3 _780 = min(_1198.xyz, vec3(1.0));
    vec4 _1159 = _1198;
    _1159.x = _780.x;
    _1159.y = _780.y;
    _1159.z = _780.z;
    vec4 _866 = optPush.clipToTarget * ((_123.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _145);
    gl_Position = vec4(_866.x, -_866.y, _866.zw);
    color0 = vec4(_1159.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _887;
    texcoord1 = _895;
    fog0 = min(_877, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
