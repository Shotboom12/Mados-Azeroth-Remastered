#pragma once
// Azeroth Remastered (AR1, 20 nov 2026): the world light tables, ours.
// forever_data\ar_world_light.txt was converted ONCE from the client's tables (outils-ar\convertir_lumiere.py);
// the engine reads only this file. DBClient no longer loads LightParams / LightIntBand / LightFloatBand /
// LightSkybox: there is no other path. Same records, same values, same interpolation as before.
// The same file holds the whole rows of Light, LiquidType and LiquidMaterial ("R" lines): DBClient fills
// g_lightDB, g_liquidTypeDB and g_liquidMaterialDB from them (LoadWorldTables), never from the .dbc files.
// Proof: outils-ar\verifier_lumiere.py (bit for bit against the tables the client loaded).
#include <cstdint>

class LightParamsRec;
class LightIntBandRec;
class LightFloatBandRec;
class LightSkyboxRec;
class LightRec;
class LiquidTypeRec;
class LiquidMaterialRec;
template <class T> class WowClientDB;

namespace HD::ArLight {
    // nullptr when the id has no record (as a missing DB row was).
    const LightParamsRec* Params(int32_t id);
    const LightIntBandRec* IntBand(int32_t paramsId, int32_t band);     // band 0..17
    const LightFloatBandRec* FloatBand(int32_t paramsId, int32_t band); // band 0..5
    const LightSkyboxRec* Skybox(int32_t id);
    // Fills the three client tables from our rows (same order, ids and strings as the .dbc they replace).
    void LoadWorldTables(WowClientDB<LightRec>& lights, WowClientDB<LiquidTypeRec>& liquidTypes,
                         WowClientDB<LiquidMaterialRec>& liquidMaterials);
}
