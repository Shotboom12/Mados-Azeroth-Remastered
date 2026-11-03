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
layout(location = 5) out vec4 texcoord3;
layout(location = 10) out float fog0;


layout(push_constant,std430) uniform OptPush {mat4 clipToTarget;uint verticesPerTile;uint flags;uvec2 pad;}optPush;

layout(location=11)flat out uint optTileOut;layout(location=12)out float optClipOut;
void OptNativeMain()
{
    vec4 _139 = ((v0.zzzz * optRegs.rows[optTile*82u+17u+uint(2)]) + ((v0.xxxx * optRegs.rows[optTile*82u+17u+uint(0)]) + (optRegs.rows[optTile*82u+17u+uint(1)] * v0.yyyy))) + optRegs.rows[optTile*82u+17u+uint(3)];
    vec4 _161 = (_139.zzzz * optRegs.rows[optTile*82u+17u+uint(6)]) + ((_139.xxxx * optRegs.rows[optTile*82u+17u+uint(4)]) + (_139.yyyy * optRegs.rows[optTile*82u+17u+uint(5)]));
    vec3 _176 = optRegs.rows[optTile*82u+17u+uint(1)].xyz * v1.yyy;
    vec4 _1093 = _161;
    _1093.x = _176.x;
    _1093.y = _176.y;
    _1093.z = _176.z;
    vec3 _191 = (v1.xxx * optRegs.rows[optTile*82u+17u+uint(0)].xyz) + _1093.xyz;
    vec4 _1099 = _1093;
    _1099.x = _191.x;
    _1099.y = _191.y;
    _1099.z = _191.z;
    vec3 _206 = (v1.zzz * optRegs.rows[optTile*82u+17u+uint(2)].xyz) + _1099.xyz;
    float _208 = _206.x;
    vec4 _1105 = _1099;
    _1105.x = _208;
    _1105.y = _206.y;
    _1105.z = _206.z;
    float _217 = dot(_139.xyz, _1105.xyz);
    vec4 _1111 = _139;
    _1111.w = _217;
    _1111.w = _217 + _217;
    vec3 _233 = (_1105.xyz * (-_1111.www)) + _1111.xyz;
    vec4 _1117 = vec4(0.0);
    _1117.x = _233.x;
    _1117.y = _233.y;
    float _239 = _233.z;
    _1117.z = _239;
    vec3 _246 = _1117.yyy * optRegs.rows[optTile*82u+17u+uint(9)].xzy;
    vec4 _1123 = vec4(0.0);
    _1123.x = _246.x;
    _1123.y = _246.y;
    _1123.z = _246.z;
    vec3 _262 = (_1117.xxx * optRegs.rows[optTile*82u+17u+uint(8)].xzy) + _1123.xyz;
    vec4 _1486 = vec4(_262.xy, _239, _262.z);
    vec3 _278 = (_1486.zzz * optRegs.rows[optTile*82u+17u+uint(10)].xzy) + _1486.xyw;
    vec4 _1135 = vec4(0.0);
    _1135.x = _278.x;
    _1135.y = _278.y;
    _1135.z = _278.z;
    vec2 _293 = v0.yx - optRegs.rows[optTile*82u+17u+uint(23)].yx;
    _1486.x = _293.x;
    _1486.y = _293.y;
    _1123.x = optRegs.rows[optTile*82u+17u+uint(19)].x;
    _1123.y = optRegs.rows[optTile*82u+17u+uint(19)].y;
    vec2 _315 = (_1486.xy * _1123.yx) + optRegs.rows[optTile*82u+17u+uint(14)].yx;
    vec4 _1149 = vec4(0.0);
    _1149.x = _315.x;
    _1149.y = _315.y;
    _1123.x = optRegs.rows[optTile*82u+17u+uint(20)].x;
    _1123.y = optRegs.rows[optTile*82u+17u+uint(20)].y;
    vec2 _337 = (_1486.xy * _1123.yx) + optRegs.rows[optTile*82u+17u+uint(15)].yx;
    vec4 _1157 = vec4(0.0);
    _1157.x = _337.x;
    _1157.y = _337.y;
    _1123.x = optRegs.rows[optTile*82u+17u+uint(21)].x;
    _1123.y = optRegs.rows[optTile*82u+17u+uint(21)].y;
    vec2 _359 = (_1486.xy * _1123.yx) + optRegs.rows[optTile*82u+17u+uint(16)].yx;
    vec4 _1165 = vec4(0.0);
    _1165.x = _359.x;
    _1165.y = _359.y;
    float _373 = (_139.z * optRegs.rows[optTile*82u+17u+uint(12)].x) + optRegs.rows[optTile*82u+17u+uint(12)].y;
    _1111.w = _373;
    float _377 = max(_373, 0.0);
    _1111.w = _377;
    float _1090;
    if (_377 == 0.0)
    {
        _1090 = 0.0;
    }
    else
    {
        _1090 = exp2(optRegs.rows[optTile*82u+17u+uint(12)].z * log2(abs(_377)));
    }
    vec4 _1487 = vec4(_208, _206.yz, _1090);
    vec3 _394 = -_1111.xyz;
    float _398 = dot(_394, _394);
    vec4 _1181 = _1111;
    _1181.w = _398;
    _1181.w = inversesqrt(abs(_398));
    vec3 _415 = ((-_1181.xyz) * _1181.www) + optRegs.rows[optTile*82u+17u+uint(24)].xyz;
    _1486.x = _415.x;
    _1486.y = _415.y;
    _1486.z = _415.z;
    vec4 _1042 = _1486 * inversesqrt(dot(_1486.xyz, _1486.xyz));
    _1123.x = _1042.x;
    _1123.y = _1042.y;
    _1123.z = _1042.z;
    float _436 = dot(_1123.xyz, _1487.xyz);
    _1181.w = _436;
    float _440 = max(_436, 0.0);
    _1181.w = _440;
    float _1091;
    if (_440 == 0.0)
    {
        _1091 = 0.0;
    }
    else
    {
        _1091 = exp2(optRegs.rows[optTile*82u+17u+uint(27)].w * log2(abs(_440)));
    }
    _1487.w = _1091;
    _1486.x = optRegs.rows[optTile*82u+17u+uint(1)].x;
    _1486.y = optRegs.rows[optTile*82u+17u+uint(1)].y;
    _1486.z = optRegs.rows[optTile*82u+17u+uint(1)].z;
    vec3 _478 = _1486.xyz * optRegs.rows[optTile*82u+17u+uint(28)].yyy;
    _1123.x = _478.x;
    _1123.y = _478.y;
    _1123.z = _478.z;
    vec4 _1224 = vec4(0.0);
    _1224.x = optRegs.rows[optTile*82u+17u+uint(0)].x;
    _1224.y = optRegs.rows[optTile*82u+17u+uint(0)].y;
    _1224.z = optRegs.rows[optTile*82u+17u+uint(0)].z;
    vec3 _502 = (optRegs.rows[optTile*82u+17u+uint(28)].xxx * _1224.xyz) + _1123.xyz;
    vec4 _1230 = _1123;
    _1230.x = _502.x;
    _1230.y = _502.y;
    _1230.z = _502.z;
    vec4 _1236 = vec4(0.0);
    _1236.x = optRegs.rows[optTile*82u+17u+uint(2)].x;
    _1236.y = optRegs.rows[optTile*82u+17u+uint(2)].y;
    _1236.z = optRegs.rows[optTile*82u+17u+uint(2)].z;
    vec3 _526 = (optRegs.rows[optTile*82u+17u+uint(28)].zzz * _1236.xyz) + _1230.xyz;
    vec4 _1242 = _1230;
    _1242.x = _526.x;
    _1242.y = _526.y;
    _1242.z = _526.z;
    vec3 _538 = _1242.xyz - _1181.xyz;
    vec4 _1248 = _1242;
    _1248.x = _538.x;
    _1248.y = _538.y;
    _1248.z = _538.z;
    float _549 = dot(_1248.xyz, _1248.xyz);
    _1181.w = _549;
    float _1062 = inversesqrt(abs(_549));
    _1181.w = _1062;
    float _558 = 1.0 / _1062;
    vec4 _1260 = _1487;
    _1260.w = _558;
    vec3 _564 = _1248.xyz * _1181.www;
    vec4 _1262 = _1248;
    _1262.x = _564.x;
    _1262.y = _564.y;
    _1262.z = _564.z;
    _1181.w = clamp(dot(_1262.xyz, _1260.xyz), 0.0, 1.0);
    vec3 _584 = _1181.www * optRegs.rows[optTile*82u+17u+uint(29)].xyz;
    _1262.x = _584.x;
    _1262.y = _584.y;
    _1262.z = _584.z;
    float _599 = (optRegs.rows[optTile*82u+17u+uint(30)].y * _558) + optRegs.rows[optTile*82u+17u+uint(30)].x;
    _1181.w = _599;
    float _605 = 1.0 / (_1062 * _1062);
    _1260.w = _605;
    float _614 = (_605 * optRegs.rows[optTile*82u+17u+uint(30)].z) + _599;
    _1181.w = _614;
    _1181.w = 1.0 / _614;
    _1260.w = clamp(dot(optRegs.rows[optTile*82u+17u+uint(24)].xyz, _1260.xyz), 0.0, 1.0);
    vec4 _1292 = vec4(0.0);
    _1292.x = optRegs.rows[optTile*82u+17u+uint(26)].x;
    _1292.y = optRegs.rows[optTile*82u+17u+uint(26)].y;
    _1292.z = optRegs.rows[optTile*82u+17u+uint(26)].z;
    vec3 _647 = (_1292.xyz * _1260.www) + optRegs.rows[optTile*82u+17u+uint(25)].xyz;
    vec4 _1298 = _1292;
    _1298.x = _647.x;
    _1298.y = _647.y;
    _1298.z = _647.z;
    vec3 _661 = (_1262.xyz * _1181.www) + _1298.xyz;
    vec4 _1304 = _1262;
    _1304.x = _661.x;
    _1304.y = _661.y;
    _1304.z = _661.z;
    vec3 _674 = _1486.xyz * optRegs.rows[optTile*82u+17u+uint(31)].yyy;
    _1298.x = _674.x;
    _1298.y = _674.y;
    _1298.z = _674.z;
    vec3 _689 = (optRegs.rows[optTile*82u+17u+uint(31)].xxx * _1224.xyz) + _1298.xyz;
    vec4 _1316 = _1298;
    _1316.x = _689.x;
    _1316.y = _689.y;
    _1316.z = _689.z;
    vec3 _704 = (optRegs.rows[optTile*82u+17u+uint(31)].zzz * _1236.xyz) + _1316.xyz;
    vec4 _1322 = _1316;
    _1322.x = _704.x;
    _1322.y = _704.y;
    _1322.z = _704.z;
    vec3 _716 = _1322.xyz - _1181.xyz;
    vec4 _1328 = _1322;
    _1328.x = _716.x;
    _1328.y = _716.y;
    _1328.z = _716.z;
    float _727 = dot(_1328.xyz, _1328.xyz);
    _1181.w = _727;
    float _1067 = inversesqrt(abs(_727));
    _1181.w = _1067;
    float _736 = 1.0 / _1067;
    _1260.w = _736;
    vec3 _742 = _1328.xyz * _1181.www;
    vec4 _1342 = _1328;
    _1342.x = _742.x;
    _1342.y = _742.y;
    _1342.z = _742.z;
    _1181.w = clamp(dot(_1342.xyz, _1260.xyz), 0.0, 1.0);
    vec3 _762 = _1181.www * optRegs.rows[optTile*82u+17u+uint(32)].xyz;
    _1342.x = _762.x;
    _1342.y = _762.y;
    _1342.z = _762.z;
    float _777 = (optRegs.rows[optTile*82u+17u+uint(33)].y * _736) + optRegs.rows[optTile*82u+17u+uint(33)].x;
    _1181.w = _777;
    float _783 = 1.0 / (_1067 * _1067);
    _1260.w = _783;
    float _792 = (_783 * optRegs.rows[optTile*82u+17u+uint(33)].z) + _777;
    _1181.w = _792;
    float _796 = 1.0 / _792;
    _1181.w = _796;
    vec3 _805 = (_1342.xyz * _1181.www) + _1304.xyz;
    vec4 _1370 = _1304;
    _1370.x = _805.x;
    _1370.y = _805.y;
    _1370.z = _805.z;
    vec3 _818 = _1486.xyz * optRegs.rows[optTile*82u+17u+uint(34)].yyy;
    vec4 _1376 = _1486;
    _1376.x = _818.x;
    _1376.y = _818.y;
    _1376.z = _818.z;
    vec3 _833 = (optRegs.rows[optTile*82u+17u+uint(34)].xxx * _1224.xyz) + _1376.xyz;
    vec4 _1382 = _1376;
    _1382.x = _833.x;
    _1382.y = _833.y;
    _1382.z = _833.z;
    vec3 _848 = (optRegs.rows[optTile*82u+17u+uint(34)].zzz * _1236.xyz) + _1382.xyz;
    vec4 _1388 = _1382;
    _1388.x = _848.x;
    _1388.y = _848.y;
    _1388.z = _848.z;
    vec4 _1490 = vec4(_1388.xyz - _1181.xyz, _796);
    vec3 _868 = _1490.xyz;
    float _871 = dot(_868, _868);
    vec4 _1400 = _1490;
    _1400.w = _871;
    float _1072 = inversesqrt(abs(_871));
    _1400.w = _1072;
    float _880 = 1.0 / _1072;
    _1260.w = _880;
    vec4 _1491 = vec4(_1400.xyz * _1400.www, _1072);
    _1491.x = clamp(dot(_1491.xyz, _1260.xyz), 0.0, 1.0);
    float _921 = (optRegs.rows[optTile*82u+17u+uint(36)].y * _880) + optRegs.rows[optTile*82u+17u+uint(36)].x;
    vec4 _1492 = vec4(_1491.xxx * optRegs.rows[optTile*82u+17u+uint(35)].xyz, _921);
    float _936 = ((1.0 / (_1072 * _1072)) * optRegs.rows[optTile*82u+17u+uint(36)].z) + _921;
    _1492.w = _936;
    float _940 = 1.0 / _936;
    _1492.w = _940;
    vec4 _1494 = vec4((_1492.xyz * _1492.www) + _1370.xyz, _940);
    vec3 _959 = min(_1494.xyz, vec3(1.0));
    vec4 _1442 = _1494;
    _1442.x = _959.x;
    _1442.y = _959.y;
    _1442.z = _959.z;
    vec4 _1079 = optPush.clipToTarget * ((_139.wwww * optRegs.rows[optTile*82u+17u+uint(7)]) + _161);
    gl_Position = vec4(_1079.x, -_1079.y, _1079.zw);
    color0 = vec4(_1442.xyz * vec3(0.5), 1.0);
    color1 = vec4(_1487.www * optRegs.rows[optTile*82u+17u+uint(27)].xyz, 1.0);
    texcoord0 = _1135;
    texcoord1 = _1149;
    texcoord2 = _1157;
    texcoord3 = _1165;
    fog0 = min(_1090, 1.0);
}


void main(){
optTile=min(uint(gl_VertexIndex)/max(optPush.verticesPerTile,1u),3u);
OptNativeMain();
optTileOut=optTile;optClipOut=dot(optRegs.rows[optTile*82u+81u],vec4(v0.xyz,1));
}
