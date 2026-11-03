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
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _93 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _115 = (_93.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_93.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_93.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _123 = (_93.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _115;
    vec2 _132 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _559 = _115;
    _559.x = _132.x;
    _559.y = _132.y;
    vec4 _563 = vec4(0.0);
    _563.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _563.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _156 = (_559.yx * _563.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _567 = vec4(0.0);
    _567.x = _156.x;
    _567.y = _156.y;
    _563.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _563.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _579 = _563;
    _579.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _579.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _587 = _579;
    _587.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _587.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _595 = _587;
    _595.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _595.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _252 = _93.z;
    float _260 = (_252 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _604 = _559;
    _604.x = _260;
    float _264 = max(_260, 0.0);
    _604.x = _264;
    float _554;
    if (_264 == 0.0)
    {
        _554 = 0.0;
    }
    else
    {
        _554 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_264)));
    }
    vec4 _610 = _595;
    _610.x = _554;
    vec3 _284 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _604.x = _284.x;
    _604.y = _284.y;
    _604.z = _284.z;
    vec3 _299 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _604.xyz;
    vec4 _621 = _604;
    _621.x = _299.x;
    _621.y = _299.y;
    _621.z = _299.z;
    vec3 _314 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _621.xyz;
    float _316 = _314.x;
    vec4 _627 = _621;
    _627.x = _316;
    _627.y = _314.y;
    _627.z = _314.z;
    _627.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _627.xyz), 0.0, 1.0);
    _610.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _610.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _610.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _351 = (_610.xyz * _627.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _641 = _627;
    _641.x = _351.x;
    _641.y = _351.y;
    _641.z = _351.z;
    vec3 _360 = min(_641.xyz, vec3(1.0));
    vec4 _647 = _641;
    _647.x = _360.x;
    _647.y = _360.y;
    _647.z = _360.z;
    vec4 _683 = vec4(0.0);
    _683.x = _93.x;
    _683.y = _93.y;
    _683.z = _252;
    vec4 _708 = vec4(_647.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_316, _314.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _482 = abs((_708.xyz * 2.0) - _647.xyz);
    wxlGPlain = max(max(_482.x, _482.y), _482.z);
    gl_Position = vec4(_123.x, -_123.y, _123.zw);
    color0 = _708;
    color1 = vec4(0.0);
    texcoord0 = _567;
    texcoord1 = vec4((_559.yx * _563.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_559.xy * _579.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_559.yx * _587.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_559.xy * _595.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _683;
    texcoord4 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_93, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_93, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_554, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
