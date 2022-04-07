import './types';

export class GeckoSVG extends HTMLElement {
    width!: number;
    height!: number;
    fill!: string;
    root!: SVGElement | null;

    constructor() {
        super();
        this.fill = '#eee';
    }

    // Basic shapes //

    /**
     * 
     * @param x x value of rect
     * @param y y value of rect
     * @param width width of rect
     * @param height height of rect
     */
    rect(x: number, y: number, width: number, height: number): SVGRectElement {
        const rect = this.createShape('rect');
        applyAttributes(rect, {
            x,
            y,
            width,
            height
        });
        return rect;
    }

    ellipse(cx: number, cy: number, rx: number, ry: number): SVGEllipseElement {
        const ellipse = this.createShape('ellipse');
        applyAttributes(ellipse, {
            cx,
            cy,
            rx,
            ry,
        });
        return ellipse;
    }

    polygon(points:{x:number, y:number}[]): SVGPolygonElement{
        const polygon = this.createShape('polygon');
        let pointList = "";
        for(const point of points){
            pointList += `${point.x},${point.y} `;
        }
        applyAttributes(polygon, {
            points: pointList
        })
        return polygon;
    }

    private createShape<T extends GeckoSVGShape>(type: T): GeckoSVGShapeElement<T> {
        const rect = GeckoSVG.createSVGElement(type) as GeckoSVGShapeElement<T>;

        if (this.root!.firstChild)
            this.root!.insertBefore(this.root!.firstChild, rect);
        else
            this.root!.append(rect);
        return rect;
    }

    static createElement(width = 0, height = 0): GeckoSVG {
        const el = document.createElement('gecko-svg') as GeckoSVG;
        el.width = width;
        el.height = height;
        el.root = GeckoSVG.createSVGElement('svg');
        el.root.setAttribute('viewBox', `0 0 ${width} ${height}`);
        el.root.setAttribute('width', 100/3+'%')
        el.append(el.root);
        return el;
    }

    //shorthand for document.createElementNS('http://www.w3.org/2000/svg', type)
    private static createSVGElement(type: string): SVGElement {
        return document.createElementNS('http://www.w3.org/2000/svg', type);
    }


}

export function applyAttributes<T extends GeckoSVGElement>(svg: T, attributes: GeckoSVGElementOptions<T>) {
    const attributesList = Object.keys(attributes);
    for (const attribute of attributesList) {
        if (attribute != null && attribute != undefined)
            //@ts-ignore should work!
            svg.setAttribute(attribute, attributes[attribute].toString());
    }
}
if (!window.customElements.get('gecko-svg')) {
    window.customElements.define('gecko-svg', GeckoSVG);
} else {
    console.warn('[GeckoSVG] gecko-svg is already defined');
}