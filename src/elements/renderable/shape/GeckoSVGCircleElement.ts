import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGCircleElement extends GeckoSVGRenderableElement<SVGCircleElement>{

   constructor(){
      super();
      this.$el = createSVGElement('circle') as SVGCircleElement;
   }

   pos(x:number, y:number){
      this.$el.setAttribute('x', x+'');
      this.$el.setAttribute('y', y+'');
      return this;
   }

   radius(x:number){
       this.$el.setAttribute('rx', x+'px');
       return this;
   }

   pathLength(length:number){
      this.$el.setAttribute('pathLength', length+'px');
      return this;
   }

}
