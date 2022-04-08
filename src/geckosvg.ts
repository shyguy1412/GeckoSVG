import './types';

export class GeckoSVG extends HTMLElement {
    width!: number;
    height!: number;
    fill!: string;

    constructor() {
        super();
        this.fill = '#eee';
    }

    // Basic shapes //

    /**
     * 
     * @param x X coordinate of the rectangle
     * @param y Y coordinate of the rectangle
     * @param width Width of rectangle
     * @param height Height of rectangle
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

    /**
     * 
     * @param cx X coordinate of the ellipse
     * @param cy Y coordinate of the ellipse
     * @param rx first radius of the ellipse
     * @param ry second radius of the ellipse
     */
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

    /**
     * 
     * @param cx X coordinate of the circle
     * @param cy Y coordinate of the circle
     * @param r radius of the circle
     */
    circle(cx: number, cy: number, r: number): SVGCircleElement {
        const circle = this.createShape('circle');
        applyAttributes(circle, {
            cx,
            cy,
            r,
        });
        return circle;
    }

    /**
     * @param points list of the polygons vertecies
     */
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

    private createShape<T extends GeckoSVGShapeType>(type: T): GeckoSVGShapeElement<T> {
        const rect = GeckoSVG.createSVGElement(type) as GeckoSVGShapeElement<T>;

        if (this.firstChild!.firstChild)
            this.firstChild!.insertBefore(this.firstChild!.firstChild, rect);
        else
            (this.firstChild! as HTMLElement).append(rect);
        return rect;
    }

    static createElement(width = 0, height = 0): GeckoSVG {
        const el = document.createElement('gecko-svg') as GeckoSVG;
        el.width = width;
        el.height = height;
        const root = GeckoSVG.createSVGElement('svg');
        root.setAttribute('viewBox', `0 0 ${width} ${height}`);
        root.setAttribute('width', 100/3+'%')
        el.append(root);
        return el;
    }

    //shorthand for document.createElementNS('http://www.w3.org/2000/svg', type)
    static createSVGElement<T extends GeckoSVGElementType>(type: T): GeckoSVGElement<T> {
        //@ts-ignore should work fine
        return document.createElementNS('http://www.w3.org/2000/svg', type) as GeckoSVGElement<T>;
    }


}

/**
 * Applies a given set of attributes to an SVG element
 * @params svg SVGElement to apply attributes to
 * @params attributes set of attributes to apply
 */
export function applyAttributes<T extends GeckoSVGElementType>(svg: GeckoSVGElement<T>, attributes: GeckoSVGElementOptions<T>) {
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