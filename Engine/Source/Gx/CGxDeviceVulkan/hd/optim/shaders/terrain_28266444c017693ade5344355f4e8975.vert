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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _90 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _112 = (_90.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_90.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_90.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _120 = (_90.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _112;
    vec3 _127 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _522 = _112;
    _522.x = _127.x;
    _522.y = _127.y;
    _522.z = _127.z;
    vec3 _145 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _522.xyz;
    vec4 _528 = _522;
    _528.x = _145.x;
    _528.y = _145.y;
    _528.z = _145.z;
    vec3 _160 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _528.xyz;
    float _162 = _160.x;
    vec4 _534 = _528;
    _534.x = _162;
    _534.y = _160.y;
    _534.z = _160.z;
    float _171 = dot(_90.xyz, _534.xyz);
    vec4 _540 = _90;
    _540.w = _171;
    _540.w = _171 + _171;
    vec3 _188 = (_534.xyz * (-_540.www)) + _540.xyz;
    float _204 = (_90.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _659 = vec4(_188.xy, _204, _188.z);
    float _208 = max(_204, 0.0);
    _659.z = _208;
    float _517;
    if (_208 == 0.0)
    {
        _517 = 0.0;
    }
    else
    {
        _517 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_208)));
    }
    vec4 _660 = vec4(_162, _160.yz, _517);
    _659.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _660.xyz), 0.0, 1.0);
    _660.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _660.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _660.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _252 = (_660.xyz * _659.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _572 = _660;
    _572.x = _252.x;
    _572.y = _252.y;
    _572.z = _252.z;
    vec3 _261 = min(_572.xyz, vec3(1.0));
    vec4 _578 = _572;
    _578.x = _261.x;
    _578.y = _261.y;
    _578.z = _261.z;
    vec3 _287 = _659.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _590 = _578;
    _590.x = _287.x;
    _590.y = _287.y;
    _590.z = _287.z;
    vec3 _303 = (_659.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _590.xyz;
    vec4 _596 = _659;
    _596.x = _303.x;
    _596.y = _303.y;
    _596.z = _303.z;
    vec3 _319 = (_596.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _596.xyz;
    vec4 _602 = vec4(0.0);
    _602.x = _319.x;
    _602.y = _319.y;
    _602.z = _319.z;
    vec2 _334 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _596.x = _334.x;
    _596.y = _334.y;
    _590.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _590.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _356 = (_596.xy * _590.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _616 = vec4(0.0);
    _616.x = _356.x;
    _616.y = _356.y;
    _590.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _590.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _378 = (_596.xy * _590.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _624 = vec4(0.0);
    _624.x = _378.x;
    _624.y = _378.y;
    _590.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _590.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _400 = (_596.xy * _590.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _632 = vec4(0.0);
    _632.x = _400.x;
    _632.y = _400.y;
    _590.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _590.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _422 = (_596.xy * _590.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _640 = vec4(0.0);
    _640.x = _422.x;
    _640.y = _422.y;
    vec4 _661 = vec4(_578.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_162, _160.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _449 = abs((_661.xyz * 2.0) - _578.xyz);
    wxlGPlain = max(max(_449.x, _449.y), _449.z);
    gl_Position = vec4(_120.x, -_120.y, _120.zw);
    color0 = _661;
    color1 = vec4(0.0);
    texcoord0 = _602;
    texcoord1 = _616;
    texcoord2 = _624;
    texcoord3 = _632;
    texcoord4 = _640;
    fog0 = min(_517, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
