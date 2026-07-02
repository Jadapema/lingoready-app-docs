# Lingoready App — Documentation & Status

Documentation hub for the **Lingoready mobile app** — an AI voice coach that helps working professionals speak better English in interviews, meetings and presentations.

| | |
| --- | --- |
| **Code repository** | [Jadapema/lingoready-app](https://github.com/Jadapema/lingoready-app) |
| **Backend docs** | [Jadapema/lingoready-api-docs](https://github.com/Jadapema/lingoready-api-docs) |
| **Platform** | iOS + Android · Expo SDK 57 / React Native 0.86 |
| **Stage** | Pre-launch — feature-complete MVP, pending external config (see [STATUS](STATUS.md)) |

## 📚 Documentation

| Document | What it covers |
| --- | --- |
| [Overview](docs/01-overview.md) | Product, target user, value proposition, core loops |
| [Architecture](docs/02-architecture.md) | App structure, state, theming, streaming client, resilience |
| [Screens](docs/03-screens.md) | Every screen, its states and navigation flows |
| [Sessions & Practice Modes](docs/04-sessions.md) | All practice options today + planned expansions |
| [Setup](docs/05-setup.md) | Local environment, Firebase, dev builds |
| [Build & Release](docs/06-build-release.md) | EAS profiles, store submission, OTA updates |
| [Analytics Events](docs/07-analytics-events.md) | GA4 event catalog and funnels |
| [Troubleshooting](docs/08-troubleshooting.md) | Common issues and their fixes |

## 📊 Project state

- **[STATUS.md](STATUS.md)** — feature matrix, config-gated integrations, known limitations, quality gates
- **[ROADMAP.md](ROADMAP.md)** — prioritized improvement plan (latency, robustness, UX)
- **[CHANGELOG.md](CHANGELOG.md)** — what shipped, when

## Quick facts

- **Design source of truth:** the Lingoready design system (navy `#1F3A5F`, blue `#2E75B6`, amber `#E8A33D`, Inter) with full light/dark token parity.
- **Voice experience:** streaming end-to-end — live transcript partials while the user speaks, the coach's reply streams token-by-token and is spoken sentence-by-sentence.
- **Quality gates:** TypeScript strict, ESLint (Expo flat config + React compiler rules), CI on every push/PR.
