# Architecture

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Expo SDK 57 · React Native 0.86 · TypeScript strict · Expo Router (file-based) |
| Styling | Design tokens (light/dark) + NativeWind for utility layout |
| Server state | TanStack Query (persisted to AsyncStorage) |
| Local state | Zustand (persisted settings) + React context (auth) |
| Auth / Analytics / Push | Firebase (`@react-native-firebase`: auth, analytics, messaging) |
| Payments | RevenueCat (`react-native-purchases`) |
| Errors | Sentry |
| Audio | expo-audio (recording + playback) |
| Animation | Reanimated 4 |

## Module layout

```
app/                    # routes (screens)
  (tabs)/               # Home · Practice · Progress · Profile
  assessment/ onboarding/ scenario/ session/ feedback/
  drill/ group/ settings/ writing paywall
src/
  components/           # ui primitives, MicButton, ScoreRing, WaveBars,
                        # Skeleton, OfflineBanner, Toast, SelectList
  data/                 # static catalogs (professions, goals, drills, groups)
  lib/                  # api client, queries, firebase, analytics,
                        # notifications, purchases, recorder,
                        # session-socket, audio-queue
  state/                # settings, onboarding, auth context
  theme/                # tokens + ThemeProvider
```

## Data flow

Every API call attaches the Firebase ID token (`Authorization: Bearer`). Users are provisioned server-side on first request. Query keys: `me`, `scenarios`, `progress`, `words`, `sessions`, `feedback:<id>` — cached 30s–5min and persisted 24h for instant offline rendering.

## The live voice session (streaming)

```
mic ──live PCM chunks (150 ms)──────► WS /v1/sessions/:id/live
        ▲          (turn_start sent   │ transcript_partial   (live captions)
        │           with 1st chunk —  │ transcript_final     (near-instant)
   MicButton tap    pre-opens STT)    │ assistant_delta      (reply text streams in)
                                      │ assistant_audio(seq) (clause-by-clause TTS)
AudioQueue ◄──────────────────────────┘ assistant_text       (turn closed)
```

- **`useTurnRecorder`** (`src/lib/live-recorder.ts`) — records 16 kHz mono PCM with `@siteed/expo-audio-studio` and streams each chunk to the socket **while the user speaks**, so server-side STT transcribes in real time; the full turn is also kept in memory for reconnect resends. Falls back to expo-audio file recording (m4a uploaded at turn end) when the native module is unavailable (Expo Go). Exposes a dBFS level that drives hands-free VAD in both modes.
- **`SessionSocket`** — connects, authenticates, reconnects with exponential backoff (max 5), re-auths transparently, queues a turn recorded while offline, then flushes it. `sendAudioChunk()` streams live audio; `endTurn()` closes a streamed turn; `sendTurn()` uploads a whole turn (used when the stream was interrupted).
- **`AudioQueue`** — plays TTS chunks strictly in `seq` order (empty chunks advance the sequence without stalling), releases each player after playback, deletes cache files, and `stop()` flushes everything on barge-in.
- **Barge-in** — tapping the mic during coach speech stops local playback instantly and tells the server to stop queuing TTS for that reply.
- **Degradation ladder** — streaming STT unavailable → batch STT per turn; socket dies 5× → chat mode; feedback worker slow → polling screen stays friendly.

## Theming

`src/theme/tokens.ts` defines identical-shaped LIGHT/DARK palettes (design-exact). `useTheme()` returns the active set; appearance (Light/Dark/System) persists in settings. Fixed brand colors live in `BRAND`.

## Resilience inventory

| Concern | Mechanism |
| --- | --- |
| Network loss | OfflineBanner (netinfo) + persisted query cache + WS reconnection |
| Double-submits | Idempotency-Key on session creation |
| Audio player leaks | AudioQueue releases every player; files cleaned from cache |
| Auth expiry | Fresh ID token fetched per request / per WS connect |
| Plan limits | `402 plan_limit` mapped to the paywall, never a dead end |
