# Status

_Last updated: 2026-07-04_

**Stage: pre-launch.** The app is feature-complete for the MVP scope. Everything below marked 🔑 works in code and activates when its external configuration lands — no further development needed.

## Feature matrix

### Onboarding & auth

| Feature | Status | Notes |
| --- | --- | --- |
| Welcome carousel (swipeable, animated dots) | ✅ Done | |
| Email/password auth (Firebase) | ✅ Done | Friendly error mapping |
| Google SSO | 🔑 Config-gated | Enable provider in Firebase console |
| Apple SSO | 🔑 Config-gated | Enable provider + Apple capability |
| Password reset | ✅ Done | Firebase email flow |
| Profession profiling (8 fields) | ✅ Done | Tunes scenario recommendations |
| Goal selection (4 goals) | ✅ Done | |
| Mic permission priming | ✅ Done | Explains why before the OS prompt |

### Assessment

| Feature | Status | Notes |
| --- | --- | --- |
| 4-question spoken level check | ✅ Done | Dark call UI, waveform, timer |
| CEFR estimate + skill breakdown | ✅ Done | Scored server-side (GPT-4o) |
| Results screen (ladder, bars, takeaways) | ✅ Done | Animated |

### Practice

| Feature | Status | Notes |
| --- | --- | --- |
| Live 1:1 voice sessions (38 scenarios, 4 paths) | ✅ Done | Streaming STT partials + token deltas + per-sentence TTS |
| Chat-mode sessions (switchable mid-session) | ✅ Done | |
| Post-session feedback report | ✅ Done | Score ring, 2 fixes, did-well, suggested words |
| Quick drills (6 types), scored per round | ✅ Done | wpm + filler + trail-off metrics, no LLM cost |
| Group practice rooms (10 rooms) | ✅ Done | Real multi-agent AI: 3 personas per room, own voices, react to what you said; ends in a feedback report. Scripted offline fallback |
| Word bank (add, master, filter, drill) | ✅ Done | |
| Writing coach (channel + tone, explained changes) | ✅ Done | Copy to clipboard |
| Live transcript partials while speaking | 🔑 Config-gated | Needs `DEEPGRAM_API_KEY` on the API |

### Engagement & account

| Feature | Status | Notes |
| --- | --- | --- |
| Progress dashboard (level, blockers, streak, history) | ✅ Done | |
| Daily reminder (local notification, tap → Home) | ✅ Done | |
| Push notifications (FCM token registration) | ✅ Done | Server sends "report ready" pushes |
| Dark mode (Light / Dark / System) | ✅ Done | Full token parity |
| App language selector + UI in 6 languages | ✅ Done | en/es/pt/fr/de/hi, ~460 strings, applied instantly |
| Paywall (plans, monthly/annual) | ✅ Done | |
| Purchases via RevenueCat | 🔑 Config-gated | Needs `EXPO_PUBLIC_REVENUECAT_*` keys + store products |
| Account, privacy controls, data export, delete account | ✅ Done | Voice retention toggle, 30-day purge honored server-side |

### Platform & quality

| Feature | Status | Notes |
| --- | --- | --- |
| Offline banner + persisted query cache | ✅ Done | Tabs render instantly without network |
| WS reconnection (backoff + turn queue) | ✅ Done | Falls back to chat after 5 retries |
| Sentry crash reporting | 🔑 Config-gated | Set `EXPO_PUBLIC_SENTRY_DSN` |
| GA4 analytics (12 funnel events) | ✅ Done | Via Firebase Analytics |
| CI (typecheck + lint) | ✅ Done | GitHub Actions |
| EAS build profiles (dev/preview/production) | ✅ Done | |

## Pending external configuration (no code required)

1. **Firebase project** — `google-services.json`, `GoogleService-Info.plist`, enable Email + Google + Apple providers, APNs key for iOS push.
2. **RevenueCat** — account, entitlements (`pro`, `standard`), store products, public SDK keys.
3. **Store presence** — Apple Developer + Play Console accounts, app icon/splash final art, screenshots, listing copy (see ASO plan in the product docs).
4. **Sentry** — project DSN.

## Known limitations

- Group rooms are turn-based: a beat plan decides who speaks when (no overlapping free-for-all audio); agent lines themselves are generated live.
- E2E tests (Maestro) not yet in place — manual test pass required before store submission.
- No tablet layout; the app targets phones.

## Quality gates (enforced in CI)

- `tsc --noEmit` strict — zero errors
- ESLint (Expo flat config incl. React compiler rules) — zero errors
