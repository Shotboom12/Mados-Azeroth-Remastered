// HD: the device slots wxl-vulkan-api calls on the base class (native::Base<Slot>()) or through the
// device's own table (native::Own<Slot>()). Part of the wxl-vulkan-api port (WarcraftXL, GPL-3.0).
//
// The 32-bit extension read those entries out of vtables and called them as __fastcall functions
// with a dummy edx. On x64 a member function is not callable that way (the dummy would take rdx, the
// first real argument's register), so each entry is a small thunk with the slot's wxl signature that
// calls CGxDevice::X() (base) or this->X() (own) on the real type (compat/Slots.cpp).

#pragma once

#include "device/Slots.hpp"

namespace wxlcompat
{
    // Deleted: a slot without a thunk below is a compile error, not a silent link-time surprise.
    template <unsigned Slot>
    typename wxlvk::device::SlotTraits<Slot>::Fn BaseSlot() = delete;

    template <unsigned Slot>
    typename wxlvk::device::SlotTraits<Slot>::Fn OwnSlot() = delete;

    // The slots with a thunk.
    #define WXLCOMPAT_BASE_SLOTS(X) X(0) X(2) X(4) X(10) X(11) X(13) X(14) X(15) X(16) X(23) X(38) \
                                    X(53) X(54) X(55) X(56) X(58) X(62) X(63) X(68) X(69) X(73)
    #define WXLCOMPAT_OWN_SLOTS(X)  X(0) X(2) X(3) X(4) X(5) X(6) X(11) X(15) X(58) X(68) X(69) X(72)

    #define WXLCOMPAT_DECLARE_BASE(slot) \
        template <> typename wxlvk::device::SlotTraits<slot>::Fn BaseSlot<slot>();
    #define WXLCOMPAT_DECLARE_OWN(slot) \
        template <> typename wxlvk::device::SlotTraits<slot>::Fn OwnSlot<slot>();
    WXLCOMPAT_BASE_SLOTS(WXLCOMPAT_DECLARE_BASE)
    WXLCOMPAT_OWN_SLOTS(WXLCOMPAT_DECLARE_OWN)
    #undef WXLCOMPAT_DECLARE_BASE
    #undef WXLCOMPAT_DECLARE_OWN
}
