import { GeckoSVGElement } from "../GeckoSVGElement";

export class GeckoSVGRenderableElement<T extends SVGElement> extends GeckoSVGElement<T>{
    fill(color:string){
        this.$el.setAttribute('fill', color);
        return this;
     }
  
     stroke(color:string){
        this.$el.setAttribute('stroke', color);
        return this;
     }

     strokeWidth(width:number){
         this.$el.setAttribute('stroke-width', width + 'px');
         return this;
     }
}