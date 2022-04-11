type GeckoSVGShapeType =
    'rect' |
    'circle' |
    'ellipse' |
    'polygon' |
    'line' |
    'polyline';

type GeckoSVGRenderableType =
    GeckoSVGShapeType |
    'text';

type GeckoSVGElementType =
    GeckoSVGRenderableType |
    'svg';

// type GeckoSVGShapeElement<T extends GeckoSVGShapeType> =
//     T extends 'rect' ? SVGRectElement :
//     T extends 'circle' ? SVGCircleElement :
//     T extends 'ellipse' ? SVGEllipseElement :
//     T extends 'polygon' ? SVGPolygonElement :
//     T extends 'line' ? SVGLineElement :
//     T extends 'polyline' ? SVGPolylineElement :
//     never;

// type GeckoSVGRenderableElement<T extends GeckoSVGRenderableType> =
//     T extends GeckoSVGShapeType ? GeckoSVGShapeElement<T> :
//     T extends 'text' ? SVGTextElement :
//     never;

// type GeckoSVGElement<T extends GeckoSVGElementType> =
//     T extends GeckoSVGRenderableType ? GeckoSVGRenderableElement<T> :
//     T extends 'svg' ? SVGSVGElement :
//     never;

interface GeckoSVGElement extends HTMLElement{
   tag:string,
   init:()=>void,
}

interface GeckoSVGElementConstructor {
    new(): GeckoSVGElement;
    tag: string,
}

type GeckoSVGShapeElementOptions<T extends GeckoSVGShapeType> =
    T extends 'rect' ? GeckoSVGRectElementOptions :
    T extends 'circle' ? GeckoSVGCircleElementOptions :
    T extends 'ellipse' ? GeckoSVGEllipseElementOptions :
    T extends 'polygon' ? GeckoSVGPolygonElementOptions :
    T extends 'line' ? GeckoSVGLineElementOptions :
    T extends 'polyline' ? GeckoSVGPolylineElementOptions :
    never;

type GeckoSVGRenderableElementOptions<T extends GeckoSVGRenderableType> =
    T extends GeckoSVGShapeType ? GeckoSVGShapeElementOptions<T> :
    T extends 'text' ? GeckoSVGTextElementOptions :
    never;

type GeckoSVGElementOptions<T extends GeckoSVGElementType> =
    T extends GeckoSVGRenderableType ? GeckoSVGRenderableElementOptions<T> :
    T extends 'svg' ? GeckoSVGSVGElementOptions :
    never;

interface GeckoSVGPresentationAttributes {
    'alignment-baseline'?: string,
    'baseline-shift'?: string,
    'clip'?: string,
    'clip-path'?: string,
    'clip-rule'?: string,
    'color'?: string,
    'color-interpolation'?: string,
    'color-interpolation-filters'?: string,
    'color-profile'?: string,
    'color-rendering'?: string,
    'cursor'?: string,
    'direction'?: string,
    'display'?: string,
    'dominant-baseline'?: string,
    'enable-background'?: string,
    'fill'?: string,
    'fill-opacity'?: string,
    'fill-rule'?: string,
    'filter'?: string,
    'flood-color'?: string,
    'flood-opacity'?: string,
    'font-family'?: string,
    'font-size'?: string,
    'font-size-adjust'?: string,
    'font-stretch'?: string,
    'font-style'?: string,
    'font-variant'?: string,
    'font-weight'?: string,
    'glyph-orientation-horizontal'?: string,
    'glyph-orientation-vertical'?: string,
    'image-rendering'?: string,
    'kerning'?: string,
    'letter-spacing'?: string,
    'lighting-color'?: string,
    'marker-end'?: string,
    'marker-mid'?: string,
    'marker-start'?: string,
    'mask'?: string,
    'opacity'?: string,
    'overflow'?: string,
    'pointer-events'?: string,
    'shape-rendering'?: string,
    'stop-color'?: string,
    'stop-opacity'?: string,
    'stroke'?: string,
    'stroke-dasharray'?: string,
    'stroke-dashoffset'?: string,
    'stroke-linecap'?: string,
    'stroke-linejoin'?: string,
    'stroke-miterlimit'?: string,
    'stroke-opacity'?: string,
    'stroke-width'?: string,
    'text-anchor'?: string,
    'text-decoration'?: string,
    'text-rendering'?: string,
    'transform'?: string,
    'transform-origin'?: string,
    'unicode-bidi'?: string,
    'vector-effect'?: string,
    'visibility'?: string,
    'word-spacing'?: string,
    'writing-mode'?: string,
}

interface GeckoSVGSVGElementOptions {
    viewBox: string,
}

interface GeckoSVGRectElementOptions extends GeckoSVGPresentationAttributes {
    x?: number,
    y?: number,
    width?: number,
    height?: number,
    rx?: number,
    ry?: number,
}

interface GeckoSVGCircleElementOptions extends GeckoSVGPresentationAttributes {
    cx?: number,
    cy?: number,
    r?: number,
}

interface GeckoSVGEllipseElementOptions extends GeckoSVGPresentationAttributes {
    cx?: number,
    cy?: number,
    rx?: number,
    ry?: number,
    pathLength?: number,
}

interface GeckoSVGPolygonElementOptions extends GeckoSVGPresentationAttributes {
    points?: string,
}

interface GeckoSVGLineElementOptions extends GeckoSVGPresentationAttributes {
    x1?: number,
    x2?: number,
    y1?: number,
    y2?: number,
    pathLength?: number,
}

interface GeckoSVGPolylineElementOptions extends GeckoSVGPresentationAttributes {
    points?: string,
    pathLength?: number,
}

interface GeckoSVGTextElementOptions extends GeckoSVGPresentationAttributes {
    x:number,
    y:number,
    dx:number,
    dy:number,
    rotate:number[],
    lengthAdjust:number,
    textLength:number,
}
