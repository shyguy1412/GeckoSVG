import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGTextElement extends GeckoSVGRenderableElement<SVGTextElement> {
    constructor() {
        super();
        this.$el = createSVGElement('text');
    }

    text(text: string): this {
        this.$el.textContent = text;
        return this;
    }

    pos(x: number, y: number): this {
        this.$el.setAttribute('x', x + '');
        this.$el.setAttribute('y', y + '');
        return this;
    }

}
