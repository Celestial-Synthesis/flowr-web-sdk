import {b,n}from'./chunk-6LGVLBTC.js';var te=()=>{let n=0,t=null,R=null;return {apply({stepListEl:x,root:u,currentId:C,currentCount:L,activeIndex:N,prevScrollTop:M}){if(x){let O=C!==null&&C===t,j=O&&L>n;if(N!==null&&(!O||N!==R)){let q=F=>{let _=F.querySelector("[data-flowr-step-list]"),U=F.querySelector('[data-flowr-step-row][data-active="true"]');!_||!U||U.scrollIntoView({block:"nearest"});};q(u),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{q(u);});}else j?(x.scrollTop=x.scrollHeight,typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{let F=u.querySelector("[data-flowr-step-list]");F&&(F.scrollTop=F.scrollHeight);})):O&&M>0&&(x.scrollTop=M);}n=L,t=C,R=N;},reset(){n=0,t=null,R=null;}}};var se={back:"Loading...",delete:"Deleting...",discard:"Discarding...","library-reload":"Reloading...",open:"Opening...",record:"Recording...",replay:"Replaying...",save:"Saving...","send-code":"Sending...","sign-out":"Signing out...",verify:"Verifying..."},P=(n,t,R="primary",x)=>{let u=document.createElement("button");u.type="button",u.textContent=n,R==="primary"&&(u.className="primary"),u.dataset.variant=R,u.dataset.flowrAction=n.toLowerCase().replace(/\s+/g,"-");let C=()=>{u.textContent=n,x?.renderIdleContent?.(u);};return C(),u.addEventListener("click",()=>{if(u.disabled)return;let L=t();if(!L||typeof L.then!="function")return;let N=u.parentElement,M=N?Array.from(N.querySelectorAll("button")):[u],O=new Map(M.map(A=>[A,A.disabled]));for(let A of M)A.disabled=true;u.dataset.loading="true",u.setAttribute("aria-busy","true");let j=u.dataset.flowrAction??"";u.textContent=se[j]??`${n}...`,Promise.resolve(L).catch(()=>{}).finally(()=>{for(let A of M)A.isConnected&&(A.disabled=O.get(A)??false);u.isConnected&&(delete u.dataset.loading,u.removeAttribute("aria-busy"),C());});}),u};var re=n=>n.kind==="input"?n.value?`Value: ${n.value}`:"Field update":n.kind==="input password"?"Password field":n.kind==="click"?n.textContent?`Target: ${n.textContent}`:"Click target":n.kind==="hover"?n.textContent?`Hover: ${n.textContent}`:"Hover target":n.kind==="context-click"?n.textContent?`Right click: ${n.textContent}`:"Right click target":n.kind==="scroll"?n.textContent?`Scroll to: ${n.textContent}`:"Scroll target":n.kind==="key enter"?"Press Enter":n.kind==="key tab"?"Press Tab":n.kind==="key shift+tab"?"Press Shift+Tab":n.kind;var ne="flowr-sdk-ui-recorder-panel-style",pe=`
  .wr-panel {
    --wr-panel-bg: var(--flowr-sdk-panel-background, #ffffff);
    --wr-panel-fg: var(--flowr-sdk-panel-foreground, #111827);
    --wr-panel-accent: var(--flowr-sdk-accent, #8d2e3a);
    --wr-panel-accent-fg: var(--flowr-sdk-accent-foreground, #ffffff);
    --wr-panel-border: var(--flowr-sdk-panel-border, #e5e7eb);
    --wr-panel-muted: var(--flowr-sdk-panel-muted, #6b7280);
    --wr-panel-surface: var(--flowr-sdk-surface-muted-background, #f8fafc);
    --wr-panel-raised: var(--flowr-sdk-surface-background, #ffffff);
    --wr-panel-soft: color-mix(in srgb, var(--wr-panel-accent) 7%, var(--wr-panel-raised) 93%);
    --wr-panel-soft-strong: color-mix(in srgb, var(--wr-panel-accent) 12%, var(--wr-panel-raised) 88%);
    --wr-panel-danger: color-mix(in srgb, var(--wr-panel-accent) 82%, black 18%);
    --wr-panel-danger-border: color-mix(in srgb, var(--wr-panel-accent) 28%, var(--wr-panel-border) 72%);
    --wr-panel-overlay-scrim: color-mix(in srgb, var(--flowr-sdk-overlay-background, var(--wr-panel-accent)) 42%, transparent);
    --wr-panel-scrollbar: color-mix(in srgb, var(--wr-panel-accent) 25%, transparent);
    --wr-panel-scrollbar-hover: color-mix(in srgb, var(--wr-panel-accent) 45%, transparent);
    box-sizing: border-box;
    background-color: var(--wr-panel-bg);
    background-image:
      radial-gradient(circle at top left, color-mix(in srgb, var(--wr-panel-accent) 10%, transparent) 0%, transparent 40%),
      linear-gradient(180deg, color-mix(in srgb, var(--wr-panel-raised) 76%, var(--wr-panel-bg) 24%) 0%, color-mix(in srgb, var(--wr-panel-accent) 4%, var(--wr-panel-bg) 96%) 100%);
    color: var(--wr-panel-fg);
    border: 1px solid color-mix(in srgb, var(--wr-panel-accent) 10%, var(--wr-panel-border) 90%);
    border-radius: 22px;
    padding: 18px;
    box-shadow: 0 24px 60px rgba(15, 23, 42, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    font-family: var(--flowr-sdk-font-family, "Avenir Next", "Segoe UI", "Helvetica Neue", sans-serif);
    font-size: 13px;
    line-height: 1.4;
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    min-width: 0;
    max-width: min(392px, 100%);
  }
  .wr-panel * { box-sizing: border-box; }
  .wr-brand {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    min-height: 38px;
  }
  .wr-brand-actions {
    margin-left: auto;
    display: inline-flex;
    align-items: center;
  }
  .wr-brand-icon {
    width: 20px;
    height: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .wr-brand-icon img {
    width: 20px;
    height: 20px;
    display: block;
    object-fit: contain;
  }
  .wr-brand h4 {
    margin: 0;
    font-size: 15px;
    font-weight: 760;
    letter-spacing: -0.01em;
    color: var(--wr-panel-fg);
  }
  .wr-tabs {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
    padding: 5px;
    border: 1px solid var(--wr-panel-border);
    border-radius: 16px;
    background-color: var(--wr-panel-surface);
    background-image: linear-gradient(180deg, rgba(255,255,255,.52), rgba(255,255,255,.12));
  }
  .wr-tabs button {
    border: 1px solid transparent;
    border-radius: 12px;
    background: transparent;
    color: var(--wr-panel-muted);
    min-height: 38px;
    font-weight: 650;
  }
  .wr-tabs button[data-active="true"] {
    background-color: var(--wr-panel-raised);
    background-image: linear-gradient(180deg, rgba(255,255,255,.82), rgba(255,255,255,.12));
    border-color: var(--wr-panel-border);
    color: var(--wr-panel-fg);
    box-shadow: 0 12px 28px color-mix(in srgb, var(--wr-panel-accent) 14%, transparent);
  }
  .wr-tabs button:disabled[data-active="true"] {
    opacity: 1;
  }
  .wr-title-input {
    width: 100%;
    border-radius: 14px;
    border: 1px solid var(--wr-panel-border);
    background-color: var(--wr-panel-raised);
    background-image: linear-gradient(180deg, rgba(255,255,255,.64), rgba(255,255,255,.08));
    color: var(--wr-panel-fg);
    padding: 10px 12px;
    font-size: 13px;
    font-family: inherit;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.6);
  }
  .wr-title-input:focus,
  .wr-select-input:focus,
  .wr-library-search-input:focus {
    outline: none;
    border-color: color-mix(in srgb, var(--wr-panel-accent) 72%, var(--wr-panel-border) 28%);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--wr-panel-accent) 16%, transparent);
  }
  .wr-field-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 120px;
    gap: 8px;
    align-items: end;
  }
  .wr-field-label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--wr-panel-muted);
  }
  .wr-auth-copy {
    font-size: 12px;
    color: var(--wr-panel-fg);
    opacity: 0.76;
  }
  .wr-auth-actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 8px;
  }
  .wr-auth-error {
    padding: 9px 11px;
    border-radius: 12px;
    background: var(--wr-panel-soft);
    border: 1px solid var(--wr-panel-danger-border);
    color: var(--wr-panel-danger);
    font-size: 12px;
  }
  .wr-select-input {
    width: 100%;
    border-radius: 14px;
    border: 1px solid var(--wr-panel-border);
    background-color: var(--wr-panel-raised);
    background-image: linear-gradient(180deg, rgba(255,255,255,.64), rgba(255,255,255,.08));
    color: var(--wr-panel-fg);
    padding: 10px 12px;
    font-size: 13px;
    font-family: inherit;
    box-shadow: inset 0 1px 0 rgba(255,255,255,.6);
  }
  .wr-toggle-field {
    grid-column: 1 / -1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 12px;
    border: 1px solid var(--wr-panel-border);
    background: var(--wr-panel-surface);
    color: var(--wr-panel-fg);
  }
  .wr-toggle-field[data-disabled="true"] {
    opacity: 0.7;
  }
  .wr-toggle-copy {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .wr-toggle-title {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--wr-panel-muted);
  }
  .wr-toggle-hint {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: normal;
    text-transform: none;
    color: var(--wr-panel-fg);
    opacity: 0.76;
  }
  .wr-toggle-checkbox {
    width: 16px;
    height: 16px;
    margin: 0;
    flex-shrink: 0;
    accent-color: var(--wr-panel-accent);
  }
  .wr-actions {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
  .wr-panel button {
    border: 1px solid var(--wr-panel-border);
    padding: 10px 12px;
    min-height: 40px;
    border-radius: 14px;
    background-color: var(--wr-panel-raised);
    background-image: linear-gradient(180deg, rgba(255,255,255,.78), rgba(255,255,255,.12));
    color: var(--wr-panel-fg);
    cursor: pointer;
    font-family: inherit;
    font-size: 13px;
    font-weight: 650;
    letter-spacing: 0.01em;
    line-height: 1.2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease, background-color .16s ease;
  }
  .wr-panel button.primary {
    background-color: var(--wr-panel-accent);
    background-image: linear-gradient(180deg, color-mix(in srgb, white 18%, transparent), transparent);
    border-color: var(--wr-panel-accent);
    color: var(--wr-panel-accent-fg);
    box-shadow: 0 14px 28px color-mix(in srgb, var(--wr-panel-accent) 22%, transparent);
  }
  .wr-panel button:not(:disabled):hover {
    border-color: color-mix(in srgb, var(--wr-panel-accent) 24%, var(--wr-panel-border) 76%);
    background-color: var(--wr-panel-soft);
    transform: translateY(-1px);
  }
  .wr-panel button.primary:not(:disabled):hover {
    background-color: color-mix(in srgb, var(--wr-panel-accent) 92%, black 8%);
    border-color: color-mix(in srgb, var(--wr-panel-accent) 92%, black 8%);
  }
  .wr-panel button:focus-visible {
    outline: 2px solid color-mix(in srgb, var(--wr-panel-accent) 70%, white 30%);
    outline-offset: 2px;
  }
  .wr-panel button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .wr-panel button:active:not(:disabled) {
    transform: scale(0.98);
  }
  .wr-panel button[data-span="full"] {
    grid-column: 1 / -1;
  }
  .wr-panel button.wr-icon-button {
    width: 36px;
    height: 36px;
    padding: 0;
    border: 1px solid var(--wr-panel-border);
    border-radius: 14px;
    background-color: var(--wr-panel-surface);
    background-image: linear-gradient(180deg, rgba(255,255,255,.72), rgba(255,255,255,.10));
    color: var(--wr-panel-fg);
  }
  .wr-panel button.wr-sign-out-button {
    position: relative;
  }
  .wr-panel button.wr-sign-out-button::after {
    content: attr(title);
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    z-index: 3;
    padding: 6px 8px;
    border-radius: 10px;
    background: color-mix(in srgb, var(--wr-panel-fg) 92%, black 8%);
    color: var(--wr-panel-bg);
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.20);
    font-size: 11px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0;
    text-transform: none;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transform: translateY(-2px);
    transition: opacity .14s ease, transform .14s ease, visibility .14s ease;
  }
  .wr-panel button.wr-sign-out-button:hover::after,
  .wr-panel button.wr-sign-out-button:focus-visible::after {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  .wr-panel button.wr-sign-out-button:hover:not(:disabled) {
    color: var(--wr-panel-accent);
  }
  .wr-panel button.wr-icon-button svg {
    width: 16px;
    height: 16px;
  }
  .wr-panel button.wr-icon-button[data-loading="true"] {
    color: transparent;
  }
  .wr-panel button.wr-icon-button[data-loading="true"] svg {
    opacity: 0;
  }
  .wr-status {
    padding: 10px 12px;
    border-radius: 16px;
    background-color: var(--wr-panel-surface);
    background-image: linear-gradient(180deg, rgba(255,255,255,.58), rgba(255,255,255,.08));
    border: 1px solid color-mix(in srgb, var(--wr-panel-accent) 18%, var(--wr-panel-border) 82%);
    border-left: 3px solid color-mix(in srgb, var(--wr-panel-accent) 70%, var(--wr-panel-border) 30%);
    font-size: 12px;
    color: var(--wr-panel-fg);
  }
  .wr-steps {
    flex: 1;
    min-height: 0;
    max-height: 320px;
    overflow-y: auto;
    border: 1px solid var(--wr-panel-border);
    border-radius: 16px;
    background-color: var(--wr-panel-surface);
    background-image: linear-gradient(180deg, rgba(255,255,255,.52), rgba(255,255,255,.10));
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .wr-steps::-webkit-scrollbar { width: 8px; }
  .wr-steps::-webkit-scrollbar-track { background: transparent; }
  .wr-steps::-webkit-scrollbar-thumb {
    background: var(--wr-panel-scrollbar);
    border-radius: 999px;
  }
  .wr-steps::-webkit-scrollbar-thumb:hover {
    background: var(--wr-panel-scrollbar-hover);
  }
  .wr-steps-empty {
    color: var(--wr-panel-fg);
    opacity: 0.7;
    font-size: 12px;
    padding: 6px 2px;
  }
  .wr-step {
    border: 1px solid var(--wr-panel-border);
    border-radius: 16px;
    padding: 12px;
    font-size: 13px;
    background-color: var(--wr-panel-raised);
    background-image: linear-gradient(180deg, rgba(255,255,255,.84), rgba(255,255,255,.08));
    box-shadow: 0 12px 28px color-mix(in srgb, var(--wr-panel-fg) 8%, transparent);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .wr-step[data-active="true"] {
    border-left: 3px solid var(--wr-panel-accent);
  }
  .wr-step-meta {
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .wr-step-count,
  .wr-step-kind {
    display: inline-flex;
    align-items: center;
    border-radius: 999px;
    padding: 4px 9px;
    font-size: 10px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .wr-step-count {
    background: var(--wr-panel-bg);
    border: 1px solid var(--wr-panel-border);
    color: var(--wr-panel-fg);
  }
  .wr-step-kind {
    background: var(--wr-panel-bg);
    border: 1px solid var(--wr-panel-border);
    color: var(--wr-panel-accent);
  }
  .wr-step-summary {
    font-size: 12px;
    opacity: 0.7;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  .wr-step-screenshot-button {
    padding: 0;
    overflow: hidden;
    border: 1px solid var(--wr-panel-border);
    border-radius: 14px;
    background-color: var(--wr-panel-soft);
    text-align: left;
  }
  .wr-step-screenshot-button img {
    display: block;
    width: 100%;
    max-height: 164px;
    object-fit: cover;
    background: var(--wr-panel-surface);
  }
  .wr-step-instruction-input {
    width: 100%;
    border-radius: 14px;
    border: 1px solid var(--wr-panel-border);
    background-color: var(--wr-panel-raised);
    background-image: linear-gradient(180deg, rgba(255,255,255,.64), rgba(255,255,255,.08));
    color: var(--wr-panel-fg);
    padding: 10px 12px;
    font-size: 13px;
    font-family: inherit;
    resize: vertical;
    min-height: 56px;
  }
  .wr-step-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6px;
  }
  .wr-step-toolbar button {
    background: transparent;
    border: 1px solid var(--wr-panel-border);
    color: var(--wr-panel-fg);
    font-size: 11px;
    font-weight: 600;
    padding: 4px 8px;
    border-radius: 999px;
    cursor: pointer;
  }
  .wr-step-toolbar button[data-flowr-action="step-delete"] {
    color: var(--wr-panel-danger);
    border-color: var(--wr-panel-danger-border);
  }
  .wr-step-toolbar button:hover {
    background: var(--wr-panel-soft);
  }
  .wr-step-advanced {
    border-top: 1px dashed var(--wr-panel-border);
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 12px;
  }
  .wr-step-advanced label {
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--wr-panel-accent);
  }
  .wr-step-advanced select,
  .wr-step-advanced input[type="text"] {
    width: 100%;
    box-sizing: border-box;
    padding: 6px 8px;
    border-radius: 6px;
    border: 1px solid var(--wr-panel-border);
    background: var(--wr-panel-raised);
    color: var(--wr-panel-fg);
    font-family: inherit;
    font-size: 12px;
    text-transform: none;
    letter-spacing: normal;
  }
  .wr-step-advanced .wr-pick-row {
    display: flex;
    gap: 6px;
    align-items: stretch;
  }
  .wr-step-advanced .wr-pick-row input[type="text"] {
    flex: 1;
  }
  .wr-step-advanced .wr-pick-row button {
    background: transparent;
    border: 1px solid var(--wr-panel-border);
    color: var(--wr-panel-fg);
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    cursor: pointer;
    white-space: nowrap;
  }
  .wr-step-advanced .wr-pick-row button:hover {
    background: var(--wr-panel-soft);
  }
  .wr-step-advanced .wr-pick-row button[data-flowr-picking="true"] {
    background: var(--wr-panel-accent);
    color: var(--wr-panel-accent-fg);
    border-color: var(--wr-panel-accent);
  }
  .wr-library-empty {
    color: var(--wr-panel-fg);
    opacity: 0.7;
    font-size: 12px;
    padding: 6px 2px;
  }
  .wr-library-controls {
    display: flex;
    align-items: end;
    gap: 8px;
  }
  .wr-library-controls .wr-field-label {
    flex: 1;
  }
  .wr-library-controls button[data-flowr-action="library-reload"] {
    border: 1px solid var(--wr-panel-border);
    background: var(--wr-panel-raised);
    color: var(--wr-panel-fg);
    white-space: nowrap;
  }
  .wr-library-search-row {
    display: flex;
    align-items: center;
  }
  .wr-library-loading {
    padding: 10px 12px;
    border-radius: 16px;
    border: 1px solid var(--wr-panel-border);
    background-color: var(--wr-panel-surface);
    background-image: linear-gradient(180deg, rgba(255,255,255,.52), rgba(255,255,255,.08));
    color: var(--wr-panel-muted);
    font-size: 12px;
  }
  .wr-library-search-input {
    flex: 1;
  }
  .wr-library-search-input::-webkit-search-cancel-button {
    -webkit-appearance: none;
    width: 14px;
    height: 14px;
    cursor: pointer;
    border-radius: 999px;
    background:
      linear-gradient(45deg, transparent 42%, var(--wr-panel-accent) 42%, var(--wr-panel-accent) 58%, transparent 58%),
      linear-gradient(-45deg, transparent 42%, var(--wr-panel-accent) 42%, var(--wr-panel-accent) 58%, transparent 58%);
    opacity: 0.85;
  }
  .wr-library-search-input::-webkit-search-cancel-button:hover { opacity: 1; }
  .wr-library {
    flex: 1;
    min-height: 0;
    max-height: 320px;
    overflow-y: auto;
    border: 1px solid var(--wr-panel-border);
    border-radius: 16px;
    background-color: var(--wr-panel-surface);
    background-image: linear-gradient(180deg, rgba(255,255,255,.52), rgba(255,255,255,.08));
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .wr-library::-webkit-scrollbar { width: 8px; }
  .wr-library::-webkit-scrollbar-track { background: transparent; }
  .wr-library::-webkit-scrollbar-thumb {
    background: var(--wr-panel-scrollbar);
    border-radius: 999px;
  }
  .wr-library-row {
    border: 1px solid var(--wr-panel-border);
    border-radius: 16px;
    padding: 12px;
    background-color: var(--wr-panel-raised);
    background-image: linear-gradient(180deg, rgba(255,255,255,.84), rgba(255,255,255,.08));
    box-shadow: 0 12px 28px color-mix(in srgb, var(--wr-panel-fg) 8%, transparent);
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .wr-library-row[data-active="true"] {
    border-left: 3px solid var(--wr-panel-accent);
  }
  .wr-library-title {
    font-size: 13px;
    font-weight: 600;
    color: var(--wr-panel-fg);
    overflow-wrap: anywhere;
  }
  .wr-library-meta {
    font-size: 11px;
    color: var(--wr-panel-fg);
    opacity: 0.7;
  }
  .wr-library-toolbar {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .wr-library-toolbar button {
    background: transparent;
    border: 1px solid var(--wr-panel-border);
    color: var(--wr-panel-fg);
    font-size: 11px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 999px;
    cursor: pointer;
  }
  .wr-library-toolbar button:hover {
    background: var(--wr-panel-soft);
  }
  .wr-library-toolbar button[data-flowr-action="library-delete"] {
    color: var(--wr-panel-danger);
    border-color: var(--wr-panel-danger-border);
  }
  .wr-library-toolbar button[data-flowr-action="library-replay"] {
    background: var(--wr-panel-raised);
    color: var(--wr-panel-fg);
    border-color: var(--wr-panel-border);
  }
  .wr-screenshot-modal {
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    background: var(--wr-panel-overlay-scrim);
  }
  .wr-screenshot-modal-card {
    width: min(1360px, calc(100vw - 16px));
    max-height: calc(100vh - 16px);
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    border-radius: 24px;
    background: var(--wr-panel-raised);
    border: 1px solid var(--wr-panel-border);
    box-shadow: 0 28px 72px rgba(15, 23, 42, 0.22);
  }
  .wr-screenshot-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
  .wr-screenshot-modal-header strong {
    font-size: 13px;
    color: var(--wr-panel-fg);
  }
  .wr-screenshot-modal-image {
    display: block;
    width: 100%;
    max-height: calc(100vh - 72px);
    object-fit: contain;
    border-radius: 12px;
    background: var(--wr-panel-surface);
  }
  @media (max-width: 420px) {
    .wr-panel {
      padding: 12px;
      gap: 10px;
      border-radius: 18px;
    }
    .wr-field-row,
    .wr-auth-actions,
    .wr-actions {
      grid-template-columns: 1fr;
    }
    .wr-toggle-field {
      align-items: flex-start;
    }
    .wr-steps,
    .wr-library {
      max-height: min(320px, 42vh);
      padding: 8px;
    }
    .wr-library-toolbar,
    .wr-step-toolbar {
      align-items: stretch;
      flex-direction: column;
    }
    .wr-library-toolbar button,
    .wr-step-toolbar button {
      width: 100%;
    }
  }
`,Y=n=>{let t=n.getRootNode();if("getElementById"in t?t.getElementById(ne):null)return;let x=document.createElement("style");x.id=ne,x.textContent=pe,t instanceof ShadowRoot?t.appendChild(x):typeof document<"u"&&document.head?document.head.appendChild(x):n.prepend(x);};var ue=()=>{let n="http://www.w3.org/2000/svg",t=document.createElementNS(n,"svg");t.setAttribute("viewBox","0 0 20 20"),t.setAttribute("fill","currentColor"),t.setAttribute("aria-hidden","true");let R=document.createElementNS(n,"path");return R.setAttribute("d","M3 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm8.293-3.707a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L12.586 11H10a1 1 0 1 1 0-2h2.586l-1.293-1.293a1 1 0 0 1 0-1.414ZM6 3a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0V5h6v10H6v-2a1 1 0 1 0-2 0v2a2 2 0 0 0 2 2h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6Z"),t.appendChild(R),t},ae=(n,t)=>{if(!t)return;[["fontFamily","--flowr-sdk-font-family"],["accentColor","--flowr-sdk-accent"],["accentForeground","--flowr-sdk-accent-foreground"],["panelBackground","--flowr-sdk-panel-background"],["surfaceBackground","--flowr-sdk-surface-background"],["surfaceMutedBackground","--flowr-sdk-surface-muted-background"],["panelForeground","--flowr-sdk-panel-foreground"],["panelBorderColor","--flowr-sdk-panel-border"],["mutedForeground","--flowr-sdk-panel-muted"],["overlayBackground","--flowr-sdk-overlay-background"],["overlayForeground","--flowr-sdk-overlay-foreground"]].forEach(([x,u])=>{let C=t[x];typeof C=="string"&&C.trim()&&n.style.setProperty(u,C.trim());});},ge=n=>n.trim().toLowerCase(),be=(n,t)=>t?[n.title].filter(x=>typeof x=="string"&&x.length>0).join(" ").toLowerCase().includes(t):true,me=()=>{let n=document.createElement("span");n.className="wr-brand-icon",n.setAttribute("aria-hidden","true");let t=document.createElement("img");return t.src=b,t.alt="",t.decoding="async",n.appendChild(t),n},Se=({root:n$1,handlers:t,theme:R})=>{Y(n$1);let x=null,u=null,C=null,L="",N=false,M=new Set,O=e=>e.screenshotDataUrl??e.screenshotUrl??null,j=()=>{x&&Q(x);},A=()=>{C?.remove(),C=null;},q=()=>{u=null,A(),j();},F=()=>{let e=n$1.getRootNode();return e instanceof ShadowRoot?e:n$1.ownerDocument?.body??document.body??n$1},_=()=>{let e=document.createElement("div");e.className="wr-screenshot-modal",e.setAttribute("data-flowr-screenshot-modal",""),ae(e,R),e.addEventListener("click",q);let c=document.createElement("div");c.className="wr-screenshot-modal-card",c.addEventListener("click",o=>{o.stopPropagation();});let l=document.createElement("div");l.className="wr-screenshot-modal-header";let i=document.createElement("strong");i.setAttribute("data-flowr-screenshot-modal-title","");let a=document.createElement("button");a.type="button",a.className="secondary",a.textContent="Close",a.addEventListener("click",q),l.append(i,a);let r=document.createElement("img");return r.className="wr-screenshot-modal-image",c.append(l,r),e.appendChild(c),e},U=e=>{let c=u?e.recording?.steps.findIndex(m=>m.id===u)??-1:-1,l=c>=0?e.recording?.steps[c]:null,i=l?O(l):null;if(!l||!i){u=null,A();return}C||(C=_());let a=C.querySelector("[data-flowr-screenshot-modal-title]"),r=C.querySelector(".wr-screenshot-modal-image"),o=`Step ${c+1} screenshot`;a&&(a.textContent=o),r&&(r.src=i,r.alt=o),C.isConnected||F().appendChild(C);},G=(e,c)=>{let l=document.createElement("div");l.className="wr-step-advanced",l.setAttribute("data-flowr-step-advanced","");let i=e.skipCondition,a=c.steps.findIndex(b=>b.id===e.id),r=c.steps.slice(a+1),o=n(c,a),m=document.createElement("label"),p=document.createElement("span");p.textContent="Skip condition";let g=document.createElement("select");g.setAttribute("data-flowr-input","skip-condition-type");let h=document.createElement("option");h.value="",h.textContent="None \u2014 always run",g.appendChild(h);for(let b of ["element-not-visible","element-visible","step-skipped","step-not-skipped"]){let w=document.createElement("option");w.value=b,w.textContent=b,g.appendChild(w);}g.value=i?.type??"",m.append(p,g),l.appendChild(m);let E=()=>{let b=document.createElement("select");b.setAttribute("data-flowr-input","skip-condition-jump-to");for(let d of r){let s=document.createElement("option");s.value=d.id;let v=c.steps.findIndex(z=>z.id===d.id)+1;s.textContent=`Step ${v} \xB7 ${d.kind}`,b.appendChild(s);}let w=document.createElement("option");return w.value="",w.textContent="End of recording",b.appendChild(w),b},y=()=>{let b=document.createElement("select");b.setAttribute("data-flowr-input","skip-condition-reference");for(let w of o){let d=document.createElement("option");d.value=w.id;let s=c.steps.findIndex(v=>v.id===w.id)+1;d.textContent=`Step ${s} \xB7 ${w.kind}`,b.appendChild(d);}if(o.length===0){let w=document.createElement("option");w.value="",w.textContent="No prior conditional step available",b.appendChild(w),b.disabled=true;}return b},f=null,T=null,S=null,I=i?.type==="element-visible"?i.selector:void 0,H=()=>{l.querySelectorAll("[data-flowr-condition-field]").forEach(v=>v.remove()),f=null,T=null,S=null;let b=g.value;if(!b)return;if(b==="element-visible"){let v=document.createElement("label");v.dataset.flowrConditionField="selector";let z=document.createElement("span");z.textContent="Watch this element";let V=document.createElement("div");V.className="wr-pick-row";let $=document.createElement("input");$.type="text",$.setAttribute("data-flowr-input","skip-condition-selector-css"),$.placeholder="CSS selector \u2014 e.g. .toast--success",$.value=I?.css??e.selector?.css??"";let D=document.createElement("button");D.type="button",D.dataset.flowrAction="skip-condition-pick",D.textContent="Pick",t.onPickElement||(D.disabled=true,D.title="Element picker is not available in this host."),D.addEventListener("click",()=>{t.onPickElement&&(D.dataset.flowrPicking="true",D.textContent="Click an element\u2026",t.onPickElement(W=>{D.dataset.flowrPicking="false",D.textContent="Pick",W&&(I=W,$.value=W.css??"",k());}));}),$.addEventListener("input",()=>{I=void 0;}),$.addEventListener("change",k),V.append($,D),v.append(z,V),l.appendChild(v),S=$;}if(b==="step-skipped"||b==="step-not-skipped"){let v=document.createElement("label");v.dataset.flowrConditionField="reference";let z=document.createElement("span");z.textContent=b==="step-skipped"?"When this step was skipped":"When this step was not skipped";let V=y();V.value=i?.referenceStepId??o[0]?.id??"",v.append(z,V),l.appendChild(v),T=V;}let w=document.createElement("label");w.dataset.flowrConditionField="jump";let d=document.createElement("span");d.textContent="Jump to step";let s=E();s.value=i?.jumpToStepId??r[0]?.id??"",w.append(d,s),l.appendChild(w),f=s;},k=()=>{if(!t.onStepSkipConditionChange)return;let b=g.value;if(!b){t.onStepSkipConditionChange(e.id,null);return}let w=f?.value??"",d={type:b,jumpToStepId:w};if(b==="element-visible"){let s=S?.value.trim()??"";if(I?d.selector=I:s?d.selector={css:s}:e.selector&&(d.selector=e.selector),!d.selector)return}if(b==="step-skipped"||b==="step-not-skipped"){let s=T?.value??"";if(!s)return;d.referenceStepId=s;}t.onStepSkipConditionChange(e.id,d);};g.addEventListener("change",()=>{H(),k(),B();});let B=()=>{f&&f.addEventListener("change",k),T&&T.addEventListener("change",k);};return H(),B(),l},oe=(e,c)=>{let l=document.createElement("div");l.className="wr-steps",l.setAttribute("data-flowr-step-list","");let i=c.recording;if(!i||i.steps.length===0){let a=document.createElement("div");a.className="wr-steps-empty",a.textContent="Recorded actions will appear here. Click, type, or right-click an element to capture hover, context-click, or instruction steps.",l.appendChild(a),e.appendChild(l);return}i.steps.forEach((a,r)=>{let o=document.createElement("div");o.className="wr-step",o.setAttribute("data-flowr-step-row",""),o.setAttribute("data-active",c.replayIndex===r?"true":"false");let m=document.createElement("div");m.className="wr-step-meta";let p=document.createElement("span");p.className="wr-step-count",p.textContent=String(r+1);let g=document.createElement("span");g.className="wr-step-kind",g.textContent=a.kind,m.append(p,g);let h=document.createElement("div");h.className="wr-step-summary",h.textContent=re(a);let E=O(a),y=null;if(E){y=document.createElement("button"),y.type="button",y.className="wr-step-screenshot-button",y.dataset.flowrAction="step-screenshot-preview",y.setAttribute("aria-label",`Preview screenshot for step ${r+1}`),y.setAttribute("title",`Preview screenshot for step ${r+1}`);let k=document.createElement("img");k.src=E,k.alt=`Screenshot for step ${r+1}`,y.appendChild(k),y.addEventListener("click",()=>{u=a.id,j();});}let f=document.createElement("textarea");f.className="wr-step-instruction-input",f.setAttribute("data-flowr-input","step-instruction"),f.placeholder="Tooltip instruction shown during replay",f.value=a.instruction??"",f.addEventListener("input",()=>{t.onStepInstructionInput(a.id,f.value);}),f.addEventListener("change",()=>{t.onStepInstructionCommit();});let T=document.createElement("div");T.className="wr-step-toolbar";let S=document.createElement("button");S.type="button",S.dataset.flowrAction="step-toggle-advanced";let I=M.has(a.id)||!!a.skipCondition;I&&M.add(a.id),S.textContent=I?"Hide advanced":"Advanced",S.addEventListener("click",()=>{M.has(a.id)?M.delete(a.id):M.add(a.id);let k=o.querySelector("[data-flowr-step-advanced]");k?(k.remove(),S.textContent="Advanced"):(o.appendChild(G(a,i)),S.textContent="Hide advanced");});let H=document.createElement("button");H.type="button",H.dataset.flowrAction="step-delete",H.textContent="Delete",H.addEventListener("click",()=>{t.onStepDelete?.(a.id);}),c.status==="replaying"&&(S.disabled=true,H.disabled=true),T.append(S,H),o.append(m,h),y&&o.appendChild(y),o.append(f,T),I&&o.appendChild(G(a,i)),l.appendChild(o);}),e.appendChild(l);},ie=e=>{let c=e.steps.length,l=`${c} step${c===1?"":"s"}`,i=e.updatedAt?new Date(e.updatedAt).toLocaleString():null;return i?`${l} \xB7 ${i}`:l},Z=e=>{let c=ge(L);return [...e].sort((i,a)=>(a.updatedAt??0)-(i.updatedAt??0)).filter(i=>be(i,c))},le=(e,c)=>{let l=c.recordings??[];if(l.length>0||t.onReloadLibrary){let r=document.createElement("div");if(r.className="wr-library-controls",l.length>0){let o=document.createElement("label");o.className="wr-field-label",o.textContent="Search saved recordings";let m=document.createElement("div");m.className="wr-library-search-row";let p=document.createElement("input");p.type="search",p.className="wr-title-input wr-library-search-input",p.placeholder="Search saved recording titles",p.value=L,p.setAttribute("data-flowr-input","library-search"),p.addEventListener("input",()=>{L=p.value,N=true,j();}),m.appendChild(p),o.appendChild(m),r.appendChild(o);}if(t.onReloadLibrary){let o=P("Reload",()=>t.onReloadLibrary?.(),"secondary");o.dataset.flowrAction="library-reload",o.disabled=c.libraryStatus==="loading"||!t.onReloadLibrary,r.appendChild(o);}e.appendChild(r);}if(c.libraryStatus==="loading"&&l.length===0){let r=document.createElement("div");r.className="wr-library-loading",r.setAttribute("data-flowr-library-loading",""),r.textContent="Loading saved recordings...",e.appendChild(r);return}let i=document.createElement("div");if(i.className="wr-library",i.setAttribute("data-flowr-recording-list",""),l.length===0){let r=document.createElement("div");r.className="wr-library-empty",r.setAttribute("data-flowr-library-empty",""),r.textContent="No saved recordings yet. Record a flow to see it appear here.",i.appendChild(r),e.appendChild(i);return}let a=Z(l);if(a.length===0){let r=document.createElement("div");r.className="wr-library-empty",r.setAttribute("data-flowr-library-empty",""),r.textContent=`No saved recordings match "${L.trim()}".`,i.appendChild(r),e.appendChild(i);return}for(let r of a){let o=document.createElement("div");o.className="wr-library-row",o.setAttribute("data-flowr-recording-row",""),o.setAttribute("data-recording-id",r.id),o.setAttribute("data-active",c.recording?.id===r.id?"true":"false");let m=document.createElement("div");m.className="wr-library-title",m.setAttribute("data-flowr-recording-title",""),m.textContent=r.title||"Untitled recording";let p=document.createElement("div");p.className="wr-library-meta",p.textContent=ie(r);let g=document.createElement("div");g.className="wr-library-toolbar";let h=P("Replay",()=>t.onReplayRecording?.(r.id),"secondary");h.dataset.flowrAction="library-replay",h.disabled=r.steps.length===0||!t.onReplayRecording;let E=P("Open",()=>t.onLoadRecording?.(r.id),"secondary");E.dataset.flowrAction="library-load",E.disabled=!t.onLoadRecording;let y=P("Delete",()=>t.onDeleteRecording?.(r.id),"secondary");y.dataset.flowrAction="library-delete",y.disabled=!t.onDeleteRecording,g.append(h,E,y),o.append(m,p,g),i.appendChild(o);}e.appendChild(i);},de=(e,c)=>{let l=c.auth,i=l?.pendingEmail?.trim()??"",a=document.createElement("div");if(a.className="wr-auth-copy",a.textContent=l?.sessionEmail?`Continue as ${l.sessionEmail} by entering the emailed code.`:"Sign in to save and replay recordings. We\u2019ll email you a one-time code.",e.appendChild(a),i){let r=document.createElement("label");r.className="wr-field-label",r.textContent="Verification code";let o=document.createElement("input");o.type="text",o.inputMode="numeric",o.className="wr-title-input",o.setAttribute("data-flowr-input","code"),o.placeholder="Enter 6-digit code",r.appendChild(o),e.appendChild(r);let m=document.createElement("div");m.className="wr-auth-actions";let p=P("Verify",()=>{let h=o.value.trim();if(!(!h||!t.onVerifyCode))return t.onVerifyCode(h)},"primary");p.disabled=!t.onVerifyCode,o.addEventListener("keydown",h=>{h.key!=="Enter"||p.disabled||(h.preventDefault(),p.click());});let g=P("Use a different email",()=>t.onUseDifferentEmail?.(),"secondary");g.disabled=!t.onUseDifferentEmail,m.append(p,g),e.appendChild(m);}else {let r=document.createElement("label");r.className="wr-field-label",r.textContent="Email";let o=document.createElement("input");o.type="email",o.className="wr-title-input",o.setAttribute("data-flowr-input","email"),o.placeholder="name@example.com",r.appendChild(o),e.appendChild(r);let m=document.createElement("div");m.className="wr-auth-actions";let p=P("Send code",()=>{let g=o.value.trim();if(!(!g||!t.onSendCode))return t.onSendCode(g)},"primary");p.dataset.span="full",p.disabled=!t.onSendCode,o.addEventListener("keydown",g=>{g.key!=="Enter"||p.disabled||(g.preventDefault(),p.click());}),m.appendChild(p),e.appendChild(m);}if(l?.signInError){let r=document.createElement("div");r.className="wr-auth-error",r.textContent=l.signInError,e.appendChild(r);}},J=(e,c,l)=>{let i=P(e,c,"secondary");return i.dataset.flowrAction=e==="Recorder"?"tab-recorder":"tab-library",i.dataset.active=l?"true":"false",i.setAttribute("role","tab"),i.setAttribute("aria-selected",l?"true":"false"),i},ce=e=>{let c=document.createElement("div");c.className="wr-tabs",c.setAttribute("role","tablist");let l=J("Recorder",()=>t.onCloseLibrary?.(),e==="recorder"),i=J("Library",()=>t.onOpenLibrary?.(),e==="library");return l.disabled=e==="recorder",i.disabled=e==="library"||!t.onOpenLibrary,c.append(l,i),c},K=te(),Q=e=>{x=e;let c=n$1.querySelector("[data-flowr-step-list]"),l=c?c.scrollTop:0;n$1.innerHTML="",Y(n$1);let i=e.auth&&!e.auth.isAuthenticated&&!e.recording?"sign-in":e.view??"recorder";i!=="library"&&L&&(L="");let a=document.createElement("div");a.className="wr-panel",a.setAttribute("data-flowr-view",i),ae(a,R);let r=document.createElement("div");r.className="wr-brand";let o=me(),m=document.createElement("h4");if(m.textContent=i==="library"?"FlowR Library":"FlowR Recorder",r.append(o,m),t.onSignOut&&e.auth?.canSignOut&&e.auth?.isAuthenticated){let d=document.createElement("div");d.className="wr-brand-actions";let s=P("Sign out",()=>t.onSignOut?.(),"secondary",{renderIdleContent:v=>{v.classList.add("wr-icon-button"),v.classList.add("wr-sign-out-button"),v.setAttribute("aria-label","Logout"),v.setAttribute("title","Logout"),v.textContent="",v.appendChild(ue());}});d.appendChild(s),r.appendChild(d);}let p=ce(i);if(i==="sign-in"){A(),a.appendChild(r),de(a,e),n$1.appendChild(a);return}if(i==="library"){A();let d=document.createElement("div");d.className="wr-status";let s=e.recordings?.length??0,v=Z(e.recordings??[]).length;if(e.libraryStatus==="loading"&&s===0?d.textContent="Loading saved recordings...":L.trim()?d.textContent=`${v} of ${s} saved recording${s===1?"":"s"}`:d.textContent=`${s} saved recording${s===1?"":"s"}`,a.append(r,p,d),le(a,e),n$1.appendChild(a),N){let z=a.querySelector('[data-flowr-input="library-search"]');if(z){z.focus();let V=z.value.length;z.setSelectionRange(V,V);}}N=false;return}let g=document.createElement("div");g.className="wr-field-row";let h=document.createElement("label");h.className="wr-field-label",h.textContent="Title";let E=document.createElement("input");E.type="text",E.className="wr-title-input",E.setAttribute("data-flowr-input","recording-title"),E.placeholder=e.defaultTitle,E.value=e.recording?.title??e.draftTitle,E.addEventListener("input",()=>{t.onTitleInput(E.value);}),E.addEventListener("change",()=>{t.onTitleCommit();}),h.appendChild(E);let y=document.createElement("label");y.className="wr-field-label",y.textContent="Visibility";let f=document.createElement("select");f.className="wr-select-input",f.setAttribute("data-flowr-input","recording-visibility");for(let d of ["private","public","internal"]){let s=document.createElement("option");s.value=d,s.textContent=d==="public"?"Public":d==="internal"?"Internal":"Private",f.appendChild(s);}f.value=e.recording?.visibility??e.draftVisibility??"private",f.disabled=!t.onVisibilityChange,f.addEventListener("change",()=>{t.onVisibilityChange?.(f.value);}),y.appendChild(f);let T=document.createElement("label");T.className="wr-toggle-field",T.dataset.disabled=t.onCaptureScreenshotsChange?"false":"true";let S=document.createElement("span");S.className="wr-toggle-copy";let I=document.createElement("span");I.className="wr-toggle-title",I.textContent="Step screenshots";let H=document.createElement("span");H.className="wr-toggle-hint",H.textContent="Attach a screenshot to each new recorded step.",S.append(I,H);let k=document.createElement("input");k.type="checkbox",k.className="wr-toggle-checkbox",k.checked=e.captureScreenshots===true,k.disabled=!t.onCaptureScreenshotsChange,k.setAttribute("data-flowr-input","capture-screenshots"),k.addEventListener("change",()=>{t.onCaptureScreenshotsChange?.(k.checked);}),T.append(S,k),g.append(h,y,T);let B=document.createElement("div");B.className="wr-actions";let b=!!e.hasUnsavedChanges;if(e.status==="recording"||b){let d=P("Save",()=>t.onSave?.(),"primary");d.disabled=!e.canSave||!t.onSave,B.appendChild(d);let s=P("Discard",()=>t.onDiscard?.(),"secondary");s.disabled=!t.onDiscard,B.appendChild(s);}else if(e.status==="replaying"){let d=P("Stop replay",t.onStopReplay,"secondary");d.dataset.span="full",B.appendChild(d);}else {let d=P("Record",t.onStart,"primary");B.appendChild(d);let s=P("Replay",t.onReplay,"secondary");e.recording&&e.recording.steps.length>0||(s.disabled=true),B.appendChild(s);}let w=document.createElement("div");if(w.className="wr-status",e.recording){let d=e.recording.steps.length,s=e.status==="recording"?"Recording":e.status==="replaying"?e.replayIndex!==null?`Replaying step ${e.replayIndex+1}`:"Replaying":"Saved";w.textContent=`${s} \xB7 ${d} step${d===1?"":"s"}`;}else w.textContent=e.status==="recording"?"Recording started \u2014 interact with the page.":"Name the recording, then press Record.";if(a.append(r,p,g,B,w),oe(a,e),n$1.appendChild(a),U(e),i==="library"&&N){let d=a.querySelector('[data-flowr-input="library-search"]');if(d){d.focus();let s=d.value.length;d.setSelectionRange(s,s);}}N=false,K.apply({stepListEl:a.querySelector("[data-flowr-step-list]"),root:n$1,currentId:e.recording?.id??null,currentCount:e.recording?.steps.length??0,activeIndex:e.replayIndex,prevScrollTop:l});};return {render:Q,destroy:()=>{K.reset(),A(),x=null,u=null,L="",N=false,n$1.innerHTML="";}}};
export{Se as createRecorderPanel};//# sourceMappingURL=recorder-panel-LJTT3DTH.js.map
//# sourceMappingURL=recorder-panel-LJTT3DTH.js.map