# Roadmap — App

Prioritized improvement plan. Focus areas: perceived latency, conversational feel, robustness, and user options. Session/content expansions live in [docs/04-sessions.md](docs/04-sessions.md).

## P0 — Conversational feel (the product IS the conversation)

| Item | Why | Sketch |
| --- | --- | --- |
| **Voice-activity detection (hands-free turns)** | Tap-to-stop breaks immersion; auto-endpointing makes it feel like a real call | Monitor recorder metering; end the turn after ~800ms of silence below threshold; keep tap as fallback |
| **Barge-in by voice** | Interrupting by speaking (not tapping) is how real conversation works | While TTS plays, keep a low-cost level meter open; sustained voice → stop queue + start recording |
| **Thinking sounds / fillers from the coach** | Dead air between user turn and first TTS sentence feels broken | Play a short "Mmm—" / breath sample immediately on `transcript_final` while the first sentence synthesizes |
| **Optimistic UI everywhere** | Perceived latency beats actual latency | Show the user bubble from local partials instantly; skeleton the feedback screen sections as they compute |
| **Streaming feedback screen** | The 8–15s post-session wait is the longest dead moment | API roadmap: stream feedback JSON fields as they generate; render hero score first |

## P1 — Robustness

| Item | Why | Sketch |
| --- | --- | --- |
| **E2E tests (Maestro)** | Manual passes won't scale past the first release | Flows: onboarding→assessment, scenario→feedback, drill, paywall; run on CI against a mocked API |
| **Error-state coverage audit** | Design defines error/offline/mic-denied patterns; a few screens still toast instead | Shared `<ErrorState/>` + `<EmptyState/>` used by every query screen |
| **Feature flags** | Ship risky features (VAD, group rooms) dark | Simple remote-config JSON from the API (`GET /config`) cached in the query client |
| **Crash-free session metric** | Know before users tell you | Sentry release health + alert at <99.5% crash-free |
| **Background/interruption handling** | Calls, Siri, app-switch during a live session | Pause recording + socket keepalive on `AppState` change; resume or gracefully end |
| **Audio route changes** | AirPods connect/disconnect mid-session | Listen to route change events; re-arm the recorder |

## P2 — Performance

| Item | Why | Sketch |
| --- | --- | --- |
| **Opus/AAC upload at 16kHz mono** | m4a HIGH_QUALITY preset uploads ~4× more bytes than STT needs | Custom recording preset (16kHz, 32kbps) — faster turn round-trip on bad networks |
| **FlashList for long lists** | Words/history will grow | Swap FlatList→FlashList in words + progress history |
| **Memoized theme styles** | Token objects re-create styles per render on dense screens | `useMemo` style factories for Home/Practice/Feedback |
| **expo-image + real assets** | Icon/splash/coach avatars pending final art | Use expo-image caching when illustrations land |
| **Bundle hygiene** | Keep cold start fast as deps grow | `npx expo-doctor` + source-map-explorer check in CI |

## P3 — User options & settings

- Session length + difficulty pickers (pre-session sheet)
- Coach speaking-speed control (0.8×–1.2×)
- Captions on/off during voice sessions (partials already stream)
- Native-language explanations toggle (feedback "why" lines localized)
- Full i18n of UI copy (es first — selector already exists)
- Accessibility pass: VoiceOver labels, reduced-motion variants of all animations, dynamic type

## Done (for reference)

- ✅ Streaming session client (partials, deltas, sentence TTS queue)
- ✅ WS reconnection with backoff + offline turn queue
- ✅ Scored drills, group rooms, swipeable onboarding, haptics, skeletons, offline banner
- ✅ Query-cache persistence, notification deep link, EAS profiles, CI
