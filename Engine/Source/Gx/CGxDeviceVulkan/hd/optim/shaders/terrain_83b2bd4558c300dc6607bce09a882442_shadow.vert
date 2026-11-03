#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
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
    vec4 _139 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _161 = (_139.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_139.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_139.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _176 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _705 = _161;
    _705.x = _176.x;
    _705.y = _176.y;
    _705.z = _176.z;
    vec3 _191 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _705.xyz;
    vec4 _711 = _705;
    _711.x = _191.x;
    _711.y = _191.y;
    _711.z = _191.z;
    vec3 _206 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _711.xyz;
    float _208 = _206.x;
    vec4 _717 = _711;
    _717.x = _208;
    _717.y = _206.y;
    _717.z = _206.z;
    vec3 _214 = _139.xyz;
    float _217 = dot(_214, _717.xyz);
    vec4 _910 = vec4(_208, _206.yz, _217);
    _910.w = _217 + _217;
    vec3 _233 = (_910.xyz * (-_910.www)) + _214;
    vec4 _729 = vec4(0.0);
    _729.x = _233.x;
    _729.y = _233.y;
    float _239 = _233.z;
    _729.z = _239;
    vec3 _246 = _729.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _735 = vec4(0.0);
    _735.x = _246.x;
    _735.y = _246.y;
    _735.z = _246.z;
    vec3 _262 = (_729.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _735.xyz;
    vec4 _911 = vec4(_262.xy, _239, _262.z);
    vec3 _278 = (_911.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _911.xyw;
    vec4 _747 = vec4(0.0);
    _747.x = _278.x;
    _747.y = _278.y;
    _747.z = _278.z;
    vec2 _293 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _911.x = _293.x;
    _911.y = _293.y;
    _735.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _735.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _765 = _735;
    _765.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _765.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _773 = _765;
    _773.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _773.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _359 = (_911.xy * _773.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _777 = vec4(0.0);
    _777.x = _359.x;
    _777.y = _359.y;
    float _365 = _139.z;
    float _373 = (_365 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _910.w = _373;
    float _377 = max(_373, 0.0);
    _910.w = _377;
    float _702;
    if (_377 == 0.0)
    {
        _702 = 0.0;
    }
    else
    {
        _702 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_377)));
    }
    vec4 _788 = _911;
    _788.x = _702;
    vec3 _394 = -_214;
    float _398 = dot(_394, _394);
    _910.w = _398;
    _910.w = inversesqrt(abs(_398));
    vec3 _415 = (_394 * _910.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _788.x = _415.x;
    _788.y = _415.y;
    _788.z = _415.z;
    vec4 _669 = _788 * inversesqrt(dot(_788.xyz, _788.xyz));
    _773.x = _669.x;
    _773.y = _669.y;
    _773.z = _669.z;
    float _436 = dot(_773.xyz, _910.xyz);
    vec4 _810 = _910;
    _810.w = _436;
    _810.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _810.xyz), 0.0, 1.0);
    _788.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _788.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _788.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _913 = vec4((_788.xyz * _810.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _436);
    vec3 _475 = min(_913.xyz, vec3(1.0));
    vec4 _826 = _913;
    _826.x = _475.x;
    _826.y = _475.y;
    _826.z = _475.z;
    float _495 = max(_436, 0.0);
    float _703;
    if (_495 == 0.0)
    {
        _703 = 0.0;
    }
    else
    {
        _703 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_495)));
    }
    _788.x = _703;
    vec4 _874 = vec4(0.0);
    _874.x = _139.x;
    _874.y = _139.y;
    _874.z = _365;
    vec4 _691 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_691.x, -_691.y, _691.zw);
    color0 = vec4(_826.xyz * vec3(0.5), 1.0);
    color1 = vec4(_788.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _747;
    texcoord1 = vec4((_911.xy * _735.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_911.yx * _765.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _777;
    texcoord3 = _874;
    texcoord4 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_702, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
