import { GeckoSVGContainerElement } from "./container/GeckoSVGContainerElement";

export class GeckoSVGElement<T extends SVGElement>{
   $el!:T;

   parent(parent:SVGElement|GeckoSVGContainerElement<any>){
      parent.appendChild(this.$el);
      return this;
   }

   id(id:string){
      this.$el.id = id;
      return this;
   }

   addClass(c:string){
      this.$el.classList.add(c);
      return this;
   }

   display(display:'none'|'inherit'|''){
      this.$el.setAttribute('display', display);
   }

   cursor(cursor:string){
      this.$el.setAttribute('cursor', cursor);
      return this;
   }

   removeClass(c:string){
      this.$el.classList.remove(c);
      return this;
   }

}
