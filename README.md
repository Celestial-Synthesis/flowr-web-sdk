# FlowR Web SDK Distribution

This repository contains compiled browser-ready FlowR SDK artifacts published from the private build repo.

Public repo: https://github.com/Celestial-Synthesis/flowr-web-sdk

## Contents

- `sdk-replay/` — replay-only SDK bundles and package metadata
- `sdk-recorder/` — recorder + replay SDK bundles and package metadata
- `manifest.json` — generated package file manifest with hashes and sizes
- `integrity.json` — SRI metadata for published JavaScript bundles

## jsDelivr URLs

Use immutable tags in production.

```html
<script type="module">
  import { replay } from "https://cdn.jsdelivr.net/gh/Celestial-Synthesis/flowr-web-sdk@sdk-v0.1.0/sdk-replay/dist/index.js";
  import { recorder } from "https://cdn.jsdelivr.net/gh/Celestial-Synthesis/flowr-web-sdk@sdk-v0.1.0/sdk-recorder/dist/index.js";
</script>
```

## Notes

- Do not use branch URLs for production embeds.
- `@flowr/sdk-recorder` keeps `html-to-image` as an optional peer dependency for screenshot capture.
- Build, validation, and release automation live in the private FlowR source repository.
