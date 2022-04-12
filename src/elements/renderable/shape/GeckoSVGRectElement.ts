import { createSVGElement } from 'geckosvg';
import { GeckoSVGElement } from '@elements/GeckoSVGElement';

export class GeckoSVGRectElement extends GeckoSVGElement<SVGRectElement>{

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

   fill(color:string){
      this.$el.setAttribute('fill', color);
      return this;
   }

   stroke(color:string){
      this.$el.setAttribute('stroke', color);
      return this;
   }

}
