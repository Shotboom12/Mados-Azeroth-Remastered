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
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _138 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _160 = (_138.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_138.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_138.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _177 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _609 = _160;
    _609.x = _177.x;
    _609.y = _177.y;
    vec4 _613 = vec4(0.0);
    _613.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _613.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _199 = (_609.xy * _613.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _617 = vec4(0.0);
    _617.x = _199.x;
    _617.y = _199.y;
    _613.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _613.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _221 = (_609.xy * _613.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _625 = vec4(0.0);
    _625.x = _221.x;
    _625.y = _221.y;
    float _227 = _138.z;
    float _235 = (_227 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _609.x = _235;
    float _239 = max(_235, 0.0);
    _609.x = _239;
    float _606;
    if (_239 == 0.0)
    {
        _606 = 0.0;
    }
    else
    {
        _606 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_239)));
    }
    _613.x = _606;
    vec3 _260 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _609.x = _260.x;
    _609.y = _260.y;
    _609.z = _260.z;
    vec3 _275 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _609.xyz;
    vec4 _647 = _609;
    _647.x = _275.x;
    _647.y = _275.y;
    _647.z = _275.z;
    vec3 _299 = -_138.xyz;
    float _303 = dot(_299, _299);
    vec4 _776 = vec4((v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _647.xyz, _303);
    _776.w = inversesqrt(abs(_303));
    vec3 _320 = (_299 * _776.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _613.x = _320.x;
    _613.y = _320.y;
    _613.z = _320.z;
    vec4 _573 = _613 * inversesqrt(dot(_613.xyz, _613.xyz));
    vec4 _670 = vec4(0.0);
    _670.x = _573.x;
    _670.y = _573.y;
    _670.z = _573.z;
    float _341 = dot(_670.xyz, _776.xyz);
    vec4 _676 = _776;
    _676.w = _341;
    _676.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _676.xyz), 0.0, 1.0);
    _613.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _613.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _613.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _777 = vec4((_613.xyz * _676.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _341);
    vec3 _380 = min(_777.xyz, vec3(1.0));
    vec4 _692 = _777;
    _692.x = _380.x;
    _692.y = _380.y;
    _692.z = _380.z;
    float _401 = max(_341, 0.0);
    float _607;
    if (_401 == 0.0)
    {
        _607 = 0.0;
    }
    else
    {
        _607 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_401)));
    }
    _613.x = _607;
    vec4 _740 = vec4(0.0);
    _740.x = _138.x;
    _740.y = _138.y;
    _740.z = _227;
    vec4 _595 = optPush.clipToTarget * ((_138.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _160);
    gl_Position = vec4(_595.x, -_595.y, _595.zw);
    color0 = vec4(_692.xyz * v2.xyz, 1.0);
    color1 = vec4(_613.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _617;
    texcoord1 = _625;
    texcoord3 = _740;
    texcoord4 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_138, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_138, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_606, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
