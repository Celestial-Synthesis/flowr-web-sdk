# @flowr/sdk-recorder

FlowR recorder SDK for recording, editing, saving, and replaying guided walkthroughs inside a normal web page. This is the cloud-backed recorder, not the local-only development recorder.

Version: 0.1.0

## CDN Import

Use an immutable tag for production embeds:

```html
<script type="module">
  import { recorder } from "https://cdn.jsdelivr.net/gh/Celestial-Synthesis/flowr-web-sdk@sdk_v0.1.0/sdk-recorder/dist/index.js";

  const handle = recorder({
    baseUrl: "https://rfeiamxssoajeabwyean.supabase.co",
    apiKey: "flowr_pk_live_...",
    screenshots: false,
  });

  handle.open();
</script>
```

The recorder supports two control patterns:

- Omit `uiMode` to keep the default cloud recorder panel and drive the SDK from your host app with the handle methods.
- Set `uiMode: "sdk-ui"` when you want the richer shared FlowR panel. The ESM build loads that panel from a secondary `dist/*.js` chunk only when you opt in.

## FlowR SDK UI

If you want the built-in FlowR recorder experience, initialize the handle with `uiMode: "sdk-ui"` and open it. After that, the panel handles sign-in, start/stop recording, library browsing, and replay for you:

```ts
const handle = recorder({
  baseUrl,
  apiKey,
  uiMode: "sdk-ui",
});

handle.open();
```

You can still call the handle methods directly in `sdk-ui` mode if you want host shortcuts or automation.

## Host-Controlled / Manual Triggers

If your page already has its own buttons or app shell, keep the default mode and call the recorder handle directly:

```ts
const handle = recorder({
  baseUrl,
  apiKey,
  screenshots: false,
});

await handle.auth.signInWithOtp("user@example.com");
await handle.auth.verifyOtp("user@example.com", "123456");

const recording = await handle.startRecording({ title: "Checkout tour" });
await handle.stopRecording();
await handle.replay(recording);
```

## Authentication

The `apiKey` is a FlowR publishable key. It is safe to ship in browser code and identifies the FlowR org for CORS, rate limits, public recording discovery, and the built-in OTP auth flow.

End users must sign in before saving cloud recordings:

```ts
await handle.auth.signInWithOtp("user@example.com");
await handle.auth.verifyOtp("user@example.com", "123456");
```

If your app already mints the FlowR publishable-key owner's Supabase JWT, pass it directly:

```ts
const handle = recorder({
  baseUrl,
  apiKey,
  userJwt: ownerSession.access_token,
});
```

## Common Operations

```ts
const recording = await handle.startRecording({ title: "Checkout tour", visibility: "private" });
await handle.stopRecording();
const recordings = await handle.listRecordings();
await handle.replay(recordings[0]);
await handle.deleteRecording(recordings[0].id);
```

## Screenshot Support

Screenshot capture is optional. When `screenshots: true`, the recorder expects `html-to-image` to be available as an optional peer dependency. CDN consumers can keep screenshots disabled or provide that dependency with their own bundler/import-map setup.

## Bundled FlowR Dependencies

The source workspace uses these FlowR packages, but this public browser bundle already includes them. You do not need to import them separately from jsDelivr:

- `@flowr/sdk-core`
- `@flowr/sdk-recorder-kernel`
- `@flowr/sdk-rest`
- `@flowr/sdk-ui`
- `@flowr/shared-core`

Optional lazy-loaded UI chunks:

- `@flowr/sdk-ui/recorder-panel`

For the recorder ESM build, the full shared recorder panel is emitted as a secondary `dist/*.js` chunk and is downloaded only when `uiMode: "sdk-ui"` is used. The default cloud recorder panel does not load that chunk.

## Included Files

- `dist/index.js` - ESM browser bundle
- `dist/index.cjs` - CommonJS bundle
- `dist/index.d.ts` - TypeScript declarations
- `dist/*.js` - optional ESM chunks loaded by `dist/index.js` when needed
- `package.json` - public package metadata
