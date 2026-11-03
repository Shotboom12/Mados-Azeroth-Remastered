#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _773;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 5) out vec4 texcoord3;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _136 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _158 = (_136.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_136.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_136.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _173 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _616 = _158;
    _616.x = _173.x;
    _616.y = _173.y;
    _616.z = _173.z;
    vec3 _188 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _616.xyz;
    vec4 _622 = _616;
    _622.x = _188.x;
    _622.y = _188.y;
    _622.z = _188.z;
    vec3 _203 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _622.xyz;
    float _205 = _203.x;
    vec4 _628 = _622;
    _628.x = _205;
    _628.y = _203.y;
    _628.z = _203.z;
    float _214 = dot(_136.xyz, _628.xyz);
    vec4 _634 = _136;
    _634.w = _214;
    _634.w = _214 + _214;
    vec3 _230 = (_628.xyz * (-_634.www)) + _634.xyz;
    vec4 _640 = vec4(0.0);
    _640.x = _230.x;
    _640.y = _230.y;
    float _236 = _230.z;
    _640.z = _236;
    vec3 _243 = _640.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _646;
    _646.x = _243.x;
    _646.y = _243.y;
    _646.z = _243.z;
    vec3 _259 = (_640.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _646.xyz;
    vec4 _784 = vec4(_259.xy, _236, _259.z);
    vec3 _275 = (_784.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _784.xyw;
    vec4 _658 = vec4(0.0);
    _658.x = _275.x;
    _658.y = _275.y;
    _658.z = _275.z;
    vec2 _290 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _784.x = _290.x;
    _784.y = _290.y;
    vec4 _668;
    _668.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _668.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _312 = (_784.xy * _668.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _672 = vec4(0.0);
    _672.x = _312.x;
    _672.y = _312.y;
    vec4 _676;
    _676.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _676.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _334 = (_784.xy * _676.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _680 = vec4(0.0);
    _680.x = _334.x;
    _680.y = _334.y;
    vec4 _684;
    _684.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _684.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _356 = (_784.xy * _684.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _688 = vec4(0.0);
    _688.x = _356.x;
    _688.y = _356.y;
    float _370 = (_136.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _634.w = _370;
    float _374 = max(_370, 0.0);
    _634.w = _374;
    float _613;
    if (_374 == 0.0)
    {
        _613 = 0.0;
    }
    else
    {
        _613 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_374)));
    }
    vec4 _785 = vec4(_205, _203.yz, _613);
    vec3 _391 = -_634.xyz;
    float _395 = dot(_391, _391);
    vec4 _704 = _634;
    _704.w = _395;
    float _570 = inversesqrt(abs(_395));
    _704.w = _570;
    vec4 _786 = vec4(((-_704.xyz) * _704.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _570);
    vec3 _575 = _786.xyz;
    vec4 _580 = _786 * inversesqrt(dot(_575, _575));
    _784.x = _580.x;
    _784.y = _580.y;
    _784.z = _580.z;
    vec3 _432 = _785.xyz;
    float _433 = dot(_784.xyz, _432);
    _786.x = _433;
    _786.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _432), 0.0, 1.0);
    vec4 _725 = _785;
    _725.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _725.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _725.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _787 = vec4(_433, (_725.xyz * _786.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _472 = min(_787.yzw, vec3(1.0));
    vec4 _737 = _787;
    _737.y = _472.x;
    _737.z = _472.y;
    _737.w = _472.z;
    float _492 = max(_433, 0.0);
    float _614;
    if (_492 == 0.0)
    {
        _614 = 0.0;
    }
    else
    {
        _614 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_492)));
    }
    _725.x = _614;
    vec4 _602 = optPush.clipToTarget * ((_136.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _158);
    gl_Position = vec4(_602.x, -_602.y, _602.zw);
    color0 = vec4(_737.yzw * vec3(0.5), 1.0);
    color1 = vec4(_725.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _658;
    texcoord1 = _672;
    texcoord2 = _680;
    texcoord3 = _688;
    fog0 = min(_613, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
