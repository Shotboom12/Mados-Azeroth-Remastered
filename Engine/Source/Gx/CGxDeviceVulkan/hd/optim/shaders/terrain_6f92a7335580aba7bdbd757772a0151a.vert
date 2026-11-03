#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _715;



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
    vec4 _112 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _134 = (_112.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_112.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_112.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _142 = (_112.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _134;
    vec3 _149 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _578 = _134;
    _578.x = _149.x;
    _578.y = _149.y;
    _578.z = _149.z;
    vec3 _167 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _578.xyz;
    vec4 _584 = _578;
    _584.x = _167.x;
    _584.y = _167.y;
    _584.z = _167.z;
    vec3 _182 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _584.xyz;
    float _184 = _182.x;
    vec4 _590 = _584;
    _590.x = _184;
    _590.y = _182.y;
    _590.z = _182.z;
    float _193 = dot(_112.xyz, _590.xyz);
    vec4 _596 = _112;
    _596.w = _193;
    _596.w = _193 + _193;
    vec3 _210 = (_590.xyz * (-_596.www)) + _596.xyz;
    vec4 _602 = vec4(0.0);
    _602.x = _210.x;
    _602.y = _210.y;
    float _216 = _210.z;
    _602.z = _216;
    vec3 _223 = _602.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _608;
    _608.x = _223.x;
    _608.y = _223.y;
    _608.z = _223.z;
    vec3 _239 = (_602.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _608.xyz;
    vec4 _726 = vec4(_239.xy, _216, _239.z);
    vec3 _255 = (_726.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _726.xyw;
    vec4 _620 = vec4(0.0);
    _620.x = _255.x;
    _620.y = _255.y;
    _620.z = _255.z;
    vec2 _270 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _726.x = _270.x;
    _726.y = _270.y;
    vec4 _630;
    _630.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _630.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _292 = (_726.xy * _630.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _634 = vec4(0.0);
    _634.x = _292.x;
    _634.y = _292.y;
    float _306 = (_112.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _596.w = _306;
    float _310 = max(_306, 0.0);
    _596.w = _310;
    float _570;
    if (_310 == 0.0)
    {
        _570 = 0.0;
    }
    else
    {
        _570 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_310)));
    }
    vec4 _727 = vec4(_184, _182.yz, _570);
    vec3 _326 = -_596.xyz;
    float _330 = dot(_326, _326);
    vec4 _650 = _596;
    _650.w = _330;
    float _544 = inversesqrt(abs(_330));
    _650.w = _544;
    vec4 _728 = vec4(((-_650.xyz) * _650.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _544);
    vec3 _549 = _728.xyz;
    vec4 _554 = _728 * inversesqrt(dot(_549, _549));
    _726.x = _554.x;
    _726.y = _554.y;
    _726.z = _554.z;
    vec3 _367 = _727.xyz;
    float _368 = dot(_726.xyz, _367);
    _728.x = _368;
    _728.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _367), 0.0, 1.0);
    vec4 _671 = _727;
    _671.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _671.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _671.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _729 = vec4(_368, (_671.xyz * _728.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _408 = min(_729.yzw, vec3(1.0));
    vec4 _683 = _729;
    _683.y = _408.x;
    _683.z = _408.y;
    _683.w = _408.z;
    float _431 = max(_368, 0.0);
    float _571;
    if (_431 == 0.0)
    {
        _571 = 0.0;
    }
    else
    {
        _571 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_431)));
    }
    _671.x = _571;
    vec4 _731 = vec4(_683.yzw * v2.xyz, 1.0);
    wxlGBuf = vec4(_184, _182.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _478 = abs((_731.xyz * 2.0) - _683.yzw);
    wxlGPlain = max(max(_478.x, _478.y), _478.z);
    gl_Position = vec4(_142.x, -_142.y, _142.zw);
    color0 = _731;
    color1 = vec4(_671.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _620;
    texcoord1 = _634;
    fog0 = min(_570, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
