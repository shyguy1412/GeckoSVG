import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGLineElement extends GeckoSVGRenderableElement<SVGLineElement>{

   constructor() {
      super();
      this.$el = createSVGElement('line');
   }

   line(x1: number, y1: number, x2: number, y2: number): this {
      this.$el.setAttribute('x1', x1 + '');
      this.$el.setAttribute('y1', y1 + '');
      this.$el.setAttribute('x2', x2 + '');
      this.$el.setAttribute('y2', y2 + '');
      return this;
   }

   pathLength(length: number): this {
      this.$el.setAttribute('pathLength', length + 'px');
      return this;
   }

}
