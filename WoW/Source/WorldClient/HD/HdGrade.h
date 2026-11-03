#ifndef WOW_SOURCE_WORLDCLIENT_HD_HDGRADE_H
#define WOW_SOURCE_WORLDCLIENT_HD_HDGRADE_H

// Waystone HD: WoW Forever colour grading (not part of the original client). D3D9 only.
//   hdGrade          0 = off (default); 1 = Forever's colour grading LUT where Forever has one
//   hdGradeStrength  1 = Forever's look, 0 = original colours (0 to 2)
//   hdGradeDebug     1 = split screen: left half original, right half graded (to compare)
//   hdGradeLut       0 = Forever's LUT for this place (default); a LUT id (e.g. 8286666) = force it everywhere
//   hdGradeInfo      read only, the LUTs in use:  /run print(GetCVar("hdGradeInfo"))
//
// The LUTs come from WoW Forever's LightData (column 32, forever_data\hd_forever_grading.txt made by
// forever_tools\make_hd_forever_grading.py; the files are forever_data\grading\<id>.blp, 1024x32, 32 slices
// of blue). Picked like the fog: zone light, nearby area lights by distance, storm. Lights Forever does not
// have keep the original colours. Drawn over the finished world after hdBloom, before chat bubbles and the UI.

namespace HD {
    // Called by CGWorldFrame::OnWorldRender right after HD::BloomWorld.
    void GradeWorld();
    // Called by the D3D9 device before it releases its resources (through HD::FogReleaseDeviceResources).
    void GradeReleaseDeviceResources();
}

#endif
