import {GeckoSVGElement} from '@elements/GeckoSVGElement';

export class GeckoSVGContainerElement<T extends SVGElement> extends GeckoSVGElement<T>{

   constructor(){
      super();
   }

   appendChild(child:SVGElement){
      this.$el.appendChild(child);
      return this;
   }

}
