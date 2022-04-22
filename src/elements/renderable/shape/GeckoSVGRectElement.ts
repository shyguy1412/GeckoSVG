import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGRectElement extends GeckoSVGRenderableElement<SVGRectElement>{

   constructor() {
      super();
      this.$el = createSVGElement('rect');
   }

   pos(x: number, y: number): this {
      this.$el.setAttribute('x', x + '');
      this.$el.setAttribute('y', y + '');
      return this;
   }

   cornerRadius(rx: number, ry = 0): this {
      this.$el.setAttribute('rx', rx + 'px');
      this.$el.setAttribute('ry', ry + 'px');
      return this;
   }

   width(width: number): this {
      this.$el.setAttribute('width', width + '');
      return this;
   }

   height(height: number): this {
      this.$el.setAttribute('height', height + '');
      return this;
   }

   pathLength(length: number): this {
      this.$el.setAttribute('pathLength', length + 'px');
      return this;
   }

}
