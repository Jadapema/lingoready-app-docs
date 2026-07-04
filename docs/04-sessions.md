# Sessions & Practice Modes

Everything a user can practice today — **7 modes, 125+ catalog scenarios, 18 drills, 10 group rooms, personalized weakness workouts, plus unlimited AI-generated custom scenarios** — and the planned expansions.

> **Why users don't repeat themselves:** every 1:1 session is generated live by the coach model (no two conversations are the same), the catalog spans 10 professional situations at 3 difficulty levels and 3 lengths, and the custom-scenario builder turns any real upcoming moment ("my sprint review on Friday") into a rehearsal — effectively infinite content.

## Current catalog

### 1 · Live 1:1 scenario sessions (the core)

Role-play with an AI coach in character (interviewer, scrum lead, client, negotiator…).

| Property | Value |
| --- | --- |
| Content | **125+ scenarios across 10 paths:** 🎯 Interviews (16) · ☀️ Meetings (14) · 📊 Presentations (12) · ☕ Small talk (10) · 💸 Negotiation (12) · 📞 Client calls (13) · 🌡️ Difficult conversations (12) · 🧭 Leadership (12) · 🤝 Networking (10) · 🚀 Career growth (10) |
| Per-session options | **Length** 5/10/15 min · **Difficulty** Easy/Realistic/Hard (changes coach speed, vocabulary and pushback) · **Coach speed** 0.8×/1×/1.2× |
| Modes | **Voice** (dark call UI) and **Chat** (typed) — switchable mid-session |
| Conversation flow | **Continuous by default** (hands-free): the mic stays hot the whole call — speak to take your turn, and the **server ends your turn the moment you finish** (semantic endpointing: a closed sentence answers almost instantly, trailing off mid-thought leaves room to resume). Talking over the coach interrupts — configurable in Settings → Conversation. Tap-to-talk remains as fallback and in Expo Go |
| Status UI | A living **voice orb** replaces the avatar: breathes while listening, swells with your voice while you talk, orbiting mote while the coach thinks, purple pulse while he speaks, dims on pause. Tap it to interrupt / hand back the turn / resume |
| Pause | Secondary ⏸ button (the orb stays the interface): mic off, coach cut mid-word, half-spoken turn discarded, session clock frozen |
| In-session help | 💡 Hint button (a whisper-phrase you could say next) · live captions toggle · barge-in (by voice or tap) · **real-time corrections** — a green card with the corrected sentence + a one-line note in the app language, sliding in while the coach is already answering |
| Captions | Reveal **word by word**, paced to the sentence's actual speech time (no reading ahead); every word is tappable → in-language definition + translation + one-tap save to the word bank |
| Jargon glossary | Coaching terms (STAR method, hedging, anchoring…) render dotted-underlined in briefs, drills and lesson lists — tap for a plain-words explanation in the app language; the CEFR badge on Progress explains the level ladder |
| Audio routing | Coach audio plays through the loudspeaker (or Bluetooth headset) — the mic session is configured with `DefaultToSpeaker` so starting a turn never re-routes playback to the phone-call earpiece |
| Personalization | Recommendation tuned by profession + goal; coach adapts to the user's CEFR level; Settings → People renames coaches after real coworkers |
| Feedback | Post-session report: 0–100 score, per-skill bars, the 2 highest-impact fixes, what went well, suggested vocabulary — plus full **transcript replay** |
| Limits | Free: first 3 lessons per path + 20 speaking min/month · Pro: unlimited |
| Latency posture | STT partials while speaking (Deepgram), server-side turn end (no silence-timer round trip), turn context cached server-side, LLM reply streams token-by-token, TTS speaks sentence-by-sentence, barge-in aborts the reply mid-stream |

### 2 · Custom scenarios (∞)

"Practice **MY** moment": the user describes a real situation in one paragraph; one LLM call drafts a playable scenario (coach persona, win conditions, key phrases). Custom scenarios live under *Your scenarios*, are never plan-locked, and can be rehearsed unlimited times.

### 3 · Quick drills (18, scored)

2–5 minute reps scored per round with deterministic speech metrics (wpm, fillers, trail-offs) — instant, no LLM cost. Grouped by skill:

| Group | Drills |
| --- | --- |
| Fluency | 🗣️ Filler words · 🐢 Pacing · ⏸️ Pause, don't trail off · ⏳ Thinking-time phrases |
| Grammar | ⏱️ Past vs present perfect · 🔀 Conditionals · 🧩 Articles & prepositions · ❓ Question formation |
| Vocabulary & precision | 📖 My words · 🔗 Linking words · 🔢 Numbers & data · 🔤 Spelling & codes |
| Sound natural | 🎵 Word & sentence stress · ⚖️ Opinions with hedging · 🪞 Active listening & paraphrasing · 📖 Story hooks · ⭐ STAR stories |

### 4 · Weakness workouts (personalized, generated)

An 8-round interactive training game generated from the learner's **own
session mistakes**, unmastered words and level (`POST /training/session`).
Four exercise types: **fix the sentence** (multiple choice), **fill the gap**,
**put it in order** (word chips) and **say it out loud** (recorded and scored
against the target). Instant right/wrong feedback with explanations in the
app language, combo streaks with haptics, and a results ring at the end.
Entry points: the weakness cards on Progress ("Train · 5 min") and the
"Train your weak spots" card on Practice. Completed workouts log a training
session so the minutes count toward streaks.

### 5 · Group practice rooms (10)

Live multi-agent rooms: three AI participants per room, each a real agent with its own persona, role and voice. The room follows a beat plan — the host opens, agents react (to each other **and to what you actually said**), the floor is handed to you with a prompt, and the host wraps. Ending the room generates a standard feedback report. Offline, rooms fall back to a scripted version.

| Room | Skill |
| --- | --- |
| ☀️ Team standup | Crisp 60-second updates |
| 🎤 Panel interview | Holding your thread under rapid follow-ups |
| 📞 Client meeting | Pushing back on scope, offering options |
| ⚖️ Group discussion | Taking positions, building on others |
| 💡 Brainstorm session | "Yes, and…" contribution |
| 🔄 Sprint retrospective | Blameless honest feedback |
| 📢 All-hands Q&A | Asking sharp questions publicly |
| 🖥️ Sales demo to a committee | Tailoring answers per stakeholder |
| 🚨 Incident postmortem | Narrating a timeline without blame |
| 🥂 Networking mixer | Three strangers, three conversations |

### 6 · Level assessment

4 spoken interview-style questions → CEFR estimate + skill breakdown + takeaways. Free, repeatable, feeds the personalized plan.

### 7 · Writing coach

Paste a draft (Slack / Email / PR review / Proposal), pick a tone (Friendly / Formal / Direct / Concise) → rewrite + up to 3 explained changes.

---

## Planned expansions (prioritized)

> Tier 1 (length/difficulty/speed options, hints, hands-free VAD, replay, custom scenarios) **shipped 2026-07-02**.

### Tier 2 — differentiators

| Option | What it adds |
| --- | --- |
| **Interview mode with a real job posting** | Paste a JD → tailored mock interview loop (screen → technical → behavioral → salary) |
| **Coach personas & voices** | Pick voice + personality (supportive / neutral / demanding); premium ElevenLabs voices on Pro |
| **Pronunciation lab** | Word-level color-coded scores (Azure per-word data already returned by the API) with minimal-pair drills |
| **Translation lifeline** | Long-press any coach line → translation in the user's native language |
| **Scheduled sessions** | Book a session in the calendar with a reminder ("Interview rehearsal, Thursday 18:00") |
| **Weekly review session** | Auto-generated session that re-tests the week's fixes and weak words |

### Tier 3 — retention & social

| Option | What it adds |
| --- | --- |
| Real multi-party cohort rooms | Live practice with other learners (needs WebRTC infra — see API roadmap) |
| Streak freeze & repair | Standard retention mechanics |
| Shareable progress cards | "I reached B2" social exports |
| Home-screen widgets | Streak + today's recommendation |
| Offline drill pack | Pre-generated prompts cached for planes/commutes |
