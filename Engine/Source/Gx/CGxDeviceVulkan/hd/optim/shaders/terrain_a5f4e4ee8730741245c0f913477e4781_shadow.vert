#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _734;





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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _136 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _158 = (_136.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_136.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_136.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _175 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _591 = _158;
    _591.x = _175.x;
    _591.y = _175.y;
    vec4 _595;
    _595.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _595.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _197 = (_591.xy * _595.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _599 = vec4(0.0);
    _599.x = _197.x;
    _599.y = _197.y;
    vec4 _603;
    _603.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _603.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _219 = (_591.xy * _603.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _607 = vec4(0.0);
    _607.x = _219.x;
    _607.y = _219.y;
    vec4 _611;
    _611.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _611.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _241 = (_591.xy * _611.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _615 = vec4(0.0);
    _615.x = _241.x;
    _615.y = _241.y;
    vec4 _619;
    _619.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _619.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _263 = (_591.xy * _619.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _623 = vec4(0.0);
    _623.x = _263.x;
    _623.y = _263.y;
    vec4 _627;
    _627.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _627.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _285 = (_591.xy * _627.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _631 = vec4(0.0);
    _631.x = _285.x;
    _631.y = _285.y;
    float _299 = (_136.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _636 = _136;
    _636.w = _299;
    float _303 = max(_299, 0.0);
    _636.w = _303;
    float _588;
    if (_303 == 0.0)
    {
        _588 = 0.0;
    }
    else
    {
        _588 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_303)));
    }
    _591.x = _588;
    vec3 _320 = -_636.xyz;
    float _324 = dot(_320, _320);
    vec4 _647 = _636;
    _647.w = _324;
    float _545 = inversesqrt(abs(_324));
    _647.w = _545;
    vec4 _744 = vec4(((-_647.xyz) * _647.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _545);
    vec3 _550 = _744.xyz;
    vec4 _555 = _744 * inversesqrt(dot(_550, _550));
    _591.x = _555.x;
    _591.y = _555.y;
    _591.z = _555.z;
    vec3 _364 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _744.x = _364.x;
    _744.y = _364.y;
    _744.z = _364.z;
    vec3 _379 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _744.xyz;
    vec4 _670 = _744;
    _670.x = _379.x;
    _670.y = _379.y;
    _670.z = _379.z;
    vec3 _394 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _670.xyz;
    float _396 = _394.x;
    vec4 _676 = _670;
    _676.x = _396;
    _676.y = _394.y;
    _676.z = _394.z;
    float _405 = dot(_591.xyz, _676.xyz);
    vec4 _745 = vec4(_396, _394.yz, _405);
    _745.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _745.xyz), 0.0, 1.0);
    vec4 _686 = _591;
    _686.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _686.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _686.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _434 = (_686.xyz * _745.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _692 = _745;
    _692.x = _434.x;
    _692.y = _434.y;
    _692.z = _434.z;
    vec3 _444 = min(_692.xyz, vec3(1.0));
    vec4 _698 = _692;
    _698.x = _444.x;
    _698.y = _444.y;
    _698.z = _444.z;
    float _465 = max(_405, 0.0);
    float _589;
    if (_465 == 0.0)
    {
        _589 = 0.0;
    }
    else
    {
        _589 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_465)));
    }
    _686.x = _589;
    vec4 _577 = optPush.clipToTarget * ((_136.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _158);
    gl_Position = vec4(_577.x, -_577.y, _577.zw);
    color0 = vec4(_698.xyz * v2.xyz, 1.0);
    color1 = vec4(_686.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _599;
    texcoord1 = _607;
    texcoord2 = _615;
    texcoord3 = _623;
    texcoord4 = _631;
    fog0 = min(_588, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
