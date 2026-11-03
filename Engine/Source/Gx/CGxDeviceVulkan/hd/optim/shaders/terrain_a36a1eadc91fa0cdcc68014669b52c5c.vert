#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _748;



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
layout(location = 4) out vec4 texcoord2;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _113 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _135 = (_113.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_113.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_113.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _143 = (_113.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _135;
    vec3 _150 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _603 = _135;
    _603.x = _150.x;
    _603.y = _150.y;
    _603.z = _150.z;
    vec3 _168 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _603.xyz;
    vec4 _609 = _603;
    _609.x = _168.x;
    _609.y = _168.y;
    _609.z = _168.z;
    vec3 _183 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _609.xyz;
    float _185 = _183.x;
    vec4 _615 = _609;
    _615.x = _185;
    _615.y = _183.y;
    _615.z = _183.z;
    float _194 = dot(_113.xyz, _615.xyz);
    vec4 _621 = _113;
    _621.w = _194;
    _621.w = _194 + _194;
    vec3 _211 = (_615.xyz * (-_621.www)) + _621.xyz;
    vec4 _627 = vec4(0.0);
    _627.x = _211.x;
    _627.y = _211.y;
    float _217 = _211.z;
    _627.z = _217;
    vec3 _224 = _627.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _633;
    _633.x = _224.x;
    _633.y = _224.y;
    _633.z = _224.z;
    vec3 _240 = (_627.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _633.xyz;
    vec4 _759 = vec4(_240.xy, _217, _240.z);
    vec3 _256 = (_759.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _759.xyw;
    vec4 _645 = vec4(0.0);
    _645.x = _256.x;
    _645.y = _256.y;
    _645.z = _256.z;
    vec2 _271 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _759.x = _271.x;
    _759.y = _271.y;
    vec4 _655;
    _655.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _655.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _293 = (_759.xy * _655.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _659 = vec4(0.0);
    _659.x = _293.x;
    _659.y = _293.y;
    vec4 _663;
    _663.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _663.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _315 = (_759.xy * _663.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _667 = vec4(0.0);
    _667.x = _315.x;
    _667.y = _315.y;
    float _329 = (_113.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _621.w = _329;
    float _333 = max(_329, 0.0);
    _621.w = _333;
    float _595;
    if (_333 == 0.0)
    {
        _595 = 0.0;
    }
    else
    {
        _595 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_333)));
    }
    vec4 _760 = vec4(_185, _183.yz, _595);
    vec3 _349 = -_621.xyz;
    float _353 = dot(_349, _349);
    vec4 _683 = _621;
    _683.w = _353;
    float _569 = inversesqrt(abs(_353));
    _683.w = _569;
    vec4 _761 = vec4(((-_683.xyz) * _683.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _569);
    vec3 _574 = _761.xyz;
    vec4 _579 = _761 * inversesqrt(dot(_574, _574));
    _759.x = _579.x;
    _759.y = _579.y;
    _759.z = _579.z;
    vec3 _390 = _760.xyz;
    float _391 = dot(_759.xyz, _390);
    _761.x = _391;
    _761.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _390), 0.0, 1.0);
    vec4 _704 = _760;
    _704.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _704.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _704.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _762 = vec4(_391, (_704.xyz * _761.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _431 = min(_762.yzw, vec3(1.0));
    vec4 _716 = _762;
    _716.y = _431.x;
    _716.z = _431.y;
    _716.w = _431.z;
    float _454 = max(_391, 0.0);
    float _596;
    if (_454 == 0.0)
    {
        _596 = 0.0;
    }
    else
    {
        _596 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_454)));
    }
    _704.x = _596;
    vec4 _764 = vec4(_716.yzw * v2.xyz, 1.0);
    wxlGBuf = vec4(_185, _183.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _501 = abs((_764.xyz * 2.0) - _716.yzw);
    wxlGPlain = max(max(_501.x, _501.y), _501.z);
    gl_Position = vec4(_143.x, -_143.y, _143.zw);
    color0 = _764;
    color1 = vec4(_704.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _645;
    texcoord1 = _659;
    texcoord2 = _667;
    fog0 = min(_595, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
