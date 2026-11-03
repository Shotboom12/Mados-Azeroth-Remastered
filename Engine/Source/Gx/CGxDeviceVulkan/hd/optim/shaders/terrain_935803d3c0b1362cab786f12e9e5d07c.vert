#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _814;



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
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _115 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _137 = (_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _145 = (_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _137;
    vec3 _152 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _653 = _137;
    _653.x = _152.x;
    _653.y = _152.y;
    _653.z = _152.z;
    vec3 _170 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _653.xyz;
    vec4 _659 = _653;
    _659.x = _170.x;
    _659.y = _170.y;
    _659.z = _170.z;
    vec3 _185 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _659.xyz;
    float _187 = _185.x;
    vec4 _665 = _659;
    _665.x = _187;
    _665.y = _185.y;
    _665.z = _185.z;
    float _196 = dot(_115.xyz, _665.xyz);
    vec4 _671 = _115;
    _671.w = _196;
    _671.w = _196 + _196;
    vec3 _213 = (_665.xyz * (-_671.www)) + _671.xyz;
    vec4 _677 = vec4(0.0);
    _677.x = _213.x;
    _677.y = _213.y;
    float _219 = _213.z;
    _677.z = _219;
    vec3 _226 = _677.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _683;
    _683.x = _226.x;
    _683.y = _226.y;
    _683.z = _226.z;
    vec3 _242 = (_677.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _683.xyz;
    vec4 _825 = vec4(_242.xy, _219, _242.z);
    vec3 _258 = (_825.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _825.xyw;
    vec4 _695 = vec4(0.0);
    _695.x = _258.x;
    _695.y = _258.y;
    _695.z = _258.z;
    vec2 _273 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _825.x = _273.x;
    _825.y = _273.y;
    vec4 _705;
    _705.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _705.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _295 = (_825.xy * _705.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _709 = vec4(0.0);
    _709.x = _295.x;
    _709.y = _295.y;
    vec4 _713;
    _713.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _713.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _317 = (_825.xy * _713.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _717 = vec4(0.0);
    _717.x = _317.x;
    _717.y = _317.y;
    vec4 _721;
    _721.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _721.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _339 = (_825.xy * _721.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _725 = vec4(0.0);
    _725.x = _339.x;
    _725.y = _339.y;
    vec4 _729;
    _729.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _729.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _361 = (_825.xy * _729.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _733 = vec4(0.0);
    _733.x = _361.x;
    _733.y = _361.y;
    float _375 = (_115.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _671.w = _375;
    float _379 = max(_375, 0.0);
    _671.w = _379;
    float _645;
    if (_379 == 0.0)
    {
        _645 = 0.0;
    }
    else
    {
        _645 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_379)));
    }
    vec4 _826 = vec4(_187, _185.yz, _645);
    vec3 _395 = -_671.xyz;
    float _399 = dot(_395, _395);
    vec4 _749 = _671;
    _749.w = _399;
    float _619 = inversesqrt(abs(_399));
    _749.w = _619;
    vec4 _827 = vec4(((-_749.xyz) * _749.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _619);
    vec3 _624 = _827.xyz;
    vec4 _629 = _827 * inversesqrt(dot(_624, _624));
    _825.x = _629.x;
    _825.y = _629.y;
    _825.z = _629.z;
    vec3 _436 = _826.xyz;
    float _437 = dot(_825.xyz, _436);
    _827.x = _437;
    _827.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _436), 0.0, 1.0);
    vec4 _770 = _826;
    _770.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _770.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _770.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _828 = vec4(_437, (_770.xyz * _827.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _477 = min(_828.yzw, vec3(1.0));
    vec4 _782 = _828;
    _782.y = _477.x;
    _782.z = _477.y;
    _782.w = _477.z;
    float _500 = max(_437, 0.0);
    float _646;
    if (_500 == 0.0)
    {
        _646 = 0.0;
    }
    else
    {
        _646 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_500)));
    }
    _770.x = _646;
    vec4 _830 = vec4(_782.yzw * v2.xyz, 1.0);
    wxlGBuf = vec4(_187, _185.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _547 = abs((_830.xyz * 2.0) - _782.yzw);
    wxlGPlain = max(max(_547.x, _547.y), _547.z);
    gl_Position = vec4(_145.x, -_145.y, _145.zw);
    color0 = _830;
    color1 = vec4(_770.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _695;
    texcoord1 = _709;
    texcoord2 = _717;
    texcoord3 = _725;
    texcoord4 = _733;
    fog0 = min(_645, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
