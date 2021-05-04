export default class Scrollbar {
    constructor(controller: any);
    controller: any;
    el: any;
    handle: any;
    position: number;
    mousePos: number;
    prevMousePos: number;
    transform(): void;
    show(): void;
    hide(): void;
    addEvents(): void;
    onResize(): void;
    scale: number;
    trueSize: number;
    handleHeight: number;
    maxY: number;
    onMouseMove: (e: any) => void;
    onMouseDown: (e: any) => void;
    mouseDown: boolean;
    onMouseUp: () => void;
    addHTML(): void;
    addStyles(): void;
    destroy(): void;
}
