# Troubleshooting

## Build & run

| Symptom | Cause / fix |
| --- | --- |
| `No Firebase App '[DEFAULT]' has been created` | Missing Firebase config file, or running in Expo Go. Add the file and use a dev build (`npx expo prebuild && npx expo run:ios`). |
| iOS pod install fails around Firebase | `useFrameworks: "static"` must be set (it is, via expo-build-properties). Run `npx expo prebuild --clean`. |
| `npm install` peer-dependency errors | Use `npm install --legacy-peer-deps` (React 19 + transitive react-dom pin). |
| Metro can't resolve `@/…` | Restart with `npx expo start -c`; path alias lives in tsconfig. |

## Runtime

| Symptom | Cause / fix |
| --- | --- |
| `Network request failed` on a physical device | The phone can't reach `localhost` — set `EXPO_PUBLIC_API_URL`/`_WS_URL` to your machine's LAN IP and restart the dev server. |
| 401 on every request | App and API point at different Firebase projects; align `FIREBASE_PROJECT_ID` and config files. |
| Live session connects then dies immediately | First WS frame must be the auth message (the client does this) — usually a stale ID token after a long debugger pause; reopen the session. |
| Coach text appears but no audio | iOS silent switch (we set `playsInSilentMode`, but check volume), or TTS provider failing server-side — check API logs. |
| Mic button does nothing | Permission denied earlier: iOS Settings → Lingoready → Microphone, then relaunch. |
| `plan_limit` while testing | Raise `FREE_MONTHLY_MINUTES` in the API `.env` or set your `subscriptions.monthly_minute_cap = 0`. |
| Purchases button shows "activate with store release" | `EXPO_PUBLIC_REVENUECAT_*` keys not set — expected before store setup. |
| Google/Apple button says provider unavailable | Provider not enabled in Firebase console yet. |

## Quality checks

```bash
npm run typecheck   # strict TS
npm run lint        # Expo flat config + React compiler rules
```

Both must be green before pushing — CI blocks otherwise.
