export class GeckoSVGElement extends HTMLElement {
   tag!:string;
   static get tag(){
      return this.name.toLowerCase().replace(/^geckosvg/, 'gecko-').replace(/element$/, '');
   }

   init (){};

   static create<T extends GeckoSVGElement>(type?: new () => T): T {
      const el = document.createElement(
           type ? (type as unknown as GeckoSVGElement).tag : this.tag
      ) as T;
      el.init();
      return el;
   }
}
