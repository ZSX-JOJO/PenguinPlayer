declare module "*.pug" {
    const html: string
    export default html
}
declare module "*.svg" {
    const svg: string
    export default svg
}

interface Song {
    provider: "file" | "netease",
    name: string,
    artists: string,
    album?: string,
    thumbnail?: string,
}
interface NeteaseSong extends Song {
    id: number,
    album: string,
    thumbnail: string,
    duration: number
}
interface FileSong extends Song {
    url: string
}

interface LyricLine {
    time: number,
    value: string
}

interface Artwork {
    src: string
    sizes?: string
}
interface MediaMetadataOptions {
    title: string
    artist: string
    album: string
    artwork: Artwork[]
}
interface TrialInfo {
    start: number
    end: number
}
declare class MediaMetadata {
    constructor(options: MediaMetadataOptions)
}

declare class Color extends Array {
    0: number
    1: number
    2: number
}

interface SliderOptions {
    activeSelector: string
    barSelector: string
    innerSelector: string
    value?: number
}

interface AjaxPromise extends Promise<AjaxResponse> {
    method(method: "GET" | "POST"): AjaxPromise
    url(url: string): AjaxPromise
    send(): AjaxPromise
    cancel(): AjaxPromise
    then(callback: any): AjaxPromise
    catch(callback: any): AjaxPromise
    finally(callback: any): AjaxPromise
}
interface AjaxResponse {
    code: number
    data: any
}

interface PenguinPlayerAPI {
    initialize(id: string): void
    play(id: number): void
    pause(): void
    next(): void
    previous(): void
    addEventListener(name: string, handler: Function): void
    removeEventListener(name: string, handler: Function): void
    readonly paused: boolean
    readonly song: Song
    readonly duration: number
    currentTime: number
    volume: number
    readonly playlist: Song[]
}

interface PenguinPlayerOptions {
    playlist: string | PlaylistProvider[],
    autoplay?: boolean,
    startIndex?: number,
    overrideVolume?: number
    overridePlaymode?: import("./controller").Playmodes
}

interface FileProviderItem {
    name: string,
    artists: string[],
    url: string,
    thumbnail?: string,
    album?: string
}

type FileProvider = {
    type: "file",
    files: FileProviderItem[]
}
type NeteaseProvider = {
    type: "netease",
    id: string
}

type PlaylistProvider = FileProvider | NeteaseProvider;