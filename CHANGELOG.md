# Changelog — Lingoready App

All notable changes to the mobile app. Dates are release-branch dates.

## [0.3.0] — 2026-07-02

### Added
- **Catalog ×5:** 10 practice paths (~125 scenarios), 18 scored drills grouped by skill, 10 group practice rooms.
- **Custom scenario builder** — describe a real situation, get an AI-drafted rehearsal under "Your scenarios".
- **Per-session options:** length (5/10/15 min), difficulty (Easy/Realistic/Hard), coach speaking speed (0.8×–1.2×).
- **Hands-free mode:** voice-activity detection ends your turn automatically after a natural pause.
- In-session **hint button** (whisper-phrase), **live-captions toggle**, and **transcript replay** for any past session.
- Remote feature flags (`GET /config`) gating new capabilities.
- Drill catalog screen (all 18, grouped), group-room card on Home.

### Changed
- Recording switched to a 16 kHz mono speech preset (~4× smaller uploads → faster turns on weak networks) with metering for VAD.
- Recording now pauses cleanly on phone calls / app switches (AppState handling).

## [0.2.0] — 2026-07-02

### Added
- Streaming live-session client: STT transcript partials while speaking, coach reply streamed token-by-token, per-sentence TTS played through an ordered audio queue with true barge-in.
- WebSocket resilience: exponential-backoff reconnection, transparent re-auth, offline turn queueing, automatic fallback to chat mode.
- Scored quick drills: every round transcribed and measured (wpm, fillers, trail-offs) with per-round coaching.
- Group practice rooms: 4 turn-based formats (standup, panel interview, client meeting, debate) with AI teammates; user turns scored.
- Swipeable welcome carousel with interpolated dots.
- Micro-interactions: pulsing mic ring, animated score ring (fill + count-up), staggered feedback cards, haptic feedback on key moments.
- Loading skeletons (Home, Practice) and a global offline banner.
- Query-cache persistence (instant tab loads offline).
- Google/Apple SSO via Firebase native provider flow (config-gated).
- RevenueCat purchases + restore on the paywall (config-gated).
- Daily-reminder deep link to Home; foreground notification display.
- EAS build profiles, ESLint flat config, GitHub Actions CI.

## [0.1.0] — 2026-07-02

### Added
- Initial app: onboarding (carousel, auth, profession, goal, mic priming), 4-question spoken CEFR assessment with results, tab navigation (Home, Practice, Progress, Profile), scenario briefs, live sessions (voice + chat), post-session feedback, quick drills (unscored), word bank, writing coach, paywall, full settings suite (account, language, appearance, reminders, help, terms, delete account).
- Design-token theming with complete light/dark parity.
- Firebase Auth (email/password), GA4 analytics events, FCM token registration, Sentry wiring.
