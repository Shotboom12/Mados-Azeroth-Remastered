#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _740;





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
    vec4 _135 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _157 = (_135.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_135.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_135.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _172 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _591 = _157;
    _591.x = _172.x;
    _591.y = _172.y;
    _591.z = _172.z;
    vec3 _187 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _591.xyz;
    vec4 _597 = _591;
    _597.x = _187.x;
    _597.y = _187.y;
    _597.z = _187.z;
    vec3 _202 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _597.xyz;
    float _204 = _202.x;
    vec4 _603 = _597;
    _603.x = _204;
    _603.y = _202.y;
    _603.z = _202.z;
    float _213 = dot(_135.xyz, _603.xyz);
    vec4 _609 = _135;
    _609.w = _213;
    _609.w = _213 + _213;
    vec3 _229 = (_603.xyz * (-_609.www)) + _609.xyz;
    vec4 _615 = vec4(0.0);
    _615.x = _229.x;
    _615.y = _229.y;
    float _235 = _229.z;
    _615.z = _235;
    vec3 _242 = _615.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _621;
    _621.x = _242.x;
    _621.y = _242.y;
    _621.z = _242.z;
    vec3 _258 = (_615.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _621.xyz;
    vec4 _751 = vec4(_258.xy, _235, _258.z);
    vec3 _274 = (_751.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _751.xyw;
    vec4 _633 = vec4(0.0);
    _633.x = _274.x;
    _633.y = _274.y;
    _633.z = _274.z;
    vec2 _289 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _751.x = _289.x;
    _751.y = _289.y;
    vec4 _643;
    _643.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _643.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _311 = (_751.xy * _643.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _647 = vec4(0.0);
    _647.x = _311.x;
    _647.y = _311.y;
    vec4 _651;
    _651.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _651.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _333 = (_751.xy * _651.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _655 = vec4(0.0);
    _655.x = _333.x;
    _655.y = _333.y;
    float _347 = (_135.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _609.w = _347;
    float _351 = max(_347, 0.0);
    _609.w = _351;
    float _588;
    if (_351 == 0.0)
    {
        _588 = 0.0;
    }
    else
    {
        _588 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_351)));
    }
    vec4 _752 = vec4(_204, _202.yz, _588);
    vec3 _368 = -_609.xyz;
    float _372 = dot(_368, _368);
    vec4 _671 = _609;
    _671.w = _372;
    float _545 = inversesqrt(abs(_372));
    _671.w = _545;
    vec4 _753 = vec4(((-_671.xyz) * _671.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _545);
    vec3 _550 = _753.xyz;
    vec4 _555 = _753 * inversesqrt(dot(_550, _550));
    _751.x = _555.x;
    _751.y = _555.y;
    _751.z = _555.z;
    vec3 _409 = _752.xyz;
    float _410 = dot(_751.xyz, _409);
    _753.x = _410;
    _753.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _409), 0.0, 1.0);
    vec4 _692 = _752;
    _692.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _692.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _692.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _754 = vec4(_410, (_692.xyz * _753.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _449 = min(_754.yzw, vec3(1.0));
    vec4 _704 = _754;
    _704.y = _449.x;
    _704.z = _449.y;
    _704.w = _449.z;
    float _469 = max(_410, 0.0);
    float _589;
    if (_469 == 0.0)
    {
        _589 = 0.0;
    }
    else
    {
        _589 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_469)));
    }
    _692.x = _589;
    vec4 _577 = optPush.clipToTarget * ((_135.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _157);
    gl_Position = vec4(_577.x, -_577.y, _577.zw);
    color0 = vec4(_704.yzw * vec3(0.5), 1.0);
    color1 = vec4(_692.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _633;
    texcoord1 = _647;
    texcoord2 = _655;
    fog0 = min(_588, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
