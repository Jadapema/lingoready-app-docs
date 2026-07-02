# Setup

## Prerequisites

- Node.js 20+ · Xcode (iOS) and/or Android Studio
- A Firebase project (shared with the API)
- The API running — see [lingoready-api-docs](https://github.com/Jadapema/lingoready-api-docs)

## Install

```bash
git clone git@github.com:Jadapema/lingoready-app.git
cd lingoready-app
npm install --legacy-peer-deps
cp .env.example .env
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `EXPO_PUBLIC_API_URL` | API base. `http://localhost:4000` on simulator; the machine's LAN IP on a device |
| `EXPO_PUBLIC_WS_URL` | Same host, `ws://` scheme |
| `EXPO_PUBLIC_SENTRY_DSN` | Optional locally |
| `EXPO_PUBLIC_ENV` | `development` / `preview` / `production` |
| `EXPO_PUBLIC_REVENUECAT_IOS_KEY` / `_ANDROID_KEY` | Enables real purchases when set |

> `EXPO_PUBLIC_*` values are inlined **at build time** — restart the dev server after edits.

## Firebase config files

Download from Firebase console → Project settings → Your apps (both git-ignored):

- `google-services.json` → repo root (Android, package `com.lingoready.app`)
- `GoogleService-Info.plist` → repo root (iOS, bundle `com.lingoready.app`)

Enable providers: **Email/Password** (required), **Google**, **Apple** (for SSO buttons).

## Run (development build — Expo Go won't work)

Native modules (Firebase, Sentry, RevenueCat) require a dev client:

```bash
npx expo prebuild
npx expo run:ios        # or npx expo run:android
```

After the first build, `npm start` + hot reload as usual. Rebuild only when native config changes.

## Verification checklist

1. Welcome carousel swipes; "Test my English — free" opens auth.
2. Sign up with email → profession → goal → assessment records and returns a CEFR result (needs the API + OpenAI key).
3. Start "Give a crisp standup update" → speak → coach answers out loud sentence-by-sentence.
4. End session → feedback report renders with animated score.
5. Toggle dark mode from Home — every screen adapts.
