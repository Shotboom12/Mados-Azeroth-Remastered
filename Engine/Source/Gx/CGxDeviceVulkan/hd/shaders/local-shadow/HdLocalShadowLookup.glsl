// SPDX-License-Identifier: GPL-3.0-or-later
// Shared with future material receivers. Atlas cells: +X,-X,+Y / -Y,+Z,-Z.
uint HdLocalShadowFace(vec3 d) {
    vec3 a=abs(d);if(a.x>=a.y && a.x>=a.z)return d.x>=0?0u:1u;
    if(a.y>=a.z)return d.y>=0?2u:3u;return d.z>=0?4u:5u;
}
float HdLocalShadowVisibility(sampler2D atlas,mat4 matrices[6],vec4 light,vec3 world,float bias,int size) {
    vec3 delta=world-light.xyz;if(dot(delta,delta)>=light.w*light.w || dot(delta,delta)<1e-10)return 1.0;
    uint face=HdLocalShadowFace(delta);vec4 q=matrices[face]*vec4(world,1);
    if(q.w<=0)return 1.0;vec3 p=q.xyz/q.w;
    if(p.z<0 || p.z>1)return 1.0;
    vec2 local=vec2(p.x*.5+.5,.5-p.y*.5);
    if(any(lessThan(local,vec2(-1e-5))) || any(greaterThan(local,vec2(1.00001))))return 1.0;
    ivec2 cell=ivec2(int(face)%3,int(face)/3),centre=ivec2(floor(local*float(size)));
    float visible=0;
    // Point comparisons in one face. Clamp every tap to its cell so PCF cannot read a neighbour face.
    for(int y=-1;y<=1;++y)for(int x=-1;x<=1;++x){
        ivec2 tap=cell*size+clamp(centre+ivec2(x,y),ivec2(0),ivec2(size-1));
        float stored=texelFetch(atlas,tap,0).r;visible+=(p.z-bias<=stored)?1.0:0.0;
    }
    return visible/9.0;
}
vec3 HdLocalShadowApplyIsolatedDelta(vec3 scene,vec3 thisLampDelta,float visibility) {
    return clamp(scene-thisLampDelta*(1.0-clamp(visibility,0.0,1.0)),0.0,1.0);
}
