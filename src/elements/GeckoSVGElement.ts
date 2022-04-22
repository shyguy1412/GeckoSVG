import { GeckoSVGContainerElement } from "./container/GeckoSVGContainerElement";

export class GeckoSVGElement<T extends SVGElement>{
   $el!: T;

   parent(parent: SVGElement | GeckoSVGContainerElement<any>): this {
      parent.appendChild(this.$el);
      return this;
   }

   id(id: string): this {
      this.$el.id = id;
      return this;
   }

   addClass(c: string): this {
      this.$el.classList.add(c);
      return this;
   }

   display(display: 'none' | 'inherit' | ''): this {
      this.$el.setAttribute('display', display);
      return this;
   }

   cursor(cursor: string): this {
      this.$el.setAttribute('cursor', cursor);
      return this;
   }

   removeClass(c: string): this {
      this.$el.classList.remove(c);
      return this;
   }

}
