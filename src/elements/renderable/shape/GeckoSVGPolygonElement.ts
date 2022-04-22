import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGPolygonElement extends GeckoSVGRenderableElement<SVGPolygonElement>{

   constructor() {
      super();
      this.$el = createSVGElement('polygon');
   }

   points(points: { x: number, y: number }[]): this {
      const pointsString = points.reduce((previous, next) => previous + `${next.x}, ${next.y} `, '');
      this.$el.setAttribute('points', pointsString);
      return this;
   }

   pathLength(length: number): this {
      this.$el.setAttribute('pathLength', length + 'px');
      return this;
   }

}
