// Claude PARQ1 (16 nov 2026): a small pool of persistent worker threads for the main thread's pure work (tests that only
// read). HD::Parallel::For(count, fn, ctx) runs fn(ctx, i) for every i in [0, count) on the calling thread and the
// workers, and returns when all are done. fn must only read shared state and write its own item's output.
#pragma once
#include <cstdint>

namespace HD::Parallel {
using Fn = void (*)(void* ctx, uint32_t item);
// workers = extra threads wanted (0 = everything on the calling thread). Threads are started on first use and kept;
// the pool grows if more are asked for later and never shrinks (every pool thread takes part in every job).
void For(uint32_t count, Fn fn, void* ctx, uint32_t workers);
}
