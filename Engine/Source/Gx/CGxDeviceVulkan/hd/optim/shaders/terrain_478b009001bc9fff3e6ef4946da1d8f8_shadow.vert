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
    vec4 _115 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _137 = (_115.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_115.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_115.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _154 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _531 = _137;
    _531.x = _154.x;
    _531.y = _154.y;
    vec4 _535 = vec4(0.0);
    _535.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _535.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _176 = (_531.xy * _535.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _539 = vec4(0.0);
    _539.x = _176.x;
    _539.y = _176.y;
    _535.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _535.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _551 = _535;
    _551.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _551.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _559 = _551;
    _559.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _559.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _242 = (_531.xy * _559.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _563 = vec4(0.0);
    _563.x = _242.x;
    _563.y = _242.y;
    float _248 = _115.z;
    float _256 = (_248 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _568 = _531;
    _568.x = _256;
    float _260 = max(_256, 0.0);
    _568.x = _260;
    float _529;
    if (_260 == 0.0)
    {
        _529 = 0.0;
    }
    else
    {
        _529 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_260)));
    }
    _559.x = _529;
    vec3 _282 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _568.x = _282.x;
    _568.y = _282.y;
    _568.z = _282.z;
    vec3 _297 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _568.xyz;
    vec4 _585 = _568;
    _585.x = _297.x;
    _585.y = _297.y;
    _585.z = _297.z;
    vec3 _312 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _585.xyz;
    vec4 _591 = _585;
    _591.x = _312.x;
    _591.y = _312.y;
    _591.z = _312.z;
    _591.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _591.xyz), 0.0, 1.0);
    _559.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _559.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _559.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _347 = (_559.xyz * _591.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _605 = _591;
    _605.x = _347.x;
    _605.y = _347.y;
    _605.z = _347.z;
    vec3 _357 = min(_605.xyz, vec3(1.0));
    vec4 _611 = _605;
    _611.x = _357.x;
    _611.y = _357.y;
    _611.z = _357.z;
    vec4 _647 = vec4(0.0);
    _647.x = _115.x;
    _647.y = _115.y;
    _647.z = _248;
    vec4 _518 = optPush.clipToTarget * ((_115.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _137);
    gl_Position = vec4(_518.x, -_518.y, _518.zw);
    color0 = vec4(_611.xyz * v2.xyz, 1.0);
    color1 = vec4(0.0);
    texcoord0 = _539;
    texcoord1 = vec4((_531.xy * _535.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_531.yx * _551.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = _563;
    texcoord3 = _647;
    texcoord4 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_115, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_115, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_529, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
