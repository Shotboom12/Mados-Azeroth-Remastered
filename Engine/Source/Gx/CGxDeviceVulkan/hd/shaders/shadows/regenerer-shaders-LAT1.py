import struct,subprocess,sys,os
G=r"C:\VulkanSDK\1.4.363.0\Bin\glslangValidator.exe"; T=sys.argv[1]
def build(src,out,var,defs=(),note=''):
    subprocess.run([G,'-V','--target-env','vulkan1.1',*defs,'-o',T+'/'+var+'.spv',src],check=True,capture_output=True)
    b=open(T+'/'+var+'.spv','rb').read(); w=struct.unpack('<%dI'%(len(b)//4),b)
    lines=[b'// SPDX-License-Identifier: GPL-3.0-or-later',('// Generated from %s; Vulkan 1.1.%s'%(src,note)).encode(),('static const uint32_t %s[]={'%var).encode()]
    for i in range(0,len(w),8): lines.append(b','.join(b'0x%08xu'%x for x in w[i:i+8])+b',')
    lines.append(b'};'); data=b'\r\n'.join(lines)+b'\r\n'
    old=open(out,'rb').read() if os.path.exists(out) else b''
    open(out,'wb').write(data); print(out, len(w), 'inchange' if old==data else 'ecrit')
build('HdSunContact.comp','HdSunContact.spv.h','kHdSunContact')
build('HdSunContact.comp','HdSunContactOptimized.spv.h','kHdSunContactOptimized',['-DHD_SUN_CONTACT_OPT'],' Built with -DHD_SUN_CONTACT_OPT (Claude GPU1 + LAT1).')
build('HdSunContactCompare.comp','HdSunContactCompare.spv.h','kHdSunContactCompare')
build('HdSunTiles.comp','HdSunTiles.spv.h','kHdSunTiles',[],' Claude SOLMM1: the sun maps\' min/max tiles.')
# Claude OMBRE1
build('HdSunApply.comp','HdSunApply.spv.h','kHdSunApply')
build('HdSunBlurFast.comp','HdSunBlurFast.spv.h','kHdSunBlurFast')
build('HdSunApply.comp','HdSunApplyFused.spv.h','kHdSunApplyFused',['-DHD_SUN_FUSED'],' Built with -DHD_SUN_FUSED (Claude OMBRE1).')
