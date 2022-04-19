import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGPathElement extends GeckoSVGRenderableElement<SVGPathElement>{

   constructor(){
      super();
      this.$el = createSVGElement('path') as SVGPathElement;
   }

   d(d:string){
       this.$el.setAttribute('d', d);
       return this;
   }

   pathLength(length:number){
      this.$el.setAttribute('pathLength', length+'px');
      return this;
   }

}