// SPDX-License-Identifier: GPL-3.0-or-later
#pragma once
#include <cstddef>
#include <cstdint>
namespace HD::Lumen {
inline constexpr uint32_t kAllLumenBindings=(1u<<22)-1;
// Conservative reflection of DECLARED bindings, not a data-flow/dead-code analysis.
// Unknown/malformed modules or grouped decorations retain all 22 descriptor writes.
inline uint32_t DeclaredBindings(const uint32_t* words,size_t bytes) noexcept {
 if(!words||bytes%4||bytes<20||words[0]!=0x07230203u)return kAllLumenBindings;
 const size_t count=bytes/4;uint32_t mask=0;
 for(size_t at=5;at<count;) {
  const uint32_t n=words[at]>>16,op=words[at]&0xffff;
  if(!n||n>count-at)return kAllLumenBindings;
  // OpDecorationGroup / OpGroupDecorate / OpGroupMemberDecorate; OpDecorateId.
  if(op==73||op==74||op==75||op==332)return kAllLumenBindings;
  if(op==71) {
   if(n<3)return kAllLumenBindings;
   if(words[at+2]==33) {if(n!=4||words[at+3]>=22)return kAllLumenBindings;mask|=1u<<words[at+3];}
   if(words[at+2]==34 && (n!=4||words[at+3]!=0))return kAllLumenBindings;
  }
  at+=n;
 }
 return mask?mask:kAllLumenBindings;
}
}
