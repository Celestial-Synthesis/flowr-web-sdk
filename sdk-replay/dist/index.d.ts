import { Recording, Step, SdkTheme, SdkReplayPickerCopy, SdkReplayOverlayCopy, SdkQueryLaunch } from '@flowr/sdk-core';

/**
 * @celestialsynthesis/flowr-sdk-replay — guided replay only.
 *
 * Public API:
 *   const handle = FlowR.replay({
 *     baseUrl: "https://rfeiamxssoajeabwyean.supabase.co",
 *     recordingId: "rec_…",
 *     token: "shr_…",
 *   });
 *   handle.on("complete", () => …);
 *   await handle.start();
 *
 * The SDK fetches the recording via `@flowr/sdk-rest` (public share token
 * auth), mounts a Shadow-DOM-isolated bubble, and runs the kernel
 * replay engine in the host page. No recording, no editing, no auth UI.
 */

type ReplayEvent = {
    type: "loaded";
    recording: Recording;
} | {
    type: "start";
} | {
    type: "step";
    index: number;
    total: number;
    step: Step;
} | {
    type: "step-error";
    index: number;
    step: Step;
    error: Error;
} | {
    type: "complete";
} | {
    type: "navigation-required";
    targetUrl: string;
} | {
    type: "error";
    error: Error;
};
type ReplayOptions = {
    baseUrl: string;
    /** Optional direct recording payload. When present, no fetch is needed. */
    recording?: Recording;
    recordingId?: string;
    /** Public share token minted by your backend via `sdk-issue-share-token`. */
    token?: string;
    /** FlowR publishable key used for listing public recordings for that SDK key. */
    apiKey?: string;
    /**
     * If true, the SDK calls `location.assign(recording.startUrl)` when the
     * current URL doesn't match. Default: true. Set false to keep replay on the
     * current page and surface the built-in guided navigation action instead.
     */
    allowNavigation?: boolean;
    /** Auto-advance through steps. Default: false (user advances). */
    auto?: boolean;
    /** Reload matching start pages before replay. Default: true. */
    refreshBeforeReplay?: boolean;
    /** Bubble dock position. Default: "bottom-right". */
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    /** Inline icon URL (data URI recommended). */
    iconUrl?: string;
    /** Optional CSS injected into the Shadow DOM panel. */
    panelCssText?: string;
    /** Optional theme tokens for the bubble shell and replay tooltip. */
    theme?: SdkTheme;
    /** Optional copy overrides for the built-in public picker. */
    pickerCopy?: SdkReplayPickerCopy;
    /** Optional copy overrides for the off-screen replay overlay banner. */
    overlayCopy?: SdkReplayOverlayCopy;
    /** Use FlowR's built-in bubble/panel UI or drive replay entirely from host controls. */
    uiMode?: "custom" | "sdk-ui";
    /** Optional explicit query-param matcher that opens the bubble when present. */
    queryLaunch?: SdkQueryLaunch;
    /** Defer fetching until `start()` is called. Default: false. */
    lazy?: boolean;
};
type ReplayRecordingListOptions = {
    limit?: number;
    cursor?: string;
    title?: string;
};
type ReplayRecordingListPage = {
    recordings: Recording[];
    nextCursor?: string;
};
interface ReplayHandle {
    open(): void;
    close(): void;
    start(): Promise<void>;
    stop(): void;
    listRecordings(): Promise<Recording[]>;
    listRecordings(options: ReplayRecordingListOptions): Promise<ReplayRecordingListPage>;
    setRecording(recording: Recording): void;
    destroy(): void;
    on<E extends ReplayEvent["type"]>(type: E, listener: (event: Extract<ReplayEvent, {
        type: E;
    }>) => void): () => void;
}
declare const replay: (opts: ReplayOptions) => ReplayHandle;
declare const _default: {
    replay: (opts: ReplayOptions) => ReplayHandle;
};

export { type ReplayEvent, type ReplayHandle, type ReplayOptions, type ReplayRecordingListOptions, type ReplayRecordingListPage, _default as default, replay };
