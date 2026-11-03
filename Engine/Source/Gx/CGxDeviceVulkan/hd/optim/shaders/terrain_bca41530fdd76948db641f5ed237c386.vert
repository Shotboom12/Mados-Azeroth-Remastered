#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;



layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
layout(location = 13) out vec4 wxlGBuf;
layout(location = 14) flat out float wxlGClass;
layout(location = 15) out float wxlGPlain;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 3) out vec4 texcoord1;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _87 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _109 = (_87.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_87.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_87.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _117 = (_87.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _109;
    vec3 _124 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _449 = _109;
    _449.x = _124.x;
    _449.y = _124.y;
    _449.z = _124.z;
    vec3 _142 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _449.xyz;
    vec4 _455 = _449;
    _455.x = _142.x;
    _455.y = _142.y;
    _455.z = _142.z;
    vec3 _157 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _455.xyz;
    float _159 = _157.x;
    vec4 _461 = _455;
    _461.x = _159;
    _461.y = _157.y;
    _461.z = _157.z;
    float _168 = dot(_87.xyz, _461.xyz);
    vec4 _467 = _87;
    _467.w = _168;
    _467.w = _168 + _168;
    vec3 _185 = (_461.xyz * (-_467.www)) + _467.xyz;
    float _201 = (_87.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _559 = vec4(_185.xy, _201, _185.z);
    float _205 = max(_201, 0.0);
    _559.z = _205;
    float _444;
    if (_205 == 0.0)
    {
        _444 = 0.0;
    }
    else
    {
        _444 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_205)));
    }
    vec4 _560 = vec4(_159, _157.yz, _444);
    _559.z = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _560.xyz), 0.0, 1.0);
    _560.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _560.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _560.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _249 = (_560.xyz * _559.zzz) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _499 = _560;
    _499.x = _249.x;
    _499.y = _249.y;
    _499.z = _249.z;
    vec3 _258 = min(_499.xyz, vec3(1.0));
    vec4 _505 = _499;
    _505.x = _258.x;
    _505.y = _258.y;
    _505.z = _258.z;
    vec3 _285 = _559.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _517 = _505;
    _517.x = _285.x;
    _517.y = _285.y;
    _517.z = _285.z;
    vec3 _301 = (_559.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _517.xyz;
    vec4 _523 = _559;
    _523.x = _301.x;
    _523.y = _301.y;
    _523.z = _301.z;
    vec3 _317 = (_523.www * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _523.xyz;
    vec4 _529 = vec4(0.0);
    _529.x = _317.x;
    _529.y = _317.y;
    _529.z = _317.z;
    vec2 _332 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _523.x = _332.x;
    _523.y = _332.y;
    _517.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _517.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _354 = (_523.xy * _517.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _543 = vec4(0.0);
    _543.x = _354.x;
    _543.y = _354.y;
    vec4 _561 = vec4(_505.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_159, _157.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _382 = abs((_561.xyz * 2.0) - _505.xyz);
    wxlGPlain = max(max(_382.x, _382.y), _382.z);
    gl_Position = vec4(_117.x, -_117.y, _117.zw);
    color0 = _561;
    color1 = vec4(0.0);
    texcoord0 = _529;
    texcoord1 = _543;
    fog0 = min(_444, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
