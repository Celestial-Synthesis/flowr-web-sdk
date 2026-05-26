# FlowR Web SDK Distribution

This repository contains compiled browser-ready FlowR SDK artifacts published from the private build repo.

Public repo: https://github.com/Celestial-Synthesis/flowr-web-sdk

## Contents

- `sdk-replay/` — replay-only SDK bundles and package metadata
- `sdk-recorder/` — cloud recorder + replay SDK bundles and package metadata
- `manifest.json` — generated package file manifest with hashes and sizes
- `integrity.json` — SRI metadata for published JavaScript bundles

## Documentation

- `sdk-recorder/README.md` - cloud recorder setup, auth, and common operations
- `sdk-replay/README.md` - replay setup and public recording picker usage

## Dependency Model

Only `sdk-recorder` and `sdk-replay` are public browser entrypoints. Their FlowR workspace dependencies are bundled into the generated `dist/` files, so CDN consumers do not import `@flowr/sdk-core`, `@flowr/sdk-rest`, `@flowr/sdk-ui`, `@flowr/sdk-recorder-kernel`, or `@flowr/shared-core` separately.

The recorder ESM build keeps the full shared recorder panel optional: `uiMode: "sdk-ui"` lazy-loads a secondary `dist/*.js` chunk. The default cloud recorder panel avoids that extra download.

The local-only `@flowr/sdk-recorder-local` package is intentionally not published to this distribution repo.

## jsDelivr URLs

Use immutable tags in production.

```html
<script type="module">
  import { replay } from "https://cdn.jsdelivr.net/gh/Celestial-Synthesis/flowr-web-sdk@sdk_v0.1.0/sdk-replay/dist/index.js";
  import { recorder } from "https://cdn.jsdelivr.net/gh/Celestial-Synthesis/flowr-web-sdk@sdk_v0.1.0/sdk-recorder/dist/index.js";
</script>
```

## Notes

- Do not use branch URLs for production embeds.
- `@flowr/sdk-recorder` keeps `html-to-image` as an optional peer dependency for screenshot capture.
- Build, validation, and release automation live in the private FlowR source repository.
