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
    vec4 _706 = _161;
    _706.x = _176.x;
    _706.y = _176.y;
    _706.z = _176.z;
    vec3 _191 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _706.xyz;
    vec4 _712 = _706;
    _712.x = _191.x;
    _712.y = _191.y;
    _712.z = _191.z;
    vec3 _206 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _712.xyz;
    float _208 = _206.x;
    vec4 _718 = _712;
    _718.x = _208;
    _718.y = _206.y;
    _718.z = _206.z;
    vec3 _214 = _139.xyz;
    float _217 = dot(_214, _718.xyz);
    vec4 _911 = vec4(_208, _206.yz, _217);
    _911.w = _217 + _217;
    vec3 _233 = (_911.xyz * (-_911.www)) + _214;
    vec4 _730 = vec4(0.0);
    _730.x = _233.x;
    _730.y = _233.y;
    float _239 = _233.z;
    _730.z = _239;
    vec3 _246 = _730.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _736 = vec4(0.0);
    _736.x = _246.x;
    _736.y = _246.y;
    _736.z = _246.z;
    vec3 _262 = (_730.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _736.xyz;
    vec4 _912 = vec4(_262.xy, _239, _262.z);
    vec3 _278 = (_912.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _912.xyw;
    vec4 _748 = vec4(0.0);
    _748.x = _278.x;
    _748.y = _278.y;
    _748.z = _278.z;
    vec2 _293 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _912.x = _293.x;
    _912.y = _293.y;
    _736.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _736.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _766 = _736;
    _766.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _766.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _774 = _766;
    _774.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _774.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _359 = (_912.xy * _774.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _778 = vec4(0.0);
    _778.x = _359.x;
    _778.y = _359.y;
    float _365 = _139.z;
    float _373 = (_365 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _911.w = _373;
    float _377 = max(_373, 0.0);
    _911.w = _377;
    float _703;
    if (_377 == 0.0)
    {
        _703 = 0.0;
    }
    else
    {
        _703 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_377)));
    }
    vec4 _789 = _912;
    _789.x = _703;
    vec3 _394 = -_214;
    float _398 = dot(_394, _394);
    _911.w = _398;
    _911.w = inversesqrt(abs(_398));
    vec3 _415 = (_394 * _911.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _789.x = _415.x;
    _789.y = _415.y;
    _789.z = _415.z;
    vec4 _670 = _789 * inversesqrt(dot(_789.xyz, _789.xyz));
    _774.x = _670.x;
    _774.y = _670.y;
    _774.z = _670.z;
    float _436 = dot(_774.xyz, _911.xyz);
    vec4 _811 = _911;
    _811.w = _436;
    _811.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _811.xyz), 0.0, 1.0);
    _789.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _789.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _789.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _914 = vec4((_789.xyz * _811.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _436);
    vec3 _475 = min(_914.xyz, vec3(1.0));
    vec4 _827 = _914;
    _827.x = _475.x;
    _827.y = _475.y;
    _827.z = _475.z;
    float _496 = max(_436, 0.0);
    float _704;
    if (_496 == 0.0)
    {
        _704 = 0.0;
    }
    else
    {
        _704 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_496)));
    }
    _789.x = _704;
    vec4 _875 = vec4(0.0);
    _875.x = _139.x;
    _875.y = _139.y;
    _875.z = _365;
    vec4 _692 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_692.x, -_692.y, _692.zw);
    color0 = vec4(_827.xyz * v2.xyz, 1.0);
    color1 = vec4(_789.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _748;
    texcoord1 = vec4((_912.xy * _736.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_912.yx * _766.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _778;
    texcoord3 = _875;
    texcoord4 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_703, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
