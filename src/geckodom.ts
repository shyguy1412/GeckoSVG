export function createSVGRectElement(): SVGRectElement{
    const rect = createSVGElement('rect') as SVGRectElement;
    return rect;
}

//shorthand for document.createElementNS('http://www.w3.org/2000/svg', type)
export function createSVGElement(type: string):SVGElement{
    return document.createElementNS('http://www.w3.org/2000/svg', type);
}

export function applyAttributes(svg:SVGElement, attributes:any){
    const attributesList = Object.keys(attributes);
    for(const attribute of attributesList){
        if(attribute != null && attribute != undefined)
        svg.setAttribute(attribute, attributes[attribute].toString());
    }
}