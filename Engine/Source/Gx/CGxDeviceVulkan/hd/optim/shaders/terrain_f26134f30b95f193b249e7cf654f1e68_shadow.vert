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
    vec4 _123 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _145 = (_123.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_123.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_123.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _162 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _878 = _145;
    _878.x = _162.x;
    _878.y = _162.y;
    vec4 _882 = vec4(0.0);
    _882.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _882.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _184 = (_878.xy * _882.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _886 = vec4(0.0);
    _886.x = _184.x;
    _886.y = _184.y;
    _882.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _882.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _206 = (_878.xy * _882.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _894 = vec4(0.0);
    _894.x = _206.x;
    _894.y = _206.y;
    float _220 = (_123.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _899 = _123;
    _899.w = _220;
    float _224 = max(_220, 0.0);
    _899.w = _224;
    float _876;
    if (_224 == 0.0)
    {
        _876 = 0.0;
    }
    else
    {
        _876 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_224)));
    }
    _878.x = _876;
    _878.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _878.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _878.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _255 = _878.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    _882.x = _255.x;
    _882.y = _255.y;
    _882.z = _255.z;
    vec4 _922 = vec4(0.0);
    _922.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _922.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _922.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _279 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _922.xyz) + _882.xyz;
    vec4 _928 = _882;
    _928.x = _279.x;
    _928.y = _279.y;
    _928.z = _279.z;
    vec4 _934 = vec4(0.0);
    _934.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _934.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _934.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _303 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _934.xyz) + _928.xyz;
    vec4 _940 = _928;
    _940.x = _303.x;
    _940.y = _303.y;
    _940.z = _303.z;
    vec3 _315 = _940.xyz - _899.xyz;
    vec4 _946 = _940;
    _946.x = _315.x;
    _946.y = _315.y;
    _946.z = _315.z;
    float _326 = dot(_946.xyz, _946.xyz);
    _899.w = _326;
    float _848 = inversesqrt(abs(_326));
    _899.w = _848;
    float _335 = 1.0 / _848;
    vec4 _1189 = vec4(optRegs.rows[optTile*82u+17u+uint(1)].xyz, _335);
    vec3 _341 = _946.xyz * _899.www;
    vec4 _960 = _946;
    _960.x = _341.x;
    _960.y = _341.y;
    _960.z = _341.z;
    float _356 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _335) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _899.w = _356;
    float _362 = 1.0 / (_848 * _848);
    _1189.w = _362;
    float _371 = (_362 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _356;
    _899.w = _371;
    _899.w = 1.0 / _371;
    vec3 _383 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _980 = vec4(0.0);
    _980.x = _383.x;
    _980.y = _383.y;
    _980.z = _383.z;
    vec3 _398 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _980.xyz;
    vec4 _986 = _980;
    _986.x = _398.x;
    _986.y = _398.y;
    _986.z = _398.z;
    vec3 _413 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _986.xyz;
    vec4 _992 = _986;
    _992.x = _413.x;
    _992.y = _413.y;
    _992.z = _413.z;
    _1189.w = clamp(dot(_960.xyz, _992.xyz), 0.0, 1.0);
    vec3 _433 = _1189.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _960.x = _433.x;
    _960.y = _433.y;
    _960.z = _433.z;
    _1189.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _992.xyz), 0.0, 1.0);
    vec4 _1008 = vec4(0.0);
    _1008.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1008.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1008.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _468 = (_1008.xyz * _1189.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1014 = _1008;
    _1014.x = _468.x;
    _1014.y = _468.y;
    _1014.z = _468.z;
    vec3 _482 = (_960.xyz * _899.www) + _1014.xyz;
    vec4 _1020 = _960;
    _1020.x = _482.x;
    _1020.y = _482.y;
    _1020.z = _482.z;
    vec3 _495 = _1189.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1014.x = _495.x;
    _1014.y = _495.y;
    _1014.z = _495.z;
    vec3 _510 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _922.xyz) + _1014.xyz;
    vec4 _1032 = _1014;
    _1032.x = _510.x;
    _1032.y = _510.y;
    _1032.z = _510.z;
    vec3 _525 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _934.xyz) + _1032.xyz;
    vec4 _1038 = _1032;
    _1038.x = _525.x;
    _1038.y = _525.y;
    _1038.z = _525.z;
    vec3 _537 = _1038.xyz - _899.xyz;
    vec4 _1044 = _1038;
    _1044.x = _537.x;
    _1044.y = _537.y;
    _1044.z = _537.z;
    float _548 = dot(_1044.xyz, _1044.xyz);
    _899.w = _548;
    float _853 = inversesqrt(abs(_548));
    _899.w = _853;
    float _557 = 1.0 / _853;
    _1189.w = _557;
    vec3 _563 = _1044.xyz * _899.www;
    vec4 _1058 = _1044;
    _1058.x = _563.x;
    _1058.y = _563.y;
    _1058.z = _563.z;
    _899.w = clamp(dot(_1058.xyz, _992.xyz), 0.0, 1.0);
    vec3 _583 = _899.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1058.x = _583.x;
    _1058.y = _583.y;
    _1058.z = _583.z;
    float _598 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _557) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _899.w = _598;
    float _604 = 1.0 / (_853 * _853);
    _1189.w = _604;
    float _613 = (_604 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _598;
    _899.w = _613;
    float _617 = 1.0 / _613;
    _899.w = _617;
    vec3 _626 = (_1058.xyz * _899.www) + _1020.xyz;
    vec4 _1086 = _1020;
    _1086.x = _626.x;
    _1086.y = _626.y;
    _1086.z = _626.z;
    vec4 _1192 = vec4(_1189.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy, _604);
    vec3 _654 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _922.xyz) + _1192.xyz;
    vec4 _1098 = _1192;
    _1098.x = _654.x;
    _1098.y = _654.y;
    _1098.z = _654.z;
    vec3 _669 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _934.xyz) + _1098.xyz;
    vec4 _1104 = _1098;
    _1104.x = _669.x;
    _1104.y = _669.y;
    _1104.z = _669.z;
    vec4 _1193 = vec4(_1104.xyz - _899.xyz, _617);
    vec3 _689 = _1193.xyz;
    float _692 = dot(_689, _689);
    vec4 _1116 = _1193;
    _1116.w = _692;
    float _858 = inversesqrt(abs(_692));
    _1116.w = _858;
    vec4 _1194 = vec4(_1116.xyz * _1116.www, _858);
    _1194.x = clamp(dot(_1194.xyz, _992.xyz), 0.0, 1.0);
    float _742 = (optRegs.rows[optTile*82u+17u+uint(36)].y * (1.0 / _858)) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1195 = vec4(_1194.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _742);
    float _757 = ((1.0 / (_858 * _858)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _742;
    _1195.w = _757;
    float _761 = 1.0 / _757;
    _1195.w = _761;
    vec4 _1197 = vec4((_1195.xyz * _1195.www) + _1086.xyz, _761);
    vec3 _780 = min(_1197.xyz, vec3(1.0));
    vec4 _1158 = _1197;
    _1158.x = _780.x;
    _1158.y = _780.y;
    _1158.z = _780.z;
    vec4 _865 = optPush.clipToTarget * ((_123.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _145);
    gl_Position = vec4(_865.x, -_865.y, _865.zw);
    color0 = vec4(_1158.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _886;
    texcoord1 = _894;
    fog0 = min(_876, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
