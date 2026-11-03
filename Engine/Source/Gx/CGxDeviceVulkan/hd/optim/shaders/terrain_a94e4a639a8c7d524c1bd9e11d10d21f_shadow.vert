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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _112 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _134 = (_112.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_112.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_112.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _150 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _516 = _134;
    _516.x = _150.x;
    _516.y = _150.y;
    _516.z = _150.z;
    vec3 _165 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _516.xyz;
    vec4 _522 = _516;
    _522.x = _165.x;
    _522.y = _165.y;
    _522.z = _165.z;
    vec3 _180 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _522.xyz;
    float _182 = _180.x;
    vec4 _528 = _522;
    _528.x = _182;
    _528.y = _180.y;
    _528.z = _180.z;
    float _191 = dot(_112.xyz, _528.xyz);
    vec4 _534 = _112;
    _534.w = _191;
    _534.w = _191 + _191;
    vec3 _207 = (_528.xyz * (-_534.www)) + _534.xyz;
    float _223 = (_112.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _657 = vec4(_207.xy, _223, _207.z);
    float _227 = max(_223, 0.0);
    _657.z = _227;
    float _514;
    if (_227 == 0.0)
    {
        _514 = 0.0;
    }
    else
    {
        _514 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_227)));
    }
    vec4 _658 = vec4(_182, _180.yz, _514);
    _657.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _658.xyz), 0.0, 1.0);
    _658.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _658.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _658.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _270 = (_658.xyz * _657.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _566 = _658;
    _566.x = _270.x;
    _566.y = _270.y;
    _566.z = _270.z;
    vec3 _280 = min(_566.xyz, vec3(1.0));
    vec4 _572 = _566;
    _572.x = _280.x;
    _572.y = _280.y;
    _572.z = _280.z;
    vec3 _305 = _657.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _584 = _572;
    _584.x = _305.x;
    _584.y = _305.y;
    _584.z = _305.z;
    vec3 _321 = (_657.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _584.xyz;
    vec4 _590 = _657;
    _590.x = _321.x;
    _590.y = _321.y;
    _590.z = _321.z;
    vec3 _337 = (_590.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _590.xyz;
    vec4 _596 = vec4(0.0);
    _596.x = _337.x;
    _596.y = _337.y;
    _596.z = _337.z;
    vec2 _352 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _590.x = _352.x;
    _590.y = _352.y;
    _584.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _584.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _374 = (_590.xy * _584.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _610 = vec4(0.0);
    _610.x = _374.x;
    _610.y = _374.y;
    _584.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _584.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _396 = (_590.xy * _584.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _618 = vec4(0.0);
    _618.x = _396.x;
    _618.y = _396.y;
    _584.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _584.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _418 = (_590.xy * _584.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _626 = vec4(0.0);
    _626.x = _418.x;
    _626.y = _418.y;
    _584.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _584.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _440 = (_590.xy * _584.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _634 = vec4(0.0);
    _634.x = _440.x;
    _634.y = _440.y;
    vec4 _503 = optPush.clipToTarget * ((_112.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _134);
    gl_Position = vec4(_503.x, -_503.y, _503.zw);
    color0 = vec4(_572.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _596;
    texcoord1 = _610;
    texcoord2 = _618;
    texcoord3 = _626;
    texcoord4 = _634;
    fog0 = min(_514, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
