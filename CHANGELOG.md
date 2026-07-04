# Changelog — Lingoready App

All notable changes to the mobile app. Dates are release-branch dates.

## [0.10.0] — 2026-07-04

### Added
- **The voice session got its ChatGPT-style rebuild.** A living **voice orb** replaces the avatar: it breathes while listening, swells with your actual voice while you talk, shimmers with an orbiting mote while the coach thinks, pulses purple while he speaks and dims when paused — you always know whose turn it is without reading anything.
- **The coach now replies the moment you finish** — turn-taking is server-authoritative: the STT endpointer plus a semantic hold end your turn (a finished sentence answers almost instantly; trailing off mid-thought gives you room to resume). The old client silence timer is now only a fallback.
- **Real-time corrections**: say "Yesterday I go to the office" and a green card slides in with the corrected sentence and a one-line note in your app language — while the coach is already answering. Corrections are also saved with the session.
- **Pause button** (deliberately secondary — the orb is the interface): freezes the mic, cuts the coach mid-word, discards a half-spoken turn and stops the session clock. Tap the orb or ▶ to resume.
- **Interruptions are now configurable** (Settings → Voice & speech → Conversation): leave "Interrupt by speaking" on for real-call barge-in, or turn it off so your voice never cuts the coach — tapping the orb still does.

### Changed
- Tapping the orb replaces the mic button in hands-free mode (interrupt / hand back the turn); the big mic button remains for tap-to-talk.
- "Pause before replying" (Fast/Normal/Relaxed) now drives the **server's** endpointing pace instead of only the local timer.

### Fixed
- **Hands-free stayed off on older installs**: the setting flipped to on-by-default weeks ago, but persisted stores kept the old value forever — a one-time store migration re-asserts it.
- **A transient mic failure downgraded the whole session to tap-to-talk**: the live PCM recorder now retries before falling back to file mode, the session screen re-checks the mic permission, and a successful PCM turn automatically re-engages the always-on mic.

## [0.9.0] — 2026-07-04

### Added
- **Group rooms went live**: your three AI teammates are now real agents with their own voices — they speak with per-clause streamed audio (captions in sync with playback), react to what you actually said, and hand you the floor with contextual prompts. Finishing a room now produces the same feedback report as a 1:1 session.

### Changed
- If the room can't be reached (offline / API down), the screen falls back to the previous scripted version automatically.

## [0.8.0] — 2026-07-04

### Added
- **Full automated test suite** (104 tests, jest-expo + React Native Testing Library + MSW): unit tests for the VAD engine, i18n dictionary parity across the 6 languages, daily-plan rotation, AudioQueue ordering, WebSocket client reconnection and the zustand stores; component tests (ScoreRing, SelectList, JargonText, Toast, WordLookup); screen tests for language switch, feedback report, paywall, the full training workout flow and reminders. See [Testing](/docs/09-testing).
- **Contract tests**: the MSW fixtures used by screen tests are validated against zod mirrors of the API's real response shapes.
- **Maestro E2E flows** (`.maestro/`): onboarding/login, language switch, drill round, training workout and paywall smoke tests for dev builds.
- `TESTING.md` with the pre-release **manual on-device checklist** (live PCM mic, echo cancellation/barge-in, audio routing, hands-free VAD, real pushes, RevenueCat sandbox, deep links, offline mode).
- CI now runs the Jest suite on every push/PR.

### Changed
- The hands-free VAD decision logic moved from the session screen into `src/lib/vad.ts` (pure, unit-tested state machine) — tuning `BARGE_EXTRA_DB`/`ONSET_CHUNKS_BARGE` now happens against synthetic-dB tests before device testing. Behavior is unchanged.
- `Toggle` exposes `accessibilityRole="switch"` and `MicButton` a `testID`/label — better a11y and testability.

## [0.7.0] — 2026-07-03

### Added
- **The app UI now speaks 6 languages** — Español, Português, Français, Deutsch and हिन्दी join English, selectable in Settings → App language and applied instantly (no restart). ~460 strings translated across tabs, Home, Practice, Progress, Profile, every settings screen, onboarding, auth, paywall, live sessions, group rooms, drills and feedback. Dates format per language too.
- Practice **content** (scenarios, drills, coach replies, feedback) intentionally stays in English — practicing English is the product. Anything untranslated falls back to English automatically.
- Zero new dependencies: a small gettext-style layer (`src/i18n`) keyed by the English source string, reactive through the settings store.

## [0.6.0] — 2026-07-03

### Added
- **Live voice streaming** — the mic now streams raw audio to the server while you speak (`@siteed/expo-audio-studio`, 16 kHz PCM), so transcription is ready the moment you stop and the coach replies noticeably sooner. Live captions update in real time. Falls back to the previous per-turn upload where the native module isn't available; interrupted turns are resent whole after a reconnect. Requires a new dev build (prebuild + pods already synced).
- **Settings → Voice & speech** — pick the coach voice (with previews for all 11 voices, or keep each coach's own), coach speaking speed, hands-free toggle, and a configurable hands-free pause (Fast 0.7s / Normal 1.1s / Relaxed 1.5s).
- The scenario brief's "Hear the voice" preview now plays the voice that coach will actually use in the session.

### Changed
- Session polish: animated speaking halo around the coach avatar while audio plays, typing dots while the coach thinks, and smoother transitions in the live session UI.
- More live-session micro-interactions: the mic glow swells with your actual voice level, hints arrive as a dismissible card instead of a toast, streaming captions get a blinking caret, every control gives press-scale + haptic feedback, and chat bubbles animate in.
- Group rooms feel alive: the upcoming teammate "types" in the transcript with a pulsing halo on their tile until the line lands, a haptic nudge and breathing highlight strip announce your turn (mic dims while it isn't), a "Transcribing your turn…" chip shows while scoring, and the wrap-up celebrates with a spring animation.

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
