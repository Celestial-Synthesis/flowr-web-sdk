# @celestialsynthesis/flowr-sdk-replay

FlowR replay SDK for embedding guided walkthrough replay inside a normal web page without the browser extension.

Version: 0.1.1

Public package repo: https://github.com/Celestial-Synthesis/flowr-web-sdk/tree/main/sdk-replay

## Install

```bash
npm install @celestialsynthesis/flowr-sdk-replay
```

## CDN Import

Use an immutable tag for production embeds:

```html
<script type="module">
  import { replay } from "https://cdn.jsdelivr.net/gh/Celestial-Synthesis/flowr-web-sdk@sdk_v0.1.1/sdk-replay/dist/index.js";

  const handle = replay({
    baseUrl: "https://rfeiamxssoajeabwyean.supabase.co",
    recordingId: "rec_...",
    token: "shr_...",
  });

  await handle.start();
</script>
```

Replay supports both FlowR's built-in bubble/panel shell and a dedicated host-controlled mode.

## Built-In Replay UI

If you want FlowR's built-in replay UI, initialize the handle with `uiMode: "sdk-ui"` or omit the option and open it. With a direct `recordingId + token` or `recording` payload, the built-in panel is ready to guide the user through replay:

```ts
const handle = replay({
  baseUrl,
  recordingId: "rec_...",
  token: "shr_...",
  uiMode: "sdk-ui",
});

handle.open();
```

## Host-Controlled Replay

Set `uiMode: "custom"` when your page already has its own buttons or control rail and you do not want the built-in replay bubble/panel chrome mounted on screen. Replay still uses the shared Shadow DOM host for highlights, tooltips, and overlays, but start/stop/list/select actions stay with your app:

```ts
const handle = replay({
  baseUrl,
  apiKey,
  uiMode: "custom",
  lazy: true,
});

const recordings = await handle.listRecordings();
if (recordings[0]) {
  handle.setRecording(recordings[0]);
  await handle.start();
}

document.querySelector("#stopReplay")?.addEventListener("click", () => {
  handle.stop();
});
```

If you need server-side paging or title filtering for your own selector UI, call `listRecordings({ limit, cursor, title })` instead:

```ts
const firstPage = await handle.listRecordings({ limit: 10, title: "checkout" });
const nextPage = firstPage.nextCursor
  ? await handle.listRecordings({ limit: 10, cursor: firstPage.nextCursor, title: "checkout" })
  : null;
```

`listRecordings()` without arguments returns the full public list for that backend + publishable key. `listRecordings({ limit, cursor, title })` returns one backend page in `{ recordings, nextCursor }` form.

`title` filters by recording title only, uses a case-insensitive server-side match, and should be sent on each paged request while you follow `nextCursor`.

## Public Recording Picker

Use a FlowR publishable key with `uiMode: "sdk-ui"` when you want the built-in picker, or combine it with `uiMode: "custom"` when your host page will call `listRecordings()` or `listRecordings({ limit, cursor, title })` and render its own selector:

```ts
const handle = replay({
  baseUrl,
  apiKey,
  lazy: true,
});

const recordings = await handle.listRecordings();
if (recordings[0]) {
  handle.setRecording(recordings[0]);
  await handle.start();
}
```

## Common Operations

```ts
handle.open();
handle.close();
handle.stop();
handle.on("complete", () => console.log("Replay finished"));
handle.on("navigation-required", ({ targetUrl }) => console.log(targetUrl));
```

## Bundled FlowR Dependencies

The source workspace uses these FlowR packages, but this public browser bundle already includes them. You do not need to import them separately from jsDelivr:

- `@flowr/sdk-core`
- `@flowr/sdk-rest`
- `@flowr/shared-core`

## Included Files

- `dist/index.js` - ESM browser bundle
- `dist/index.cjs` - CommonJS bundle
- `dist/index.d.ts` - TypeScript declarations
- `dist/*.js` - optional ESM chunks loaded by `dist/index.js` when needed
- `package.json` - public package metadata
