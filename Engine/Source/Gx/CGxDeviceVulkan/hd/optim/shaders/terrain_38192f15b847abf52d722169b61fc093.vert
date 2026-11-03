#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _713;



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
    vec4 _112 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _134 = (_112.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_112.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_112.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _142 = (_112.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _134;
    vec3 _149 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _576 = _134;
    _576.x = _149.x;
    _576.y = _149.y;
    _576.z = _149.z;
    vec3 _167 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _576.xyz;
    vec4 _582 = _576;
    _582.x = _167.x;
    _582.y = _167.y;
    _582.z = _167.z;
    vec3 _182 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _582.xyz;
    float _184 = _182.x;
    vec4 _588 = _582;
    _588.x = _184;
    _588.y = _182.y;
    _588.z = _182.z;
    float _193 = dot(_112.xyz, _588.xyz);
    vec4 _594 = _112;
    _594.w = _193;
    _594.w = _193 + _193;
    vec3 _210 = (_588.xyz * (-_594.www)) + _594.xyz;
    vec4 _600 = vec4(0.0);
    _600.x = _210.x;
    _600.y = _210.y;
    float _216 = _210.z;
    _600.z = _216;
    vec3 _223 = _600.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _606;
    _606.x = _223.x;
    _606.y = _223.y;
    _606.z = _223.z;
    vec3 _239 = (_600.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _606.xyz;
    vec4 _724 = vec4(_239.xy, _216, _239.z);
    vec3 _255 = (_724.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _724.xyw;
    vec4 _618 = vec4(0.0);
    _618.x = _255.x;
    _618.y = _255.y;
    _618.z = _255.z;
    vec2 _270 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _724.x = _270.x;
    _724.y = _270.y;
    vec4 _628;
    _628.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _628.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _292 = (_724.xy * _628.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _632 = vec4(0.0);
    _632.x = _292.x;
    _632.y = _292.y;
    float _306 = (_112.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _594.w = _306;
    float _310 = max(_306, 0.0);
    _594.w = _310;
    float _568;
    if (_310 == 0.0)
    {
        _568 = 0.0;
    }
    else
    {
        _568 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_310)));
    }
    vec4 _725 = vec4(_184, _182.yz, _568);
    vec3 _326 = -_594.xyz;
    float _330 = dot(_326, _326);
    vec4 _648 = _594;
    _648.w = _330;
    float _542 = inversesqrt(abs(_330));
    _648.w = _542;
    vec4 _726 = vec4(((-_648.xyz) * _648.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _542);
    vec3 _547 = _726.xyz;
    vec4 _552 = _726 * inversesqrt(dot(_547, _547));
    _724.x = _552.x;
    _724.y = _552.y;
    _724.z = _552.z;
    vec3 _367 = _725.xyz;
    float _368 = dot(_724.xyz, _367);
    _726.x = _368;
    _726.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _367), 0.0, 1.0);
    vec4 _669 = _725;
    _669.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _669.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _669.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _727 = vec4(_368, (_669.xyz * _726.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _408 = min(_727.yzw, vec3(1.0));
    vec4 _681 = _727;
    _681.y = _408.x;
    _681.z = _408.y;
    _681.w = _408.z;
    float _430 = max(_368, 0.0);
    float _569;
    if (_430 == 0.0)
    {
        _569 = 0.0;
    }
    else
    {
        _569 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_430)));
    }
    _669.x = _569;
    vec4 _729 = vec4(_681.yzw * vec3(0.5), 1.0);
    wxlGBuf = vec4(_184, _182.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _476 = abs((_729.xyz * 2.0) - _681.yzw);
    wxlGPlain = max(max(_476.x, _476.y), _476.z);
    gl_Position = vec4(_142.x, -_142.y, _142.zw);
    color0 = _729;
    color1 = vec4(_669.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _618;
    texcoord1 = _632;
    fog0 = min(_568, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
