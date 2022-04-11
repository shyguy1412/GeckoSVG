import { createSVGElement, registerComponent } from '../../../geckosvg';
import { GeckoSVGElement } from '@elements/GeckoSVGElement';

export class GeckoSVGRectElement extends GeckoSVGElement{

   static get tag(){
      return 'gecko-rect';
   }

   constructor(){
      super();

      const shadow = this.attachShadow({mode: 'closed'});
      shadow.appendChild(createSVGElement('rect'));
   }

   init() {

   };

}

registerComponent(GeckoSVGRectElement);
