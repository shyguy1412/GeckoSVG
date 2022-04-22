import { GeckoSVGElement } from "../GeckoSVGElement";

export class GeckoSVGContainerElement<T extends SVGElement> extends GeckoSVGElement<T>{

   constructor() {
      super();
   }

   appendChild(child: SVGElement): this {
      this.$el.appendChild(child);
      return this;
   }

}
