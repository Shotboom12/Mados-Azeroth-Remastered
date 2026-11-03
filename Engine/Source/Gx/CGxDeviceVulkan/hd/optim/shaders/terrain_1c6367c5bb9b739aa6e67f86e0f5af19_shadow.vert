#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _733;





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
    vec4 _136 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _158 = (_136.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_136.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_136.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec2 _175 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _590 = _158;
    _590.x = _175.x;
    _590.y = _175.y;
    vec4 _594;
    _594.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _594.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _197 = (_590.xy * _594.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _598 = vec4(0.0);
    _598.x = _197.x;
    _598.y = _197.y;
    vec4 _602;
    _602.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _602.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _219 = (_590.xy * _602.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _606 = vec4(0.0);
    _606.x = _219.x;
    _606.y = _219.y;
    vec4 _610;
    _610.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _610.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _241 = (_590.xy * _610.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _614 = vec4(0.0);
    _614.x = _241.x;
    _614.y = _241.y;
    vec4 _618;
    _618.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _618.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _263 = (_590.xy * _618.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _622 = vec4(0.0);
    _622.x = _263.x;
    _622.y = _263.y;
    vec4 _626;
    _626.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _626.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _285 = (_590.xy * _626.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _630 = vec4(0.0);
    _630.x = _285.x;
    _630.y = _285.y;
    float _299 = (_136.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _635 = _136;
    _635.w = _299;
    float _303 = max(_299, 0.0);
    _635.w = _303;
    float _587;
    if (_303 == 0.0)
    {
        _587 = 0.0;
    }
    else
    {
        _587 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_303)));
    }
    _590.x = _587;
    vec3 _320 = -_635.xyz;
    float _324 = dot(_320, _320);
    vec4 _646 = _635;
    _646.w = _324;
    float _544 = inversesqrt(abs(_324));
    _646.w = _544;
    vec4 _743 = vec4(((-_646.xyz) * _646.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _544);
    vec3 _549 = _743.xyz;
    vec4 _554 = _743 * inversesqrt(dot(_549, _549));
    _590.x = _554.x;
    _590.y = _554.y;
    _590.z = _554.z;
    vec3 _364 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _743.x = _364.x;
    _743.y = _364.y;
    _743.z = _364.z;
    vec3 _379 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _743.xyz;
    vec4 _669 = _743;
    _669.x = _379.x;
    _669.y = _379.y;
    _669.z = _379.z;
    vec3 _394 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _669.xyz;
    float _396 = _394.x;
    vec4 _675 = _669;
    _675.x = _396;
    _675.y = _394.y;
    _675.z = _394.z;
    float _405 = dot(_590.xyz, _675.xyz);
    vec4 _744 = vec4(_396, _394.yz, _405);
    _744.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _744.xyz), 0.0, 1.0);
    vec4 _685 = _590;
    _685.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _685.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _685.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _434 = (_685.xyz * _744.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _691 = _744;
    _691.x = _434.x;
    _691.y = _434.y;
    _691.z = _434.z;
    vec3 _444 = min(_691.xyz, vec3(1.0));
    vec4 _697 = _691;
    _697.x = _444.x;
    _697.y = _444.y;
    _697.z = _444.z;
    float _464 = max(_405, 0.0);
    float _588;
    if (_464 == 0.0)
    {
        _588 = 0.0;
    }
    else
    {
        _588 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_464)));
    }
    _685.x = _588;
    vec4 _576 = optPush.clipToTarget * ((_136.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _158);
    gl_Position = vec4(_576.x, -_576.y, _576.zw);
    color0 = vec4(_697.xyz * vec3(0.5), 1.0);
    color1 = vec4(_685.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _598;
    texcoord1 = _606;
    texcoord2 = _614;
    texcoord3 = _622;
    texcoord4 = _630;
    fog0 = min(_587, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
