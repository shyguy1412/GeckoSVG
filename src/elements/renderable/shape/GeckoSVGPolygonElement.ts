import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGPolygonElement extends GeckoSVGRenderableElement<SVGPolygonElement>{

   constructor(){
      super();
      this.$el = createSVGElement('polygon') as SVGPolygonElement;
   }

   points(points:{x:number,y:number}[]){
      const pointsString = points.reduce((previous, next) => previous + `${next.x}, ${next.y} `, '');
      this.$el.setAttribute('points', pointsString);
      return this;
   }

}
