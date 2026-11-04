// SPDX-License-Identifier: GPL-3.0-or-later
// Extends the existing present-interval statistics. No new clock, thread, timer or file writer.
#pragma once
#include <array>
#include <algorithm>
#include <cmath>
#include <cstdint>
namespace wxlvk::framepacing {
struct Summary{uint32_t count=0;double p50=0,p95=0,p99=0,onePercentLow=0;};
struct Window {
 static constexpr uint32_t capacity=4096;
 std::array<double,capacity> values{};uint32_t count=0,next=0;
 void Add(double ms){if(!std::isfinite(ms)||ms<=0)return;values[next]=ms;next=(next+1)%capacity;if(count<capacity)++count;}
 Summary Get()const{Summary s;s.count=count;if(!count)return s;auto sorted=values;std::sort(sorted.begin(),sorted.begin()+count);
  auto rank=[&](double q){return sorted[uint32_t(std::ceil(q*count))-1];};s.p50=rank(.5);s.p95=rank(.95);s.p99=rank(.99);
  const uint32_t tail=uint32_t(std::ceil(.01*count));double sum=0;for(uint32_t i=count-tail;i<count;++i)sum+=sorted[i];s.onePercentLow=1000/(sum/tail);return s;}
};
}
