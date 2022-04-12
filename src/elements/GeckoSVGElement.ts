import { GeckoSVGContainerElement } from "./container/GeckoSVGContainerElement";

export class GeckoSVGElement<T extends SVGElement> {
   $el!:T;

   parent(parent:SVGElement|GeckoSVGContainerElement<any>){
      parent.appendChild(this.$el);
      return this;
   }

}
