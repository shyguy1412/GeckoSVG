import { applyAttributes, createSVGElement, createSVGRectElement } from "./geckodom";

export class GeckoSVG extends HTMLElement {
    width!: number;
    height!: number;
    fill!: string;
    root!: SVGElement;
    
    constructor() {
        super();
        this.fill = '#eee';
    }

    /**
     * 
     * @param x x value of rect
     * @param y y value of rect
     * @param width width of rect
     * @param height height of rect
     */
    rect(x: number, y: number, width: number, height: number) {
        const rect = createSVGRectElement();
        applyAttributes(rect, {
            x,
            y,
            width,
            height,
            fill: this.fill
        });
        console.log(this, rect);
        
        if(this.root.firstChild)
        this.root.insertBefore(this.root.firstChild, rect);
        else
        this.root.append(rect);
    }

    static createElement(width = 0, height = 0): GeckoSVG {
        const el = document.createElement('gecko-svg') as GeckoSVG;
        el.width = width;
        el.height = height;
        el.root = createSVGElement('svg');
        el.append(el.root);
        return el;
    }

}

if(!window.customElements.get('gecko-svg')){
    window.customElements.define('gecko-svg', GeckoSVG);
} else {
    console.warn('[GeckoSVG] gecko-svg is already defined');
}