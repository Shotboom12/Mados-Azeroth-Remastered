#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _774;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
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
    vec4 _617 = _158;
    _617.x = _173.x;
    _617.y = _173.y;
    _617.z = _173.z;
    vec3 _188 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _617.xyz;
    vec4 _623 = _617;
    _623.x = _188.x;
    _623.y = _188.y;
    _623.z = _188.z;
    vec3 _203 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _623.xyz;
    float _205 = _203.x;
    vec4 _629 = _623;
    _629.x = _205;
    _629.y = _203.y;
    _629.z = _203.z;
    float _214 = dot(_136.xyz, _629.xyz);
    vec4 _635 = _136;
    _635.w = _214;
    _635.w = _214 + _214;
    vec3 _230 = (_629.xyz * (-_635.www)) + _635.xyz;
    vec4 _641 = vec4(0.0);
    _641.x = _230.x;
    _641.y = _230.y;
    float _236 = _230.z;
    _641.z = _236;
    vec3 _243 = _641.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _647;
    _647.x = _243.x;
    _647.y = _243.y;
    _647.z = _243.z;
    vec3 _259 = (_641.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _647.xyz;
    vec4 _785 = vec4(_259.xy, _236, _259.z);
    vec3 _275 = (_785.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _785.xyw;
    vec4 _659 = vec4(0.0);
    _659.x = _275.x;
    _659.y = _275.y;
    _659.z = _275.z;
    vec2 _290 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _785.x = _290.x;
    _785.y = _290.y;
    vec4 _669;
    _669.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _669.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _312 = (_785.xy * _669.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _673 = vec4(0.0);
    _673.x = _312.x;
    _673.y = _312.y;
    vec4 _677;
    _677.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _677.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _334 = (_785.xy * _677.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _681 = vec4(0.0);
    _681.x = _334.x;
    _681.y = _334.y;
    vec4 _685;
    _685.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _685.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _356 = (_785.xy * _685.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _689 = vec4(0.0);
    _689.x = _356.x;
    _689.y = _356.y;
    float _370 = (_136.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _635.w = _370;
    float _374 = max(_370, 0.0);
    _635.w = _374;
    float _614;
    if (_374 == 0.0)
    {
        _614 = 0.0;
    }
    else
    {
        _614 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_374)));
    }
    vec4 _786 = vec4(_205, _203.yz, _614);
    vec3 _391 = -_635.xyz;
    float _395 = dot(_391, _391);
    vec4 _705 = _635;
    _705.w = _395;
    float _571 = inversesqrt(abs(_395));
    _705.w = _571;
    vec4 _787 = vec4(((-_705.xyz) * _705.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _571);
    vec3 _576 = _787.xyz;
    vec4 _581 = _787 * inversesqrt(dot(_576, _576));
    _785.x = _581.x;
    _785.y = _581.y;
    _785.z = _581.z;
    vec3 _432 = _786.xyz;
    float _433 = dot(_785.xyz, _432);
    _787.x = _433;
    _787.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _432), 0.0, 1.0);
    vec4 _726 = _786;
    _726.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _726.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _726.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _788 = vec4(_433, (_726.xyz * _787.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _472 = min(_788.yzw, vec3(1.0));
    vec4 _738 = _788;
    _738.y = _472.x;
    _738.z = _472.y;
    _738.w = _472.z;
    float _493 = max(_433, 0.0);
    float _615;
    if (_493 == 0.0)
    {
        _615 = 0.0;
    }
    else
    {
        _615 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_493)));
    }
    _726.x = _615;
    vec4 _603 = optPush.clipToTarget * ((_136.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _158);
    gl_Position = vec4(_603.x, -_603.y, _603.zw);
    color0 = vec4(_738.yzw * v2.xyz, 1.0);
    color1 = vec4(_726.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _659;
    texcoord1 = _673;
    texcoord2 = _681;
    texcoord3 = _689;
    fog0 = min(_614, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
