# Changelog — Lingoready App

All notable changes to the mobile app. Dates are release-branch dates.

## [0.5.0] — 2026-07-03

### Added
- **Data export** — Profile → "Export my data" now downloads everything (profile, transcripts, feedback, words, writing reviews) as JSON through the share sheet, backed by `GET /me/export`.
- **Legal pages** — Terms of Service, Privacy Policy and open-source licenses published on the docs site and linked from Settings → Terms & Privacy.
- **Report-ready push** — the backend now notifies you when session feedback finishes processing (requires notification permission).
- Drill catalog is now served by the API (`GET /drills`) with the bundled set as offline fallback — new drills ship without an app release.

### Changed
- Group rooms are labeled honestly as **AI roleplay** (badge in the room, "AI teammates" chip and copy in the lobby).
- App-language picker no longer pretends the UI is translated: English is the only selectable option, other languages show "Coming soon" and record your interest.
- "Manage subscription" opens Google Play subscriptions on Android (was Apple-only); the payment screen brands itself per platform.

### Fixed
- Drill scoring failed with a 400 for 11 of the 17 drills (the API rejected their `kind`); all drills score correctly now.

## [0.4.0] — 2026-07-02

### Added
- **App icon & splash screen** — the design's waveform logo (navy→blue gradient, amber center bar) generated for iOS, Android (adaptive + legacy + round) and the splash screen; previously the icon rendered blank.
- **Voice previews:** "Hear David's voice" on the scenario brief and "Hear the room" in the group lobby, backed by the new `POST /tts/preview` endpoint (tap again to replace playback; cleans up on leaving the screen).
- **Design-fidelity pass across all screens:** Home rebuilt to the design's agenda timeline (plan ring, done/now/later items with rail dots, week trend "+% vs last week"); daily-plan tracking that auto-completes from real drills/sessions and resets each day; assessment "Analyzing your English…" processing screen with live polling; CEFR "What to focus on" header; captions toggle on the live check; Practice path progress from real session history (hero counter + per-path "x of y lessons"); scenario search screen; My words suggestions "From your last session"; feedback screen delta chip ("+N vs your average"), scenario header chip and "Was this feedback helpful?" row; Progress readiness ring, milestone rail and level-check nudge; Profile practice-days selector, permissions status (mic/notifications) and Billing section with new Payment method & Billing history screens; writing coach "More concise / More formal" quick re-runs.

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
