export default class Controller {
    constructor(options?: {});
    options: {};
    targetPos: number;
    currentPos: number;
    prevScrollPos: number;
    maxScroll: number;
    enabled: boolean;
    render: boolean;
    scrolling: boolean;
    wheeling: boolean;
    syncScroll: boolean;
    horizontalScroll: boolean;
    firstResize: boolean;
    preventResizeScroll: boolean;
    nativeScroll: boolean;
    ease: any;
    originalScrollbarSetting: any;
    testFps: boolean;
    delta: number;
    time: any;
    startTime: any;
    setElements(): void;
    containerElement: any;
    scrollElements: any;
    scrollElementsLength: any;
    setupSmoothScroll(): void;
    scrollbar: Scrollbar;
    onScroll: ({ event }: {
        event: any;
    }) => void;
    onRAF: () => void;
    applyTransform(x: any, y: any): void;
    enable({ newScrollElements, reset, restore, horizontalScroll }?: {
        newScrollElements?: boolean;
        reset?: boolean;
        restore?: boolean;
        horizontalScroll?: boolean;
    }): void;
    iframes: any;
    disable({ inputOnly }?: {
        inputOnly?: boolean;
    }): void;
    clamp(): void;
    scrollTo(y: any, emitEvent?: boolean): void;
    onResize: () => void;
    scrollLength: any;
    toggleIframes(enable: any): void;
    blockScrollEvent(e: any): void;
    toggleFixedContainer: () => void;
    addEvents(): void;
    addTouchStyles(): void;
}
import Scrollbar from "./Scrollbar";
