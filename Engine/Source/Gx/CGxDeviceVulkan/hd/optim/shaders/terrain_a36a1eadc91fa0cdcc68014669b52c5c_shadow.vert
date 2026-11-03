#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _741;





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
    vec4 _135 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _157 = (_135.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_135.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_135.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _172 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _592 = _157;
    _592.x = _172.x;
    _592.y = _172.y;
    _592.z = _172.z;
    vec3 _187 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _592.xyz;
    vec4 _598 = _592;
    _598.x = _187.x;
    _598.y = _187.y;
    _598.z = _187.z;
    vec3 _202 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _598.xyz;
    float _204 = _202.x;
    vec4 _604 = _598;
    _604.x = _204;
    _604.y = _202.y;
    _604.z = _202.z;
    float _213 = dot(_135.xyz, _604.xyz);
    vec4 _610 = _135;
    _610.w = _213;
    _610.w = _213 + _213;
    vec3 _229 = (_604.xyz * (-_610.www)) + _610.xyz;
    vec4 _616 = vec4(0.0);
    _616.x = _229.x;
    _616.y = _229.y;
    float _235 = _229.z;
    _616.z = _235;
    vec3 _242 = _616.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _622;
    _622.x = _242.x;
    _622.y = _242.y;
    _622.z = _242.z;
    vec3 _258 = (_616.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _622.xyz;
    vec4 _752 = vec4(_258.xy, _235, _258.z);
    vec3 _274 = (_752.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _752.xyw;
    vec4 _634 = vec4(0.0);
    _634.x = _274.x;
    _634.y = _274.y;
    _634.z = _274.z;
    vec2 _289 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _752.x = _289.x;
    _752.y = _289.y;
    vec4 _644;
    _644.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _644.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _311 = (_752.xy * _644.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _648 = vec4(0.0);
    _648.x = _311.x;
    _648.y = _311.y;
    vec4 _652;
    _652.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _652.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _333 = (_752.xy * _652.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _656 = vec4(0.0);
    _656.x = _333.x;
    _656.y = _333.y;
    float _347 = (_135.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _610.w = _347;
    float _351 = max(_347, 0.0);
    _610.w = _351;
    float _589;
    if (_351 == 0.0)
    {
        _589 = 0.0;
    }
    else
    {
        _589 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_351)));
    }
    vec4 _753 = vec4(_204, _202.yz, _589);
    vec3 _368 = -_610.xyz;
    float _372 = dot(_368, _368);
    vec4 _672 = _610;
    _672.w = _372;
    float _546 = inversesqrt(abs(_372));
    _672.w = _546;
    vec4 _754 = vec4(((-_672.xyz) * _672.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _546);
    vec3 _551 = _754.xyz;
    vec4 _556 = _754 * inversesqrt(dot(_551, _551));
    _752.x = _556.x;
    _752.y = _556.y;
    _752.z = _556.z;
    vec3 _409 = _753.xyz;
    float _410 = dot(_752.xyz, _409);
    _754.x = _410;
    _754.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _409), 0.0, 1.0);
    vec4 _693 = _753;
    _693.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _693.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _693.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _755 = vec4(_410, (_693.xyz * _754.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _449 = min(_755.yzw, vec3(1.0));
    vec4 _705 = _755;
    _705.y = _449.x;
    _705.z = _449.y;
    _705.w = _449.z;
    float _470 = max(_410, 0.0);
    float _590;
    if (_470 == 0.0)
    {
        _590 = 0.0;
    }
    else
    {
        _590 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_470)));
    }
    _693.x = _590;
    vec4 _578 = optPush.clipToTarget * ((_135.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _157);
    gl_Position = vec4(_578.x, -_578.y, _578.zw);
    color0 = vec4(_705.yzw * v2.xyz, 1.0);
    color1 = vec4(_693.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _634;
    texcoord1 = _648;
    texcoord2 = _656;
    fog0 = min(_589, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
