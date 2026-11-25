# BRUME1 : FogFast.comp.hlsl -> Fog1Fast / Fog2Fast / Fog3Fast.spv.h (glslang HLSL, Vulkan 1.0, sortie Rgba16f).
# A lancer depuis ce dossier : python regenerer-brume1.py <dossier temporaire>
import struct, subprocess, sys, os
B = r"C:\VulkanSDK\1.4.363.0\Bin" + "\\"
tmp = os.path.join(sys.argv[1], 'brume1.spv')
for quality, steps in ((1, 16), (2, 24), (3, 32)):
    r = subprocess.run([B + 'glslangValidator.exe', '-V', '-D', '-S', 'comp', '-e', 'CSMain', '--target-env', 'vulkan1.0',
                        '-Os', '-DSTEPS=%d' % steps, '-o', tmp, 'FogFast.comp.hlsl'], capture_output=True, text=True)
    if r.returncode: sys.exit(r.stdout + r.stderr)
    w = list(struct.unpack('<%dI' % (os.path.getsize(tmp) // 4), open(tmp, 'rb').read()))
    i = 5
    while i < len(w):
        n = w[i] >> 16
        if (w[i] & 0xffff) == 25 and n == 9 and w[i + 7] == 2: w[i + 8] = 2   # OpTypeImage de stockage : Rgba16f
        i += n
    open(tmp, 'wb').write(struct.pack('<%dI' % len(w), *w))
    v = subprocess.run([B + 'spirv-val.exe', '--target-env', 'vulkan1.0', tmp], capture_output=True, text=True)
    lines = ['// Generated SPIR-V of FogFast.comp.hlsl (Claude BRUME1), STEPS %d; storage format Rgba16f, Vulkan 1.0.' % steps,
             'static const uint32_t kFog%dFast[]={' % quality]
    lines += [','.join('0x%xu' % x for x in w[o:o + 8]) + ',' for o in range(0, len(w), 8)] + ['};']
    open('Fog%dFast.spv.h' % quality, 'wb').write(('\r\n'.join(lines) + '\r\n').encode('ascii'))
    print(quality, steps, len(w), 'mots', 'valide' if v.returncode == 0 else v.stdout + v.stderr)
