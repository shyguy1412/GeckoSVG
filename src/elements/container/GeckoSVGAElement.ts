import { createSVGElement } from "geckosvg";
import { GeckoSVGContainerElement } from "./GeckoSVGContainerElement";

export class GeckoSVGAElement extends GeckoSVGContainerElement<SVGAElement>{

   constructor(){
      super();
      this.$el = createSVGElement('a') as SVGAElement;
   }

   href(href:string){
      this.$el.setAttribute('href', href);
      return this;
   }

}
