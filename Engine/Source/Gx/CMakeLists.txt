file(GLOB_RECURSE PRIVATE_SOURCES CONFIGURE_DEPENDS "*.cpp")

if (NOT WIN32)
    list(FILTER PRIVATE_SOURCES EXCLUDE REGEX "/CGxDevice(D3d|D3d9Ex|OpenGL)/")
endif ()

# HD: the Vulkan backend (CGxDeviceVulkan/, with the wxl-vulkan-api port under wxl/) is never part of
# the Gx glob: it needs C++20 and its own include paths, so it is the GxVulkan object library below,
# built only with -DWOWDECOMP_VULKAN=ON.
list(FILTER PRIVATE_SOURCES EXCLUDE REGEX "/CGxDeviceVulkan/")

add_library(Gx STATIC
    ${PRIVATE_SOURCES}
)

# HD: Vulkan backend. wxl-vulkan-api is GPL-3.0 (see CGxDeviceVulkan/wxl/LICENSE).
if (WOWDECOMP_VULKAN)
    set(GX_VULKAN_DIR ${CMAKE_CURRENT_SOURCE_DIR}/CGxDeviceVulkan)
    file(GLOB_RECURSE GX_VULKAN_SOURCES CONFIGURE_DEPENDS
        "${GX_VULKAN_DIR}/*.cpp"
    )
    add_library(GxVulkan OBJECT
        ${GX_VULKAN_SOURCES}
    )
    target_compile_features(GxVulkan PRIVATE cxx_std_20)
    set_target_properties(GxVulkan PROPERTIES CXX_STANDARD 20 CXX_STANDARD_REQUIRED ON)
    target_include_directories(GxVulkan
        PRIVATE
            ${GX_VULKAN_DIR}/wxl/compat
            ${GX_VULKAN_DIR}/wxl/src
            ${GX_VULKAN_DIR}/wxl/include
            ${GX_VULKAN_DIR}/wxl/third_party/vulkan-headers
            ${CMAKE_SOURCE_DIR}
    )
    if (MSVC)
        # /std:c++20 turns on /permissive- by default; the engine headers are written for the C++17 build.
        target_compile_options(GxVulkan PRIVATE /utf-8 /bigobj /Zc:__cplusplus /permissive)
    endif ()
    target_sources(Gx PRIVATE $<TARGET_OBJECTS:GxVulkan>)
endif ()

target_include_directories(Gx
    PUBLIC
        ${CMAKE_SOURCE_DIR}
)

target_link_libraries(Gx
    PRIVATE
        d3d9.lib
)

if (WIN32)
    target_link_libraries(Gx
        PRIVATE
            nvapi
            opengl32.lib
    )
endif ()
