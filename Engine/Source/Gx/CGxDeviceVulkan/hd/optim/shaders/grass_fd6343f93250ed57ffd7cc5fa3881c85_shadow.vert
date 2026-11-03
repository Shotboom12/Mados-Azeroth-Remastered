#version 450

uint optTile=0u;
layout(set=1,binding=0,std430)readonly buffer OptRegisters{vec4 rows[];}optRegs;





vec4 v0;
vec4 v1;
vec4 v2;
vec4 v3;
layout(location = 0) out vec4 color0;
layout(location = 1) out vec4 color1;
layout(location = 2) out vec4 texcoord0;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
layout(location=0)in vec3 optPosition;layout(location=4)in vec2 optUV;layout(location=5)in vec2 optWind;
layout(location=8)in vec4 optRow0;layout(location=9)in vec4 optRow1;layout(location=10)in vec4 optRow2;
layout(location=11)in vec4 optNormal;layout(location=12)in vec4 optColor;layout(location=13)in vec4 optLight;layout(location=14)in vec4 optInstanceWind;
void OptNativeMain()
{
    vec4 _122 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _144 = (_122.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_122.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_122.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    float _154 = _122.z;
    float _174 = (_154 * optRegs.rows[optTile*82u+17u+uint(8)].x) + optRegs.rows[optTile*82u+17u+uint(8)].y;
    vec4 _852 = _122;
    _852.w = _174;
    float _178 = max(_174, 0.0);
    _852.w = _178;
    float _846;
    if (_178 == 0.0)
    {
        _846 = 0.0;
    }
    else
    {
        _846 = exp2(optRegs.rows[optTile*82u+17u+uint(8)].z * log2(abs(_178)));
    }
    vec4 _858 = _144;
    _858.x = _846;
    _858.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _858.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _858.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _208 = _858.xyz * optRegs.rows[optTile*82u+17u+uint(14)].yyy;
    vec4 _869 = vec4(0.0);
    _869.x = _208.x;
    _869.y = _208.y;
    _869.z = _208.z;
    vec4 _875 = vec4(0.0);
    _875.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _875.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _875.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _232 = (optRegs.rows[optTile*82u+17u+uint(14)].xxx * _875.xyz) + _869.xyz;
    vec4 _881 = _869;
    _881.x = _232.x;
    _881.y = _232.y;
    _881.z = _232.z;
    vec4 _887 = vec4(0.0);
    _887.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _887.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _887.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _256 = (optRegs.rows[optTile*82u+17u+uint(14)].zzz * _887.xyz) + _881.xyz;
    vec4 _893 = _881;
    _893.x = _256.x;
    _893.y = _256.y;
    _893.z = _256.z;
    vec3 _268 = _893.xyz - _852.xyz;
    vec4 _899 = _893;
    _899.x = _268.x;
    _899.y = _268.y;
    _899.z = _268.z;
    float _279 = dot(_899.xyz, _899.xyz);
    _852.w = _279;
    float _818 = inversesqrt(abs(_279));
    _852.w = _818;
    float _288 = 1.0 / _818;
    vec4 _1154 = vec4(optRegs.rows[optTile*82u+17u+uint(1)].xyz, _288);
    vec3 _294 = _899.xyz * _852.www;
    vec4 _913 = _899;
    _913.x = _294.x;
    _913.y = _294.y;
    _913.z = _294.z;
    float _309 = (optRegs.rows[optTile*82u+17u+uint(16)].y * _288) + optRegs.rows[optTile*82u+17u+uint(16)].x;
    _852.w = _309;
    float _315 = 1.0 / (_818 * _818);
    _1154.w = _315;
    float _324 = (_315 * optRegs.rows[optTile*82u+17u+uint(16)].z) + _309;
    _852.w = _324;
    _852.w = 1.0 / _324;
    vec3 _336 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _933 = vec4(0.0);
    _933.x = _336.x;
    _933.y = _336.y;
    _933.z = _336.z;
    vec3 _351 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _933.xyz;
    vec4 _939 = _933;
    _939.x = _351.x;
    _939.y = _351.y;
    _939.z = _351.z;
    vec3 _366 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _939.xyz;
    vec4 _945 = _939;
    _945.x = _366.x;
    _945.y = _366.y;
    _945.z = _366.z;
    _1154.w = clamp(dot(_913.xyz, _945.xyz), 0.0, 1.0);
    vec3 _386 = _1154.www * optRegs.rows[optTile*82u+17u+uint(15)].xyz;
    _913.x = _386.x;
    _913.y = _386.y;
    _913.z = _386.z;
    _1154.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(10)].xyz, _945.xyz), 0.0, 1.0);
    vec4 _961 = vec4(0.0);
    _961.x = optRegs.rows[optTile*82u+17u+uint(12)].x;
    _961.y = optRegs.rows[optTile*82u+17u+uint(12)].y;
    _961.z = optRegs.rows[optTile*82u+17u+uint(12)].z;
    vec3 _421 = (_961.xyz * _1154.www) + optRegs.rows[optTile*82u+17u+uint(11)].xyz;
    vec4 _967 = _961;
    _967.x = _421.x;
    _967.y = _421.y;
    _967.z = _421.z;
    vec3 _435 = (_913.xyz * _852.www) + _967.xyz;
    vec4 _973 = _913;
    _973.x = _435.x;
    _973.y = _435.y;
    _973.z = _435.z;
    vec3 _448 = _1154.xyz * optRegs.rows[optTile*82u+17u+uint(17)].yyy;
    _967.x = _448.x;
    _967.y = _448.y;
    _967.z = _448.z;
    vec3 _463 = (optRegs.rows[optTile*82u+17u+uint(17)].xxx * _875.xyz) + _967.xyz;
    vec4 _985 = _967;
    _985.x = _463.x;
    _985.y = _463.y;
    _985.z = _463.z;
    vec3 _478 = (optRegs.rows[optTile*82u+17u+uint(17)].zzz * _887.xyz) + _985.xyz;
    vec4 _991 = _985;
    _991.x = _478.x;
    _991.y = _478.y;
    _991.z = _478.z;
    vec3 _490 = _991.xyz - _852.xyz;
    vec4 _997 = _991;
    _997.x = _490.x;
    _997.y = _490.y;
    _997.z = _490.z;
    float _501 = dot(_997.xyz, _997.xyz);
    _852.w = _501;
    float _823 = inversesqrt(abs(_501));
    _852.w = _823;
    float _510 = 1.0 / _823;
    _1154.w = _510;
    vec3 _516 = _997.xyz * _852.www;
    vec4 _1011 = _997;
    _1011.x = _516.x;
    _1011.y = _516.y;
    _1011.z = _516.z;
    _852.w = clamp(dot(_1011.xyz, _945.xyz), 0.0, 1.0);
    vec3 _536 = _852.www * optRegs.rows[optTile*82u+17u+uint(18)].xyz;
    _1011.x = _536.x;
    _1011.y = _536.y;
    _1011.z = _536.z;
    float _551 = (optRegs.rows[optTile*82u+17u+uint(19)].y * _510) + optRegs.rows[optTile*82u+17u+uint(19)].x;
    _852.w = _551;
    float _557 = 1.0 / (_823 * _823);
    _1154.w = _557;
    float _566 = (_557 * optRegs.rows[optTile*82u+17u+uint(19)].z) + _551;
    _852.w = _566;
    float _570 = 1.0 / _566;
    _852.w = _570;
    vec3 _579 = (_1011.xyz * _852.www) + _973.xyz;
    vec4 _1039 = _973;
    _1039.x = _579.x;
    _1039.y = _579.y;
    _1039.z = _579.z;
    vec4 _1157 = vec4(_1154.xyz * optRegs.rows[optTile*82u+17u+uint(20)].yyy, _557);
    vec3 _607 = (optRegs.rows[optTile*82u+17u+uint(20)].xxx * _875.xyz) + _1157.xyz;
    vec4 _1051 = _1157;
    _1051.x = _607.x;
    _1051.y = _607.y;
    _1051.z = _607.z;
    vec3 _622 = (optRegs.rows[optTile*82u+17u+uint(20)].zzz * _887.xyz) + _1051.xyz;
    vec4 _1057 = _1051;
    _1057.x = _622.x;
    _1057.y = _622.y;
    _1057.z = _622.z;
    vec4 _1158 = vec4(_1057.xyz - _852.xyz, _570);
    vec3 _642 = _1158.xyz;
    float _645 = dot(_642, _642);
    vec4 _1069 = _1158;
    _1069.w = _645;
    float _828 = inversesqrt(abs(_645));
    _1069.w = _828;
    vec4 _1159 = vec4(_1069.xyz * _1069.www, _828);
    _1159.x = clamp(dot(_1159.xyz, _945.xyz), 0.0, 1.0);
    float _695 = (optRegs.rows[optTile*82u+17u+uint(22)].y * (1.0 / _828)) + optRegs.rows[optTile*82u+17u+uint(22)].x;
    vec4 _1160 = vec4(_1159.xxx * optRegs.rows[optTile*82u+17u+uint(21)].xyz, _695);
    float _710 = ((1.0 / (_828 * _828)) * optRegs.rows[optTile*82u+17u+uint(22)].z) + _695;
    _1160.w = _710;
    float _714 = 1.0 / _710;
    _1160.w = _714;
    vec4 _1162 = vec4((_1160.xyz * _1160.www) + _1039.xyz, _714);
    vec3 _733 = min(_1162.xyz, vec3(1.0));
    vec4 _1111 = _1162;
    _1111.x = _733.x;
    _1111.y = _733.y;
    _1111.z = _733.z;
    vec4 _1131 = vec4(0.0);
    _1131.x = v3.x;
    _1131.y = v3.y;
    vec4 _835 = optPush.clipToTarget * ((_122.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _144);
    gl_Position = vec4(_835.x, -_835.y, _835.zw);
    color0 = vec4(_1111.xyz * v2.xyz, v2.w);
    color1 = vec4(clamp((_154 * optRegs.rows[optTile*82u+17u+uint(9)].x) + optRegs.rows[optTile*82u+17u+uint(9)].y, 0.0, 1.0), 0.0, 0.0, 0.0);
    texcoord0 = _1131;
    fog0 = min(_846, 1.0);
}


void main(){
optTile=0u;
vec4 optP=vec4(optPosition,1);vec3 optPos=vec3(dot(optRow0,optP),dot(optRow1,optP),dot(optRow2,optP));
v0=vec4(optPos,1);
v1=optNormal;
v2=optColor;
v3=vec4(optUV,0,1);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
