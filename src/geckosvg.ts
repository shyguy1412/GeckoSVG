import { GeckoSVGAElement } from "./elements/container/GeckoSVGAElement";
import { GeckoSVGPolygonElement } from "./elements/renderable/shape/GeckoSVGPolygonElement";
import { GeckoSVGRectElement } from "./elements/renderable/shape/GeckoSVGRectElement";
import { GeckoSVGTextElement } from "./elements/renderable/text/GeckoSVGTextElement";

interface GeckoSVGConstructor {
   new(): GeckoSVG;
   tag: string,
}


export class GeckoSVG extends HTMLElement{
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
         root = createSVGElement('svg') as SVGSVGElement;
         this.append(root!);
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

      // observer.disconnect();


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
   rect(x: number, y: number, width: number, height: number):GeckoSVGRectElement {
      return new GeckoSVGRectElement()
      .parent(this.root)
      .pos(x, y)
      .width(width)
      .height(height);
   }

   /**
    * 
    * @param href link location
    * @returns GeckoSVGAElement
    */
   a(href=''){
      return new GeckoSVGAElement()
      .parent(this.root)
      .href(href);
   }

   polygon(points:{x:number,y:number}[]){
      return new GeckoSVGPolygonElement()
      .parent(this.root)
      .points(points);
   }

   text(text:string, x=0, y=0){
      return new GeckoSVGTextElement()
      .parent(this.root)
      .text(text)
      .pos(x, y);
   }

   static create<T extends GeckoSVG>(type?: new () => T): T {
      const el = document.createElement(
         type ? (type as unknown as typeof GeckoSVG).tag : this.tag
      ) as T;
      el.init();
      return el;
   }

}

//shorthand for document.createElementNS('http://www.w3.org/2000/svg', type)
export function createSVGElement(type:string) {
   return document.createElementNS('http://www.w3.org/2000/svg', type);
}

/**
* Applies a given set of attributes to an SVG element
* @params svg SVGElement to apply attributes to
* @params attributes set of attributes to apply
*/

// export function applyAttributes<T extends GeckoSVGElementType>(svg: GeckoSVGElement<any>, attributes: GeckoSVGElementOptions<T>) {
//    const attributesList = Object.keys(attributes);
//    for (const attribute of attributesList) {
//       if (attribute != null && attribute != undefined)
//       // @ts-ignore should work!
//       svg.$el.setAttribute(attribute, attributes[attribute].toString());
//    }
// }

export function registerComponent(constructor: GeckoSVGConstructor) {
   if (!(constructor.prototype instanceof GeckoSVG || constructor == GeckoSVG)) throw new Error(); //TODO: throw error
   if (!window.customElements.get(constructor.tag)) {
      window.customElements.define(constructor.tag, constructor);
   } else {
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
