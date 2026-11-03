#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _668;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
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
    vec4 _541 = _156;
    _541.x = _173.x;
    _541.y = _173.y;
    vec4 _545;
    _545.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _545.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _195 = (_541.xy * _545.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _549 = vec4(0.0);
    _549.x = _195.x;
    _549.y = _195.y;
    vec4 _553;
    _553.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _553.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _217 = (_541.xy * _553.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _557 = vec4(0.0);
    _557.x = _217.x;
    _557.y = _217.y;
    vec4 _561;
    _561.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _561.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _239 = (_541.xy * _561.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _565 = vec4(0.0);
    _565.x = _239.x;
    _565.y = _239.y;
    float _253 = (_134.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _570 = _134;
    _570.w = _253;
    float _257 = max(_253, 0.0);
    _570.w = _257;
    float _538;
    if (_257 == 0.0)
    {
        _538 = 0.0;
    }
    else
    {
        _538 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_257)));
    }
    _541.x = _538;
    vec3 _274 = -_570.xyz;
    float _278 = dot(_274, _274);
    vec4 _581 = _570;
    _581.w = _278;
    float _495 = inversesqrt(abs(_278));
    _581.w = _495;
    vec4 _678 = vec4(((-_581.xyz) * _581.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _495);
    vec3 _500 = _678.xyz;
    vec4 _505 = _678 * inversesqrt(dot(_500, _500));
    _541.x = _505.x;
    _541.y = _505.y;
    _541.z = _505.z;
    vec3 _318 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _678.x = _318.x;
    _678.y = _318.y;
    _678.z = _318.z;
    vec3 _333 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _678.xyz;
    vec4 _604 = _678;
    _604.x = _333.x;
    _604.y = _333.y;
    _604.z = _333.z;
    vec3 _348 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _604.xyz;
    float _350 = _348.x;
    vec4 _610 = _604;
    _610.x = _350;
    _610.y = _348.y;
    _610.z = _348.z;
    float _359 = dot(_541.xyz, _610.xyz);
    vec4 _679 = vec4(_350, _348.yz, _359);
    _679.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _679.xyz), 0.0, 1.0);
    vec4 _620 = _541;
    _620.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _620.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _620.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _388 = (_620.xyz * _679.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _626 = _679;
    _626.x = _388.x;
    _626.y = _388.y;
    _626.z = _388.z;
    vec3 _398 = min(_626.xyz, vec3(1.0));
    vec4 _632 = _626;
    _632.x = _398.x;
    _632.y = _398.y;
    _632.z = _398.z;
    float _419 = max(_359, 0.0);
    float _539;
    if (_419 == 0.0)
    {
        _539 = 0.0;
    }
    else
    {
        _539 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_419)));
    }
    _620.x = _539;
    vec4 _527 = optPush.clipToTarget * ((_134.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _156);
    gl_Position = vec4(_527.x, -_527.y, _527.zw);
    color0 = vec4(_632.xyz * v2.xyz, 1.0);
    color1 = vec4(_620.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _549;
    texcoord1 = _557;
    texcoord2 = _565;
    fog0 = min(_538, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
