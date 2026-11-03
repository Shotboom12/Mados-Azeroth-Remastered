#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;

vec4 _807;





layout(location = 0) in vec4 v0;
layout(location = 1) in vec4 v1;
layout(location = 2) in vec4 v2;
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
    vec4 _137 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _159 = (_137.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_137.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_137.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _174 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _642 = _159;
    _642.x = _174.x;
    _642.y = _174.y;
    _642.z = _174.z;
    vec3 _189 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _642.xyz;
    vec4 _648 = _642;
    _648.x = _189.x;
    _648.y = _189.y;
    _648.z = _189.z;
    vec3 _204 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _648.xyz;
    float _206 = _204.x;
    vec4 _654 = _648;
    _654.x = _206;
    _654.y = _204.y;
    _654.z = _204.z;
    float _215 = dot(_137.xyz, _654.xyz);
    vec4 _660 = _137;
    _660.w = _215;
    _660.w = _215 + _215;
    vec3 _231 = (_654.xyz * (-_660.www)) + _660.xyz;
    vec4 _666 = vec4(0.0);
    _666.x = _231.x;
    _666.y = _231.y;
    float _237 = _231.z;
    _666.z = _237;
    vec3 _244 = _666.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _672;
    _672.x = _244.x;
    _672.y = _244.y;
    _672.z = _244.z;
    vec3 _260 = (_666.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _672.xyz;
    vec4 _818 = vec4(_260.xy, _237, _260.z);
    vec3 _276 = (_818.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _818.xyw;
    vec4 _684 = vec4(0.0);
    _684.x = _276.x;
    _684.y = _276.y;
    _684.z = _276.z;
    vec2 _291 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _818.x = _291.x;
    _818.y = _291.y;
    vec4 _694;
    _694.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _694.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _313 = (_818.xy * _694.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _698 = vec4(0.0);
    _698.x = _313.x;
    _698.y = _313.y;
    vec4 _702;
    _702.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _702.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _335 = (_818.xy * _702.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _706 = vec4(0.0);
    _706.x = _335.x;
    _706.y = _335.y;
    vec4 _710;
    _710.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _710.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _357 = (_818.xy * _710.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _714 = vec4(0.0);
    _714.x = _357.x;
    _714.y = _357.y;
    vec4 _718;
    _718.x = optRegs.rows[optTile*82u+17u+uint(22)].x;
    _718.y = optRegs.rows[optTile*82u+17u+uint(22)].y;
    vec2 _379 = (_818.xy * _718.yx) + optRegs.rows[optTile*82u+17u+uint(17)].yx;
    vec4 _722 = vec4(0.0);
    _722.x = _379.x;
    _722.y = _379.y;
    float _393 = (_137.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _660.w = _393;
    float _397 = max(_393, 0.0);
    _660.w = _397;
    float _639;
    if (_397 == 0.0)
    {
        _639 = 0.0;
    }
    else
    {
        _639 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_397)));
    }
    vec4 _819 = vec4(_206, _204.yz, _639);
    vec3 _414 = -_660.xyz;
    float _418 = dot(_414, _414);
    vec4 _738 = _660;
    _738.w = _418;
    float _596 = inversesqrt(abs(_418));
    _738.w = _596;
    vec4 _820 = vec4(((-_738.xyz) * _738.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz, _596);
    vec3 _601 = _820.xyz;
    vec4 _606 = _820 * inversesqrt(dot(_601, _601));
    _818.x = _606.x;
    _818.y = _606.y;
    _818.z = _606.z;
    vec3 _455 = _819.xyz;
    float _456 = dot(_818.xyz, _455);
    _820.x = _456;
    _820.y = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _455), 0.0, 1.0);
    vec4 _759 = _819;
    _759.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _759.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _759.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec4 _821 = vec4(_456, (_759.xyz * _820.yyy) + optRegs.rows[optTile*82u+17u+uint(25)].xyz);
    vec3 _495 = min(_821.yzw, vec3(1.0));
    vec4 _771 = _821;
    _771.y = _495.x;
    _771.z = _495.y;
    _771.w = _495.z;
    float _516 = max(_456, 0.0);
    float _640;
    if (_516 == 0.0)
    {
        _640 = 0.0;
    }
    else
    {
        _640 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_516)));
    }
    _759.x = _640;
    vec4 _628 = optPush.clipToTarget * ((_137.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _159);
    gl_Position = vec4(_628.x, -_628.y, _628.zw);
    color0 = vec4(_771.yzw * v2.xyz, 1.0);
    color1 = vec4(_759.xxx * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _684;
    texcoord1 = _698;
    texcoord2 = _706;
    texcoord3 = _714;
    texcoord4 = _722;
    fog0 = min(_639, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
