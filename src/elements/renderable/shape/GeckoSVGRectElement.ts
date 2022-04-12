import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGRectElement extends GeckoSVGRenderableElement<SVGRectElement>{

   constructor(){
      super();
      this.$el = createSVGElement('rect') as SVGRectElement;
   }

   pos(x:number, y:number){
      this.$el.setAttribute('x', x+'');
      this.$el.setAttribute('y', y+'');
      return this;
   }

   width(width:number){
      this.$el.setAttribute('width', width+'');
      return this;
   }

   height(height:number){
      this.$el.setAttribute('height', height+'');
      return this;
   }

}
