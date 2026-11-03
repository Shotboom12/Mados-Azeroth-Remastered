#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;
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
    vec4 _88 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _110 = (_88.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_88.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_88.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _118 = (_88.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _110;
    vec3 _125 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _472 = _110;
    _472.x = _125.x;
    _472.y = _125.y;
    _472.z = _125.z;
    vec3 _143 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _472.xyz;
    vec4 _478 = _472;
    _478.x = _143.x;
    _478.y = _143.y;
    _478.z = _143.z;
    vec3 _158 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _478.xyz;
    float _160 = _158.x;
    vec4 _484 = _478;
    _484.x = _160;
    _484.y = _158.y;
    _484.z = _158.z;
    float _169 = dot(_88.xyz, _484.xyz);
    vec4 _490 = _88;
    _490.w = _169;
    _490.w = _169 + _169;
    vec3 _186 = (_484.xyz * (-_490.www)) + _490.xyz;
    float _202 = (_88.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _591 = vec4(_186.xy, _202, _186.z);
    float _206 = max(_202, 0.0);
    _591.z = _206;
    float _467;
    if (_206 == 0.0)
    {
        _467 = 0.0;
    }
    else
    {
        _467 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_206)));
    }
    vec4 _592 = vec4(_160, _158.yz, _467);
    _591.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _592.xyz), 0.0, 1.0);
    _592.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _592.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _592.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _250 = (_592.xyz * _591.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _522 = _592;
    _522.x = _250.x;
    _522.y = _250.y;
    _522.z = _250.z;
    vec3 _259 = min(_522.xyz, vec3(1.0));
    vec4 _528 = _522;
    _528.x = _259.x;
    _528.y = _259.y;
    _528.z = _259.z;
    vec3 _285 = _591.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _540 = _528;
    _540.x = _285.x;
    _540.y = _285.y;
    _540.z = _285.z;
    vec3 _301 = (_591.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _540.xyz;
    vec4 _546 = _591;
    _546.x = _301.x;
    _546.y = _301.y;
    _546.z = _301.z;
    vec3 _317 = (_546.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _546.xyz;
    vec4 _552 = vec4(0.0);
    _552.x = _317.x;
    _552.y = _317.y;
    _552.z = _317.z;
    vec2 _332 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _546.x = _332.x;
    _546.y = _332.y;
    _540.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _540.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _354 = (_546.xy * _540.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _566 = vec4(0.0);
    _566.x = _354.x;
    _566.y = _354.y;
    _540.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _540.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _376 = (_546.xy * _540.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _574 = vec4(0.0);
    _574.x = _376.x;
    _574.y = _376.y;
    vec4 _593 = vec4(_528.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_160, _158.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _403 = abs((_593.xyz * 2.0) - _528.xyz);
    wxlGPlain = max(max(_403.x, _403.y), _403.z);
    gl_Position = vec4(_118.x, -_118.y, _118.zw);
    color0 = _593;
    color1 = vec4(0.0);
    texcoord0 = _552;
    texcoord1 = _566;
    texcoord2 = _574;
    fog0 = min(_467, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
