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
layout(location = 5) out vec4 texcoord3;
layout(location = 6) out vec4 texcoord4;
layout(location = 7) out vec4 texcoord5;
layout(location = 8) out vec4 texcoord6;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _116 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _138 = (_116.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_116.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_116.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _146 = (_116.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _138;
    vec2 _155 = v0.xy - optRegs.rows[optTile*82u+17u+uint(23)].xy;
    vec4 _640 = _138;
    _640.x = _155.x;
    _640.y = _155.y;
    vec4 _644 = vec4(0.0);
    _644.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _644.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _179 = (_640.yx * _644.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _648 = vec4(0.0);
    _648.x = _179.x;
    _648.y = _179.y;
    _644.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _644.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec4 _660 = _644;
    _660.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _660.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    float _231 = _116.z;
    float _239 = (_231 * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _669 = _640;
    _669.x = _239;
    float _243 = max(_239, 0.0);
    _669.x = _243;
    float _632;
    if (_243 == 0.0)
    {
        _632 = 0.0;
    }
    else
    {
        _632 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_243)));
    }
    vec4 _675 = _660;
    _675.x = _632;
    vec3 _263 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _669.x = _263.x;
    _669.y = _263.y;
    _669.z = _263.z;
    vec3 _278 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _669.xyz;
    vec4 _686 = _669;
    _686.x = _278.x;
    _686.y = _278.y;
    _686.z = _278.z;
    vec3 _293 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _686.xyz;
    float _295 = _293.x;
    vec3 _302 = -_116.xyz;
    float _306 = dot(_302, _302);
    vec4 _812 = vec4(_295, _293.yz, _306);
    _812.w = inversesqrt(abs(_306));
    vec3 _323 = (_302 * _812.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _675.x = _323.x;
    _675.y = _323.y;
    _675.z = _323.z;
    vec4 _616 = _675 * inversesqrt(dot(_675.xyz, _675.xyz));
    vec4 _709 = vec4(0.0);
    _709.x = _616.x;
    _709.y = _616.y;
    _709.z = _616.z;
    float _344 = dot(_709.xyz, _812.xyz);
    vec4 _715 = _812;
    _715.w = _344;
    _715.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _715.xyz), 0.0, 1.0);
    _675.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _675.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _675.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _813 = vec4((_675.xyz * _715.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz, _344);
    vec3 _384 = min(_813.xyz, vec3(1.0));
    vec4 _731 = _813;
    _731.x = _384.x;
    _731.y = _384.y;
    _731.z = _384.z;
    float _406 = max(_344, 0.0);
    float _633;
    if (_406 == 0.0)
    {
        _633 = 0.0;
    }
    else
    {
        _633 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_406)));
    }
    _675.x = _633;
    vec4 _779 = vec4(0.0);
    _779.x = _116.x;
    _779.y = _116.y;
    _779.z = _231;
    vec4 _817 = vec4(_731.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_295, _293.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _532 = abs((_817.xyz * 2.0) - _731.xyz);
    wxlGPlain = max(max(_532.x, _532.y), _532.z);
    gl_Position = vec4(_146.x, -_146.y, _146.zw);
    color0 = _817;
    color1 = vec4(_675.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _648;
    texcoord1 = vec4((_640.yx * _644.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx, (_640.xy * _660.xy) + optRegs.rows[optTile*82u+17u+uint(15)].xy);
    texcoord3 = _779;
    texcoord4 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(37)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(38)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(39)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(46)]));
    texcoord5 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(40)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(41)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(42)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(47)]));
    texcoord6 = vec4(dot(_116, optRegs.rows[optTile*82u+17u+uint(43)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(44)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(45)]), dot(_116, optRegs.rows[optTile*82u+17u+uint(48)]));
    fog0 = min(_632, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
