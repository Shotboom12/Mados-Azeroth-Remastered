#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _667;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 4) out vec4 texcoord2;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _134 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _156 = (_134.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_134.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_134.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _173 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _540 = _156;
    _540.x = _173.x;
    _540.y = _173.y;
    vec4 _544;
    _544.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _544.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _195 = (_540.xy * _544.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _548 = vec4(0.0);
    _548.x = _195.x;
    _548.y = _195.y;
    vec4 _552;
    _552.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _552.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _217 = (_540.xy * _552.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _556 = vec4(0.0);
    _556.x = _217.x;
    _556.y = _217.y;
    vec4 _560;
    _560.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _560.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _239 = (_540.xy * _560.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _564 = vec4(0.0);
    _564.x = _239.x;
    _564.y = _239.y;
    float _253 = (_134.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _569 = _134;
    _569.w = _253;
    float _257 = max(_253, 0.0);
    _569.w = _257;
    float _537;
    if (_257 == 0.0)
    {
        _537 = 0.0;
    }
    else
    {
        _537 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_257)));
    }
    _540.x = _537;
    vec3 _274 = -_569.xyz;
    float _278 = dot(_274, _274);
    vec4 _580 = _569;
    _580.w = _278;
    float _494 = inversesqrt(abs(_278));
    _580.w = _494;
    vec4 _677 = vec4(((-_580.xyz) * _580.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _494);
    vec3 _499 = _677.xyz;
    vec4 _504 = _677 * inversesqrt(dot(_499, _499));
    _540.x = _504.x;
    _540.y = _504.y;
    _540.z = _504.z;
    vec3 _318 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _677.x = _318.x;
    _677.y = _318.y;
    _677.z = _318.z;
    vec3 _333 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _677.xyz;
    vec4 _603 = _677;
    _603.x = _333.x;
    _603.y = _333.y;
    _603.z = _333.z;
    vec3 _348 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _603.xyz;
    float _350 = _348.x;
    vec4 _609 = _603;
    _609.x = _350;
    _609.y = _348.y;
    _609.z = _348.z;
    float _359 = dot(_540.xyz, _609.xyz);
    vec4 _678 = vec4(_350, _348.yz, _359);
    _678.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _678.xyz), 0.0, 1.0);
    vec4 _619 = _540;
    _619.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _619.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _619.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _388 = (_619.xyz * _678.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _625 = _678;
    _625.x = _388.x;
    _625.y = _388.y;
    _625.z = _388.z;
    vec3 _398 = min(_625.xyz, vec3(1.0));
    vec4 _631 = _625;
    _631.x = _398.x;
    _631.y = _398.y;
    _631.z = _398.z;
    float _418 = max(_359, 0.0);
    float _538;
    if (_418 == 0.0)
    {
        _538 = 0.0;
    }
    else
    {
        _538 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_418)));
    }
    _619.x = _538;
    vec4 _526 = optPush.clipToTarget * ((_134.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _156);
    gl_Position = vec4(_526.x, -_526.y, _526.zw);
    color0 = vec4(_631.xyz * vec3(0.5), 1.0);
    color1 = vec4(_619.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _548;
    texcoord1 = _556;
    texcoord2 = _564;
    fog0 = min(_537, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
