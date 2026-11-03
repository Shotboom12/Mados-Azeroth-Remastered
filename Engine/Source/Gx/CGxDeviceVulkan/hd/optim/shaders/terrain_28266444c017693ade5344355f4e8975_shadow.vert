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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _112 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _134 = (_112.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_112.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_112.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _150 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _515 = _134;
    _515.x = _150.x;
    _515.y = _150.y;
    _515.z = _150.z;
    vec3 _165 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _515.xyz;
    vec4 _521 = _515;
    _521.x = _165.x;
    _521.y = _165.y;
    _521.z = _165.z;
    vec3 _180 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _521.xyz;
    float _182 = _180.x;
    vec4 _527 = _521;
    _527.x = _182;
    _527.y = _180.y;
    _527.z = _180.z;
    float _191 = dot(_112.xyz, _527.xyz);
    vec4 _533 = _112;
    _533.w = _191;
    _533.w = _191 + _191;
    vec3 _207 = (_527.xyz * (-_533.www)) + _533.xyz;
    float _223 = (_112.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _656 = vec4(_207.xy, _223, _207.z);
    float _227 = max(_223, 0.0);
    _656.z = _227;
    float _513;
    if (_227 == 0.0)
    {
        _513 = 0.0;
    }
    else
    {
        _513 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_227)));
    }
    vec4 _657 = vec4(_182, _180.yz, _513);
    _656.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _657.xyz), 0.0, 1.0);
    _657.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _657.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _657.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _270 = (_657.xyz * _656.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _565 = _657;
    _565.x = _270.x;
    _565.y = _270.y;
    _565.z = _270.z;
    vec3 _280 = min(_565.xyz, vec3(1.0));
    vec4 _571 = _565;
    _571.x = _280.x;
    _571.y = _280.y;
    _571.z = _280.z;
    vec3 _304 = _656.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _583 = _571;
    _583.x = _304.x;
    _583.y = _304.y;
    _583.z = _304.z;
    vec3 _320 = (_656.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _583.xyz;
    vec4 _589 = _656;
    _589.x = _320.x;
    _589.y = _320.y;
    _589.z = _320.z;
    vec3 _336 = (_589.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _589.xyz;
    vec4 _595 = vec4(0.0);
    _595.x = _336.x;
    _595.y = _336.y;
    _595.z = _336.z;
    vec2 _351 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _589.x = _351.x;
    _589.y = _351.y;
    _583.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _583.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _373 = (_589.xy * _583.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _609 = vec4(0.0);
    _609.x = _373.x;
    _609.y = _373.y;
    _583.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _583.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _395 = (_589.xy * _583.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _617 = vec4(0.0);
    _617.x = _395.x;
    _617.y = _395.y;
    _583.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _583.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _417 = (_589.xy * _583.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _625 = vec4(0.0);
    _625.x = _417.x;
    _625.y = _417.y;
    _583.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _583.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _439 = (_589.xy * _583.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _633 = vec4(0.0);
    _633.x = _439.x;
    _633.y = _439.y;
    vec4 _502 = optPush.clipToTarget * ((_112.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _134);
    gl_Position = vec4(_502.x, -_502.y, _502.zw);
    color0 = vec4(_571.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _595;
    texcoord1 = _609;
    texcoord2 = _617;
    texcoord3 = _625;
    texcoord4 = _633;
    fog0 = min(_513, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
