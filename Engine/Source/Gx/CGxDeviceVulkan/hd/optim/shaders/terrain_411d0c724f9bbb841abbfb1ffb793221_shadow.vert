#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _109 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _131 = (_109.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_109.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_109.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _147 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _440 = _131;
    _440.x = _147.x;
    _440.y = _147.y;
    _440.z = _147.z;
    vec3 _162 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _440.xyz;
    vec4 _446 = _440;
    _446.x = _162.x;
    _446.y = _162.y;
    _446.z = _162.z;
    vec3 _177 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _446.xyz;
    float _179 = _177.x;
    vec4 _452 = _446;
    _452.x = _179;
    _452.y = _177.y;
    _452.z = _177.z;
    float _188 = dot(_109.xyz, _452.xyz);
    vec4 _458 = _109;
    _458.w = _188;
    _458.w = _188 + _188;
    vec3 _204 = (_452.xyz * (-_458.www)) + _458.xyz;
    float _220 = (_109.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _554 = vec4(_204.xy, _220, _204.z);
    float _224 = max(_220, 0.0);
    _554.z = _224;
    float _438;
    if (_224 == 0.0)
    {
        _438 = 0.0;
    }
    else
    {
        _438 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_224)));
    }
    vec4 _555 = vec4(_179, _177.yz, _438);
    _554.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _555.xyz), 0.0, 1.0);
    _555.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _555.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _555.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _267 = (_555.xyz * _554.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _490 = _555;
    _490.x = _267.x;
    _490.y = _267.y;
    _490.z = _267.z;
    vec3 _277 = min(_490.xyz, vec3(1.0));
    vec4 _496 = _490;
    _496.x = _277.x;
    _496.y = _277.y;
    _496.z = _277.z;
    vec3 _301 = _554.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _508 = _496;
    _508.x = _301.x;
    _508.y = _301.y;
    _508.z = _301.z;
    vec3 _317 = (_554.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _508.xyz;
    vec4 _514 = _554;
    _514.x = _317.x;
    _514.y = _317.y;
    _514.z = _317.z;
    vec3 _333 = (_514.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _514.xyz;
    vec4 _520 = vec4(0.0);
    _520.x = _333.x;
    _520.y = _333.y;
    _520.z = _333.z;
    vec2 _348 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _514.x = _348.x;
    _514.y = _348.y;
    _508.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _508.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _370 = (_514.xy * _508.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _534 = vec4(0.0);
    _534.x = _370.x;
    _534.y = _370.y;
    vec4 _427 = optPush.clipToTarget * ((_109.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _131);
    gl_Position = vec4(_427.x, -_427.y, _427.zw);
    color0 = vec4(_496.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _520;
    texcoord1 = _534;
    fog0 = min(_438, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
