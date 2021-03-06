/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/// <reference types="google.maps" />
/**
 * @ignore
 */
declare global {
    interface Window {
        __googleMapsCallback: (e: Event) => void;
    }
}
export declare const DEFAULT_ID = "__googleMapsScriptId";
declare type Libraries = ("drawing" | "geometry" | "localContext" | "places" | "visualization")[];
/**
 * The Google Maps JavaScript API
 * [documentation](https://developers.google.com/maps/documentation/javascript/tutorial)
 * is the authoritative source for [[LoaderOptions]].
/**
 * Loader options
 */
export interface LoaderOptions {
    /**
     * See https://developers.google.com/maps/documentation/javascript/get-api-key.
     */
    apiKey: string;
    /**
     * @deprecated See https://developers.google.com/maps/premium/overview.
     */
    channel?: string;
    /**
     * @deprecated See https://developers.google.com/maps/premium/overview, use `apiKey` instead.
     */
    client?: string;
    /**
     * In your application you can specify release channels or version numbers:
     *
     * The weekly version is specified with `version=weekly`. This version is
     * updated once per week, and is the most current.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly'});
     * ```
     *
     * The quarterly version is specified with `version=quarterly`. This version
     * is updated once per quarter, and is the most predictable.
     *
     * ```
     * const loader = Loader({apiKey, version: 'quarterly'});
     * ```
     *
     * The version number is specified with `version=n.nn`. You can choose
     * `version=3.40`, `version=3.39`, or `version=3.38`. Version numbers are
     * updated once per quarter.
     *
     * ```
     * const loader = Loader({apiKey, version: '3.40'});
     * ```
     *
     * If you do not explicitly specify a version, you will receive the
     * weekly version by default.
     */
    version?: string;
    /**
     * The id of the script tag. Before adding a new script, the Loader will check for an existing one.
     */
    id?: string;
    /**
     * When loading the Maps JavaScript API via the URL you may optionally load
     * additional libraries through use of the libraries URL parameter. Libraries
     * are modules of code that provide additional functionality to the main Maps
     * JavaScript API but are not loaded unless you specifically request them.
     *
     * ```
     * const loader = Loader({
     *  apiKey,
     *  libraries: ['drawing', 'geometry', 'places', 'visualization'],
     * });
     * ```
     *
     * Set the [list of libraries](https://developers.google.com/maps/documentation/javascript/libraries) for more options.
     */
    libraries?: Libraries;
    /**
     * By default, the Maps JavaScript API uses the user's preferred language
     * setting as specified in the browser, when displaying textual information
     * such as the names for controls, copyright notices, driving directions and
     * labels on maps. In most cases, it's preferable to respect the browser
     * setting. However, if you want the Maps JavaScript API to ignore the
     * browser's language setting, you can force it to display information in a
     * particular language when loading the Maps JavaScript API code.
     *
     * For example, the following example localizes the language to Japan:
     *
     * ```
     * const loader = Loader({apiKey, language: 'ja', region: 'JP'});
     * ```
     *
     * See the [list of supported
     * languages](https://developers.google.com/maps/faq#languagesupport). Note
     * that new languages are added often, so this list may not be exhaustive.
     *
     */
    language?: string;
    /**
     * When you load the Maps JavaScript API from maps.googleapis.com it applies a
     * default bias for application behavior towards the United States. If you
     * want to alter your application to serve different map tiles or bias the
     * application (such as biasing geocoding results towards the region), you can
     * override this default behavior by adding a region parameter when loading
     * the Maps JavaScript API code.
     *
     * The region parameter accepts Unicode region subtag identifiers which
     * (generally) have a one-to-one mapping to country code Top-Level Domains
     * (ccTLDs). Most Unicode region identifiers are identical to ISO 3166-1
     * codes, with some notable exceptions. For example, Great Britain's ccTLD is
     * "uk" (corresponding to the domain .co.uk) while its region identifier is
     * "GB."
     *
     * For example, the following example localizes the map to the United Kingdom:
     *
     * ```
     * const loader = Loader({apiKey, region: 'GB'});
     * ```
     */
    region?: string;
    /**
     * (Beta) You can add multiple Map IDs to your map using the map_ids paramenter in
     * your bootstrap request.
     */
    mapIds?: string[];
    /**
     * Use a custom url and path to load the Google Maps API script.
     */
    url?: string;
    /**
     * Use a cryptographic nonce attribute.
     */
    nonce?: string;
    /**
     * The number of script load retries.
     */
    retries?: number;
}
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
export declare class Loader {
    /**
     * See [[LoaderOptions.version]]
     */
    version: string;
    /**
     * See [[LoaderOptions.apiKey]]
     */
    apiKey: string;
    /**
     * See [[LoaderOptions.channel]]
     */
    channel: string;
    /**
     * See [[LoaderOptions.client]]
     */
    client: string;
    /**
     * See [[LoaderOptions.id]]
     */
    id: string;
    /**
     * See [[LoaderOptions.libraries]]
     */
    libraries: Libraries;
    /**
     * See [[LoaderOptions.language]]
     */
    language: string;
    /**
     * See [[LoaderOptions.region]]
     */
    region: string;
    /**
     * See [[LoaderOptions.mapIds]]
     */
    mapIds: string[];
    /**
     * See [[LoaderOptions.nonce]]
     */
    nonce: string | null;
    /**
     * See [[LoaderOptions.retries]]
     */
    retries: number;
    /**
     * See [[LoaderOptions.url]]
     */
    url: string;
    private CALLBACK;
    private callbacks;
    private done;
    private loading;
    private onerrorEvent;
    private static instance;
    private errors;
    /**
     * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
     * using this library, instead the defaults are set by the Google Maps
     * JavaScript API server.
     *
     * ```
     * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
     * ```
     */
    constructor({ apiKey, channel, client, id, libraries, language, region, version, mapIds, nonce, retries, url, }: LoaderOptions);
    get options(): LoaderOptions;
    private get failed();
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     */
    createUrl(): string;
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     */
    load(): Promise<typeof google>;
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     */
    loadPromise(): Promise<typeof google>;
    /**
     * Load the Google Maps JavaScript API script with a callback.
     */
    loadCallback(fn: (e: Event) => void): void;
    /**
     * Set the script on document.
     */
    private setScript;
    deleteScript(): void;
    /**
     * Reset the loader state.
     */
    private reset;
    private resetIfRetryingFailed;
    private loadErrorCallback;
    private setCallback;
    private callback;
    private execute;
}
export {};
