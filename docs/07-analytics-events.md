# Analytics Events (GA4 via Firebase)

Logged through `src/lib/analytics.ts`. Names are snake_case and **stable** — they feed funnels; never rename without a migration note here.

## Event catalog

| Event | Fired when | Params |
| --- | --- | --- |
| `onboarding_start` | "Test my English — free" tapped | — |
| `sign_up` | Account created | `method`: email · google · apple |
| `login` | Returning session | `method` |
| `assessment_start` | Assessment created | — |
| `assessment_complete` | 4th answer scored | — |
| `session_start` | Practice session created | `scenario`, `mode` (voice · chat · group) |
| `session_complete` | Session ended | `scenario` |
| `drill_start` | Drill opened | `drill` |
| `writing_review` | Draft submitted | `channel`, `tone` |
| `word_added` | Word saved to bank | — |
| `paywall_view` | Paywall shown | — |
| `trial_start` | Purchase CTA tapped | `plan`, `cycle` |

Screen views are logged automatically per screen via `logScreen` where mounted; user identity is set on auth (`setUserId`).

## Core funnels

1. **Activation:** `onboarding_start` → `sign_up` → `assessment_start` → `assessment_complete` → first `session_complete` (North-star input).
2. **Monetization:** `assessment_complete` → `paywall_view` → `trial_start` → RevenueCat purchase (webhook-side truth).
3. **Habit:** weekly `session_complete` + `drill_start` per user; streak distribution from Progress data.

## Conventions

- New events: verb-object snake_case, ≤3 params, documented here in the same PR.
- Never put PII in params.
- Use GA4 DebugView with a dev build to verify wiring.
