# Screen Catalog

Route = file under `app/` (Expo Router). States listed where they differ from the default.

## Onboarding & auth

| Route | Screen | Key states / interactions |
| --- | --- | --- |
| `/` | Welcome carousel | 4 swipeable slides, interpolated dots, Skip; redirects to tabs when logged-in + onboarded |
| `/auth` | Sign up / Log in | Mode switch, Google/Apple SSO, inline auth errors, loading |
| `/forgot-password` | Reset password | Sent-confirmation banner |
| `/onboarding/profession` | "What do you do?" | 8 selectable cards |
| `/onboarding/goal` | "What are you working toward?" | 4 goals; persists profile |
| `/onboarding/mic` | Mic priming | Pulsing mic, privacy bullets; denial handled with guidance toast |

## Assessment

| Route | Screen | Key states |
| --- | --- | --- |
| `/assessment/intro` | Level-check intro | Steps list, privacy note |
| `/assessment/live` | Live assessment | idle / recording (waveform + timer) / uploading; 4-question progress bar |
| `/assessment/results` | Results | Animated CEFR ladder, skill bars, takeaways; CTAs → paywall or Home |

## Tabs

| Route | Screen | Key states |
| --- | --- | --- |
| `/(tabs)/home` | Today | Skeleton while loading; greeting, streak, daily-goal ring, recommended session, group-room card, quick actions, week strip; dark-mode toggle |
| `/(tabs)/practice` | Practice | Skeleton; continue-path hero, 4 path cards, quick drills, word-bank entry |
| `/(tabs)/progress` | Progress | Level hero + milestones, weak-skill blockers → drills, strengths chips, week consistency, recent sessions; empty state |
| `/(tabs)/profile` | Profile | Plan card, daily plan (goal stepper, reminder), scenario tuning, app settings, permissions, privacy, support, logout |

## Practice flows

| Route | Screen | Key states |
| --- | --- | --- |
| `/practice/path/[slug]` | Path lessons | Numbered rail, current lesson highlighted with CTA, locked lessons → paywall |
| `/practice/words` | Word bank | Add, filters (all/learning/mastered), mastery toggle (haptic), examples, empty state |
| `/scenario/[slug]` | Scenario brief | Coach hero + traits, quote, win conditions, key phrases; voice/chat CTAs; `plan_limit` → paywall |
| `/session/[id]` | Live session | **Voice:** partial captions, streaming reply, sentence-TTS, barge-in, reconnecting chip. **Chat:** bubbles, typing indicator. Switchable |
| `/feedback/[sessionId]` | Feedback | Processing (spinner copy) → animated score ring, skills strip, 2 fixes, did-well, add-word chips |
| `/drill/[id]` | Quick drill | Rounds with dots, scoring spinner, per-round metrics + feedback, completion summary (avg wpm, total fillers) |
| `/group/lobby` | Group lobby | Format switcher (4 rooms), cast avatars, host quote, win conditions |
| `/group/[id]` | Group room | Participant tiles (speaking glow), scripted lines with timing, your-turn strip, scored user turns, wrap state |
| `/writing` | Writing coach | Channel + tone chips, draft input, loading, rewrite card with Copy, explained changes |

## Money & settings

| Route | Screen | Key states |
| --- | --- | --- |
| `/paywall` | Paywall (modal) | Monthly/annual toggle, 3 plan cards, purchase / restore (RevenueCat), graceful fallback pre-config |
| `/settings/account` | Account | Identity details |
| `/settings/language` | App language | 6 options |
| `/settings/appearance` | Appearance | Light/Dark/System previews with checkmarks |
| `/settings/reminders` | Reminders | Time picker chips, 3 notification toggles, permission request on save |
| `/settings/help` | Help & FAQ | Accordion answers, contact (mail) |
| `/settings/terms` | Terms & privacy | Plain-words summary + document list |
| `/settings/delete-account` | Delete account | Consequence list, destructive + escape CTAs, real API delete |
