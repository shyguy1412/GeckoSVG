import './types';

interface GeckoSVGElementConstructor {
    new(): GeckoSVG;
    tag: string,
}

export class GeckoSVG extends HTMLElement {
    fill!: string;

    static get tag() {
        if (this == GeckoSVG)
            return 'gecko-svg';
        else
            return this.name.toLowerCase().replace(/svg$/, '') + '-svg';
    }

    set width(width: number) {
        if (!Number.isInteger(width)) width = 0;
        this.setAttribute('width', width + '');
    }

    get width() {
        return Number.parseInt(this.getAttribute('width')!);
    }

    set height(height: number) {
        if (!Number.isInteger(height)) height = 0;
        this.setAttribute('height', height + '');
    }

    get height() {
        return Number.parseInt(this.getAttribute('height')!);
    }

    get root() {
        let root = this.querySelector('svg');
        if (!root) {
            root = GeckoSVG.createSVGElement('svg');
            this.append(root);
        }
        return root!;
    }

    //runs when element is created with createCompent()
    constructor() {
        super();

        //this observers the width and height attributes to set the styling accordingly
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation, i) => {
                if (mutation.type != 'attributes') return;
                const element = mutation.target as HTMLElement;
                if (mutation.attributeName == 'width')
                    element.style.width = element.getAttribute('width') + 'px';
                if (mutation.attributeName == 'height')
                    element.style.height = element.getAttribute('height') + 'px';
                this.root.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
            });
        });

        observer.observe(this, {
            attributes: true
        });


        this.fill = '#eee';
    }

    //initilise component after creation
    init() { };

    // Basic shapes //

    /**
     * 
     * @param x X coordinate of the rectangle
     * @param y Y coordinate of the rectangle
     * @param width Width of rectangle
     * @param height Height of rectangle
     */
    rect(x: number, y: number, width: number, height: number): SVGRectElement {
        const rect = this.createRenderable('rect');
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
        const ellipse = this.createRenderable('ellipse');
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
        const circle = this.createRenderable('circle');
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
    polygon(points: { x: number, y: number }[]): SVGPolygonElement {
        const polygon = this.createRenderable('polygon');
        let pointList = '';
        for (const point of points) {
            pointList += `${point.x},${point.y} `;
        }
        applyAttributes(polygon, {
            points: pointList
        })
        return polygon;
    }

    text(content: string, x: number, y: number): SVGTextElement {
        const text = this.createRenderable('text');
        applyAttributes(text, {
            x,
            y,
        });
        text.textContent = content;
        return text;
    }

    static create<T extends GeckoSVG>(type?: new () => T): T {
        const el = document.createElement(
            type ? (type as unknown as typeof GeckoSVG).tag : this.tag
        ) as T;        el.width = 0;
        el.height = 0;
        el.init();
        return el;
    }

    private createRenderable<T extends GeckoSVGRenderableType>(type: T): GeckoSVGRenderableElement<T> {
        const rect = GeckoSVG.createSVGElement(type) as GeckoSVGRenderableElement<T>;

        // if (this.root.firstElementChild)
        //     this.root.insertBefore(this.root.firstElementChild, rect);
        // else
        this.root.append(rect);
        return rect;
    }

    //shorthand for document.createElementNS('http://www.w3.org/2000/svg', type)
    static createSVGElement<T extends GeckoSVGElementType>(type: T): GeckoSVGElement<T> {
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

export function registerComponent(constructor: GeckoSVGElementConstructor) {
    if (!(constructor.prototype instanceof GeckoSVG || constructor === GeckoSVG)) throw new Error(); //TODO: throw error
    if (!window.customElements.get(constructor.tag)) {
        window.customElements.define(constructor.tag, constructor);
    } else {
        if (constructor == GeckoSVG)
            console.warn(`[GeckoSVG] ${constructor.tag} is already defined`);
    }

    //TODO: find better method of setting style
    if (!document.querySelector(`.${constructor.tag}-style`)) {
        const style = document.createElement('style');
        style.classList.add(`${constructor.tag}-style`);
        style.textContent = `
        ${constructor.tag}{
            display: inline-block;
            user-select: none;
        }
        ${constructor.tag} svg{
            overflow: visible;
        }`;
        document.body.appendChild(style);
    }
}

registerComponent(GeckoSVG);