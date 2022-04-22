import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGEllipseElement extends GeckoSVGRenderableElement<SVGEllipseElement>{

   constructor() {
      super();
      this.$el = createSVGElement('ellipse');
   }

   pos(x: number, y: number): this {
      this.$el.setAttribute('cx', x + '');
      this.$el.setAttribute('cy', y + '');
      return this;
   }

   radius(x: number, y = x): this {
      this.$el.setAttribute('rx', x + 'px');
      this.$el.setAttribute('ry', y + 'px');
      return this;
   }

   pathLength(length: number): this {
      this.$el.setAttribute('pathLength', length + 'px');
      return this;
   }

}
