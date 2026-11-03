#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _673;



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
    vec4 _112 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _134 = (_112.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_112.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_112.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec4 _142 = (_112.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _134;
    vec2 _151 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    vec4 _550 = _134;
    _550.x = _151.x;
    _550.y = _151.y;
    vec4 _554;
    _554.x = optRegs.rows[optTile*82u+17u+uint(18)].x;
    _554.y = optRegs.rows[optTile*82u+17u+uint(18)].y;
    vec2 _175 = (_550.xy * _554.yx) + optRegs.rows[optTile*82u+17u+uint(13)].yx;
    vec4 _558 = vec4(0.0);
    _558.x = _175.x;
    _558.y = _175.y;
    vec4 _562;
    _562.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _562.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _197 = (_550.xy * _562.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _566 = vec4(0.0);
    _566.x = _197.x;
    _566.y = _197.y;
    vec4 _570;
    _570.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _570.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _219 = (_550.xy * _570.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _574 = vec4(0.0);
    _574.x = _219.x;
    _574.y = _219.y;
    float _234 = (_112.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    vec4 _579 = _112;
    _579.w = _234;
    float _239 = max(_234, 0.0);
    _579.w = _239;
    float _542;
    if (_239 == 0.0)
    {
        _542 = 0.0;
    }
    else
    {
        _542 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_239)));
    }
    _550.x = _542;
    vec3 _255 = -_579.xyz;
    float _259 = dot(_255, _255);
    vec4 _590 = _579;
    _590.w = _259;
    float _516 = inversesqrt(abs(_259));
    _590.w = _516;
    vec4 _683 = vec4(((-_590.xyz) * _590.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _516);
    vec3 _521 = _683.xyz;
    vec4 _526 = _683 * inversesqrt(dot(_521, _521));
    _550.x = _526.x;
    _550.y = _526.y;
    _550.z = _526.z;
    vec3 _299 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    _683.x = _299.x;
    _683.y = _299.y;
    _683.z = _299.z;
    vec3 _314 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _683.xyz;
    vec4 _613 = _683;
    _613.x = _314.x;
    _613.y = _314.y;
    _613.z = _314.z;
    vec3 _329 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _613.xyz;
    float _331 = _329.x;
    vec4 _619 = _613;
    _619.x = _331;
    _619.y = _329.y;
    _619.z = _329.z;
    float _340 = dot(_550.xyz, _619.xyz);
    vec4 _684 = vec4(_331, _329.yz, _340);
    _684.x = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _684.xyz), 0.0, 1.0);
    vec4 _629 = _550;
    _629.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _629.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _629.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _371 = (_629.xyz * _684.xxx) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _635 = _684;
    _635.x = _371.x;
    _635.y = _371.y;
    _635.z = _371.z;
    vec3 _380 = min(_635.xyz, vec3(1.0));
    vec4 _641 = _635;
    _641.x = _380.x;
    _641.y = _380.y;
    _641.z = _380.z;
    float _402 = max(_340, 0.0);
    float _543;
    if (_402 == 0.0)
    {
        _543 = 0.0;
    }
    else
    {
        _543 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_402)));
    }
    _629.x = _543;
    vec4 _685 = vec4(_641.xyz * vec3(0.5), 1.0);
    wxlGBuf = vec4(_331, _329.yz, 0.0);
    wxlGClass = 1.0;
    vec3 _448 = abs((_685.xyz * 2.0) - _641.xyz);
    wxlGPlain = max(max(_448.x, _448.y), _448.z);
    gl_Position = vec4(_142.x, -_142.y, _142.zw);
    color0 = _685;
    color1 = vec4(_629.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _558;
    texcoord1 = _566;
    texcoord2 = _574;
    fog0 = min(_542, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
if((optPush.flags&1u)!=0u){vec4 p=optPush.clipToTarget*vec4(gl_Position.x,-gl_Position.y,gl_Position.z,gl_Position.w);gl_Position=vec4(p.x,-p.y,p.z,p.w);}
}
