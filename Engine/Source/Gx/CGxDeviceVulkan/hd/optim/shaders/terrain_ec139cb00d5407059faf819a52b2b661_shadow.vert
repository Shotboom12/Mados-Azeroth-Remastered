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
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _139 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _161 = (_139.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_139.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_139.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _176 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _727 = _161;
    _727.x = _176.x;
    _727.y = _176.y;
    _727.z = _176.z;
    vec3 _191 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _727.xyz;
    vec4 _733 = _727;
    _733.x = _191.x;
    _733.y = _191.y;
    _733.z = _191.z;
    vec3 _206 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _733.xyz;
    float _208 = _206.x;
    vec4 _739 = _733;
    _739.x = _208;
    _739.y = _206.y;
    _739.z = _206.z;
    vec3 _214 = _139.xyz;
    float _217 = dot(_214, _739.xyz);
    vec4 _940 = vec4(_208, _206.yz, _217);
    _940.w = _217 + _217;
    vec3 _233 = (_940.xyz * (-_940.www)) + _214;
    vec4 _751 = vec4(0.0);
    _751.x = _233.x;
    _751.y = _233.y;
    float _239 = _233.z;
    _751.z = _239;
    vec3 _246 = _751.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _757 = vec4(0.0);
    _757.x = _246.x;
    _757.y = _246.y;
    _757.z = _246.z;
    vec3 _262 = (_751.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _757.xyz;
    vec4 _941 = vec4(_262.xy, _239, _262.z);
    vec3 _278 = (_941.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _941.xyw;
    vec4 _769 = vec4(0.0);
    _769.x = _278.x;
    _769.y = _278.y;
    _769.z = _278.z;
    vec2 _293 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    _941.x = _293.x;
    _941.y = _293.y;
    _757.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _757.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _787 = _757;
    _787.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _787.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec4 _795 = _787;
    _795.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _795.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec4 _803 = _795;
    _803.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _803.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    float _387 = _139.z;
    float _395 = (_387 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _940.w = _395;
    float _399 = max(_395, 0.0);
    _940.w = _399;
    float _724;
    if (_399 == 0.0)
    {
        _724 = 0.0;
    }
    else
    {
        _724 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_399)));
    }
    vec4 _818 = _941;
    _818.x = _724;
    vec3 _416 = -_214;
    float _420 = dot(_416, _416);
    _940.w = _420;
    _940.w = inversesqrt(abs(_420));
    vec3 _437 = (_416 * _940.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _818.x = _437.x;
    _818.y = _437.y;
    _818.z = _437.z;
    vec4 _691 = _818 * inversesqrt(dot(_818.xyz, _818.xyz));
    vec4 _834 = _803;
    _834.x = _691.x;
    _834.y = _691.y;
    _834.z = _691.z;
    float _458 = dot(_834.xyz, _940.xyz);
    vec4 _840 = _940;
    _840.w = _458;
    _840.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _840.xyz), 0.0, 1.0);
    _818.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _818.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _818.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _944 = vec4((_818.xyz * _840.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _458);
    vec3 _497 = min(_944.xyz, vec3(1.0));
    vec4 _856 = _944;
    _856.x = _497.x;
    _856.y = _497.y;
    _856.z = _497.z;
    float _517 = max(_458, 0.0);
    float _725;
    if (_517 == 0.0)
    {
        _725 = 0.0;
    }
    else
    {
        _725 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_517)));
    }
    _818.x = _725;
    vec4 _904 = vec4(0.0);
    _904.x = _139.x;
    _904.y = _139.y;
    _904.z = _387;
    vec4 _713 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_713.x, -_713.y, _713.zw);
    color0 = vec4(_856.xyz * vec3(0.5), 1.0);
    color1 = vec4(_818.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _769;
    texcoord1 = vec4((_941.yx * _757.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_941.xy * _787.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord2 = vec4((_941.yx * _795.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx, (_941.xy * _803.xy) + optRegs.rows[optTile*82u+17u+uint(17)].xy);
    texcoord3 = _904;
    texcoord4 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_139, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_139, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_724, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
