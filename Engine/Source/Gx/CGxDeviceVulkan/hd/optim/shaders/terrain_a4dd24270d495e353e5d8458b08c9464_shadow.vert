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
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _110 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _132 = (_110.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_110.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_110.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    float _150 = (_110.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _416 = _110;
    _416.x = _150;
    float _154 = max(_150, 0.0);
    _416.x = _154;
    float _413;
    if (_154 == 0.0)
    {
        _413 = 0.0;
    }
    else
    {
        _413 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_154)));
    }
    vec4 _422 = _132;
    _422.x = _413;
    vec2 _177 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _416.x = _177.x;
    _416.y = _177.y;
    _422.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _422.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _199 = (_416.xy * _422.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _435 = vec4(0.0);
    _435.x = _199.x;
    _435.y = _199.y;
    _422.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _422.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _221 = (_416.xy * _422.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _443 = vec4(0.0);
    _443.x = _221.x;
    _443.y = _221.y;
    _422.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _422.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _243 = (_416.xy * _422.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _451 = vec4(0.0);
    _451.x = _243.x;
    _451.y = _243.y;
    vec3 _255 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _416.x = _255.x;
    _416.y = _255.y;
    _416.z = _255.z;
    vec3 _270 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _416.xyz;
    vec4 _461 = _416;
    _461.x = _270.x;
    _461.y = _270.y;
    _461.z = _270.z;
    vec3 _285 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _461.xyz;
    vec4 _467 = _461;
    _467.x = _285.x;
    _467.y = _285.y;
    _467.z = _285.z;
    _467.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _467.xyz), 0.0, 1.0);
    _422.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _422.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _422.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _320 = (_422.xyz * _467.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _481 = _467;
    _481.x = _320.x;
    _481.y = _320.y;
    _481.z = _320.z;
    vec3 _330 = min(_481.xyz, vec3(1.0));
    vec4 _487 = _481;
    _487.x = _330.x;
    _487.y = _330.y;
    _487.z = _330.z;
    vec4 _402 = optPush.clipToTarget * ((_110.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _132);
    gl_Position = vec4(_402.x, -_402.y, _402.zw);
    color0 = vec4(_487.xyz * vec3(0.5), 1.0);
    color1 = vec4(0.0);
    texcoord0 = _435;
    texcoord1 = _443;
    texcoord2 = _451;
    fog0 = min(_413, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
