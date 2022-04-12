import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGTextElement extends GeckoSVGRenderableElement<SVGTextElement> {
    constructor(){
        super();
        this.$el = createSVGElement('text') as SVGTextElement;
    }

    text(text:string){
        this.$el.textContent = text;
        return this;
    }

    pos(x:number, y:number){
        this.$el.setAttribute('x', x+'');
        this.$el.setAttribute('y', y+'');
        return this;
     }
  
}
