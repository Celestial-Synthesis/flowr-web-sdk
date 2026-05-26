'use strict';var Ut=Object.defineProperty;var kr=(e,t,n)=>t in e?Ut(e,t,{enumerable:true,configurable:true,writable:true,value:n}):e[t]=n;var K=(e,t)=>()=>(e&&(t=e(e=0)),t);var Tr=(e,t)=>{for(var n in t)Ut(e,n,{get:t[n],enumerable:true});};var Xe=(e,t,n)=>kr(e,typeof t!="symbol"?t+"":t,n);var Se,Ft=K(()=>{Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAwHpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjabVDREcMgCP1nio6ggAbHMY296wYdvyiYi02f5wMBnwi0z/sFjw6MDJw2ySXnoODCBas6Egx1cAw8eGCm9LzE4Uyghkgt+YXs9TMeTwEzVb10FXp6Yl8ThV1ffoTQDPWOun+4UHEhQktEF6j2rZCLbNcv7C2sENvQiWVt+3bedHpH0ncIsVGkoEwk1gD1nYGqOmkw90JdVUtp8BTTgfyb0wR8AepEWRTBwla6AAABhWlDQ1BJQ0MgcHJvZmlsZQAAeJx9kb9Lw0AcxV/TFn9QdbCDiEOG6mRBVMSxVqEIFUKt0KqDyaW/oElDkuLiKLgWHPyxWHVwcdbVwVUQBH+A+AeIk6KLlPi9pNAi1oPjPry797h7Bwj1MtOsQAzQdNtMJeJiJrsqdr0iiAD60YMJmVnGnCQl0XF83cPH17soz+p87s/Rp+YsBvhE4hgzTJt4g3hm0zY47xOHWVFWic+Jx026IPEj1xWP3zgXXBZ4ZthMp+aJw8RioY2VNmZFUyOeJo6omk75QsZjlfMWZ61cZc178heGcvrKMtdpjiCBRSxBgggFVZRQho0orTopFlK0H+/gH3b9ErkUcpXAyLGACjTIrh/8D353a+WnJr2kUBwIvjjOxyjQtQs0ao7zfew4jRPA/wxc6S1/pQ7MfpJea2mRI2BgG7i4bmnKHnC5Aww9GbIpu5KfppDPA+9n9E1ZYPAW6F3zemvu4/QBSFNXyRvg4BAYK1D2eod3d7f39u+ZZn8/alNyo9jtB5YAAA16aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOjRjODYxZDgyLWZkYWYtNDkyMi1hNGVhLTU1MWQxYzBmYTg5NyIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpkZDljN2NjOS1hZmYxLTQ5MzktOWMzYi05MmFiODMwOTYwOWMiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZjk1ZTM1ZS0wYTljLTRjMjAtYTZkNy0yMGI3ODg0MjkxNjgiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICBHSU1QOkFQST0iMi4wIgogICBHSU1QOlBsYXRmb3JtPSJNYWMgT1MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNzc3OTAzOTkxNzA3NDc2IgogICBHSU1QOlZlcnNpb249IjIuMTAuMzgiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIgogICB4bXA6TWV0YWRhdGFEYXRlPSIyMDI2OjA1OjA0VDIyOjEzOjEwKzA4OjAwIgogICB4bXA6TW9kaWZ5RGF0ZT0iMjAyNjowNTowNFQyMjoxMzoxMCswODowMCI+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjU0OTdlYjBmLTg0YzgtNGFiMy1hZGY5LTgyNzFhNTUwMGE0NiIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChNYWMgT1MpIgogICAgICBzdEV2dDp3aGVuPSIyMDI2LTA1LTA0VDIyOjEzOjExKzA4OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PrHaWsIAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfqBQQODQsUawCsAAAgAElEQVR42u19d7wlR3Xmd6q6b3j5vXmTg4QCygkFJNtgEQU2izHRIGPCCryAsQ02wQYWjHeNjXGSzbI/E7xrwmKwDZKxMRmEEihLKI00M5ocX7q5u6vq7B9d3V3V946kGY0m6fX87tzwbuiuc+qE7yRg8Vg8Fo/FY/FYPBaPxWPxWDwWj8Vj8XgKHXS0ntj85c8jmSSB0aZCWoXGGClIsjZGAAzWRoSBZG0MMRELZmJjACnAIAqJ2ABgZkBKEBgKxJLtVbMhEgRjGJKIDQEAkSRAG2YSkpg1CyGJiJgIUNpACgEWxMIY0gSCYUhBUAALIgghYIwhIiJtDAQRAAYxgFCCtSGAwcwgAohBHAiYRAtBxADIwDCRIGYGGCSEAACwEIAxABtASIAImkBSBEYD4HoYmWptbvpr1+pjggG2nXuunNB8jqzVfj4MK6ezNucRYTkb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";});var Pr,Lr,Mr,Ze,Or,Dr,Br,qe,_t=K(()=>{Pr={"bottom-right":"bottom: var(--off); right: var(--off);","bottom-left":"bottom: var(--off); left: var(--off);","top-right":"top: var(--off); right: var(--off);","top-left":"top: var(--off); left: var(--off);"},Lr={"bottom-right":"bottom: 72px; right: 0;","bottom-left":"bottom: 72px; left: 0;","top-right":"top: 72px; right: 0;","top-left":"top: 72px; left: 0;"},Mr={"bottom-right":"bottom: 68px;","bottom-left":"bottom: 68px;","top-right":"top: 68px;","top-left":"top: 68px;"},Ze="flowr-sdk:bubble-open",Or=()=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`flowr-bubble-${crypto.randomUUID()}`:`flowr-bubble-${Date.now()}-${Math.random().toString(36).slice(2)}`,Dr=(e,t)=>{if(!t)return;[["fontFamily","--flowr-sdk-font-family"],["accentColor","--flowr-sdk-accent"],["accentForeground","--flowr-sdk-accent-foreground"],["panelBackground","--flowr-sdk-panel-background"],["surfaceBackground","--flowr-sdk-surface-background"],["surfaceMutedBackground","--flowr-sdk-surface-muted-background"],["panelForeground","--flowr-sdk-panel-foreground"],["panelBorderColor","--flowr-sdk-panel-border"],["mutedForeground","--flowr-sdk-panel-muted"],["bubbleBackground","--flowr-sdk-bubble-background"],["bubbleForeground","--flowr-sdk-bubble-foreground"],["bubbleShadow","--flowr-sdk-bubble-shadow"],["overlayBackground","--flowr-sdk-overlay-background"],["overlayForeground","--flowr-sdk-overlay-foreground"]].forEach(([r,o])=>{let i=t[r];typeof i=="string"&&i.trim()&&e.style.setProperty(o,i.trim());});},Br=(e,t)=>`
  :host {
    all: initial;
    --flowr-sdk-font-family: "Avenir Next", "Segoe UI", "Helvetica Neue", sans-serif;
    --flowr-sdk-bubble-background: #ffffff;
    --flowr-sdk-bubble-foreground: #111827;
    --flowr-sdk-bubble-shadow: 0 28px 72px rgba(15,23,42,.20), 0 10px 24px rgba(15,23,42,.10);
    --flowr-sdk-panel-background: #ffffff;
  }
  .root {
    position: fixed;
    ${Pr[e]}
    --off: ${t}px;
    --panel-viewport-width: calc(100vw - var(--off) - var(--off));
    z-index: 2147483646;
    font: 14px/1.4 var(--flowr-sdk-font-family);
    color: var(--flowr-sdk-bubble-foreground);
  }
  .root[data-open="true"] {
    z-index: 2147483648;
  }
  .bubble {
    width: 60px; height: 60px;
    border-radius: 9999px;
    border: 1px solid color-mix(in srgb, var(--flowr-sdk-accent, #8d2e3a) 12%, rgba(255,255,255,.88));
    background-color: var(--flowr-sdk-bubble-background);
    background-image:
      radial-gradient(circle at 30% 20%, rgba(255,255,255,.72), transparent 46%),
      linear-gradient(180deg, color-mix(in srgb, var(--flowr-sdk-bubble-background) 84%, white 16%) 0%, var(--flowr-sdk-bubble-background) 100%);
    color: var(--flowr-sdk-bubble-foreground);
    box-shadow: var(--flowr-sdk-bubble-shadow);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: transform .16s ease, box-shadow .16s ease, border-color .16s ease;
  }
  .bubble:hover {
    transform: translateY(-1px) scale(1.03);
    box-shadow: 0 34px 84px rgba(15,23,42,.22), 0 14px 28px rgba(15,23,42,.12);
  }
  .bubble:active { transform: translateY(0) scale(0.97); }
  .bubble img {
    width: 30px;
    height: 30px;
    display: block;
    object-fit: contain;
    filter: drop-shadow(0 4px 10px rgba(15,23,42,.10));
  }
  .panel {
    position: absolute;
    ${Lr[e]}
    box-sizing: border-box;
    width: min(392px, var(--panel-viewport-width));
    min-width: 0;
    max-width: var(--panel-viewport-width);
    max-height: min(70vh, calc(100vh - 96px));
    overflow: auto;
    background-color: var(--flowr-sdk-panel-border, rgba(17,24,39,.08));
    background-image: linear-gradient(180deg, rgba(255,255,255,.38), rgba(255,255,255,.12));
    border-radius: 24px;
    box-shadow: 0 30px 80px rgba(15,23,42,.22), 0 10px 28px rgba(15,23,42,.12);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    padding: 1px;
    display: none;
  }
  .panel[data-open="true"] { display: block; }
  @media (max-width: 480px) {
    .root {
      --off: min(${t}px, 12px);
      --panel-viewport-width: calc(100vw - var(--off) - var(--off));
    }
    .panel {
      ${Mr[e]}
      width: var(--panel-viewport-width);
      max-width: var(--panel-viewport-width);
      max-height: calc(100vh - 92px);
      border-radius: 20px;
    }
  }
`,qe=e=>{let t=Or(),n=document.createElement("div");n.setAttribute("data-flowr-sdk",""),n.style.all="initial",Dr(n,e.theme),document.body.appendChild(n);let r=n.attachShadow({mode:"open"}),o=document.createElement("style");if(o.textContent=Br(e.position??"bottom-right",e.offset??24),r.appendChild(o),e.assets.contentCssText){let d=document.createElement("style");d.textContent=e.assets.contentCssText,r.appendChild(d);}if(e.assets.panelCssText){let d=document.createElement("style");d.textContent=e.assets.panelCssText,r.appendChild(d);}let i=document.createElement("div");i.className="root",r.appendChild(i);let a=document.createElement("div");a.className="panel",a.setAttribute("data-flowr-panel",""),i.appendChild(a);let l=document.createElement("button");l.className="bubble",l.type="button",l.title=e.tooltip??"FlowR",l.setAttribute("aria-label",e.tooltip??"FlowR");let s=document.createElement("img");s.src=e.assets.iconUrl,s.alt="",l.appendChild(s),i.appendChild(l);let u=!!e.open,m=()=>{i.setAttribute("data-open",u?"true":"false"),a.setAttribute("data-open",u?"true":"false");},c=()=>{window.dispatchEvent(new CustomEvent(Ze,{detail:{instanceId:t}}));},y=d=>{d&&c(),u=d,m();},S=d=>{let g=d instanceof CustomEvent?d.detail:null;!g||g.instanceId===t||!u||(u=false,m());};return window.addEventListener(Ze,S),m(),l.addEventListener("click",()=>{y(!u);}),{shadowRoot:r,panelEl:a,open:()=>{y(true);},close:()=>{y(false);},toggle:()=>{y(!u);},isOpen:()=>u,destroy:()=>{window.removeEventListener(Ze,S),n.remove();}}};});var $e,Re,Nr,Vt,zt,Be,Ce,Kt=K(()=>{$e="flowr-sdk:activity-change",Re=()=>typeof window>"u"?null:window,Nr=e=>typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`flowr-${e}-${crypto.randomUUID()}`:`flowr-${e}-${Date.now()}-${Math.random().toString(36).slice(2)}`,Vt=e=>{Re()?.dispatchEvent(new CustomEvent($e,{detail:e}));},zt=()=>Re()?.__flowrSdkActivityState??null,Be=(e,t)=>{let n=zt();return !!(n&&n.ownerId!==t&&n.mode!==e)},Ce=(e,t={})=>{let n=t.ownerId??Nr(e),r=()=>{let l=Re();if(!l)return  true;let s=l.__flowrSdkActivityState;return s&&s.ownerId!==n&&s.mode!==e?false:(l.__flowrSdkActivityState={mode:e,ownerId:n,startedAt:Date.now()},Vt(l.__flowrSdkActivityState),true)},o=()=>{let l=Re();if(!l)return;let s=l.__flowrSdkActivityState;!s||s.ownerId!==n||s.mode!==e||(delete l.__flowrSdkActivityState,Vt(null));},i=()=>Be(e,n);return {mode:e,ownerId:n,acquire:r,release:o,isBlocked:i,onBlocked:l=>{let s=Re();if(!s)return ()=>{};let u=()=>{i()&&l();};return s.addEventListener($e,u),u(),()=>s.removeEventListener($e,u)}}};});var et,Yt=K(()=>{et=e=>{let t=e,n=new Set,r=()=>{for(let o of [...n])try{o(t);}catch{}};return {get value(){return t},set(o){o!==t&&(t=o,r());},update(o){let i=false;for(let a of Object.keys(o)){let l=o[a];if(l!==void 0&&t[a]!==l){i=true;break}}i&&(t={...t,...o},r());},notify(){r();},subscribe(o){n.add(o);try{o(t);}catch{}return ()=>{n.delete(o);}}}};});var Hr,Ur,tt,Wt=K(()=>{Hr={primary:"background:#4f46e5;color:#fff;",secondary:"background:#e5e7eb;color:#111827;"},Ur="padding:8px 12px;border-radius:8px;border:none;cursor:pointer;font-weight:600;",tt=e=>{let t=document.createElement("button");return t.type="button",t.textContent=e.label,t.dataset.flowrAction=e.action??e.label.toLowerCase().replace(/\s+/g,"-"),t.style.cssText=Ur+Hr[e.variant??"primary"]+(e.extraCss??""),t.addEventListener("click",e.onClick),t};});var Fr,Ne,_r,Vr,zr,Gt,jt,nt,Jt=K(()=>{Fr=[.82,.72,.62,.52],Ne=async(e,t,n)=>e.convertToBlob({type:t,quality:n}),_r=async(e,t,n)=>{let r=.42,o=.95,i=null;for(let l=0;l<7;l+=1){let s=(r+o)/2,u=await Ne(e,t,s);u.size<=n?(i=u,r=s):o=s;}if(i)return i;let a=await Ne(e,t,.42);return a.size<=n?a:null},Vr=async(e,t)=>{let n=["image/webp","image/jpeg"];for(let r of n){let o=await _r(e,r,t);if(o&&o.size<=t)return o}return null},zr=async(e,t)=>{for(let n of Fr){let r=await Ne(e,"image/webp",n);if(r.size<=t)return r;let o=await Ne(e,"image/jpeg",n);if(o.size<=t)return o}return null},Gt=async e=>{let t=await e.arrayBuffer(),n=new Uint8Array(t),r="",o=32768;for(let a=0;a<n.length;a+=o){let l=n.subarray(a,a+o);r+=String.fromCharCode(...l);}let i=btoa(r);return `data:${e.type};base64,${i}`},jt=async(e,t,n)=>{let r=n?.mode??"quality",i=await(await fetch(e)).blob(),a=await createImageBitmap(i);if(i.size<=t)return {blob:i,width:a.width,height:a.height};if(typeof OffscreenCanvas>"u")return {blob:i,width:a.width,height:a.height};let l=a.width,s=a.height,u=r==="fast"?2:4,m=r==="fast"?.9:.82;for(let S=0;S<=u;S++){S>0&&(l=Math.max(1,Math.round(l*m)),s=Math.max(1,Math.round(s*m)));let d=new OffscreenCanvas(l,s),g=d.getContext("2d");if(!g)throw new Error("Failed to get OffscreenCanvas 2d context");g.imageSmoothingEnabled=true,g.imageSmoothingQuality="high",g.drawImage(a,0,0,l,s);let f=r==="fast"?await zr(d,t):await Vr(d,t);if(f)return {blob:f,width:l,height:s}}let c=new OffscreenCanvas(l,s),y=c.getContext("2d");if(!y)throw new Error("Failed to get OffscreenCanvas 2d context");return y.drawImage(a,0,0,l,s),c.convertToBlob({type:"image/jpeg",quality:.42}).then(S=>({blob:S,width:l,height:s}))},nt=async(e,t,n)=>{let r=await jt(e,t,n);return Gt(r.blob)};});var rt,Qt=K(()=>{rt=(e,t)=>{if(!t)return  false;let n=t.param.trim();if(!n)return  false;let r=new URLSearchParams(e);return r.has(n)?typeof t.value!="string"?true:r.get(n)===t.value:false};});var Kr,ce,ot,qt,Yr,$t,Wr,Gr,jr,Jr,en,tn,Xt,Qr,Xr,Zr,He,nn,me,Zt,be,Ue=K(()=>{Kr=["data-testid","data-test","data-qa","data-cy","data-automation","aria-label","name","role","title","alt","placeholder"],ce=e=>typeof CSS<"u"&&typeof CSS.escape=="function"?CSS.escape(e):e.replace(/[^a-zA-Z0-9_-]/g,"\\$&"),ot=e=>Array.from(new Set(e.filter(t=>t.length>0))),qt=e=>{if(!e||/^[:0-9]/.test(e)||/^_[A-Za-z0-9]{12,}(?:_\d+)?$/.test(e)||e.split(/[-_]/).filter(a=>a.length>0).some(a=>{let l=(a.match(/[a-z]/gi)??[]).length,s=(a.match(/[0-9]/g)??[]).length;return a.length>=10&&l>=4&&s>=2}))return  false;let r=e.replace(/[-_]/g,"");return r.length>=14&&/[a-z]/.test(r)&&/[A-Z]/.test(r)&&(/[0-9]/.test(r)||e.includes("_"))?false:(e.match(/[^a-zA-Z0-9_-]/g)??[]).length<=Math.floor(e.length/3)},Yr=e=>{if(!e||e.length<=2||e.length>=40||/^(css|sc|emotion|styled|_|__)[-_]/.test(e)||/[a-f0-9]{5,}/i.test(e))return  true;let t=(e.match(/[a-zA-Z]/g)??[]).length,n=(e.match(/[0-9]/g)??[]).length;return n>=3&&t>0&&n/(t+n)>.4},$t=e=>e?document.querySelectorAll(`#${ce(e)}`).length===1:false,Wr=e=>{if(!e)return  false;if(/^\d{4,}$/.test(e)||/^[0-9a-f]{8,}$/i.test(e)||/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(e))return  true;let t=(e.match(/[a-z]/gi)??[]).length,n=(e.match(/[0-9]/g)??[]).length;return e.length>=10&&t>0&&n>=3},Gr=e=>e.split("/").filter(n=>n.length>0).some(n=>Wr(n)),jr=e=>{let t=e.tagName.toLowerCase();if(t!=="a"&&t!=="area")return [];let n=e.getAttribute("href");if(!n||!n.trim()||n==="#")return [];try{let r=new URL(n,document.baseURI);if(r.search.length>0||Gr(r.pathname))return [];let o=[];o.push(`${t}[href="${ce(n)}"]`);let i=r.pathname;return i&&i!=="/"&&i!==n&&o.push(`${t}[href^="${ce(i)}"]`),o}catch{return [`${t}[href="${ce(n)}"]`]}},Jr=(e,t)=>{let n=e.getAttribute("aria-label");if(!n||!n.trim())return [];let r=[],o=n.trim();r.push(`${t}[aria-label="${ce(o)}"]`);let i=o.split(/\s+/);if(i.length>=3){for(let s of [5,3,2])if(i.length>s){let u=i.slice(0,s).join(" ");r.push(`${t}[aria-label^="${ce(u)}"]`);}}let a=new Set(["a","an","the","to","in","on","at","of","for","and","or","is","click","open","close","view","go","show","hide","navigate","select","submit","cancel","save","edit","delete","add","remove","new","more","back","next","previous","yes","no","ok","done"]),l=i.find(s=>s.length>2&&!a.has(s.toLowerCase()));return l&&l!==o&&r.push(`${t}[aria-label*="${ce(l)}"]`),r},en=e=>{let t=e.tagName.toLowerCase(),n=[];for(let r of jr(e))n.push(r);for(let r of Jr(e,t))n.push(r);for(let r of Kr){if(r==="aria-label")continue;let o=e.getAttribute(r);o&&o.trim()&&n.push(`${t}[${r}="${ce(o)}"]`);}return n},tn=e=>{let t=e.tagName.toLowerCase(),n=Array.from(e.classList).filter(i=>i.trim().length>0&&!Yr(i));if(n.length===0)return [];let r=n.map(i=>ce(i)),o=[];return o.push(`${t}.${r[0]}`),r.length>=2&&o.push(`${t}.${r.slice(0,2).join(".")}`),r.length>=3&&o.push(`${t}.${r.slice(0,3).join(".")}`),r.length<=5&&o.push(`${t}.${r.join(".")}`),ot(o)},Xt=e=>{let t=e.tagName.toLowerCase(),n=[];e.id&&qt(e.id)&&$t(e.id)&&n.push(`${t}#${ce(e.id)}`);for(let r of en(e))n.push(r);for(let r of tn(e))n.push(r);return n.push(t),ot(n)},Qr=e=>{let t=e.tagName.toLowerCase(),n=e.parentElement;if(!n)return t;let o=Array.from(n.children).filter(a=>a.tagName===e.tagName);if(o.length<=1)return t;let i=o.indexOf(e)+1;return `${t}:nth-of-type(${i})`},Xr=e=>{let t=Xt(e);for(let a of t)if(He(a))return a;let n=e.parentElement,r=0;for(;n&&n.tagName.toLowerCase()!=="html"&&r<6;){let a=Xt(n);for(let l of a){if(!He(l))continue;let s=[...t,Qr(e)];for(let u of s){let m=`${l} ${u}`;if(He(m))return m}}n=n.parentElement,r+=1;}let o=[],i=e;for(;i&&i.tagName.toLowerCase()!=="html";){let a=i.tagName.toLowerCase();if(i.id&&qt(i.id)&&$t(i.id)){o.unshift(`${a}#${ce(i.id)}`);break}let l=i.parentElement;if(!l)break;let u=Array.from(l.children).indexOf(i)+1;o.unshift(`${a}:nth-child(${u})`),i=l;}return o.join(" > ")},Zr=e=>{let t=[],n=e;for(;n&&n.nodeType===Node.ELEMENT_NODE;){let r=n,o=r.tagName.toLowerCase(),i=r.parentElement;if(!i){o==="html"&&t.unshift("html[1]");break}let s=Array.from(i.children).filter(u=>u.tagName===r.tagName).indexOf(r)+1;t.unshift(`${o}[${s}]`),n=i;}return t.length>0?`/${t.join("/")}`:""},He=e=>{try{return document.querySelectorAll(e).length===1}catch{return  false}},nn=e=>{let t=en(e),n=tn(e),o=ot([...t,...n]).filter(s=>He(s)),i=Xr(e),a=Zr(e),l=o.filter(s=>s!==i);return {css:i,xpath:a,attributes:l.length?l:void 0}},me=nn,Zt=e=>{try{return document.querySelector(e)}catch{return null}},be=e=>{let t=Zt(e.css);if(t)return t;if(e.attributes)for(let n of e.attributes){let r=Zt(n);if(r)return r}if(e.xpath)try{let r=document.evaluate(e.xpath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;if(r&&r.nodeType===Node.ELEMENT_NODE)return r}catch{}return null};});var xe,it=K(()=>{xe=`
.wr-highlight {
  position: fixed;
  pointer-events: none;
  border-radius: 8px;
  box-shadow: 0 0 0 9999px color-mix(in srgb, var(--flowr-sdk-overlay-background, #5a1c24) 34%, transparent);
  border: 2px solid var(--flowr-sdk-accent, #8d2e3a);
  background: color-mix(in srgb, var(--flowr-sdk-panel-background, #ffffff) 16%, transparent);
  backdrop-filter: brightness(1.05);
  z-index: 2147483646;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.wr-tooltip,
.wr-input-focus-tooltip {
  position: fixed;
  z-index: 2147483647;
  max-width: 300px;
  min-width: 100px;
  background: var(--flowr-sdk-surface-background, var(--flowr-sdk-panel-background, #ffffff));
  color: var(--flowr-sdk-panel-foreground, #5a1c24);
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid var(--flowr-sdk-panel-border, #e5d3d6);
  font: 13px var(--flowr-sdk-font-family, "Segoe UI", system-ui, -apple-system, Roboto, sans-serif);
  box-shadow: 0 18px 44px color-mix(in srgb, var(--flowr-sdk-accent, #8d2e3a) 18%, transparent), 0 4px 14px rgba(15, 23, 42, 0.10);
  pointer-events: none;
}

.wr-tooltip::before,
.wr-input-focus-tooltip::before {
  content: "";
  position: absolute;
  top: -7px;
  left: var(--wr-tooltip-arrow-left, 20px);
  border-width: 0 8px 8px 8px;
  border-style: solid;
  border-color: transparent transparent var(--flowr-sdk-surface-background, var(--flowr-sdk-panel-background, #ffffff)) transparent;
  filter: drop-shadow(0 -1px 0 var(--flowr-sdk-panel-border, #e5d3d6));
}

.wr-tooltip.is-above::before,
.wr-input-focus-tooltip.is-above::before {
  top: auto;
  bottom: -8px;
  border-width: 8px 8px 0 8px;
  border-color: var(--flowr-sdk-surface-background, var(--flowr-sdk-panel-background, #ffffff)) transparent transparent transparent;
  filter: drop-shadow(0 1px 0 var(--flowr-sdk-panel-border, #e5d3d6));
}

.wr-tooltip textarea {
  width: 100%;
  box-sizing: border-box;
  min-height: 72px;
  border-radius: 10px;
  border: 1px solid var(--flowr-sdk-panel-border, #e5d3d6);
  background: var(--flowr-sdk-surface-muted-background, color-mix(in srgb, var(--flowr-sdk-panel-background, #ffffff) 80%, white 20%));
  color: var(--flowr-sdk-panel-foreground, #5a1c24);
  padding: 8px;
  resize: vertical;
  pointer-events: auto;
}
`;});var qr,$r,rn,on,an,Fe,eo,sn,ln,dn,cn,pn=K(()=>{it();qr=`
  .flowr-overlay-host {
    position: fixed; inset: 0;
    pointer-events: none;
    z-index: 2147483646;
  }
  .wr-highlight[data-flowr-replay-highlight] {
    /* Force visible inside the SDK overlay (the extension fades in via JS).
     * Recorder SDKs share this ShadowRoot with authoring UI whose highlight
     * starts hidden via display:none, so replay must also restore display. */
    display: block;
    opacity: 1;
    transition: opacity .2s ease;
    background: transparent;
    backdrop-filter: none;
    box-shadow: none;
  }
  .flowr-replay-mask {
    position: fixed;
    pointer-events: none;
    background: color-mix(in srgb, var(--flowr-sdk-overlay-background, #5a1c24) 42%, transparent);
    z-index: 2147483645;
  }
  .wr-tooltip {
    pointer-events: auto;
  }
  .wr-tooltip .t-title {
    width: fit-content;
    max-width: 100%;
    font-size: 11px;
    font-weight: 700;
    color: var(--flowr-sdk-accent, #8d2e3a);
    text-transform: uppercase;
    letter-spacing: .04em;
    margin: 0 auto 6px;
    padding: 3px 7px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--flowr-sdk-accent, #8d2e3a) 10%, var(--flowr-sdk-surface-background, #ffffff) 90%);
    text-align: center;
  }
  .wr-tooltip .t-body {
    font-size: 13px;
    color: var(--flowr-sdk-panel-foreground, #5a1c24);
    line-height: 1.4;
  }
  .wr-tooltip .t-action {
    margin: 12px auto 0;
    padding: 9px 12px;
    display: flex;
    width: fit-content;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 10px;
    background: var(--flowr-sdk-accent, #8d2e3a);
    color: var(--flowr-sdk-accent-foreground, #ffffff);
    font-weight: 600;
    font-size: 13px;
    text-align: center;
    cursor: pointer;
    font-family: inherit;
  }
  .wr-tooltip .t-action:active {
    transform: scale(0.95);
  }
  .flowr-replay-overlay {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    max-width: min(360px, calc(100vw - 24px));
    padding: 12px 14px;
    border-radius: 14px;
    background: var(--flowr-sdk-overlay-background, rgba(90, 28, 36, 0.94));
    color: var(--flowr-sdk-overlay-foreground, #ffffff);
    border: 1px solid color-mix(in srgb, var(--flowr-sdk-panel-border, #e5d3d6) 70%, transparent);
    box-shadow: 0 18px 46px color-mix(in srgb, var(--flowr-sdk-overlay-background, #5a1c24) 26%, black 74%), 0 4px 14px rgba(15, 23, 42, 0.12);
    font: 13px var(--flowr-sdk-font-family, "Segoe UI", system-ui, -apple-system, Roboto, sans-serif);
    line-height: 1.45;
    text-align: center;
  }
  .flowr-replay-overlay[data-placement="bottom"] {
    top: auto;
    bottom: 16px;
  }
  .flowr-replay-overlay[data-placement="left"] {
    top: 50%;
    right: auto;
    left: 16px;
    transform: translateY(-50%);
  }
  .flowr-replay-overlay[data-placement="right"] {
    top: 50%;
    right: 16px;
    left: auto;
    transform: translateY(-50%);
  }
`,$r=`${xe}
${qr}`,rn="flowr-anchored-tooltip-style",on=e=>{if(e.getElementById(rn))return;let t=document.createElement("style");t.id=rn,t.textContent=$r,e.appendChild(t);},an=()=>({width:window.innerWidth||document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}),Fe=(e,t,n)=>n<t?t:Math.max(Math.min(e,n),t),eo=e=>{let{width:t,height:n}=an(),r=4,o=e.left+e.width,i=e.top+e.height,a=o>0&&e.left<t,l=i>0&&e.top<n,s=a?Fe(e.left,0,t):o<=0?0:Math.max(t-r,0),u=a?Fe(o,0,t):Math.min(s+r,t),m=l?Fe(e.top,0,n):i<=0?0:Math.max(n-r,0),c=l?Fe(i,0,n):Math.min(m+r,n);return {top:m,left:s,width:Math.max(u-s,r),height:Math.max(c-m,r)}},sn=(e,t)=>{on(e);let n=document.createElement("div");n.className="flowr-overlay-host",e.appendChild(n);let r=Array.from({length:4},()=>{let c=document.createElement("div");return c.className="flowr-replay-mask",n.appendChild(c),c}),o=document.createElement("div");o.className="wr-highlight",o.setAttribute("data-flowr-replay-highlight",""),n.appendChild(o);let i=()=>t.targetElement instanceof Element?t.targetElement.getBoundingClientRect():t.targetRect,a=(c,y)=>{c.style.top=`${y.top}px`,c.style.left=`${y.left}px`,c.style.width=`${Math.max(y.width,0)}px`,c.style.height=`${Math.max(y.height,0)}px`;},l=c=>{let{width:y,height:S}=an(),d=Math.min(c.left+c.width,y),g=Math.min(c.top+c.height,S);a(r[0],{top:0,left:0,width:y,height:c.top}),a(r[1],{top:g,left:0,width:y,height:S-g}),a(r[2],{top:c.top,left:0,width:c.left,height:g-c.top}),a(r[3],{top:c.top,left:d,width:y-d,height:g-c.top});},s=()=>{let c=i(),y=eo(c);l(y),o.style.top=`${y.top}px`,o.style.left=`${y.left}px`,o.style.width=`${y.width}px`,o.style.height=`${y.height}px`,t.onPositionUpdate?.(c);};s();let u=null,m=null;return window.addEventListener("resize",s,{passive:true}),t.targetElement&&(window.addEventListener("scroll",s,{capture:true,passive:true}),typeof ResizeObserver<"u"&&(u=new ResizeObserver(()=>s()),u.observe(t.targetElement)),typeof MutationObserver<"u"&&(m=new MutationObserver(()=>s()),m.observe(document.body??document.documentElement,{attributes:true,childList:true,subtree:true}))),{host:n,getTargetRect:i,destroy:()=>{window.removeEventListener("scroll",s,{capture:true}),window.removeEventListener("resize",s),u?.disconnect(),m?.disconnect(),n.remove();}}},ln=(e,t)=>sn(e,t),dn=(e,t)=>{let n=null,r=l=>{if(!n)return;let s=n.offsetHeight||120,u=n.offsetWidth||320,m=l.top+l.height+12,c=m+s+12<window.innerHeight;n.classList.toggle("is-above",!c),n.style.top=c?`${m}px`:`${Math.max(l.top-s-12,12)}px`,n.style.left=`${Math.max(Math.min(l.left,window.innerWidth-u-12),12)}px`;},o=sn(e,{...t,onPositionUpdate:r});n=document.createElement("div"),n.className="wr-tooltip",n.setAttribute("data-flowr-tooltip","");let i=document.createElement("div");i.className="t-title",i.textContent=t.title,n.appendChild(i);let a=document.createElement("div");if(a.className="t-body",a.textContent=t.body,n.appendChild(a),t.actionLabel){let l=document.createElement("button");l.type="button",l.className="t-action",l.textContent=t.actionLabel,l.addEventListener("click",()=>t.onAction?.()),n.appendChild(l);}return o.host.appendChild(n),r(o.getTargetRect()),{destroy:()=>{o.destroy();}}},cn=(e,t,n="top")=>{on(e);let r=document.createElement("div");r.className="flowr-overlay-host",r.setAttribute("data-flowr-replay-overlay",""),e.appendChild(r);let o=document.createElement("div");return o.className="flowr-replay-overlay",o.dataset.placement=n,o.textContent=t,r.appendChild(o),{destroy:()=>{r.remove();},setMessage:(i,a=n)=>{o.dataset.placement=a,o.textContent=i;}}};});var un=K(()=>{});var gn=K(()=>{});var fn,mn=K(()=>{fn=["aa","aa-ER","af","af-NA","af-ZA","am","am-ET","ar","ar-AE","ar-BH","ar-DJ","ar-DZ","ar-EG","ar-ER","ar-IL","ar-IQ","ar-JO","ar-KM","ar-KW","ar-LB","ar-LY","ar-MA","ar-MR","ar-OM","ar-PS","ar-QA","ar-SA","ar-SD","ar-SO","ar-SY","ar-TD","ar-TN","ar-YE","ay","ay-BO","az","az-AZ","be","be-BY","bg","bg-BG","bi","bi-VU","bn","bn-BD","bs","bs-BA","bs-ME","byn","byn-ER","ca","ca-AD","ch","ch-GU","ch-MP","cs","cs-CZ","da","da-DK","de","de-AT","de-BE","de-CH","de-DE","de-LI","de-LU","de-VA","dv","dv-MV","dz","dz-BT","el","el-CY","el-GR","en","en-AG","en-AI","en-AQ","en-AS","en-AU","en-BB","en-BM","en-BS","en-BW","en-BZ","en-CA","en-CC","en-CK","en-CM","en-CW","en-CX","en-DM","en-ER","en-FJ","en-FK","en-FM","en-GB","en-GD","en-GG","en-GH","en-GI","en-GM","en-GS","en-GU","en-GY","en-HK","en-HM","en-IE","en-IM","en-IN","en-IO","en-JE","en-JM","en-KE","en-KI","en-KN","en-KY","en-LC","en-LR","en-LS","en-MF","en-MH","en-MP","en-MS","en-MT","en-MU","en-MW","en-NA","en-NF","en-NG","en-NR","en-NU","en-NZ","en-PG","en-PH","en-PK","en-PN","en-PR","en-PW","en-RW","en-SB","en-SC","en-SD","en-SG","en-SH","en-SL","en-SS","en-SX","en-SZ","en-TC","en-TK","en-TO","en-TT","en-TV","en-TZ","en-UG","en-UM","en-US","en-VC","en-VG","en-VI","en-VU","en-WS","en-ZA","en-ZM","en-ZW","es","es-AR","es-BO","es-BZ","es-CL","es-CO","es-CR","es-CU","es-DO","es-EC","es-EH","es-ES","es-GQ","es-GT","es-GU","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-PY","es-SV","es-UY","es-VE","et","et-EE","fa","fa-IR","fan","fan-GQ","ff","ff-BF","ff-GN","fi","fi-FI","fj","fj-FJ","fo","fo-FO","fr","fr-BE","fr-BF","fr-BI","fr-BJ","fr-BL","fr-CA","fr-CD","fr-CF","fr-CG","fr-CH","fr-CI","fr-CM","fr-DJ","fr-FR","fr-GA","fr-GF","fr-GG","fr-GN","fr-GP","fr-GQ","fr-HT","fr-JE","fr-KM","fr-LB","fr-LU","fr-MC","fr-MF","fr-MG","fr-ML","fr-MQ","fr-NC","fr-NE","fr-PF","fr-PM","fr-RE","fr-RW","fr-SC","fr-SN","fr-TD","fr-TF","fr-TG","fr-VA","fr-VU","fr-WF","fr-YT","ga","ga-IE","gn","gn-AR","gn-PY","gv","gv-IM","he","he-IL","hi","hif","hif-FJ","hi-IN","hr","hr-BA","hr-HR","hr-ME","ht","ht-HT","hu","hu-HU","hy","hy-AM","hy-CY","id","id-ID","is","is-IS","it","it-CH","it-IT","it-SM","it-VA","ja","ja-JP","ka","ka-GE","kg","kg-CD","kk","kk-KZ","kl","kl-GL","km","km-KH","ko","ko-KP","ko-KR","ku","ku-IQ","kun","kun-ER","ky","ky-KG","la","la-VA","lb","lb-LU","ln","ln-CD","ln-CG","lo","lo-LA","lt","lt-LT","lu","lu-CD","lv","lv-LV","mg","mg-MG","mh","mh-MH","mi","mi-NZ","mk","mk-MK","mn","mn-MN","ms","ms-BN","ms-MY","ms-SG","mt","mt-MT","my","my-MM","na","na-NR","nb","nb-BV","nb-NO","nd","nd-ZW","ne","ne-NP","nl","nl-AW","nl-BE","nl-BQ","nl-CW","nl-MF","nl-NL","nl-SR","nl-SX","nn","nn-BV","nn-NO","no","no-BV","no-NO","no-SJ","nr","nrb","nrb-ER","nr-ZA","ny","ny-MW","pa","pa-AW","pa-CW","pl","pl-PL","ps","ps-AF","pt","pt-AO","pt-BR","pt-CV","pt-GQ","pt-GW","pt-MO","pt-MZ","pt-PT","pt-ST","pt-TL","qu","qu-BO","rar","rar-CK","rm","rm-CH","rn","rn-BI","ro","ro-MD","ro-RO","rtm","rtm-FJ","ru","ru-AQ","ru-BY","ru-KG","ru-KZ","ru-RU","ru-TJ","ru-TM","ru-UZ","rw","rw-RW","sg","sg-CF","si","si-LK","sk","sk-CZ","sk-SK","sl","sl-SI","sm","sm-AS","sm-WS","sn","sn-ZW","so","so-SO","sq","sq-AL","sq-ME","sq-XK","sr","sr-BA","sr-ME","sr-RS","sr-XK","ss","ss-SZ","ssy","ssy-ER","ss-ZA","st","st-LS","st-ZA","sv","sv-AX","sv-FI","sv-SE","sw","sw-CD","sw-KE","sw-TZ","sw-UG","ta","ta-LK","ta-SG","tg","tg-TJ","th","th-TH","ti","ti-ER","tig","tig-ER","tk","tk-AF","tk-TM","tn","tn-BW","tn-ZA","to","to-TO","tr","tr-CY","tr-TR","ts","ts-ZA","uk","uk-UA","ur","ur-PK","uz","uz-AF","uz-UZ","ve","ve-ZA","vi","vi-VN","xh","xh-ZA","zh","zh-CN","zh-HK","zh-MO","zh-SG","zh-TW","zu","zu-ZA"],(()=>{try{return Intl.DateTimeFormat.supportedLocalesOf(Array.from(fn))}catch{return Array.from(fn)}})();});var at=K(()=>{});var st,_e=K(()=>{st=(e,t)=>e.steps.filter((n,r)=>r<t&&!!n.skipCondition);});var hn=K(()=>{at();_e();});var ae,bn=K(()=>{ae=(e,t,n)=>{let r=n?.mode??"strict";try{let o=new URL(e),i=new URL(t);if(o.origin!==i.origin)return !1;let a=o.pathname.replace(/\/+$/,"")||"/",l=i.pathname.replace(/\/+$/,"")||"/";return a===l?r==="same-path-query-agnostic"?!0:o.search===i.search&&o.hash===i.hash:o.search!==""||o.hash!==""||i.search!==""||i.hash!==""?!1:l==="/"?!0:a.startsWith(`${l}/`)}catch{return e===t}};});var yn=K(()=>{});var wn=K(()=>{});var An=K(()=>{});var lt=K(()=>{un();gn();mn();hn();at();_e();bn();_e();yn();wn();An();});var dt,ct,pt=K(()=>{lt();dt=st,ct=(e,t,n)=>{let r=e.skipCondition;if(!r)return null;let o=false;if(r.type==="element-not-visible"&&e.selector){let a=n.findElement(e.selector);o=!a||!n.isElementVisible(a);}else if(r.type==="element-visible"&&r.selector){let a=n.findElement(r.selector);o=!!a&&n.isElementVisible(a);}else if((r.type==="step-skipped"||r.type==="step-not-skipped")&&r.referenceStepId){let a=t.steps.findIndex(s=>s.id===r.referenceStepId);if(a>=0&&a<n.currentIndex){let s=n.skippedStepIds.has(r.referenceStepId);o=r.type==="step-skipped"?s:!s;}}if(!o)return null;if(!r.jumpToStepId)return {jumpToIndex:t.steps.length};let i=t.steps.findIndex(a=>a.id===r.jumpToStepId);return i<0||i<=n.currentIndex?null:{jumpToIndex:i}};});var Ve,ze,Ee,Cn,ut,vn,In,Sn,Rn=K(()=>{Ve=e=>{let t=e.getBoundingClientRect();if(t.width===0||t.height===0)return  false;let n=window.getComputedStyle(e);return n.visibility!=="hidden"&&n.display!=="none"},ze=e=>{let t=e.getBoundingClientRect(),n=window.innerHeight||document.documentElement.clientHeight,r=window.innerWidth||document.documentElement.clientWidth;return t.top>=0&&t.left>=0&&t.bottom<=n&&t.right<=r},Ee=(e,t)=>typeof t=="string"&&t.trim()?t.trim():e,Cn=(e,t)=>{let n=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth;return n.top<0?{message:Ee("Scroll up to the highlighted element",t?.scrollUp),placement:"top"}:n.bottom>r?{message:Ee("Scroll down to the highlighted element",t?.scrollDown),placement:"bottom"}:n.left<0?{message:Ee("Scroll left to the highlighted element",t?.scrollLeft),placement:"left"}:n.right>o?{message:Ee("Scroll right to the highlighted element",t?.scrollRight),placement:"right"}:{message:Ee("Scroll to the highlighted element",t?.scrollGeneric),placement:"top"}},ut=e=>e==="key enter"?{key:"Enter",code:"Enter",shiftKey:false}:e==="key tab"?{key:"Tab",code:"Tab",shiftKey:false}:{key:"Tab",code:"Tab",shiftKey:true},vn=(e,t)=>{let{key:n,code:r,shiftKey:o}=ut(t);e instanceof HTMLElement&&e.focus(),e.dispatchEvent(new KeyboardEvent("keydown",{key:n,code:r,shiftKey:o,bubbles:true,cancelable:true})),e.dispatchEvent(new KeyboardEvent("keyup",{key:n,code:r,shiftKey:o,bubbles:true,cancelable:true}));},In=(e,t)=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?(e.value=t,e.dispatchEvent(new Event("input",{bubbles:true})),e.dispatchEvent(new Event("change",{bubbles:true})),true):e instanceof HTMLSelectElement?(e.value=t,e.dispatchEvent(new Event("change",{bubbles:true})),true):e.getAttribute("contenteditable")==="true"?(e.textContent=t,e.dispatchEvent(new Event("input",{bubbles:true})),true):false,Sn=e=>{switch(e.kind){case "click":return "Click this element to continue.";case "hover":return "Hover this element to continue.";case "context-click":return "Right-click this element to continue.";case "input":return e.value?`Enter: ${e.value}`:"Fill in this field.";case "input password":return "Enter your password.";case "scroll":return "Scroll to this section.";case "key enter":return "Press Enter to continue.";case "key tab":return "Press Tab to move to the next field.";case "key shift+tab":return "Press Shift+Tab to move to the previous field.";default:return ""}};});var ke=K(()=>{lt();});var pe,ge,gt,xn=K(()=>{Ue();pn();pt();Rn();ke();pe={scrollSettleMs:120,scrollKindSettleMs:150,autoDelayMs:600,skipJumpAutoDelayMs:200,targetPollMs:150,targetWaitMs:1e4},ge=e=>new Promise(t=>{setTimeout(t,e);}),gt=e=>{let{recording:t,shadowRoot:n}=e,r=t.steps.length,o=0,i=false,a=null,l=null,s=null,u=0,m=new Set,c=I=>{e.onEvent?.(I);},y=I=>!i&&I===u,S=I=>{if(!y(I))throw new Error("replay stopped")},d=()=>{l?.destroy(),l=null;},g=()=>{s?.(),s=null,d(),a?.destroy(),a=null;},f=(I=u)=>{if(!y(I))return;if(o>=r){g(),c({type:"complete"});return}let B=t.steps[o];if(B.kind==="navigation"&&typeof B.url=="string"&&B.url.trim()&&ae(window.location.href,B.url,{mode:"strict"})){o+=1,f(I);return}c({type:"step",index:o,total:r,step:B});let p=ct(B,t,{findElement:be,isElementVisible:Ve,skippedStepIds:m,currentIndex:o});if(p){m.add(B.id),g(),o=p.jumpToIndex,e.auto?ge(e.autoDelayMs??pe.skipJumpAutoDelayMs).then(()=>f(I)):f(I);return}O(B,I).then(x=>{y(I)&&(x?.advanced||(o+=1,!(B.kind==="navigation"&&!e.auto)&&(e.auto?ge(e.autoDelayMs??pe.autoDelayMs).then(()=>f(I)):f(I))));}).catch(x=>{y(I)&&c({type:"step-error",index:o,step:B,error:x});});},P=(I,B,p,x)=>{let A=I.getBoundingClientRect();a=dn(n,{targetElement:I,targetRect:{top:A.top,left:A.left,width:A.width,height:A.height},title:`Step ${o+1} / ${r}`,body:B.instruction??Sn(B),actionLabel:p,onAction:x});},b=()=>{a?.destroy(),a=null;},T=async I=>{ze(I)||await new Promise(B=>{let p=null,x=null,A=false,h=()=>{x!==null&&(window.clearInterval(x),x=null),window.removeEventListener("scroll",R,true),window.removeEventListener("resize",R,true),p?.destroy(),p=null;},w=()=>{A||(A=true,h(),s=null,B());},R=()=>{if(ze(I)){w();return}let{message:E,placement:D}=Cn(I,e.overlayCopy);if(!p){p=cn(n,E,D);return}p.setMessage(E,D);};s=w,window.addEventListener("scroll",R,true),window.addEventListener("resize",R,true),x=window.setInterval(R,100),R();});},M=async I=>{if(ze(I))return;let B=I.getBoundingClientRect(),p=ln(n,{targetElement:I,targetRect:{top:B.top,left:B.left,width:B.width,height:B.height}});l=p;try{await T(I);}finally{l===p&&(l=null),p.destroy();}},C=async I=>{let B=Date.now()+(e.targetWaitMs??pe.targetWaitMs);do{let p=I.selector?be(I.selector):null;if(p&&Ve(p))return p;await ge(pe.targetPollMs);}while(!i&&Date.now()<B);return i?null:I.selector?be(I.selector):null},O=async(I,B)=>{if(g(),I.kind==="navigation"||!I.selector)return;let p=await C(I);if(S(B),!p)throw new Error(`element not found for step ${o+1}`);if(!Ve(p))throw new Error(`element not visible for step ${o+1}`);if(I.kind==="scroll"){if(e.auto){p.scrollIntoView({behavior:"smooth",block:"center"}),await ge(pe.scrollKindSettleMs);return}await M(p),S(B),await new Promise(x=>{let A=false,h=()=>{A||(A=true,s=null,b(),x());};P(p,I,"Continue",h),s=h;});return}if(I.kind==="key enter"||I.kind==="key tab"||I.kind==="key shift+tab"){if(e.auto){p.scrollIntoView({behavior:"smooth",block:"center"}),await ge(pe.scrollSettleMs),await new Promise(x=>{P(p,I,null,()=>{}),vn(p,I.kind),ge(e.autoDelayMs??pe.autoDelayMs).then(()=>{b(),x();});});return}await M(p),S(B),await new Promise(x=>{let{key:A,shiftKey:h}=ut(I.kind),w=false;function R(){w||(w=true,document.removeEventListener("keydown",E,true),s=null,b(),x());}function E(D){D.key!==A||D.shiftKey!==h||D.target instanceof Node&&(D.target!==p&&!p.contains(D.target)||window.requestAnimationFrame(R));}P(p,I,null,()=>{}),p instanceof HTMLElement&&p.focus(),document.addEventListener("keydown",E,true),s=R;});return}if(e.auto?(p.scrollIntoView({behavior:"smooth",block:"center"}),await ge(pe.scrollSettleMs)):(await M(p),S(B)),I.kind==="click"){await new Promise(x=>{let A=false;function h(){w();}function w(){A||(A=true,p.removeEventListener("click",h,true),s=null,b(),x());}P(p,I,null,()=>{}),p.addEventListener("click",h,true),s=w;});return}if(I.kind==="hover"){await new Promise(x=>{let A=false;function h(){w();}function w(){A||(A=true,p.removeEventListener("mouseenter",h,true),s=null,b(),x());}P(p,I,null,w),p.addEventListener("mouseenter",h,true),s=w,e.auto&&ge(e.autoDelayMs??pe.autoDelayMs).then(w);});return}if(I.kind==="context-click"){await new Promise(x=>{let A=false;function h(R){R.preventDefault(),w();}function w(){A||(A=true,p.removeEventListener("contextmenu",h,true),s=null,b(),x());}P(p,I,null,()=>{}),p.addEventListener("contextmenu",h,true),s=w,e.auto&&ge(e.autoDelayMs??pe.autoDelayMs).then(w);});return}if(I.kind==="input"||I.kind==="input password"){await new Promise(x=>{let A=false,h=()=>{A||(A=true,s=null,b(),x());};P(p,I,"Continue",h),s=h;let w=p;typeof I.value=="string"&&e.auto&&(w.focus(),In(w,I.value),ge(e.autoDelayMs??pe.autoDelayMs).then(h));});return}};return {start(I=0){u+=1,g(),i=false,o=Math.min(Math.max(0,Math.floor(I)),r),m.clear(),f(u);},stop(){i=true,u+=1,g(),c({type:"stopped"});},next(){u+=1,g(),o+=1,f(u);},current:()=>o}};});var Te,ft,mt=K(()=>{Te=(e,t)=>(e.composedPath?.()??[]).some(r=>r===t),ft=e=>e.key==="Enter"?"key enter":e.key==="Tab"?e.shiftKey?"key shift+tab":"key tab":null;});var Pe,En,ao,ht,kn=K(()=>{Ue();mt();ke();Pe=e=>{if(e instanceof HTMLInputElement){let t=(e.type||"text").toLowerCase();return t!=="button"&&t!=="submit"&&t!=="reset"&&t!=="file"}return e instanceof HTMLTextAreaElement?true:e instanceof HTMLSelectElement?false:e instanceof HTMLElement&&e.isContentEditable},En=e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?e.value:e instanceof HTMLElement&&e.isContentEditable?e.textContent??"":null,ao=(e,t)=>{if(t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return null;let n=e.closest("a[href], area[href]");if(!(n instanceof HTMLElement))return null;if(n instanceof HTMLAnchorElement||n instanceof HTMLAreaElement){let r=n.getAttribute("href")?.trim(),o=n.getAttribute("target")?.trim().toLowerCase();if(!r||r==="#"||n.hasAttribute("download")||o&&o!=="_self")return null;try{let i=new URL(r,document.baseURI).href;return ae(window.location.href,i,{mode:"strict"})?null:i}catch{return null}}return null},ht=e=>{let t=false,n=false,r=null,o=new WeakMap,i=new WeakMap,a=d=>{let g={bubbles:true,cancelable:true,composed:true,button:0,buttons:1,pointerId:1,pointerType:"mouse",isPrimary:true},f={bubbles:true,cancelable:true,composed:true,button:0,buttons:1,detail:1};if(d instanceof HTMLElement)try{d.focus({preventScroll:!0});}catch{d.focus();}typeof PointerEvent<"u"&&d.dispatchEvent(new PointerEvent("pointerdown",g)),d.dispatchEvent(new MouseEvent("mousedown",f)),typeof PointerEvent<"u"&&d.dispatchEvent(new PointerEvent("pointerup",{...g,buttons:0})),d.dispatchEvent(new MouseEvent("mouseup",{...f,buttons:0})),d.dispatchEvent(new MouseEvent("click",f));},l=d=>Te(d,e.ignoreHost),s=(d,g)=>{let f=d instanceof HTMLInputElement&&d.type.toLowerCase()==="password",P=me(d),b={id:e.randomId(),kind:f?"input password":"input",url:window.location.href,selector:P,value:f?void 0:g,timestamp:e.now()};e.onStep(b),o.delete(d),i.set(d,g);},u=d=>{if(!Pe(d))return  false;let g=o.get(d);return g===void 0?false:(s(d,g),true)},m=d=>{if(!t||l(d)||d.button!==0)return;let g=d.target;if(!g||!(g instanceof Element))return;if(!d.isTrusted&&r===g){r=null;return}if(n){d.preventDefault(),"stopImmediatePropagation"in d&&d.stopImmediatePropagation(),d.stopPropagation();return}let f=C=>({id:e.randomId(),kind:"click",url:window.location.href,selector:me(g),textContent:(g.textContent??"").trim().slice(0,120)||void 0,instruction:C,timestamp:e.now()}),P=C=>({id:e.randomId(),kind:"navigation",url:C,instruction:`Navigate to ${C}`,timestamp:e.now()}),b=ao(g,d);if(!e.promptInstruction){e.onStep(f()),b&&e.onStep(P(b));return}d.preventDefault(),"stopImmediatePropagation"in d&&d.stopImmediatePropagation(),d.stopPropagation();let T=Pe(g),M=false;n=true,e.promptInstruction(g).then(C=>{if(C!==null&&(e.onStep(f(C||void 0)),b&&e.onStep(P(b)),M=!T),T&&g instanceof HTMLElement)try{g.focus({preventScroll:!0});}catch{g.focus();}}).finally(()=>{n=false,M&&(r=g,a(g),r===g&&(r=null));});},c=d=>{if(!t||l(d)||n)return;let g=d.target;if(!g||!(g instanceof Element)||!Pe(g))return;let f=o.get(g),P=En(g),b=f??P;b!==null&&(f===void 0&&i.get(g)===b||s(g,b));},y=d=>{if(!t||l(d)||n)return;let g=d.target;if(!g||!(g instanceof Element)||!Pe(g))return;let f=En(g);f!==null&&o.set(g,f);},S=d=>{if(!t||l(d)||n)return;let g=ft(d);if(!g)return;let f=d.target;f instanceof Element&&Pe(f)&&u(f);let P=f instanceof Element?me(f):void 0,b={id:e.randomId(),kind:g,url:window.location.href,selector:P,timestamp:e.now()};e.onStep(b);};return {start(){t||(t=true,document.addEventListener("click",m,true),document.addEventListener("input",y,true),document.addEventListener("change",c,true),document.addEventListener("keydown",S,true));},stop(){t&&(t=false,n=false,document.removeEventListener("click",m,true),document.removeEventListener("input",y,true),document.removeEventListener("change",c,true),document.removeEventListener("keydown",S,true));},isActive:()=>t}};});var bt,Tn,so,lo,Pn,Ln=K(()=>{bt=(e,t,n)=>n<t?t:Math.min(Math.max(e,t),n),Tn=(e,t)=>e>0?e:t,so=(e,t,n)=>{let r=t.getBoundingClientRect(),o=e.getBoundingClientRect(),i=window.getComputedStyle(e),a=Tn(o.width,e.offsetWidth),l=Tn(o.height,e.offsetHeight),s=Number.parseFloat(i.borderLeftWidth||"0"),u=Number.parseFloat(i.borderRightWidth||"0"),m=Math.max(0,a-s-u),c=window.innerWidth,y=window.innerHeight,S=r.left+r.width/2,g=(n?.horizontalAlign??"center")==="anchor-start"?r.left:S-a/2,f=c-a-8-.5,P=bt(g,8,f),b=r.bottom+8,T=r.top-l-8,M=y-r.bottom-8-8,C=r.top-8-8,O=M<l&&C>M,H=O?T:b,I=y-l-8-.5,B=bt(H,8,I),p=bt(S-P-s-8,24,Math.max(24,m-24-16));return {top:B,left:P,arrowLeft:p,shouldPlaceAbove:O}},lo=(e,t,n)=>{let r=so(e,t,n);return e.classList.toggle("is-above",r.shouldPlaceAbove),e.style.setProperty("--wr-tooltip-arrow-left",`${r.arrowLeft}px`),e.style.top=`${r.top}px`,e.style.left=`${r.left}px`,r},Pn=(e,t,n)=>{let r=()=>{lo(e,t,n);};r(),e.offsetHeight,r();let o=e.ownerDocument?.defaultView??window;o.addEventListener("scroll",r,{capture:true,passive:true}),o.addEventListener("resize",r,{passive:true});let i=null;return n?.observeAnchorResize&&typeof ResizeObserver<"u"&&(i=new ResizeObserver(r),i.observe(t)),()=>{o.removeEventListener("scroll",r,{capture:true}),o.removeEventListener("resize",r),i?.disconnect();}};});var Ye,Mn,ye,We,co,Le,Ke,On,po,uo,Dn,Ge,yt,Bn,je,wt,Nn=K(()=>{ke();Ye="flowr:sdk:pending-replay-refresh",Mn=3e4,ye="flowr:sdk-recorder:pending-refresh",We=()=>{try{return typeof sessionStorage>"u"?null:sessionStorage}catch{return null}},co=()=>{try{return typeof window>"u"||!("scrollRestoration"in window.history)?void 0:window.history.scrollRestoration==="manual"?"manual":"auto"}catch{return}},Le=e=>{try{typeof window<"u"&&"scrollRestoration"in window.history&&(window.history.scrollRestoration=e);}catch{}},Ke=()=>{try{window.scrollTo({top:0,left:0,behavior:"auto"});}catch{try{window.scrollTo(0,0);}catch{}}},On=()=>{let e=co();return Le("manual"),Ke(),e},po=e=>{if(typeof window>"u")return;Le("manual"),Ke();let t=()=>{Ke(),e&&Le(e);};try{window.requestAnimationFrame(()=>{Ke(),window.setTimeout(t,0);});}catch{window.setTimeout(t,0);}},uo=(e,t,n,r)=>{let o=e.getItem(t);if(!o)return null;try{let i=JSON.parse(o);return !i||i.version!==1||typeof i.recordingId!="string"||typeof i.startUrl!="string"||typeof i.createdAt!="number"||i.stepIndex!==void 0&&(!Number.isInteger(i.stepIndex)||i.stepIndex<0)||i.scrollRestoration!==void 0&&i.scrollRestoration!=="auto"&&i.scrollRestoration!=="manual"||n-i.createdAt>r?(e.removeItem(t),null):i}catch{return e.removeItem(t),null}},Dn=(e,t,n,r,o,i,a,l)=>{let s={version:1,recordingId:n.id,startUrl:r,createdAt:o,...l!==void 0?{stepIndex:l}:{},...a?{scrollRestoration:a}:{},...i?{recording:n}:{}};try{return e.setItem(t,JSON.stringify(s)),!0}catch{if(!i)return  false}try{let{recording:u,...m}=s;return e.setItem(t,JSON.stringify(m)),!0}catch{return  false}},Ge=(e,t)=>{if(t.enabled===false||typeof window>"u")return  false;let n=t.targetUrl.trim();if(!n)return  false;let r=We();if(!r)return  false;let o=t.storageKey??Ye,i=t.now?.()??Date.now(),a=t.stepIndex!==void 0?Math.max(0,Math.floor(t.stepIndex)):void 0,l=t.prepareScroll?On():void 0,s=Dn(r,o,e,n,i,t.persistRecording===true,l,a);return !s&&l&&Le(l),s},yt=(e,t={})=>{if(t.enabled===false||typeof window>"u")return  false;let n=e.startUrl?.trim();return !n||ae(window.location.href,n,{mode:"strict"})||!Ge(e,{...t,targetUrl:n,stepIndex:t.stepIndex??0,prepareScroll:true})?false:(window.location.assign(n),true)},Bn=(e={})=>{if(e.enabled===false||typeof window>"u")return null;let t=We();if(!t)return null;let n=e.storageKey??Ye,r=e.now?.()??Date.now(),o=e.ttlMs??Mn,i=uo(t,n,r,o);return !i||e.recordingId&&i.recordingId!==e.recordingId||!ae(window.location.href,i.startUrl,{mode:"strict"})?null:i},je=(e={})=>{let t=Bn(e);if(!t)return null;let n=We();return n?(n.removeItem(e.storageKey??Ye),po(t.scrollRestoration),t):null},wt=(e,t={})=>{if(t.enabled===false||typeof window>"u")return  false;let n=e.startUrl?.trim();if(!n||!ae(window.location.href,n,{mode:"strict"}))return  false;let r=We();if(!r)return  false;let o=t.storageKey??Ye,i=t.now?.()??Date.now(),a=t.ttlMs??Mn,l=je({enabled:t.enabled,storageKey:o,ttlMs:a,now:()=>i,recordingId:e.id});if(l?.recordingId===e.id&&l.startUrl===n)return  false;let s=On();return Dn(r,o,e,n,i,t.persistRecording===true,s,void 0)?(window.location.reload(),true):(s&&Le(s),false)};});var go,At,Hn=K(()=>{go="(max-width: 767px)",At=e=>{let t=e??(typeof window<"u"?window:void 0);if(!t)return  false;try{if(typeof t.matchMedia=="function")return t.matchMedia(go).matches}catch{return t.innerWidth<=767}return t.innerWidth<=767};});var fe=K(()=>{Ft();_t();Kt();Yt();Wt();Jt();Qt();Ue();xn();pt();kn();it();ke();Nn();mt();Hn();});var Wn,Gn=K(()=>{Wn=()=>{let e=0,t=null,n=null;return {apply({stepListEl:r,root:o,currentId:i,currentCount:a,activeIndex:l,prevScrollTop:s}){if(r){let u=i!==null&&i===t,m=u&&a>e;if(l!==null&&(!u||l!==n)){let y=S=>{let d=S.querySelector("[data-flowr-step-list]"),g=S.querySelector('[data-flowr-step-row][data-active="true"]');!d||!g||g.scrollIntoView({block:"nearest"});};y(o),typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{y(o);});}else m?(r.scrollTop=r.scrollHeight,typeof requestAnimationFrame=="function"&&requestAnimationFrame(()=>{let S=o.querySelector("[data-flowr-step-list]");S&&(S.scrollTop=S.scrollHeight);})):u&&s>0&&(r.scrollTop=s);}e=a,t=i,n=l;},reset(){e=0,t=null,n=null;}}};});var Ao,te,jn=K(()=>{Ao={back:"Loading...",delete:"Deleting...",discard:"Discarding...","library-reload":"Reloading...",open:"Opening...",record:"Recording...",replay:"Replaying...",save:"Saving...","send-code":"Sending...","sign-out":"Signing out...",verify:"Verifying..."},te=(e,t,n="primary",r)=>{let o=document.createElement("button");o.type="button",o.textContent=e,n==="primary"&&(o.className="primary"),o.dataset.variant=n,o.dataset.flowrAction=e.toLowerCase().replace(/\s+/g,"-");let i=()=>{o.textContent=e,r?.renderIdleContent?.(o);};return i(),o.addEventListener("click",()=>{if(o.disabled)return;let a=t();if(!a||typeof a.then!="function")return;let l=o.parentElement,s=l?Array.from(l.querySelectorAll("button")):[o],u=new Map(s.map(c=>[c,c.disabled]));for(let c of s)c.disabled=true;o.dataset.loading="true",o.setAttribute("aria-busy","true");let m=o.dataset.flowrAction??"";o.textContent=Ao[m]??`${e}...`,Promise.resolve(a).catch(()=>{}).finally(()=>{for(let c of s)c.isConnected&&(c.disabled=u.get(c)??false);o.isConnected&&(delete o.dataset.loading,o.removeAttribute("aria-busy"),i());});}),o};});var Jn,Qn=K(()=>{Jn=e=>e.kind==="input"?e.value?`Value: ${e.value}`:"Field update":e.kind==="input password"?"Password field":e.kind==="click"?e.textContent?`Target: ${e.textContent}`:"Click target":e.kind==="hover"?e.textContent?`Hover: ${e.textContent}`:"Hover target":e.kind==="context-click"?e.textContent?`Right click: ${e.textContent}`:"Right click target":e.kind==="scroll"?e.textContent?`Scroll to: ${e.textContent}`:"Scroll target":e.kind==="key enter"?"Press Enter":e.kind==="key tab"?"Press Tab":e.kind==="key shift+tab"?"Press Shift+Tab":e.kind;});var Xn,Co,vt,Zn=K(()=>{Xn="flowr-sdk-ui-recorder-panel-style",Co=`
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
`,vt=e=>{let t=e.getRootNode();if("getElementById"in t?t.getElementById(Xn):null)return;let r=document.createElement("style");r.id=Xn,r.textContent=Co,t instanceof ShadowRoot?t.appendChild(r):typeof document<"u"&&document.head?document.head.appendChild(r):e.prepend(r);};});var $n={};Tr($n,{createRecorderPanel:()=>xo});var vo,qn,Io,So,Ro,xo,er=K(()=>{fe();Gn();jn();Qn();Zn();vo=()=>{let e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"svg");t.setAttribute("viewBox","0 0 20 20"),t.setAttribute("fill","currentColor"),t.setAttribute("aria-hidden","true");let n=document.createElementNS(e,"path");return n.setAttribute("d","M3 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm8.293-3.707a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 1 1-1.414-1.414L12.586 11H10a1 1 0 1 1 0-2h2.586l-1.293-1.293a1 1 0 0 1 0-1.414ZM6 3a2 2 0 0 0-2 2v2a1 1 0 1 0 2 0V5h6v10H6v-2a1 1 0 1 0-2 0v2a2 2 0 0 0 2 2h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H6Z"),t.appendChild(n),t},qn=(e,t)=>{if(!t)return;[["fontFamily","--flowr-sdk-font-family"],["accentColor","--flowr-sdk-accent"],["accentForeground","--flowr-sdk-accent-foreground"],["panelBackground","--flowr-sdk-panel-background"],["surfaceBackground","--flowr-sdk-surface-background"],["surfaceMutedBackground","--flowr-sdk-surface-muted-background"],["panelForeground","--flowr-sdk-panel-foreground"],["panelBorderColor","--flowr-sdk-panel-border"],["mutedForeground","--flowr-sdk-panel-muted"],["overlayBackground","--flowr-sdk-overlay-background"],["overlayForeground","--flowr-sdk-overlay-foreground"]].forEach(([r,o])=>{let i=t[r];typeof i=="string"&&i.trim()&&e.style.setProperty(o,i.trim());});},Io=e=>e.trim().toLowerCase(),So=(e,t)=>t?[e.title].filter(r=>typeof r=="string"&&r.length>0).join(" ").toLowerCase().includes(t):true,Ro=()=>{let e=document.createElement("span");e.className="wr-brand-icon",e.setAttribute("aria-hidden","true");let t=document.createElement("img");return t.src=Se,t.alt="",t.decoding="async",e.appendChild(t),e},xo=({root:e,handlers:t,theme:n})=>{vt(e);let r=null,o=null,i=null,a="",l=false,s=new Set,u=p=>p.screenshotDataUrl??p.screenshotUrl??null,m=()=>{r&&B(r);},c=()=>{i?.remove(),i=null;},y=()=>{o=null,c(),m();},S=()=>{let p=e.getRootNode();return p instanceof ShadowRoot?p:e.ownerDocument?.body??document.body??e},d=()=>{let p=document.createElement("div");p.className="wr-screenshot-modal",p.setAttribute("data-flowr-screenshot-modal",""),qn(p,n),p.addEventListener("click",y);let x=document.createElement("div");x.className="wr-screenshot-modal-card",x.addEventListener("click",E=>{E.stopPropagation();});let A=document.createElement("div");A.className="wr-screenshot-modal-header";let h=document.createElement("strong");h.setAttribute("data-flowr-screenshot-modal-title","");let w=document.createElement("button");w.type="button",w.className="secondary",w.textContent="Close",w.addEventListener("click",y),A.append(h,w);let R=document.createElement("img");return R.className="wr-screenshot-modal-image",x.append(A,R),p.appendChild(x),p},g=p=>{let x=o?p.recording?.steps.findIndex(D=>D.id===o)??-1:-1,A=x>=0?p.recording?.steps[x]:null,h=A?u(A):null;if(!A||!h){o=null,c();return}i||(i=d());let w=i.querySelector("[data-flowr-screenshot-modal-title]"),R=i.querySelector(".wr-screenshot-modal-image"),E=`Step ${x+1} screenshot`;w&&(w.textContent=E),R&&(R.src=h,R.alt=E),i.isConnected||S().appendChild(i);},f=(p,x)=>{let A=document.createElement("div");A.className="wr-step-advanced",A.setAttribute("data-flowr-step-advanced","");let h=p.skipCondition,w=x.steps.findIndex(V=>V.id===p.id),R=x.steps.slice(w+1),E=dt(x,w),D=document.createElement("label"),U=document.createElement("span");U.textContent="Skip condition";let N=document.createElement("select");N.setAttribute("data-flowr-input","skip-condition-type");let W=document.createElement("option");W.value="",W.textContent="None \u2014 always run",N.appendChild(W);for(let V of ["element-not-visible","element-visible","step-skipped","step-not-skipped"]){let Y=document.createElement("option");Y.value=V,Y.textContent=V,N.appendChild(Y);}N.value=h?.type??"",D.append(U,N),A.appendChild(D);let J=()=>{let V=document.createElement("select");V.setAttribute("data-flowr-input","skip-condition-jump-to");for(let L of R){let _=document.createElement("option");_.value=L.id;let j=x.steps.findIndex(ee=>ee.id===L.id)+1;_.textContent=`Step ${j} \xB7 ${L.kind}`,V.appendChild(_);}let Y=document.createElement("option");return Y.value="",Y.textContent="End of recording",V.appendChild(Y),V},G=()=>{let V=document.createElement("select");V.setAttribute("data-flowr-input","skip-condition-reference");for(let Y of E){let L=document.createElement("option");L.value=Y.id;let _=x.steps.findIndex(j=>j.id===Y.id)+1;L.textContent=`Step ${_} \xB7 ${Y.kind}`,V.appendChild(L);}if(E.length===0){let Y=document.createElement("option");Y.value="",Y.textContent="No prior conditional step available",V.appendChild(Y),V.disabled=true;}return V},z=null,Z=null,X=null,$=h?.type==="element-visible"?h.selector:void 0,q=()=>{A.querySelectorAll("[data-flowr-condition-field]").forEach(j=>j.remove()),z=null,Z=null,X=null;let V=N.value;if(!V)return;if(V==="element-visible"){let j=document.createElement("label");j.dataset.flowrConditionField="selector";let ee=document.createElement("span");ee.textContent="Watch this element";let ie=document.createElement("div");ie.className="wr-pick-row";let se=document.createElement("input");se.type="text",se.setAttribute("data-flowr-input","skip-condition-selector-css"),se.placeholder="CSS selector \u2014 e.g. .toast--success",se.value=$?.css??p.selector?.css??"";let ne=document.createElement("button");ne.type="button",ne.dataset.flowrAction="skip-condition-pick",ne.textContent="Pick",t.onPickElement||(ne.disabled=true,ne.title="Element picker is not available in this host."),ne.addEventListener("click",()=>{t.onPickElement&&(ne.dataset.flowrPicking="true",ne.textContent="Click an element\u2026",t.onPickElement(we=>{ne.dataset.flowrPicking="false",ne.textContent="Pick",we&&($=we,se.value=we.css??"",Q());}));}),se.addEventListener("input",()=>{$=void 0;}),se.addEventListener("change",Q),ie.append(se,ne),j.append(ee,ie),A.appendChild(j),X=se;}if(V==="step-skipped"||V==="step-not-skipped"){let j=document.createElement("label");j.dataset.flowrConditionField="reference";let ee=document.createElement("span");ee.textContent=V==="step-skipped"?"When this step was skipped":"When this step was not skipped";let ie=G();ie.value=h?.referenceStepId??E[0]?.id??"",j.append(ee,ie),A.appendChild(j),Z=ie;}let Y=document.createElement("label");Y.dataset.flowrConditionField="jump";let L=document.createElement("span");L.textContent="Jump to step";let _=J();_.value=h?.jumpToStepId??R[0]?.id??"",Y.append(L,_),A.appendChild(Y),z=_;},Q=()=>{if(!t.onStepSkipConditionChange)return;let V=N.value;if(!V){t.onStepSkipConditionChange(p.id,null);return}let Y=z?.value??"",L={type:V,jumpToStepId:Y};if(V==="element-visible"){let _=X?.value.trim()??"";if($?L.selector=$:_?L.selector={css:_}:p.selector&&(L.selector=p.selector),!L.selector)return}if(V==="step-skipped"||V==="step-not-skipped"){let _=Z?.value??"";if(!_)return;L.referenceStepId=_;}t.onStepSkipConditionChange(p.id,L);};N.addEventListener("change",()=>{q(),Q(),oe();});let oe=()=>{z&&z.addEventListener("change",Q),Z&&Z.addEventListener("change",Q);};return q(),oe(),A},P=(p,x)=>{let A=document.createElement("div");A.className="wr-steps",A.setAttribute("data-flowr-step-list","");let h=x.recording;if(!h||h.steps.length===0){let w=document.createElement("div");w.className="wr-steps-empty",w.textContent="Recorded actions will appear here. Click, type, or right-click an element to capture hover, context-click, or instruction steps.",A.appendChild(w),p.appendChild(A);return}h.steps.forEach((w,R)=>{let E=document.createElement("div");E.className="wr-step",E.setAttribute("data-flowr-step-row",""),E.setAttribute("data-active",x.replayIndex===R?"true":"false");let D=document.createElement("div");D.className="wr-step-meta";let U=document.createElement("span");U.className="wr-step-count",U.textContent=String(R+1);let N=document.createElement("span");N.className="wr-step-kind",N.textContent=w.kind,D.append(U,N);let W=document.createElement("div");W.className="wr-step-summary",W.textContent=Jn(w);let J=u(w),G=null;if(J){G=document.createElement("button"),G.type="button",G.className="wr-step-screenshot-button",G.dataset.flowrAction="step-screenshot-preview",G.setAttribute("aria-label",`Preview screenshot for step ${R+1}`),G.setAttribute("title",`Preview screenshot for step ${R+1}`);let Q=document.createElement("img");Q.src=J,Q.alt=`Screenshot for step ${R+1}`,G.appendChild(Q),G.addEventListener("click",()=>{o=w.id,m();});}let z=document.createElement("textarea");z.className="wr-step-instruction-input",z.setAttribute("data-flowr-input","step-instruction"),z.placeholder="Tooltip instruction shown during replay",z.value=w.instruction??"",z.addEventListener("input",()=>{t.onStepInstructionInput(w.id,z.value);}),z.addEventListener("change",()=>{t.onStepInstructionCommit();});let Z=document.createElement("div");Z.className="wr-step-toolbar";let X=document.createElement("button");X.type="button",X.dataset.flowrAction="step-toggle-advanced";let $=s.has(w.id)||!!w.skipCondition;$&&s.add(w.id),X.textContent=$?"Hide advanced":"Advanced",X.addEventListener("click",()=>{s.has(w.id)?s.delete(w.id):s.add(w.id);let Q=E.querySelector("[data-flowr-step-advanced]");Q?(Q.remove(),X.textContent="Advanced"):(E.appendChild(f(w,h)),X.textContent="Hide advanced");});let q=document.createElement("button");q.type="button",q.dataset.flowrAction="step-delete",q.textContent="Delete",q.addEventListener("click",()=>{t.onStepDelete?.(w.id);}),x.status==="replaying"&&(X.disabled=true,q.disabled=true),Z.append(X,q),E.append(D,W),G&&E.appendChild(G),E.append(z,Z),$&&E.appendChild(f(w,h)),A.appendChild(E);}),p.appendChild(A);},b=p=>{let x=p.steps.length,A=`${x} step${x===1?"":"s"}`,h=p.updatedAt?new Date(p.updatedAt).toLocaleString():null;return h?`${A} \xB7 ${h}`:A},T=p=>{let x=Io(a);return [...p].sort((h,w)=>(w.updatedAt??0)-(h.updatedAt??0)).filter(h=>So(h,x))},M=(p,x)=>{let A=x.recordings??[];if(A.length>0||t.onReloadLibrary){let R=document.createElement("div");if(R.className="wr-library-controls",A.length>0){let E=document.createElement("label");E.className="wr-field-label",E.textContent="Search saved recordings";let D=document.createElement("div");D.className="wr-library-search-row";let U=document.createElement("input");U.type="search",U.className="wr-title-input wr-library-search-input",U.placeholder="Search saved recording titles",U.value=a,U.setAttribute("data-flowr-input","library-search"),U.addEventListener("input",()=>{a=U.value,l=true,m();}),D.appendChild(U),E.appendChild(D),R.appendChild(E);}if(t.onReloadLibrary){let E=te("Reload",()=>t.onReloadLibrary?.(),"secondary");E.dataset.flowrAction="library-reload",E.disabled=x.libraryStatus==="loading"||!t.onReloadLibrary,R.appendChild(E);}p.appendChild(R);}if(x.libraryStatus==="loading"&&A.length===0){let R=document.createElement("div");R.className="wr-library-loading",R.setAttribute("data-flowr-library-loading",""),R.textContent="Loading saved recordings...",p.appendChild(R);return}let h=document.createElement("div");if(h.className="wr-library",h.setAttribute("data-flowr-recording-list",""),A.length===0){let R=document.createElement("div");R.className="wr-library-empty",R.setAttribute("data-flowr-library-empty",""),R.textContent="No saved recordings yet. Record a flow to see it appear here.",h.appendChild(R),p.appendChild(h);return}let w=T(A);if(w.length===0){let R=document.createElement("div");R.className="wr-library-empty",R.setAttribute("data-flowr-library-empty",""),R.textContent=`No saved recordings match "${a.trim()}".`,h.appendChild(R),p.appendChild(h);return}for(let R of w){let E=document.createElement("div");E.className="wr-library-row",E.setAttribute("data-flowr-recording-row",""),E.setAttribute("data-recording-id",R.id),E.setAttribute("data-active",x.recording?.id===R.id?"true":"false");let D=document.createElement("div");D.className="wr-library-title",D.setAttribute("data-flowr-recording-title",""),D.textContent=R.title||"Untitled recording";let U=document.createElement("div");U.className="wr-library-meta",U.textContent=b(R);let N=document.createElement("div");N.className="wr-library-toolbar";let W=te("Replay",()=>t.onReplayRecording?.(R.id),"secondary");W.dataset.flowrAction="library-replay",W.disabled=R.steps.length===0||!t.onReplayRecording;let J=te("Open",()=>t.onLoadRecording?.(R.id),"secondary");J.dataset.flowrAction="library-load",J.disabled=!t.onLoadRecording;let G=te("Delete",()=>t.onDeleteRecording?.(R.id),"secondary");G.dataset.flowrAction="library-delete",G.disabled=!t.onDeleteRecording,N.append(W,J,G),E.append(D,U,N),h.appendChild(E);}p.appendChild(h);},C=(p,x)=>{let A=x.auth,h=A?.pendingEmail?.trim()??"",w=document.createElement("div");if(w.className="wr-auth-copy",w.textContent=A?.sessionEmail?`Continue as ${A.sessionEmail} by entering the emailed code.`:"Sign in to save and replay recordings. We\u2019ll email you a one-time code.",p.appendChild(w),h){let R=document.createElement("label");R.className="wr-field-label",R.textContent="Verification code";let E=document.createElement("input");E.type="text",E.inputMode="numeric",E.className="wr-title-input",E.setAttribute("data-flowr-input","code"),E.placeholder="Enter 6-digit code",R.appendChild(E),p.appendChild(R);let D=document.createElement("div");D.className="wr-auth-actions";let U=te("Verify",()=>{let W=E.value.trim();if(!(!W||!t.onVerifyCode))return t.onVerifyCode(W)},"primary");U.disabled=!t.onVerifyCode,E.addEventListener("keydown",W=>{W.key!=="Enter"||U.disabled||(W.preventDefault(),U.click());});let N=te("Use a different email",()=>t.onUseDifferentEmail?.(),"secondary");N.disabled=!t.onUseDifferentEmail,D.append(U,N),p.appendChild(D);}else {let R=document.createElement("label");R.className="wr-field-label",R.textContent="Email";let E=document.createElement("input");E.type="email",E.className="wr-title-input",E.setAttribute("data-flowr-input","email"),E.placeholder="name@example.com",R.appendChild(E),p.appendChild(R);let D=document.createElement("div");D.className="wr-auth-actions";let U=te("Send code",()=>{let N=E.value.trim();if(!(!N||!t.onSendCode))return t.onSendCode(N)},"primary");U.dataset.span="full",U.disabled=!t.onSendCode,E.addEventListener("keydown",N=>{N.key!=="Enter"||U.disabled||(N.preventDefault(),U.click());}),D.appendChild(U),p.appendChild(D);}if(A?.signInError){let R=document.createElement("div");R.className="wr-auth-error",R.textContent=A.signInError,p.appendChild(R);}},O=(p,x,A)=>{let h=te(p,x,"secondary");return h.dataset.flowrAction=p==="Recorder"?"tab-recorder":"tab-library",h.dataset.active=A?"true":"false",h.setAttribute("role","tab"),h.setAttribute("aria-selected",A?"true":"false"),h},H=p=>{let x=document.createElement("div");x.className="wr-tabs",x.setAttribute("role","tablist");let A=O("Recorder",()=>t.onCloseLibrary?.(),p==="recorder"),h=O("Library",()=>t.onOpenLibrary?.(),p==="library");return A.disabled=p==="recorder",h.disabled=p==="library"||!t.onOpenLibrary,x.append(A,h),x},I=Wn(),B=p=>{r=p;let x=e.querySelector("[data-flowr-step-list]"),A=x?x.scrollTop:0;e.innerHTML="",vt(e);let h=p.auth&&!p.auth.isAuthenticated&&!p.recording?"sign-in":p.view??"recorder";h!=="library"&&a&&(a="");let w=document.createElement("div");w.className="wr-panel",w.setAttribute("data-flowr-view",h),qn(w,n);let R=document.createElement("div");R.className="wr-brand";let E=Ro(),D=document.createElement("h4");if(D.textContent=h==="library"?"FlowR Library":"FlowR Recorder",R.append(E,D),t.onSignOut&&p.auth?.canSignOut&&p.auth?.isAuthenticated){let L=document.createElement("div");L.className="wr-brand-actions";let _=te("Sign out",()=>t.onSignOut?.(),"secondary",{renderIdleContent:j=>{j.classList.add("wr-icon-button"),j.classList.add("wr-sign-out-button"),j.setAttribute("aria-label","Logout"),j.setAttribute("title","Logout"),j.textContent="",j.appendChild(vo());}});L.appendChild(_),R.appendChild(L);}let U=H(h);if(h==="sign-in"){c(),w.appendChild(R),C(w,p),e.appendChild(w);return}if(h==="library"){c();let L=document.createElement("div");L.className="wr-status";let _=p.recordings?.length??0,j=T(p.recordings??[]).length;if(p.libraryStatus==="loading"&&_===0?L.textContent="Loading saved recordings...":a.trim()?L.textContent=`${j} of ${_} saved recording${_===1?"":"s"}`:L.textContent=`${_} saved recording${_===1?"":"s"}`,w.append(R,U,L),M(w,p),e.appendChild(w),l){let ee=w.querySelector('[data-flowr-input="library-search"]');if(ee){ee.focus();let ie=ee.value.length;ee.setSelectionRange(ie,ie);}}l=false;return}let N=document.createElement("div");N.className="wr-field-row";let W=document.createElement("label");W.className="wr-field-label",W.textContent="Title";let J=document.createElement("input");J.type="text",J.className="wr-title-input",J.setAttribute("data-flowr-input","recording-title"),J.placeholder=p.defaultTitle,J.value=p.recording?.title??p.draftTitle,J.addEventListener("input",()=>{t.onTitleInput(J.value);}),J.addEventListener("change",()=>{t.onTitleCommit();}),W.appendChild(J);let G=document.createElement("label");G.className="wr-field-label",G.textContent="Visibility";let z=document.createElement("select");z.className="wr-select-input",z.setAttribute("data-flowr-input","recording-visibility");for(let L of ["private","public","internal"]){let _=document.createElement("option");_.value=L,_.textContent=L==="public"?"Public":L==="internal"?"Internal":"Private",z.appendChild(_);}z.value=p.recording?.visibility??p.draftVisibility??"private",z.disabled=!t.onVisibilityChange,z.addEventListener("change",()=>{t.onVisibilityChange?.(z.value);}),G.appendChild(z);let Z=document.createElement("label");Z.className="wr-toggle-field",Z.dataset.disabled=t.onCaptureScreenshotsChange?"false":"true";let X=document.createElement("span");X.className="wr-toggle-copy";let $=document.createElement("span");$.className="wr-toggle-title",$.textContent="Step screenshots";let q=document.createElement("span");q.className="wr-toggle-hint",q.textContent="Attach a screenshot to each new recorded step.",X.append($,q);let Q=document.createElement("input");Q.type="checkbox",Q.className="wr-toggle-checkbox",Q.checked=p.captureScreenshots===true,Q.disabled=!t.onCaptureScreenshotsChange,Q.setAttribute("data-flowr-input","capture-screenshots"),Q.addEventListener("change",()=>{t.onCaptureScreenshotsChange?.(Q.checked);}),Z.append(X,Q),N.append(W,G,Z);let oe=document.createElement("div");oe.className="wr-actions";let V=!!p.hasUnsavedChanges;if(p.status==="recording"||V){let L=te("Save",()=>t.onSave?.(),"primary");L.disabled=!p.canSave||!t.onSave,oe.appendChild(L);let _=te("Discard",()=>t.onDiscard?.(),"secondary");_.disabled=!t.onDiscard,oe.appendChild(_);}else if(p.status==="replaying"){let L=te("Stop replay",t.onStopReplay,"secondary");L.dataset.span="full",oe.appendChild(L);}else {let L=te("Record",t.onStart,"primary");oe.appendChild(L);let _=te("Replay",t.onReplay,"secondary");p.recording&&p.recording.steps.length>0||(_.disabled=true),oe.appendChild(_);}let Y=document.createElement("div");if(Y.className="wr-status",p.recording){let L=p.recording.steps.length,_=p.status==="recording"?"Recording":p.status==="replaying"?p.replayIndex!==null?`Replaying step ${p.replayIndex+1}`:"Replaying":"Saved";Y.textContent=`${_} \xB7 ${L} step${L===1?"":"s"}`;}else Y.textContent=p.status==="recording"?"Recording started \u2014 interact with the page.":"Name the recording, then press Record.";if(w.append(R,U,N,oe,Y),P(w,p),e.appendChild(w),g(p),h==="library"&&l){let L=w.querySelector('[data-flowr-input="library-search"]');if(L){L.focus();let _=L.value.length;L.setSelectionRange(_,_);}}l=false,I.apply({stepListEl:w.querySelector("[data-flowr-step-list]"),root:e,currentId:p.recording?.id??null,currentCount:p.recording?.steps.length??0,activeIndex:p.replayIndex,prevScrollTop:A});};return {render:B,destroy:()=>{I.reset(),c(),r=null,o=null,a="",l=false,e.innerHTML="";}}};});fe();var ue="Untitled walkthrough",le="private",re=e=>e?typeof globalThis.structuredClone=="function"?globalThis.structuredClone(e):JSON.parse(JSON.stringify(e)):null,Je=e=>[...e].sort((t,n)=>(n.updatedAt??0)-(t.updatedAt??0));fe();fe();Ln();var fo=({isMobile:e,canBlurSection:t})=>{let n=[{action:"record-right-click",label:e?"Record long hold":"Record right click"}];return e||n.push({action:"record-hover",label:"Record hover"}),n.push({action:"add-instruction-to-section",label:"Add instruction to section"}),t&&n.push({action:"blur-section",label:"Blur section"}),n.push({action:"cancel",label:"Cancel"}),n},Un=({contextMenu:e,isMobile:t,isCaptureScreenshotsEnabled:n,buildButtons:r})=>{let o=false,i=null,a=null,l=()=>{o&&(e.hidden=false,e.style.display="none",e.style.visibility="hidden",e.replaceChildren(),o=false,i=null);};return {isOpen:()=>o,close:l,show:(c,y,S)=>{i=S,e.replaceChildren();let d=t?.()??false,g=n?.()??false,f=g&&typeof a?.onBlurSection=="function",b=(r??fo)({target:S,isMobile:d,isCaptureScreenshotsEnabled:g,canBlurSection:f}).map(O=>{let H=document.createElement("button");return H.type="button",H.dataset.action=O.action,H.textContent=O.label,H});e.append(...b),e.style.left=`${c}px`,e.style.top=`${y}px`,e.hidden=false,e.style.display="flex",e.style.visibility="visible";let T=e.getBoundingClientRect(),M=window.innerWidth,C=window.innerHeight;T.right>M&&(e.style.left=`${Math.max(0,c-(T.right-M))}px`),T.bottom>C&&(e.style.top=`${Math.max(0,y-(T.bottom-C))}px`),o=true;},contains:c=>!!c&&e.contains(c),bindActions:c=>{a=c,e.addEventListener("click",y=>{let S=y.target?.closest("button[data-action]");if(!S)return;let d=S.getAttribute("data-action"),g=i;if(l(),!!g){if(d==="record-hover"){c.onRecordHover(g);return}if(d==="add-instruction-to-section"||d==="add-instruction"){c.onAddInstructionToSection(g);return}if(d==="record-right-click"){c.onRecordRightClick(g);return}if(d==="blur-section"){c.onBlurSection?.(g);return}d==="cancel"&&c.onCancel?.(g);}});}}},ve=(e,t)=>{let n=e instanceof Document?e:e.ownerDocument;if(!n)throw new Error("InstructionPromptController: documentRoot has no ownerDocument");return n.createElement(t)},Fn=({documentRoot:e,panel:t,tooltip:n,hideTooltip:r})=>{let o=false,i=s=>s?t.contains(s)||n.contains(s):false,a=s=>{if(!o)return;let u=s.target;i(u)||(s.preventDefault(),"stopImmediatePropagation"in s&&s.stopImmediatePropagation(),s.stopPropagation());};return {isPrompting:()=>o,isPromptElement:i,blockWhilePrompting:a,promptInstruction:(s,u)=>{let m=typeof u=="string"?{defaultInstruction:u}:u??{},c=m.defaultInstruction??"Click the highlighted element",y=m.title??"Instruction",S=m.copy??"",d=m.placeholder??"Type instruction...";return new Promise(g=>{o=true,e.addEventListener("click",a,true);let f=null,P=()=>{n.removeEventListener("click",M,true),n.removeEventListener("keydown",C,true),e.removeEventListener("click",a,true),f?.(),f=null,r(),o=false;},b=()=>{let h=n.querySelector("textarea")?.value.trim()??"";P(),g(h||c);},T=()=>{P(),g(null);},M=A=>{let w=A.target?.closest("button[data-action]")?.getAttribute("data-action");w&&(A.preventDefault(),A.stopPropagation(),w==="save"&&b(),w==="cancel"&&T());},C=A=>{A.key==="Escape"&&(A.preventDefault(),A.stopPropagation(),T()),A.key==="Enter"&&(A.metaKey||A.ctrlKey)&&(A.preventDefault(),b());};n.replaceChildren();let O=ve(e,"div");O.style.marginBottom="6px",O.style.fontWeight="600",O.textContent=y;let H=[O];if(S){let A=ve(e,"div");A.style.marginBottom="6px",A.style.fontSize="12px",A.style.opacity="0.85",A.textContent=S,H.push(A);}let I=ve(e,"textarea");I.placeholder=d,H.push(I);let B=ve(e,"div");B.style.display="flex",B.style.gap="8px",B.style.marginTop="8px";let p=ve(e,"button");p.dataset.action="save",p.type="button",p.textContent="Save";let x=ve(e,"button");x.dataset.action="cancel",x.type="button",x.textContent="Cancel",B.append(p,x),H.push(B),n.append(...H),n.style.display="block",n.style.visibility="hidden",f=Pn(n,s),n.style.visibility="visible",n.addEventListener("click",M,true),n.addEventListener("keydown",C,true),I.focus();})}}};var _n="flowr-sdk-ui-recorder-overlay-style",mo=`
  .flowr-overlay-host {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 2147483647;
    font: 13px var(--flowr-sdk-font-family, "Segoe UI", system-ui, -apple-system, Roboto, sans-serif);
    color: var(--flowr-sdk-panel-foreground, #5a1c24);
  }
  .wr-highlight {
    /* SDK manages visibility via style.display; force opacity:1 when shown.
     * No position/size transition \u2014 the rAF tick repositions every frame
     * during scroll/resize and any easing here causes visible lag. */
    display: none;
    opacity: 1;
    transition: none;
  }
  [data-flowr-context-menu],
  [data-flowr-instruction-prompt] {
    position: fixed;
    box-sizing: border-box;
    min-width: 220px;
    max-width: min(320px, calc(100vw - 24px));
    padding: 12px;
    background: var(--flowr-sdk-surface-background, #ffffff);
    color: var(--flowr-sdk-panel-foreground, #5a1c24);
    border: 1px solid var(--flowr-sdk-panel-border, #e5d3d6);
    border-radius: 12px;
    box-shadow: 0 12px 32px color-mix(in srgb, var(--flowr-sdk-accent, #8d2e3a) 18%, transparent), 0 2px 8px rgba(0, 0, 0, 0.08);
    pointer-events: auto;
    z-index: 2147483647;
  }
  [data-flowr-context-menu] {
    display: none;
    flex-direction: column;
    gap: 6px;
  }
  [data-flowr-instruction-prompt] {
    display: none;
  }
  [data-flowr-context-menu] button,
  [data-flowr-instruction-prompt] button {
    width: 100%;
    box-sizing: border-box;
    padding: 8px 10px;
    border: 1px solid var(--flowr-sdk-panel-border, #e5d3d6);
    border-radius: 8px;
    background: var(--flowr-sdk-surface-background, #ffffff);
    color: var(--flowr-sdk-panel-foreground, #5a1c24);
    font-family: inherit;
    font-size: 13px;
    font-weight: 600;
    text-align: left;
    cursor: pointer;
  }
  [data-flowr-context-menu] button:hover,
  [data-flowr-instruction-prompt] button:hover {
    background: var(--flowr-sdk-surface-muted-background, #faf2f3);
    border-color: color-mix(in srgb, var(--flowr-sdk-accent, #8d2e3a) 22%, var(--flowr-sdk-panel-border, #e5d3d6) 78%);
  }
  [data-flowr-context-menu] button:active,
  [data-flowr-instruction-prompt] button:active {
    transform: scale(0.97);
  }
  [data-flowr-instruction-prompt] textarea {
    width: 100%;
    box-sizing: border-box;
    min-height: 72px;
    resize: vertical;
    padding: 8px 10px;
    border: 1px solid var(--flowr-sdk-panel-border, #e5d3d6);
    border-radius: 8px;
    background: var(--flowr-sdk-surface-muted-background, #fffdfd);
    color: var(--flowr-sdk-panel-foreground, #5a1c24);
    font-family: inherit;
    font-size: 13px;
    line-height: 1.45;
  }
  [data-flowr-instruction-prompt] button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  [data-flowr-instruction-prompt] button[data-action="save"] {
    background: var(--flowr-sdk-accent, #8d2e3a);
    border-color: var(--flowr-sdk-accent, #8d2e3a);
    color: var(--flowr-sdk-accent-foreground, #ffffff);
  }
  .wr-input-focus-tooltip {
    /* SDK toggles via style.display; add opacity transition for fade. */
    display: none;
    opacity: 0;
    transition: opacity .18s ease;
  }
`,ho=`${xe}
${mo}`,bo=e=>{if(e.getElementById(_n))return;let t=document.createElement("style");t.id=_n,t.textContent=ho,e.appendChild(t);},yo=(e,t,n)=>n<=t?t:Math.min(Math.max(e,t),n),Vn=({shadowRoot:e,isCaptureScreenshotsEnabled:t,onRecordHover:n,onRecordContextClick:r,onSaveInstruction:o,onBlurSection:i})=>{bo(e);let a=()=>typeof t=="function"?t():t===true,l=document.createElement("div");l.className="flowr-overlay-host",e.appendChild(l);let s=document.createElement("div");s.className="wr-highlight",l.appendChild(s);let u=document.createElement("div");u.className="wr-context-menu",u.setAttribute("data-flowr-context-menu",""),l.appendChild(u);let m=document.createElement("div");m.className="wr-tooltip",m.setAttribute("data-flowr-instruction-prompt",""),m.style.display="none",l.appendChild(m);let c=document.createElement("div");c.className="wr-input-focus-tooltip",c.setAttribute("data-flowr-input-focus-hint",""),l.appendChild(c);let y=null,S=null,d=null,g=null,f=()=>{m.style.display="none",m.replaceChildren();},P=Fn({documentRoot:e,panel:l,tooltip:m,hideTooltip:f}),b=Un({contextMenu:u,isMobile:()=>false,isCaptureScreenshotsEnabled:a,buildButtons:({canBlurSection:h})=>{let w=[{action:"record-right-click",label:"Record right click"},{action:"record-hover",label:"Record hover"},{action:"add-instruction",label:"Add instruction"}];return h&&w.push({action:"blur-section",label:"Blur section"}),w.push({action:"cancel",label:"Cancel"}),w}}),T=()=>{S!==null&&(window.cancelAnimationFrame(S),S=null);},M=()=>{let h=y?.getBoundingClientRect();if(!h){s.style.display="none";return}s.style.display="block",s.style.top=`${h.top}px`,s.style.left=`${h.left}px`,s.style.width=`${Math.max(h.width,4)}px`,s.style.height=`${Math.max(h.height,4)}px`;},C=()=>{if(M(),y&&(b.isOpen()||P.isPrompting())){S=window.requestAnimationFrame(C);return}T();},O=()=>{S===null&&(S=window.requestAnimationFrame(C));},H=()=>b.isOpen()||P.isPrompting(),I=()=>{b.close(),f(),y=null,s.style.display="none",T();},B=h=>{y=h,M(),O(),P.promptInstruction(h,{title:"Add instruction",placeholder:"Type instruction..."}).then(w=>{w!==null&&o(h,w),y=null,s.style.display="none",T();});};b.bindActions({onRecordHover:h=>{n(h),I();},onRecordRightClick:h=>{r(h),I();},...i?{onBlurSection:h=>{i(h),I();}}:{},onAddInstructionToSection:h=>{B(h);},onCancel:()=>{I();}});let p=()=>{if(!d||c.style.display==="none")return;let h=d.getBoundingClientRect(),w=c.getBoundingClientRect(),R=w.width||200,E=w.height||36,D=h.top+h.height+10,U=D+E+10<window.innerHeight;c.classList.toggle("is-above",!U);let N=U?D:Math.max(h.top-E-10,8),W=yo(h.left,8,window.innerWidth-R-8);c.style.top=`${N}px`,c.style.left=`${W}px`;},x=()=>{if(g!==null)return;let h=()=>{if(p(),d&&c.style.display==="block"){g=window.requestAnimationFrame(h);return}g=null;};g=window.requestAnimationFrame(h);},A=()=>{d=null,c.style.opacity="0",c.style.display="none",g!==null&&(window.cancelAnimationFrame(g),g=null);};return {showContextMenu:({target:h,x:w,y:R})=>{y=h,f(),b.show(w,R,h),M(),O();},hideAll:I,isActive:H,isPromptingInstruction:()=>P.isPrompting(),showInstructionPrompt:({target:h,title:w,copy:R,placeholder:E,defaultInstruction:D})=>(b.close(),y=h,M(),O(),P.promptInstruction(h,{title:w,copy:R,placeholder:E,defaultInstruction:D}).then(U=>(y=null,s.style.display="none",T(),U))),showInputFocusHint:({target:h,text:w})=>{d=h,c.textContent=w,c.style.display="block",c.style.opacity="0",p(),c.offsetHeight,c.style.opacity="1",x();},hideInputFocusHint:A,destroy:()=>{I(),A(),l.remove();}}};var zn=(e,t)=>({id:crypto.randomUUID(),kind:"scroll",url:window.location.href,selector:me(e),textContent:(e.textContent??"").trim().slice(0,120)||void 0,instruction:t,timestamp:Date.now()}),Ct=(e,t)=>({id:crypto.randomUUID(),kind:e,url:window.location.href,selector:me(t),textContent:(t.textContent??"").trim().slice(0,120)||void 0,timestamp:Date.now()}),wo=e=>{if(!(e instanceof HTMLElement))return  false;if(e instanceof HTMLInputElement){let t=(e.type||"text").toLowerCase();return t!=="checkbox"&&t!=="radio"&&t!=="button"&&t!=="submit"&&t!=="file"}return !!(e instanceof HTMLTextAreaElement||e.isContentEditable)},Kn=({shadowRoot:e,isRecording:t,isFromSdkEvent:n,isCaptureScreenshotsEnabled:r,enableContextMenuAuthoring:o=false,enableInputFocusHints:i=false,openBubble:a,onRecordHover:l,onRecordContextClick:s,onSaveInstruction:u})=>{let m=false,c=Vn({shadowRoot:e,isCaptureScreenshotsEnabled:r,onRecordHover:b=>{o&&l(b);},onRecordContextClick:b=>{o&&s(b);},onSaveInstruction:(b,T)=>{o&&u(b,T);}}),y=b=>{if(!o){b(null);return}let T=false,M=H=>{T||(T=true,m=false,window.removeEventListener("click",C,true),window.removeEventListener("keydown",O,true),b(H));},C=H=>{if(n(H))return;let I=H.target;I instanceof Element&&(H.preventDefault(),"stopImmediatePropagation"in H&&H.stopImmediatePropagation(),H.stopPropagation(),M(me(I)));},O=H=>{H.key==="Escape"&&(H.preventDefault(),M(null));};m=true,window.addEventListener("click",C,true),window.addEventListener("keydown",O,true);},S=b=>{if(!o||!t()||n(b))return;let T=b.target;T instanceof Element&&(b.preventDefault(),"stopImmediatePropagation"in b&&b.stopImmediatePropagation(),b.stopPropagation(),a(),c.showContextMenu({target:T,x:b.clientX,y:b.clientY}));},d=b=>{n(b)||c.isPromptingInstruction()||!c.isActive()||(b.preventDefault(),"stopImmediatePropagation"in b&&b.stopImmediatePropagation(),b.stopPropagation(),c.hideAll());},g=b=>{!c.isActive()||b.key!=="Escape"||(b.preventDefault(),"stopImmediatePropagation"in b&&b.stopImmediatePropagation(),b.stopPropagation(),c.hideAll());},f=b=>{if(!i||n(b)||!t()||c.isActive())return;let T=b.target;if(!wo(T)){c.hideInputFocusHint();return}let M=T instanceof HTMLInputElement&&T.type==="password";c.showInputFocusHint({target:T,text:M?"Type password here":"Type text here"});},P=b=>{!i||n(b)||c.hideInputFocusHint();};return document.addEventListener("click",d,true),document.addEventListener("keydown",g,true),o&&document.addEventListener("contextmenu",S,true),i&&(document.addEventListener("focusin",f,true),document.addEventListener("focusout",P,true)),{overlay:c,pickElement:y,isPickingElement:()=>m,destroy:()=>{document.removeEventListener("click",d,true),document.removeEventListener("keydown",g,true),o&&document.removeEventListener("contextmenu",S,true),i&&(document.removeEventListener("focusin",f,true),document.removeEventListener("focusout",P,true)),c.destroy();}}};var Yn=({store:e,getLibraryRecordings:t,setLibraryRecordings:n})=>{let r=s=>{let u=Je(s);return n(u),u},o=s=>{r([s,...t().filter(u=>u.id!==s.id)]);},i=s=>{n(t().filter(u=>u.id!==s));},a=s=>t().find(u=>u.id===s)??null;return {setState:r,upsert:o,remove:i,find:a,resolve:async s=>{let u=a(s);if(u)return u;let m=await e.get(s);if(m)return m;let c=r(await e.list()).find(y=>y.id===s);if(c)return c;throw new Error(`recording not found: ${s}`)}}};var Eo=(e,t)=>({recording:e.current,status:e.status,draftTitle:e.draftTitle,draftVisibility:e.draftVisibility,captureScreenshots:e.captureScreenshots,replayIndex:e.replayIndex,defaultTitle:e.defaultTitle,hasUnsavedChanges:e.hasUnsavedChanges,canSave:e.canSave,view:e.panelView,recordings:e.panelView==="library"?e.libraryRecordings:void 0,libraryStatus:e.libraryStatus,...t?{auth:t}:{}}),ko=(e,t)=>{let n=e.current,r=n?.steps.map(l=>{let s=l.screenshotDataUrl?`data:${l.screenshotDataUrl.length}`:l.screenshotUrl??"none";return `${l.id}:${l.kind}:${s}`}).join(",")??"none",o=n?[n.id,n.title,n.updatedAt,n.visibility,n.steps.length,r].join("|"):"none",i=e.libraryRecordings.map(l=>`${l.id}:${l.updatedAt}:${l.steps.length}`).join(","),a=t?[t.isAuthenticated,t.pendingEmail??"",t.signInError??"",t.sessionEmail??"",t.canSignOut??false].join("|"):"no-auth";return [o,e.status,e.draftTitle,e.draftVisibility,e.captureScreenshots,e.replayIndex,e.defaultTitle,e.hasUnsavedChanges,e.canSave,e.panelView,i,e.libraryStatus,a].join("::")},tr=({kernel:e,root:t,enableElementPicker:n=false,auth:r,theme:o})=>{let i=t??e.panelRoot,a={onSendCode:r?.onSendCode,onVerifyCode:r?.onVerifyCode,onUseDifferentEmail:r?.onUseDifferentEmail,onSignOut:r?.onSignOut,onStart:()=>e.startRecording({title:e.getSnapshot().draftTitle,visibility:e.getSnapshot().draftVisibility}),onStop:()=>e.stopRecording(),onReplay:()=>{let f=e.getCurrentRecording();if(f)return e.replay(f)},onStopReplay:()=>{e.stopReplay();},onCaptureScreenshotsChange:f=>{e.setCaptureScreenshots(f);},onSave:()=>e.saveCurrentRecording(),onDiscard:()=>{e.discardCurrentRecording();},onTitleInput:f=>{e.bindDraftTitle(f);},onTitleCommit:()=>{e.commitTitle();},onVisibilityChange:f=>{e.setVisibility(f);},onStepInstructionInput:(f,P)=>{e.updateStepInstruction(f,P);},onStepInstructionCommit:()=>{e.commitStepInstruction();},onStepDelete:f=>{e.deleteStep(f);},onStepSkipConditionChange:(f,P)=>{e.updateStepSkipCondition(f,P);},onPickElement:n?f=>{e.pickElement(f);}:void 0,onOpenLibrary:()=>{e.openLibraryView();},onReloadLibrary:()=>e.reloadLibrary(),onCloseLibrary:()=>{e.closeLibraryView();},onLoadRecording:f=>e.loadRecording(f).then(()=>{}),onDeleteRecording:f=>e.deleteRecording(f),onReplayRecording:f=>e.replay(f)},l=null,s=null,u=null,m=null,c=false,y=async()=>{let{createRecorderPanel:f}=await Promise.resolve().then(()=>(er(),$n));c||(u=f({root:i,theme:o,handlers:a}),s&&u.render(s));},S=()=>{u||m||c||(i.replaceChildren(),m=y().catch(f=>{m=null,l=null,c||(i.textContent="Unable to load FlowR recorder UI.");}));},d=()=>{if(c)return;let f=e.getSnapshot();if(f.pendingOperation!==null)return;let P=r?.getState(),b=ko(f,P);if(b!==l){if(l=b,s=Eo(f,P),u){u.render(s);return}S();}},g=e.subscribe(()=>{d();});return d(),{render:d,destroy:()=>{c=true,g(),u?.destroy(),u=null,m=null,s=null;}}};fe();var nr=({shadowRoot:e,openBubble:t,resolveRecording:n,applyCurrentRecording:r,updateReplayState:o,notify:i,onReplayStart:a,onReplayStep:l,onReplayComplete:s,onReplayError:u,refreshBeforeReplay:m=true})=>{let c=null,y=null,S=false,d=()=>{c?.stop(),c=null,y=null,S=false,o({replayIndex:null,isReplaying:false}),i();},g=b=>{if(b.type==="step"){f(b.index),o({replayIndex:b.index}),l?.(b.index,b.step);return}if(b.type==="step-error"){o({replayIndex:b.index}),u?.(b.error);return}if(b.type==="stopped"){c=null,y=null,S=false,o({replayIndex:null,isReplaying:false});return}c=null,y=null,S=false,o({replayIndex:null,isReplaying:false}),s?.();},f=b=>{let T=y,M=T?.steps[b+1]?.url?.trim();!T||!M||typeof window>"u"||ae(window.location.href,M,{mode:"strict"})||Ge(T,{storageKey:ye,targetUrl:M,stepIndex:b+1,persistRecording:S});};return {stop:d,replay:async(b,T={})=>{let M=typeof b=="string"?await n(b):b;if(!T.skipStartUrlNavigation&&yt(M,{storageKey:ye,persistRecording:typeof b!="string"})||!T.skipRefreshBeforeReplay&&wt(M,{enabled:m,storageKey:ye,persistRecording:typeof b!="string"}))return;d();let C=r(M);y=C,S=typeof b!="string",o({panelView:"recorder",isReplaying:true,replayIndex:null}),At()||t(),a?.(C);let O=gt({recording:C,shadowRoot:e,onEvent:g});c=O,O.start(T.startIndex);}}};var rr=(e,t)=>e.trim()||t,or=(e,t,n)=>{let r=e.steps.find(o=>o.id===t);return r?(r.instruction=n.trim()||void 0,e.updatedAt=Date.now(),true):false},ir=(e,t)=>{let n=e.steps.length;e.steps=e.steps.filter(r=>r.id!==t);for(let r of e.steps)r.skipCondition&&(r.skipCondition.jumpToStepId===t||r.skipCondition.referenceStepId===t)&&(r.skipCondition=void 0);return e.steps.length===n?false:(e.updatedAt=Date.now(),true)},ar=(e,t,n)=>{let r=e.steps.find(o=>o.id===t);return r?(r.skipCondition=n??void 0,e.updatedAt=Date.now(),true):false},sr=e=>{let t=e.steps.length,n=`${t} step${t===1?"":"s"}`,r=e.updatedAt?new Date(e.updatedAt).toLocaleString():null;return r?`${n} \xB7 ${r}`:n};fe();fe();var lr="[data-flowr-sdk]",To=2,Po=3,Lo=.5,dr=12e6,Mo=100*1024,cr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",It=null,Oo=async()=>(It||(It=import('html-to-image').then(e=>({toCanvas:e.toCanvas})).catch(()=>null)),It),Do=(e,t,n,r,o,i)=>{let a=Math.max(0,Math.min(i,r/2,o/2));e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+r-a,n),e.quadraticCurveTo(t+r,n,t+r,n+a),e.lineTo(t+r,n+o-a),e.quadraticCurveTo(t+r,n+o,t+r-a,n+o),e.lineTo(t+a,n+o),e.quadraticCurveTo(t,n+o,t,n+o-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath();},Bo=(e,t,n,r)=>{let o=e.getContext("2d");if(!o)return;let i=e.width/Math.max(n,1),a=e.height/Math.max(r,1),l=Math.max(0,t.left*i),s=Math.max(0,t.top*a),u=Math.max(4,t.width*i),m=Math.max(4,t.height*a),c=Math.min(e.width,l+u),y=Math.min(e.height,s+m),S=Math.max(6*((i+a)/2),6),d=Math.max(2*((i+a)/2),2);o.save(),o.fillStyle="rgba(10, 10, 10, 0.45)",s>0&&o.fillRect(0,0,e.width,s),y<e.height&&o.fillRect(0,y,e.width,e.height-y),l>0&&o.fillRect(0,s,l,Math.max(y-s,0)),c<e.width&&o.fillRect(c,s,e.width-c,Math.max(y-s,0)),o.restore(),o.save(),Do(o,l,s,u,m,S),o.fillStyle="rgba(255, 255, 255, 0.08)",o.fill(),o.lineWidth=d,o.strokeStyle="#ffffff",o.stroke(),o.restore();},pr=e=>!(e.matches?.(lr)||e.closest?.(lr)),No=(e,t)=>{let n=document.createElement("canvas");n.width=Math.max(1,Math.round(e)),n.height=Math.max(1,Math.round(t));let r=n.getContext("2d");return r?(r.fillStyle="#ffffff",r.fillRect(0,0,n.width,n.height),{canvas:n,context:r}):null},Ho=async(e,t,n,r)=>{let o=document.body??document.documentElement;return e.toCanvas(o,{backgroundColor:"#ffffff",cacheBust:true,imagePlaceholder:cr,pixelRatio:r,filter:i=>pr(i),width:t,height:n,style:{width:`${t}px`,height:`${n}px`,overflow:"hidden",backgroundColor:"#ffffff"}})},Uo=(e,t,n)=>{let r=document.documentElement;return {width:Math.max(e.scrollWidth,e.offsetWidth,e.clientWidth,r?.scrollWidth??0,r?.offsetWidth??0,r?.clientWidth??0,t,1),height:Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight,r?.scrollHeight??0,r?.offsetHeight??0,r?.clientHeight??0,n,1)}},Fo=(e,t,n,r)=>{let{width:o,height:i}=Uo(e,t,n),a=o*i;if(a*r*r<=dr)return {width:o,height:i,scale:r};let s=Math.sqrt(dr/a);if(s<Lo)throw new Error("Scrolled screenshot capture is too large");return {width:o,height:i,scale:s}},_o=async(e,t,n,r)=>{let o=document.body??document.documentElement,i=Fo(o,t,n,r),a=await e.toCanvas(o,{backgroundColor:"#ffffff",cacheBust:true,imagePlaceholder:cr,pixelRatio:i.scale,filter:d=>pr(d)}),l=a.width/i.width,s=a.height/i.height,u=No(t*l,n*s);if(!u)return a;let m=Math.max(0,Math.round(window.scrollX*l)),c=Math.max(0,Math.round(window.scrollY*s)),y=Math.max(1,Math.min(u.canvas.width,a.width-m)),S=Math.max(1,Math.min(u.canvas.height,a.height-c));return u.context.drawImage(a,m,c,y,S,0,0,y,S),u.canvas},Vo=async(e,t,n,r)=>Math.abs(window.scrollX)<1&&Math.abs(window.scrollY)<1?Ho(e,t,n,r):_o(e,t,n,r),ur=async e=>{if(!(e instanceof HTMLElement)||!e.isConnected)return;let t=e.getBoundingClientRect();if(t.width<1||t.height<1)return;let n=await Oo();if(n)try{let r=Math.max(window.innerWidth,1),o=Math.max(window.innerHeight,1),i=typeof window.devicePixelRatio=="number"?window.devicePixelRatio:1,a=Math.min(Math.max(i,To),Po),l=await Vo(n,r,o,a);Bo(l,t,r,o);let s=l.toDataURL("image/png");return await nt(s,Mo,{mode:"fast"})}catch{return}};var gr=({getCaptureScreenshots:e,getCurrentRecording:t,isBlocked:n,markUnsavedChanges:r,notify:o,onStepCaptured:i,onStepUpdated:a})=>{let l=new Set,s=async()=>{l.size!==0&&await Promise.allSettled(Array.from(l));},u=(c,y,S)=>{if(!e())return;let d=S??(y.selector?be(y.selector):null);if(!(d instanceof Element))return;let g;g=ur(d).then(f=>{if(!f||t()!==c)return;let b=c.steps.find(T=>T.id===y.id);b&&(b.screenshotDataUrl=f,b.screenshotUrl=void 0,c.updatedAt=Date.now(),o(),a?.(c,b));}).finally(()=>{l.delete(g);}),l.add(g);};return {appendStep:(c,y)=>{let S=t();!S||n()||(S.steps.push(c),S.updatedAt=Date.now(),r(),o(),u(S,c,y),i?.(S,c));},waitForPendingScreenshotCaptures:s}};fe();var Ko=600*1e3,St="flowr:sdk-recorder:active-recording",mr=1,fr=e=>e!==null&&typeof e=="object"&&!Array.isArray(e),Yo=e=>e==="private"||e==="public"||e==="internal",Wo=e=>{if(!fr(e))return  false;let t=e.recording;return e.version===mr&&typeof e.origin=="string"&&fr(t)&&typeof t.id=="string"&&typeof t.title=="string"&&typeof t.startUrl=="string"&&Array.isArray(t.steps)&&typeof e.draftTitle=="string"&&Yo(e.draftVisibility)&&typeof e.captureScreenshots=="boolean"},Go=()=>{try{let e=window.sessionStorage.getItem(St);if(!e)return null;let t=JSON.parse(e);return Wo(t)?t:null}catch{return null}},hr=({store:e,bubble:t,captureScreenshots:n=false,interceptClicks:r=true,activityOwnerId:o,userId:i,resolveOwnerId:a,authoring:l,onBeforeStartRecording:s,refreshBeforeReplay:u=true,hooks:m})=>{let c=qe({assets:{iconUrl:t.iconUrl??t.defaultIconDataUrl,brandIconUrl:t.iconUrl??t.defaultIconDataUrl,panelCssText:t.panelCssText??"",contentCssText:""},theme:t.theme,position:t.position,tooltip:t.tooltip}),y=c.shadowRoot.host,S=v=>Te(v,y),d=et({current:null,hasUnsavedChanges:false,replayIndex:null,panelView:"recorder",libraryRecordings:[],libraryStatus:"idle",libraryLastLoadedAt:null,isRecording:false,isReplaying:false,pendingOperation:null}),g=ue,f=le,P=n,b=null,T=null,M=null,C=Ce("recorder",{...o?{ownerId:o}:{}}),O=Ce("replay",{ownerId:C.ownerId}),H=()=>{try{window.sessionStorage.removeItem(St);}catch{}},I=()=>{let v=d.value.current;if(!d.value.isRecording||!v)return;let k=re(v);if(!k)return;let F={version:mr,origin:window.location.origin,recording:k,draftTitle:g,draftVisibility:f,captureScreenshots:P,updatedAt:Date.now()};try{window.sessionStorage.setItem(St,JSON.stringify(F));}catch{}},B=()=>d.value.isRecording?"recording":d.value.isReplaying?"replaying":"idle",p=()=>({...d.value,draftTitle:g,draftVisibility:f,captureScreenshots:P,defaultTitle:ue,defaultVisibility:le,canSave:!!(d.value.current&&d.value.current.steps.length>0),status:B()}),x=v=>d.subscribe(()=>{v(p());}),A=Yn({store:e,getLibraryRecordings:()=>d.value.libraryRecordings,setLibraryRecordings:v=>{d.update({libraryRecordings:v});}}),h=()=>{d.update({libraryStatus:"ready",libraryLastLoadedAt:Date.now()});},w=v=>{let k=Je(v);return d.update({libraryRecordings:k,libraryStatus:"ready",libraryLastLoadedAt:Date.now()}),k},R=()=>{let v=d.value.libraryLastLoadedAt;return v!==null&&Date.now()-v<Ko},E=async(v={})=>{if(M)if(v.force){let F=M;await F.catch(()=>{}),M===F&&(M=null);}else return M;if(M)return M;d.update({libraryStatus:"loading"});let k=e.list().then(F=>w(F)).catch(F=>{throw d.update({libraryStatus:d.value.libraryRecordings.length>0?"ready":"idle"}),N(F),F}).finally(()=>{M===k&&(M=null);});return M=k,k},D=()=>{H(),C.release(),b=null,g=ue,f=le,d.update({current:null,hasUnsavedChanges:false,replayIndex:null,isRecording:false,isReplaying:false,pendingOperation:null});},U=v=>{H();let k=re(v)??v;return b=re(k),g=k.title,f=k.visibility??le,d.update({current:k,hasUnsavedChanges:false,replayIndex:null,isRecording:false,isReplaying:false}),k},N=v=>{m?.onError?.(v);},W=()=>false,J=gr({getCaptureScreenshots:()=>P,getCurrentRecording:()=>d.value.current,isBlocked:()=>W(),markUnsavedChanges:()=>{d.update({hasUnsavedChanges:true}),I();},notify:()=>{I(),d.notify();},onStepCaptured:m?.onStepCaptured,onStepUpdated:m?.onStepUpdated}),G=Kn({shadowRoot:c.shadowRoot,isRecording:()=>d.value.isRecording,isFromSdkEvent:S,isCaptureScreenshotsEnabled:()=>P,enableContextMenuAuthoring:l?.enableContextMenuAuthoring===true,enableInputFocusHints:l?.enableInputFocusHints===true,openBubble:()=>c.open(),onRecordHover:v=>{J.appendStep(Ct("hover",v),v);},onRecordContextClick:v=>{J.appendStep(Ct("context-click",v),v);},onSaveInstruction:(v,k)=>{J.appendStep(zn(v,k),v);}});W=()=>G.isPickingElement();let z=G.overlay,Z=G.pickElement,X=ht({ignoreHost:y,randomId:()=>crypto.randomUUID(),now:()=>Date.now(),onStep(v){J.appendStep(v);},promptInstruction:r?v=>z.showInstructionPrompt({target:v,title:"Add instruction",copy:"Tell viewers what to do at this step.",placeholder:"Click the highlighted element",defaultInstruction:"Click the highlighted element"}):void 0}),$=()=>{let v=Go();if(!v)return  false;if(v.origin!==window.location.origin)return H(),false;let k=re(v.recording);return k?C.acquire()?(b=null,g=v.draftTitle||k.title||ue,f=v.draftVisibility,P=v.captureScreenshots,X.start(),d.update({current:k,hasUnsavedChanges:k.steps.length>0,replayIndex:null,panelView:"recorder",isRecording:true,isReplaying:false,pendingOperation:null}),I(),d.notify(),true):false:(H(),false)},q=()=>{d.value.isRecording&&(X.stop(),C.release(),d.update({isRecording:false}));},Q=async v=>A.resolve(v),oe=nr({shadowRoot:c.shadowRoot,openBubble:()=>c.open(),resolveRecording:Q,applyCurrentRecording:U,updateReplayState:v=>{d.update(v);},notify:()=>{d.notify();},onReplayStart:m?.onReplayStart,onReplayStep:m?.onReplayStep,onReplayComplete:()=>{O.release(),m?.onReplayComplete?.();},onReplayError:v=>{O.release(),N(v);},refreshBeforeReplay:u}),V=()=>{oe.stop(),O.release();},Y=async()=>{let v=d.value.current;if(!v)return null;if(d.update({pendingOperation:"saving"}),z.hideAll(),z.hideInputFocusHint(),q(),H(),await J.waitForPendingScreenshotCaptures(),v.steps.length===0){if(b){let k=re(b);g=k?.title??ue,f=k?.visibility??le,d.update({current:k,hasUnsavedChanges:false,replayIndex:null});}else g=ue,f=le,d.update({current:null,hasUnsavedChanges:false,replayIndex:null});return d.update({pendingOperation:null}),null}try{v.updatedAt=Date.now();let k=v,F=re(k),Ae=await e.save(F),Nt=d.value.current,Ht=Nt!==k,Er=!Ht&&k.updatedAt!==F.updatedAt,he=re(Ae)??Ae;if(b=re(he),A.upsert(re(he)??he),h(),m?.onRecordingSaved?.(re(he)??he),Ht)return Nt;if(Er)return k.createdAt=Ae.createdAt,k.ownerId=Ae.ownerId??k.ownerId,k.schemaVersion=Ae.schemaVersion??k.schemaVersion,g=k.title,f=k.visibility??le,d.update({hasUnsavedChanges:!0,replayIndex:null}),k;let De=re(he)??he;return g=De.title,f=De.visibility??le,d.update({current:De,hasUnsavedChanges:!1,replayIndex:null}),De}catch(k){return N(k),d.value.current}finally{d.update({pendingOperation:null}),d.notify();}},L=()=>{if(z.hideAll(),z.hideInputFocusHint(),q(),H(),b){let v=re(b);g=v?.title??ue,f=v?.visibility??le,d.update({current:v,hasUnsavedChanges:false,replayIndex:null});return}g=ue,f=le,d.update({current:null,hasUnsavedChanges:false,replayIndex:null,pendingOperation:null});},_=()=>{z.hideAll(),z.hideInputFocusHint(),V(),q(),D(),d.update({panelView:"recorder"}),d.notify();},j=async v=>{let k=d.value.current;if(d.value.isRecording&&k)return c.open(),d.notify(),k;if(d.update({pendingOperation:"starting"}),c.open(),!C.acquire()){let F=new Error("FlowR replay is active.");throw d.update({pendingOperation:null}),N(F),F}try{await s?.(),V(),z.hideAll(),z.hideInputFocusHint(),b=re(d.value.current),g=v?.title?.trim()||g||ue,f=v?.visibility??f??le;let F={id:crypto.randomUUID(),title:g,startUrl:window.location.href,steps:[],createdAt:Date.now(),updatedAt:Date.now(),visibility:f,ownerId:a?.()??i,schemaVersion:1};return X.start(),d.update({current:F,hasUnsavedChanges:!1,replayIndex:null,panelView:"recorder",isRecording:!0,isReplaying:!1}),I(),m?.onRecordingStarted?.(F),F}catch(F){throw C.release(),N(F),F}finally{d.update({pendingOperation:null}),d.notify();}},ee=v=>{f=v;let k=d.value.current;return k?(k.visibility=v,k.updatedAt=Date.now(),d.update({hasUnsavedChanges:true}),I(),d.notify(),k):(d.notify(),null)},ie=v=>{P!==v&&(P=v,I(),d.notify(),m?.onCaptureScreenshotsChanged?.(v));},se=()=>{if(d.update({panelView:"library"}),R()){d.update({libraryStatus:"ready"});return}E();},ne=async()=>{await E({force:true});},we=()=>{d.update({panelView:"recorder"});},Sr=async()=>R()?d.value.libraryRecordings:E(),xt=async v=>{try{V(),z.hideAll(),z.hideInputFocusHint();let k=await Q(v),F=U(k);return d.update({panelView:"recorder"}),m?.onRecordingLoaded?.(F),F}catch(k){throw N(k),k}},Et=async v=>{try{await e.delete(v),A.remove(v),h(),d.value.current?.id===v?(V(),D()):(d.update({replayIndex:null}),d.notify());}catch(k){throw N(k),k}},Rr=async()=>{if(e.clear)try{await e.clear(),V(),D(),d.update({libraryRecordings:[],libraryStatus:"ready",libraryLastLoadedAt:Date.now()});}catch(v){throw N(v),v}},kt=async(v,k={})=>{if(d.update({pendingOperation:"replaying"}),!O.acquire()){let F=new Error("FlowR recorder is active.");throw d.update({pendingOperation:null}),N(F),F}try{await oe.replay(v,k);}catch(F){throw O.release(),N(F),F}finally{d.update({pendingOperation:null}),d.notify();}},Tt=v=>kt(v),Pt=v=>{let k=rr(v,ue);g=k;let F=d.value.current;F&&(F.title=k,F.updatedAt=Date.now(),I());},Lt=()=>{d.value.current&&(d.update({hasUnsavedChanges:true}),I(),d.notify());},Mt=(v,k)=>{let F=d.value.current;F&&(or(F,v,k),I());},Ot=()=>{d.value.current&&(d.update({hasUnsavedChanges:true}),I(),d.notify());},Dt=v=>{let k=d.value.current;k&&ir(k,v)&&(d.update({hasUnsavedChanges:true}),I(),d.notify());},Bt=(v,k)=>{let F=d.value.current;F&&ar(F,v,k)&&(d.update({hasUnsavedChanges:true}),I(),d.notify());},xr=v=>(T?.destroy(),T=tr({kernel:{panelRoot:c.panelEl,subscribe:x,getSnapshot:p,startRecording:j,stopRecording:Y,saveCurrentRecording:Y,discardCurrentRecording:L,getCurrentRecording:()=>d.value.current,replay:Tt,stopReplay:V,setCaptureScreenshots:ie,bindDraftTitle:Pt,commitTitle:Lt,setVisibility:ee,updateStepInstruction:Mt,commitStepInstruction:Ot,deleteStep:Dt,updateStepSkipCondition:Bt,pickElement:Z,openLibraryView:se,reloadLibrary:ne,closeLibraryView:we,loadRecording:xt,deleteRecording:Et},enableElementPicker:l?.enableContextMenuAuthoring===true,auth:v?.auth,theme:v?.theme??t.theme}),T);return queueMicrotask(()=>{$(),m?.onReady?.();let v=je({storageKey:ye});v&&kt(v.recording??v.recordingId,{skipRefreshBeforeReplay:true,skipStartUrlNavigation:true,startIndex:v.stepIndex??0}).catch(()=>{});}),{bubble:c,overlay:z,panelRoot:c.panelEl,shadowRoot:c.shadowRoot,subscribe:x,getSnapshot:p,open:()=>c.open(),close:()=>c.close(),startRecording:j,stopRecording:Y,saveCurrentRecording:Y,discardCurrentRecording:L,clearCurrentRecording:_,setVisibility:ee,getCurrentRecording:()=>d.value.current,loadRecording:xt,listRecordings:Sr,deleteRecording:Et,clearAll:Rr,replay:Tt,stopReplay:V,setCaptureScreenshots:ie,openLibraryView:se,reloadLibrary:ne,closeLibraryView:we,bindDraftTitle:Pt,commitTitle:Lt,updateStepInstruction:Mt,commitStepInstruction:Ot,deleteStep:Dt,updateStepSkipCondition:Bt,pickElement:Z,attachSdkUiPanel:xr,formatRecordingMeta:sr,destroy:()=>{T?.destroy(),V(),X.stop(),G.destroy(),c.destroy();}}};var jo=e=>{try{let n=e==="local"?typeof localStorage<"u"?localStorage:null:typeof sessionStorage<"u"?sessionStorage:null;if(n){let r="__flowr_probe__";return n.setItem(r,"1"),n.removeItem(r),{get:o=>n.getItem(o),set:(o,i)=>n.setItem(o,i),del:o=>n.removeItem(o)}}}catch{}let t=new Map;return {get:n=>t.get(n)??null,set:(n,r)=>{t.set(n,r);},del:n=>{t.delete(n);}}},br=e=>({accessToken:e.access_token,refreshToken:e.refresh_token,expiresAt:Date.now()+e.expires_in*1e3,user:{id:e.user.id,email:e.user.email??null}}),Rt=e=>{let t=e.fetchImpl??fetch.bind(globalThis),n=e.storageKey?jo(e.storageScope??"session"):null,r=new Set,o=null;if(e.storageKey&&n)try{let l=n.get(e.storageKey);l&&(o=JSON.parse(l));}catch{}let i=l=>{o=l,e.storageKey&&n&&(l?n.set(e.storageKey,JSON.stringify(l)):n.del(e.storageKey));for(let s of r)s(l);},a=async(l,s,u={})=>{let m=`${e.baseUrl.replace(/\/+$/,"")}/functions/v1/${l}`,c=await t(m,{method:"POST",...u,headers:{"content-type":"application/json",accept:"application/json","x-flowr-api-key":e.apiKey,"x-flowr-sdk":"1",...u.headers},body:s===void 0?void 0:JSON.stringify(s)});if(!c.ok){let y=`auth ${c.status}`;try{let S=await c.json();y=S.error??S.message??S.msg??y;}catch{}throw new Error(y)}if(c.status!==204)return await c.json()};return {async signInWithOtp(l){await a("sdk-auth-otp-send",{email:l});},async verifyOtp(l,s){let u=await a("sdk-auth-otp-verify",{email:l,token:s}),m=br(u);return i(m),m},async refresh(){if(!o)return null;try{let l=await a("sdk-auth-refresh",{refresh_token:o.refreshToken}),s=br(l);return i(s),s}catch(l){throw i(null),l}},async signOut(){i(null);},getSession:()=>o,async getValidAccessToken(){if(!o)return null;if(o.expiresAt-Date.now()>6e4)return o.accessToken;try{return (await this.refresh())?.accessToken??null}catch{return null}},onChange(l){return r.add(l),()=>{r.delete(l);}}}},Me=class extends Error{constructor(t="auth is unavailable when userJwt is provided"){super(t),this.name="AuthUnavailableError";}},Oe=(e={})=>{let t=e.userJwt??null;return {signInWithOtp:async()=>{throw new Me},verifyOtp:async()=>{throw new Me},refresh:async()=>null,signOut:async()=>{},getSession:()=>null,getValidAccessToken:async()=>t,onChange:()=>()=>{}}};var yr=(e,t)=>{if(typeof e=="number"&&Number.isFinite(e))return Math.round(e);if(typeof e=="string"){let n=Number(e);if(Number.isFinite(n))return Math.round(n);let r=Date.parse(e);if(Number.isFinite(r))return r}return t},Qe=e=>{let t=yr(e.createdAt??e.created_at,Date.now()),n=yr(e.updatedAt??e.updated_at,t),r=typeof e.ownerId=="string"?e.ownerId:typeof e.user_id=="string"?e.user_id:void 0,o=typeof e.orgId=="string"?e.orgId:typeof e.org_id=="string"?e.org_id:void 0,i=typeof e.schemaVersion=="number"?e.schemaVersion:typeof e.schema_version=="number"?e.schema_version:void 0,a=typeof e.isOverLimit=="boolean"?e.isOverLimit:typeof e.is_over_limit=="boolean"?e.is_over_limit:void 0,l=e.visibility==="public"||e.visibility==="internal"?e.visibility:"private";return {id:String(e.id??""),title:typeof e.title=="string"?e.title:"Untitled walkthrough",startUrl:typeof e.startUrl=="string"?e.startUrl:typeof e.start_url=="string"?e.start_url:"",steps:a===true?[]:Array.isArray(e.steps)?e.steps:[],createdAt:t,updatedAt:n,visibility:l,...r?{ownerId:r}:{},...o?{orgId:o}:{},...i!==void 0?{schemaVersion:i}:{},...a!==void 0?{isOverLimit:a}:{}}},Ie=class extends Error{constructor(n,r,o){super(o);Xe(this,"status",n);Xe(this,"code",r);this.name="FlowrRestError";}},Jo=(e,t)=>!t||t<=0?e:new Promise((n,r)=>{let o=setTimeout(()=>r(new Ie(0,"timeout","request timed out")),t);e.then(i=>{clearTimeout(o),n(i);},i=>{clearTimeout(o),r(i);});}),wr=e=>{let t=e.fetchImpl??fetch.bind(globalThis),n=()=>{let i={"content-type":"application/json",accept:"application/json","x-flowr-sdk":"1"};return e.auth.kind==="share-token"?i["x-flowr-share-token"]=e.auth.token:i["x-flowr-api-key"]=e.auth.apiKey,i},r=async()=>{if(e.auth.kind!=="recorder"||!e.auth.getUserJwt)throw new Ie(401,"auth-required","sign in required");let i=await e.auth.getUserJwt();if(!i)throw new Ie(401,"auth-required","sign in required");return i},o=async(i,a={})=>{let{requireUserJwt:l,...s}=a,u=n();if(l){let S=await r();u.authorization=`Bearer ${S}`;}let m=`${e.baseUrl.replace(/\/+$/,"")}${i}`,c={...s,headers:{...u,...s.headers}},y=await Jo(t(m,c),e.timeoutMs);if(!y.ok){let S="request-failed",d=`HTTP ${y.status}`;try{let g=await y.json();g.code&&(S=g.code),g.errorCode&&(S=g.errorCode),g.error_code&&(S=g.error_code),g.message&&(d=g.message),typeof g.error=="string"&&g.error?d=g.error:g.error&&typeof g.error.message=="string"&&g.error.message&&(d=g.error.message);}catch{}throw new Ie(y.status,S,d)}if(y.status!==204)return await y.json()};return {fetchSharedRecording:async i=>{let a=await o(`/functions/v1/sdk-replay-fetch?id=${encodeURIComponent(i)}`),l=a.recording??a;return Qe(l)},listRecordings:async(i={})=>{let a=new URLSearchParams;i.limit&&a.set("limit",String(i.limit)),i.cursor&&a.set("cursor",i.cursor),i.title?.trim()&&a.set("title",i.title.trim());let l=a.toString(),s=await o(`/functions/v1/sdk-recording-list${l?"?"+l:""}`,{cache:"no-store",requireUserJwt:true});return {recordings:Array.isArray(s.recordings)?s.recordings.map(u=>Qe(u)):[],...typeof s.nextCursor=="string"?{nextCursor:s.nextCursor}:typeof s.next_cursor=="string"?{nextCursor:s.next_cursor}:{}}},listPublicRecordings:async(i={})=>{let a=new URLSearchParams;a.set("visibility","public"),i.limit&&a.set("limit",String(i.limit)),i.cursor&&a.set("cursor",i.cursor),i.title?.trim()&&a.set("title",i.title.trim());let l=a.toString(),s=await o(`/functions/v1/sdk-recording-list${l?"?"+l:""}`,{cache:"no-store"});return {recordings:Array.isArray(s.recordings)?s.recordings.map(u=>Qe(u)):[],...typeof s.nextCursor=="string"?{nextCursor:s.nextCursor}:typeof s.next_cursor=="string"?{nextCursor:s.next_cursor}:{}}},saveRecording:async i=>{let a=await o("/functions/v1/sdk-recording-write",{method:"POST",body:JSON.stringify({recording:i}),requireUserJwt:true}),l=a.recording??a;return Qe(l)},deleteRecording:i=>o(`/functions/v1/sdk-recording-write?id=${encodeURIComponent(i)}`,{method:"DELETE",requireUserJwt:true}),getScreenshotUploadUrl:i=>o("/functions/v1/sdk-screenshot-url",{method:"POST",body:JSON.stringify(i),requireUserJwt:true}),invokeEdgeFunction:(i,a)=>o(`/functions/v1/${i}`,{method:"POST",body:a===void 0?void 0:JSON.stringify(a)})}};var Ar=({baseUrl:e,apiKey:t,sessionStorageKey:n,userJwt:r})=>{let o=r?null:Rt({baseUrl:e,apiKey:t,storageKey:n}),i=o??Oe({userJwt:r??null}),a=r??null,l=()=>i.getSession();return {realAuth:o,authClient:i,providedJwt:a,getCachedSession:l,isAuthenticated:()=>!!a||!!l(),validateAuthState:async()=>a?true:!!await i.getValidAccessToken()}};fe();var de=(e,t,n=true)=>tt({label:e,onClick:t,variant:n?"primary":"secondary",extraCss:"margin-right:8px;"}),Qo=(e,t,n)=>{let r=document.createElement("div");r.style.cssText="padding:16px 20px; min-width:320px;",r.dataset.flowrView="sign-in";let o=document.createElement("div");o.style.cssText="font-weight:600; font-size:15px; margin-bottom:6px;",o.textContent="Sign in to save recordings";let i=document.createElement("div");if(i.style.cssText="color:#6b7280; font-size:12px; margin-bottom:14px;",i.textContent="We'll email you a one-time code.",r.append(o,i),t.pendingEmail){let a=document.createElement("input");a.type="text",a.inputMode="numeric",a.placeholder="Enter 6-digit code",a.dataset.flowrInput="code",a.style.cssText="width:100%; padding:8px 10px; border:1px solid #d1d5db; border-radius:8px; font-size:13px; margin-bottom:10px;",r.appendChild(a);let l=null,s=de("Verify",()=>{let u=a.value.trim();!u||s.disabled||(s.disabled=true,s.textContent="Verifying...",a.disabled=true,l&&(l.disabled=true),n.verifyOtp(u));});r.appendChild(s),l=de("Use a different email",n.useDifferentEmail,false),r.appendChild(l);}else {let a=document.createElement("input");a.type="email",a.placeholder="name@example.com",a.dataset.flowrInput="email",a.style.cssText="width:100%; padding:8px 10px; border:1px solid #d1d5db; border-radius:8px; font-size:13px; margin-bottom:10px;",r.appendChild(a);let l=de("Send code",()=>{let s=a.value.trim();!s||l.disabled||(l.disabled=true,l.textContent="Sending...",a.disabled=true,n.sendOtp(s));});r.appendChild(l);}if(t.signInError){let a=document.createElement("div");a.dataset.flowrError="1",a.style.cssText="color:#b91c1c; font-size:12px; margin-top:8px;",a.textContent=t.signInError,r.appendChild(a);}e.appendChild(r);},Xo=(e,t,n)=>{let r=document.createElement("div");r.style.cssText="padding:16px 20px; min-width:320px;",r.dataset.flowrView="recorder";let o=document.createElement("div");o.style.cssText="font-weight:600; font-size:15px; margin-bottom:6px;",o.textContent=t.kernel.current?.title??t.kernel.draftTitle??"FlowR recorder";let i=document.createElement("div");i.style.cssText="color:#6b7280; font-size:12px; margin-bottom:14px;";let a=t.providedJwt?"signed in":t.session?.user.email?`signed in as ${t.session.user.email}`:"signed in";i.textContent=t.kernel.current?`${t.kernel.current.steps.length} step${t.kernel.current.steps.length===1?"":"s"} \xB7 ${t.kernel.isRecording?"recording":"paused"} \xB7 ${a}`:`Click Start to begin a recording. (${a})`;let l=document.createElement("div");if(t.kernel.isRecording){let s=de(t.kernel.pendingOperation==="saving"?"Saving...":"Stop",n.stopRecording);s.disabled=t.kernel.pendingOperation==="saving",l.appendChild(s);}else {let s=de(t.kernel.pendingOperation==="starting"?"Starting...":"Start recording",n.startRecording);if(s.disabled=t.kernel.pendingOperation==="starting",l.appendChild(s),t.kernel.current&&t.kernel.current.steps.length>0){let m=de(t.kernel.pendingOperation==="replaying"?"Replaying...":"Replay",n.replayCurrent,false);m.disabled=t.kernel.pendingOperation==="replaying",l.appendChild(m);}let u=de("Library",n.openLibrary,false);u.dataset.flowrAction="library-open",l.appendChild(u);}if(!t.providedJwt){let s=de("Sign out",n.signOut,false);s.disabled=t.kernel.pendingOperation!==null,l.appendChild(s);}r.append(o,i,l),e.appendChild(r);},Zo=(e,t,n)=>{let r=document.createElement("div");r.style.cssText="padding:16px 20px; min-width:320px;",r.dataset.flowrView="library";let o=document.createElement("div");o.style.cssText="font-weight:600; font-size:15px; margin-bottom:6px;",o.textContent="Saved recordings";let i=document.createElement("div");i.style.cssText="color:#6b7280; font-size:12px; margin-bottom:14px;",i.textContent=`${t.kernel.libraryRecordings.length} saved recording${t.kernel.libraryRecordings.length===1?"":"s"}`;let a=document.createElement("div");a.style.cssText="margin-bottom:12px;";let l=de("Back",n.closeLibrary,false);l.dataset.flowrAction="library-close",a.appendChild(l),r.append(o,i,a);let s=document.createElement("div");if(s.dataset.flowrRecordingList="",s.style.cssText="display:flex; flex-direction:column; gap:10px;",t.kernel.libraryRecordings.length===0){let u=document.createElement("div");u.style.cssText="color:#6b7280; font-size:12px;",u.textContent="No saved recordings yet.",s.appendChild(u),r.appendChild(s),e.appendChild(r);return}for(let u of t.kernel.libraryRecordings){let m=document.createElement("div");m.dataset.flowrRecordingRow="",m.dataset.recordingId=u.id,m.style.cssText="border:1px solid #e5e7eb; border-radius:10px; padding:10px; background:#fff; display:flex; flex-direction:column; gap:8px;";let c=document.createElement("div");c.dataset.flowrRecordingTitle="",c.style.cssText="font-weight:600; font-size:13px; color:#111827;",c.textContent=u.title||t.kernel.defaultTitle;let y=document.createElement("div");y.style.cssText="color:#6b7280; font-size:12px;",y.textContent=n.formatRecordingMeta(u);let S=document.createElement("div"),d=de("Replay",()=>n.replayRecording(u),false);d.dataset.flowrAction="library-replay",d.disabled=u.steps.length===0;let g=de("Open",()=>n.openRecording(u.id),false);g.dataset.flowrAction="library-load";let f=de("Delete",()=>n.deleteRecording(u.id),false);f.dataset.flowrAction="library-delete",S.append(d,g,f),m.append(c,y,S),s.appendChild(m);}r.appendChild(s),e.appendChild(r);},Cr=(e,t,n)=>{if(e.innerHTML="",!t.isAuthenticated){Qo(e,t,n);return}if(t.kernel.panelView==="library"){Zo(e,t,n);return}Xo(e,t,n);};var vr=async e=>{let t=[],n=new Set,r;for(;;){let o=await e.listRecordings({limit:200,...r?{cursor:r}:{}});if(t.push(...o.recordings),!o.nextCursor||n.has(o.nextCursor))return t;n.add(o.nextCursor),r=o.nextCursor;}},Ir=e=>({list:async()=>vr(e),get:async t=>(await vr(e)).find(r=>r.id===t)??null,save:async t=>e.saveRecording(t),delete:async t=>{await e.deleteRecording(t);}});var qo="flowr-recorder:session",$o=()=>{let e=Oe(),t=()=>new Error("FlowR replay is active.");return {open:()=>{},close:()=>{},auth:{...e,isAuthenticated:()=>false,validateAuthState:async()=>false},startRecording:async()=>{throw t()},stopRecording:async()=>null,setCaptureScreenshots:()=>{},setVisibility:()=>null,getCurrentRecording:()=>null,loadRecording:async()=>{throw t()},listRecordings:async()=>[],deleteRecording:async()=>{},replay:async()=>{throw t()},destroy:()=>{},on:()=>()=>{}}},il=e=>{if(Be("recorder"))return $o();let t=Ce("recorder"),n=new Map,r=C=>{n.get(C.type)?.forEach(O=>O(C));},o=Ar({baseUrl:e.baseUrl,apiKey:e.apiKey,sessionStorageKey:qo,userJwt:e.userJwt}),i=wr({baseUrl:e.baseUrl,auth:{kind:"recorder",apiKey:e.apiKey,getUserJwt:async()=>o.providedJwt?o.providedJwt:o.authClient.getValidAccessToken()}}),a=hr({store:Ir(i),bubble:{defaultIconDataUrl:Se,iconUrl:e.iconUrl,panelCssText:e.panelCssText,theme:e.theme,position:e.position,tooltip:"Open FlowR recorder"},captureScreenshots:e.screenshots===true,interceptClicks:e.interceptClicks===true,activityOwnerId:t.ownerId,refreshBeforeReplay:e.refreshBeforeReplay!==false,userId:e.userId,authoring:{enableContextMenuAuthoring:!0},resolveOwnerId:()=>o.getCachedSession()?.user.id??e.userId,onBeforeStartRecording:async()=>{if(!await o.validateAuthState())throw new Error("sign in required to start a recording")},hooks:{onReady:()=>r({type:"ready"}),onRecordingStarted:C=>r({type:"recording-started",recording:C}),onStepCaptured:(C,O)=>r({type:"step-captured",recording:C,step:O}),onStepUpdated:(C,O)=>r({type:"step-updated",recording:C,step:O}),onCaptureScreenshotsChanged:C=>r({type:"settings-updated",captureScreenshots:C}),onRecordingSaved:C=>r({type:"recording-saved",recording:C}),onRecordingLoaded:C=>r({type:"recording-loaded",recording:C}),onReplayStart:C=>r({type:"replay-start",recording:C}),onReplayComplete:()=>r({type:"replay-complete"}),onError:C=>r({type:"error",error:C})}}),l=e.uiMode==="sdk-ui",s=null,u=null,m=null,c=false,y=()=>{s?.destroy(),s=null;},S=()=>{s||(s=a.attachSdkUiPanel({theme:e.theme,auth:{getState:()=>({isAuthenticated:o.isAuthenticated(),pendingEmail:u,signInError:m,sessionEmail:o.getCachedSession()?.user.email??null,canSignOut:!o.providedJwt}),onSendCode:async C=>{if(o.realAuth){m=null;try{await o.realAuth.signInWithOtp(C),u=C;}catch(O){m=O.message;}f();}},onVerifyCode:async C=>{if(!(!o.realAuth||!u)){m=null;try{await o.realAuth.verifyOtp(u,C),u=null;}catch(O){m=O.message;}f();}},onUseDifferentEmail:()=>{m=null,u=null,f();},onSignOut:()=>o.authClient.signOut()}}));},d=()=>({isAuthenticated:o.isAuthenticated(),providedJwt:o.providedJwt,session:o.getCachedSession(),kernel:a.getSnapshot(),pendingEmail:u,signInError:m}),g=()=>{if(l){S(),s?.render();return}y(),Cr(a.panelRoot,d(),{sendOtp:async C=>{if(o.realAuth){m=null;try{await o.realAuth.signInWithOtp(C),u=C;}catch(O){m=O.message;}f();}},verifyOtp:async C=>{if(!(!o.realAuth||!u)){m=null;try{await o.realAuth.verifyOtp(u,C),u=null;}catch(O){m=O.message;}f();}},useDifferentEmail:()=>{m=null,u=null,f();},startRecording:()=>{a.startRecording({title:a.getSnapshot().draftTitle});},stopRecording:()=>{a.stopRecording();},replayCurrent:()=>{let C=a.getCurrentRecording();C&&a.replay(C);},openLibrary:()=>{a.openLibraryView();},closeLibrary:()=>{a.closeLibraryView(),f();},signOut:()=>{o.authClient.signOut();},openRecording:C=>{a.loadRecording(C);},replayRecording:C=>{a.replay(C);},deleteRecording:C=>{a.deleteRecording(C);},formatRecordingMeta:a.formatRecordingMeta});},f=()=>{c||(c=true,queueMicrotask(()=>{c=false,g();}));},P=o.authClient.onChange(C=>{C||(u=null,m=null,a.clearCurrentRecording()),r({type:"auth-changed",session:C}),f();}),b=a.subscribe(()=>{l||f();}),T=null,M=t.onBlocked(()=>{T?.destroy();});return g(),o.providedJwt||o.validateAuthState().then(C=>{C&&f();}).catch(()=>{}),typeof window<"u"&&rt(window.location.search,e.queryLaunch)&&queueMicrotask(()=>{a.open();}),T={open:()=>a.open(),close:()=>a.close(),auth:{...o.authClient,isAuthenticated:o.isAuthenticated,validateAuthState:o.validateAuthState},async startRecording(C){return a.startRecording(C)},async stopRecording(){return a.stopRecording()},setCaptureScreenshots(C){a.setCaptureScreenshots(C),f();},setVisibility(C){return a.setVisibility(C)},getCurrentRecording:()=>a.getCurrentRecording(),async loadRecording(C){return a.loadRecording(C)},async listRecordings(){return a.listRecordings()},async deleteRecording(C){return a.deleteRecording(C)},async replay(C){return a.replay(C)},destroy:()=>{y(),M(),b(),P(),a.destroy(),n.clear();},on(C,O){let H=n.get(C);return H||(H=new Set,n.set(C,H)),H.add(O),()=>H.delete(O)}},T};exports.recorder=il;//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map