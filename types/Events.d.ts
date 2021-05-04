export default class Events {
    static INTERNALRAF: string;
    static EXTERNALRAF: string;
    static WHEEL: string;
    static INTERNALSCROLL: string;
    static EXTERNALSCROLL: string;
    static RESIZE: string;
    static MOUSEDETECTED: string;
    static SCROLLEND: string;
    constructor(options?: {});
    options: {};
    addEvents(): void;
    onRaf: () => void;
    onScroll(): void;
    onResize({ width, height }?: {
        width: any;
        height: any;
    }): void;
    detectMouse(): void;
}
