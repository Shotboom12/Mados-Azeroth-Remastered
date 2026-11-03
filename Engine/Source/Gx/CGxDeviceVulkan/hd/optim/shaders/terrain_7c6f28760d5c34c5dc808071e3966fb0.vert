#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _675;



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
    vec4 _112 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _134 = (_112.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_112.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_112.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _142 = (_112.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _134;
    vec2 _151 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _552 = _134;
    _552.x = _151.x;
    _552.y = _151.y;
    vec4 _556;
    _556.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _556.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _175 = (_552.xy * _556.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _560 = vec4(0.0);
    _560.x = _175.x;
    _560.y = _175.y;
    vec4 _564;
    _564.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _564.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _197 = (_552.xy * _564.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _568 = vec4(0.0);
    _568.x = _197.x;
    _568.y = _197.y;
    vec4 _572;
    _572.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _572.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _219 = (_552.xy * _572.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _576 = vec4(0.0);
    _576.x = _219.x;
    _576.y = _219.y;
    float _234 = (_112.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _581 = _112;
    _581.w = _234;
    float _239 = max(_234, 0.0);
    _581.w = _239;
    float _544;
    if (_239 == 0.0)
    {
        _544 = 0.0;
    }
    else
    {
        _544 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_239)));
    }
    _552.x = _544;
    vec3 _255 = -_581.xyz;
    float _259 = dot(_255, _255);
    vec4 _592 = _581;
    _592.w = _259;
    float _518 = inversesqrt(abs(_259));
    _592.w = _518;
    vec4 _685 = vec4(((-_592.xyz) * _592.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _518);
    vec3 _523 = _685.xyz;
    vec4 _528 = _685 * inversesqrt(dot(_523, _523));
    _552.x = _528.x;
    _552.y = _528.y;
    _552.z = _528.z;
    vec3 _299 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _685.x = _299.x;
    _685.y = _299.y;
    _685.z = _299.z;
    vec3 _314 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _685.xyz;
    vec4 _615 = _685;
    _615.x = _314.x;
    _615.y = _314.y;
    _615.z = _314.z;
    vec3 _329 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _615.xyz;
    float _331 = _329.x;
    vec4 _621 = _615;
    _621.x = _331;
    _621.y = _329.y;
    _621.z = _329.z;
    float _340 = dot(_552.xyz, _621.xyz);
    vec4 _686 = vec4(_331, _329.yz, _340);
    _686.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _686.xyz), 0.0, 1.0);
    vec4 _631 = _552;
    _631.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _631.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _631.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _371 = (_631.xyz * _686.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _637 = _686;
    _637.x = _371.x;
    _637.y = _371.y;
    _637.z = _371.z;
    vec3 _380 = min(_637.xyz, vec3(1.0));
    vec4 _643 = _637;
    _643.x = _380.x;
    _643.y = _380.y;
    _643.z = _380.z;
    float _403 = max(_340, 0.0);
    float _545;
    if (_403 == 0.0)
    {
        _545 = 0.0;
    }
    else
    {
        _545 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_403)));
    }
    _631.x = _545;
    vec4 _687 = vec4(_643.xyz * v2.xyz, 1.0);
    wxlGBuf = vec4(_331, _329.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _450 = abs((_687.xyz * 2.0) - _643.xyz);
    wxlGPlain = max(max(_450.x, _450.y), _450.z);
    gl_Position = vec4(_142.x, -_142.y, _142.zw);
    color0 = _687;
    color1 = vec4(_631.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _560;
    texcoord1 = _568;
    texcoord2 = _576;
    fog0 = min(_544, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
