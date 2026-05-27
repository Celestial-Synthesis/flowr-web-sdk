import { Recording, Step, RecordingVisibility, SdkTheme, SdkQueryLaunch } from '@flowr/sdk-core';
import { SdkSession, AuthClient } from '@flowr/sdk-rest';

/**
 * @celestialsynthesis/flowr-sdk-recorder — record + edit + replay, in-page, no extension.
 *
 * Auth model:
 *  - The developer integrating the SDK gets a FlowR-managed
 *    publishable api key (`flowr_pk_*`) assigned by FlowR. The key is
 *    safe to ship in browser bundles — it identifies the org, can list
 *    that key's public recordings for replay, and is enterprise-gated.
 *    CORS allow-list and rate limits are enforced server-side.
 *  - End-users sign in via the SDK's built-in email-OTP flow. The
 *    flow is proxied through FlowR edge functions so customers do not
 *    need their own Supabase project. The returned user JWT must belong
 *    to the publishable api key owner and is required for every read and write.
 *  - Customers running their own auth backend can pass a pre-minted
 *    owner `userJwt` to skip the built-in UI.
 */

type RecorderEvent = {
    type: "ready";
} | {
    type: "auth-changed";
    session: SdkSession | null;
} | {
    type: "recording-started";
    recording: Recording;
} | {
    type: "step-captured";
    recording: Recording;
    step: Step;
} | {
    type: "step-updated";
    recording: Recording;
    step: Step;
} | {
    type: "settings-updated";
    captureScreenshots: boolean;
} | {
    type: "recording-saved";
    recording: Recording;
} | {
    type: "recording-loaded";
    recording: Recording;
} | {
    type: "replay-start";
    recording: Recording;
} | {
    type: "replay-complete";
} | {
    type: "error";
    error: Error;
};
type RecorderOptions = {
    baseUrl: string;
    apiKey: string;
    userId?: string;
    userJwt?: string;
    screenshots?: boolean;
    position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
    uiMode?: "custom" | "sdk-ui";
    interceptClicks?: boolean;
    refreshBeforeReplay?: boolean;
    iconUrl?: string;
    panelCssText?: string;
    theme?: SdkTheme;
    queryLaunch?: SdkQueryLaunch;
};
type RecorderHandle = {
    open(): void;
    close(): void;
    auth: AuthClient & {
        isAuthenticated(): boolean;
        validateAuthState(): Promise<boolean>;
    };
    startRecording(opts?: {
        title?: string;
        visibility?: RecordingVisibility;
    }): Promise<Recording>;
    stopRecording(): Promise<Recording | null>;
    setCaptureScreenshots(value: boolean): void;
    setVisibility(visibility: RecordingVisibility): Recording | null;
    getCurrentRecording(): Recording | null;
    loadRecording(id: string): Promise<Recording>;
    listRecordings(): Promise<Recording[]>;
    deleteRecording(id: string): Promise<void>;
    replay(idOrRecording: string | Recording): Promise<void>;
    destroy(): void;
    on<E extends RecorderEvent["type"]>(type: E, listener: (event: Extract<RecorderEvent, {
        type: E;
    }>) => void): () => void;
};
declare const recorder: (opts: RecorderOptions) => RecorderHandle;

export { type RecorderEvent, type RecorderHandle, type RecorderOptions, recorder };
