#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _746;



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
    vec4 _113 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _135 = (_113.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_113.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_113.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _143 = (_113.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _135;
    vec3 _150 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _601 = _135;
    _601.x = _150.x;
    _601.y = _150.y;
    _601.z = _150.z;
    vec3 _168 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _601.xyz;
    vec4 _607 = _601;
    _607.x = _168.x;
    _607.y = _168.y;
    _607.z = _168.z;
    vec3 _183 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _607.xyz;
    float _185 = _183.x;
    vec4 _613 = _607;
    _613.x = _185;
    _613.y = _183.y;
    _613.z = _183.z;
    float _194 = dot(_113.xyz, _613.xyz);
    vec4 _619 = _113;
    _619.w = _194;
    _619.w = _194 + _194;
    vec3 _211 = (_613.xyz * (-_619.www)) + _619.xyz;
    vec4 _625 = vec4(0.0);
    _625.x = _211.x;
    _625.y = _211.y;
    float _217 = _211.z;
    _625.z = _217;
    vec3 _224 = _625.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _631;
    _631.x = _224.x;
    _631.y = _224.y;
    _631.z = _224.z;
    vec3 _240 = (_625.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _631.xyz;
    vec4 _757 = vec4(_240.xy, _217, _240.z);
    vec3 _256 = (_757.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _757.xyw;
    vec4 _643 = vec4(0.0);
    _643.x = _256.x;
    _643.y = _256.y;
    _643.z = _256.z;
    vec2 _271 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _757.x = _271.x;
    _757.y = _271.y;
    vec4 _653;
    _653.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _653.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _293 = (_757.xy * _653.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _657 = vec4(0.0);
    _657.x = _293.x;
    _657.y = _293.y;
    vec4 _661;
    _661.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _661.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _315 = (_757.xy * _661.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _665 = vec4(0.0);
    _665.x = _315.x;
    _665.y = _315.y;
    float _329 = (_113.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _619.w = _329;
    float _333 = max(_329, 0.0);
    _619.w = _333;
    float _593;
    if (_333 == 0.0)
    {
        _593 = 0.0;
    }
    else
    {
        _593 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_333)));
    }
    vec4 _758 = vec4(_185, _183.yz, _593);
    vec3 _349 = -_619.xyz;
    float _353 = dot(_349, _349);
    vec4 _681 = _619;
    _681.w = _353;
    float _567 = inversesqrt(abs(_353));
    _681.w = _567;
    vec4 _759 = vec4(((-_681.xyz) * _681.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _567);
    vec3 _572 = _759.xyz;
    vec4 _577 = _759 * inversesqrt(dot(_572, _572));
    _757.x = _577.x;
    _757.y = _577.y;
    _757.z = _577.z;
    vec3 _390 = _758.xyz;
    float _391 = dot(_757.xyz, _390);
    _759.x = _391;
    _759.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _390), 0.0, 1.0);
    vec4 _702 = _758;
    _702.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _702.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _702.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _760 = vec4(_391, (_702.xyz * _759.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _431 = min(_760.yzw, vec3(1.0));
    vec4 _714 = _760;
    _714.y = _431.x;
    _714.z = _431.y;
    _714.w = _431.z;
    float _453 = max(_391, 0.0);
    float _594;
    if (_453 == 0.0)
    {
        _594 = 0.0;
    }
    else
    {
        _594 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_453)));
    }
    _702.x = _594;
    vec4 _762 = vec4(_714.yzw * vec3(0.5), 1.0);
    wxlGBuf = vec4(_185, _183.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _499 = abs((_762.xyz * 2.0) - _714.yzw);
    wxlGPlain = max(max(_499.x, _499.y), _499.z);
    gl_Position = vec4(_143.x, -_143.y, _143.zw);
    color0 = _762;
    color1 = vec4(_702.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _643;
    texcoord1 = _657;
    texcoord2 = _665;
    fog0 = min(_593, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
