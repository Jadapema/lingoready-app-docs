# Testing

The app has four automated layers plus a manual on-device checklist. All Jest
layers run with `npm test`; nothing needs a device or a running API.

## Layers

| Layer | Location | What it covers |
|---|---|---|
| Unit | `test/unit/` | VAD engine (adaptive noise floor, onset streaks, barge-in, silence close), i18n dictionary parity across the 6 languages, daily-plan rotation, AudioQueue ordering/captions, WebSocket client reconnection, API client, zustand stores |
| Components | `test/components/` | ScoreRing, SelectList, JargonText + glossary matching, Toast, WordLookup sheet (with MSW) |
| Screens | `test/screens/` | Language switch, feedback report (processing + ready states), paywall gating, full training workout flow, reminders — all against an MSW mock of the real API |
| Contract | `test/contract/` | The MSW fixtures validated against zod mirrors of the API's real response shapes |
| E2E | `.maestro/` | Smoke flows on a dev build: onboarding/login, language switch, drill round, training workout, paywall |

## Running

```bash
npm test              # everything (jest-expo)
npm run test:watch
npm run test:coverage
maestro test .maestro/   # E2E — needs a dev build + running API (see .maestro/README.md)
```

Native modules (Firebase, RevenueCat, expo-audio, audio-studio, Sentry,
reanimated) are mocked in `test/setup/mocks.js`. The API is mocked with MSW
(`test/setup/msw.ts`) using fixtures that a contract test keeps in sync with
the real backend shapes.

## The VAD engine is now testable

The hands-free tuning logic was extracted from the session screen into
`src/lib/vad.ts` (pure state machine, no timers or audio IO). Before touching
`BARGE_EXTRA_DB`, `ONSET_CHUNKS_BARGE` or the noise-floor behavior, adjust the
synthetic-dB tests in `test/unit/vad.test.ts` — they encode the expected
behavior in quiet rooms, noisy rooms, soft speakers and barge-in over the
coach's speaker echo.

## Manual on-device checklist

Live audio (PCM streaming, echo cancellation, barge-in, audio routing), real
push notifications, RevenueCat sandbox and deep links can't be automated —
they are covered by the pre-release checklist in the repo's
[`TESTING.md`](https://github.com/Jadapema/lingoready-app/blob/main/TESTING.md).

## CI

`.github/workflows/ci.yml` runs typecheck, lint and the full Jest suite on
every push/PR. Maestro flows are run manually before releases (they need a
simulator with a dev build).
