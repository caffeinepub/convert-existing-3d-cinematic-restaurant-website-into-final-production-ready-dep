# Specification

## Summary
**Goal:** Make the existing 3D cinematic restaurant website production-ready by persisting reservation data across upgrades and polishing UX/copy/metadata for a final deployment.

**Planned changes:**
- Persist reservations and the next reservation ID across backend canister upgrades (no data loss), keeping a single Motoko actor in `backend/main.mo` and adding a conditional migration file only if required to preserve existing deployed state.
- Update all user-facing copy to remove any references to “draft”, “expired”, or “demo”, ensuring all visible text across the site is clear, production-appropriate English (including reservation success/error messaging).
- Harden the booking flow UI with reliable loading/success/error states and double-submit prevention (disable submit while in-flight, clear confirmation on success, readable retryable errors on failure).
- Add production-grade document metadata in `frontend/index.html` (title, meta description, and basic Open Graph tags) without changing routing or section structure.

**User-visible outcome:** Reservations feel reliable and polished (clear feedback, no duplicate submissions), the entire site reads as a finished English production restaurant website, sharing/SEO metadata is in place, and existing reservations remain intact even after backend upgrades.
