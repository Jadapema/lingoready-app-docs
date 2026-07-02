# Build & Release

## EAS profiles (`eas.json`)

| Profile | Use | Traits |
| --- | --- | --- |
| `development` | Day-to-day device builds | Dev client, internal distribution |
| `preview` | Stakeholder/QA builds | Release JS, internal distribution |
| `production` | Store submissions | Auto-incremented build numbers |

```bash
npm i -g eas-cli && eas login
eas build --profile development --platform ios     # first dev client
eas build --profile production --platform all      # store builds
eas submit --platform ios                          # after store setup
```

## OTA updates

JS-only changes ship instantly with `eas update` — no store review. Any change to `app.json` plugins or native deps requires a new binary build.

## Release checklist

1. `npm run typecheck && npm run lint` green (CI enforces).
2. Manual pass of the golden path (see Setup → verification checklist) on iOS + Android.
3. Bump `version` in `app.json`/`package.json`; update the app-docs CHANGELOG.
4. Confirm production env vars in `eas.json` (API URL, Sentry DSN, RevenueCat keys).
5. `eas build --profile production` → smoke test the binaries → `eas submit`.
6. Tag the release in git; watch Sentry release health for the first 24h.

## Store prerequisites (one-time)

- Apple Developer Program + App Store Connect app (bundle `com.lingoready.app`); APNs key uploaded to Firebase for push.
- Google Play Console app (package `com.lingoready.app`).
- Final icon/splash art, screenshots per the ASO plan, privacy questionnaire answers (mic usage: speech scoring, audio deleted after processing unless retention enabled).
