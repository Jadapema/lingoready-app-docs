# Sessions & Practice Modes

Everything a user can practice today, how each mode works, and the planned expansions.

## Current catalog

### 1 · Live 1:1 scenario sessions (the core)

Role-play with an AI coach in character (interviewer, scrum lead, client…).

| Property | Value |
| --- | --- |
| Content | 38 scenarios across 4 paths: **Interviews** (12) · **Meetings** (10) · **Presentations** (8) · **Small talk** (8) |
| Modes | **Voice** (dark call UI) and **Chat** (typed) — switchable mid-session |
| Personalization | Scenario recommendation tuned by profession + goal; coach adapts to the user's CEFR level |
| Feedback | Post-session report: 0–100 score, per-skill bars, the 2 highest-impact fixes (you said → say), what went well, suggested vocabulary |
| Limits | Free: first 3 lessons per path + 20 speaking min/month · Pro: unlimited |
| Latency posture | STT partials while speaking (Deepgram), LLM reply streams token-by-token, TTS speaks sentence-by-sentence, barge-in interrupts instantly |

### 2 · Quick drills (2–5 min)

Targeted reps scored per round with deterministic speech metrics (words/min, filler count, trail-offs) — instant, no LLM cost.

| Drill | Focus |
| --- | --- |
| 🗣️ Filler words | Zero "um / like / you know" |
| 🐢 Pacing | Land near 140 wpm |
| ⏸️ Pause, don't trail off | Firm sentence endings |
| 🔗 Linking words | "so that", "which means", "whereas" |
| ⏱️ Past simple vs present perfect | Tense discipline under pressure |
| 📖 My words | Use your saved vocabulary naturally |

### 3 · Group practice rooms

Turn-based rooms with AI teammates (scripted personalities), user turns recorded and scored.

| Room | Cast | Skill |
| --- | --- | --- |
| ☀️ Team standup | Ana, Tom, Lia | Crisp 60-second updates |
| 🎤 Panel interview | Sam, Rey, Mei | Holding your thread under rapid follow-ups |
| 📞 Client meeting | Joe, Pat, Ivy | Pushing back on scope, offering options |
| ⚖️ Group discussion | Kai, Nia, Leo | Taking positions, building on others |

### 4 · Level assessment

4 spoken interview-style questions → CEFR estimate + skill breakdown + takeaways. Free, repeatable, feeds the personalized plan.

### 5 · Writing coach

Paste a draft (Slack / Email / PR review / Proposal), pick a tone (Friendly / Formal / Direct / Concise) → rewrite + up to 3 explained changes.

---

## Planned expansions (prioritized)

### Tier 1 — high impact, low-to-medium effort

| Option | What it adds | Notes |
| --- | --- | --- |
| **Session length choice** | 5 / 10 / 15 min before starting | Server cap already exists; expose it as a user choice |
| **Difficulty dial** | Easy / Realistic / Hard per session | One line in the system prompt (speed, vocabulary, pushback level) |
| **Coach speaking speed** | 0.8× / 1× / 1.2× TTS playback | Client-side playback rate — huge for A2/B1 users |
| **Hints in-session** | "Give me a phrase" button (exists in design) | Cheap side-call to the turn model |
| **Hands-free mode (VAD)** | Auto-detect end of speech — no tap-to-stop | Silence detection on audio levels; the single biggest conversational-feel win |
| **Session replay** | Re-read transcript + re-listen to your turns | Transcript already stored; retention toggle covers audio |
| **Custom scenario** | "Practice MY meeting": user describes the situation, we generate the role prompt | One LLM call to draft `role_prompt` + win conditions |

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
