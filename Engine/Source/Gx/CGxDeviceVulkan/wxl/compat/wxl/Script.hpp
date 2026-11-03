// HD: x64 replacement for wxl-core's wxl/Script.hpp (WarcraftXL, GPL-3.0).
// Copyright (C) 2026 WarcraftXL
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program. If not, see <https://www.gnu.org/licenses/>.
//
// HD: the part of wxl-core's ScriptMgr that wxl-vulkan-api calls (Log, Api, GetInterface), with the
// service table built into the client (compat/Core.cpp) instead of handed over by WXL_Load.

#pragma once

#include <cstdarg>
#include <cstdint>
#include <cstdio>

#include "wxl/PluginApi.h"

namespace wxlcompat
{
    /// The service table the port runs against: Log to Logs\Vulkan.log, no hooks, no published
    /// interfaces (compat/Core.cpp).
    const WXL_Api* CoreApi();
}

namespace wxl
{
    class ScriptMgr
    {
    public:
        static const WXL_Api* Api() { return wxlcompat::CoreApi(); }
        static const char* Name() { return "wxl-vulkan-api"; }

        static void Log(int level, const char* fmt, ...)
        {
            char line[1024];
            va_list args;
            va_start(args, fmt);
            std::vsnprintf(line, sizeof line, fmt, args);
            va_end(args);
            Api()->Log(level, Name(), "%s", line);
        }

        template <class T>
        static T* GetInterface(const char* name, uint32_t version)
        {
            return static_cast<T*>(Api()->GetInterface(name, version));
        }
    };
}
