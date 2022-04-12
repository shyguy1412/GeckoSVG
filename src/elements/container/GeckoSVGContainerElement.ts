import {GeckoSVGElement} from '@elements/GeckoSVGElement';

export class GeckoSVGContainerElement<T extends SVGElement> extends GeckoSVGElement<T>{

   constructor(){
      super();
   }

   appendChild(child:GeckoSVGElement<any>){
      this.$el.appendChild(child.$el);
   }

}
