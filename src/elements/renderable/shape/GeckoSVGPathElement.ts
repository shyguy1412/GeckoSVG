import { createSVGElement } from '../../../geckosvg';
import { GeckoSVGRenderableElement } from '../GeckoSVGRenderableElement';

export class GeckoSVGPathElementPath {
   parent: GeckoSVGPathElement;
   private d: string;
   constructor(parent: GeckoSVGPathElement) {
      this.parent = parent;
      this.d = '';
   }

   moveTo(x: number, y: number): this {
      this.d += `M ${x},${y} `
      return this;
   }

   moveBy(x: number, y: number): this {
      this.d += `m ${x},${y} `
      return this;
   }

   line(x1: number, y1: number, x2: number, y2: number): this {
      return this.moveTo(x1, y1)
         .lineTo(x2, y2);
   }

   lineTo(x: number, y: number): this {
      this.d += `L ${x},${y} `
      return this;
   }

   lineBy(x: number, y: number): this {
      this.d += `l ${x},${y} `
      return this;
   }

   horizontalLineTo(x: number): this {
      this.d += `H ${x} `
      return this;
   }

   horizontalLineBy(x: number): this {
      this.d += `h ${x} `
      return this;
   }

   verticalLineTo(y: number): this {
      this.d += `V ${y} `
      return this;
   }

   verticalLineBy(y: number): this {
      this.d += `v ${y} `
      return this;
   }

   quadraticBezierTo(x1: number, y1: number, x: number, y: number): this {
      this.d += `Q ${x1},${y1} ${x},${y} `;
      return this;
   }

   quadraticBezierBy(x1: number, y1: number, x: number, y: number): this {
      this.d += `q ${x1},${y1} ${x},${y} `;
      return this;
   }
 
   smoothQuadraticBezierTo(x: number, y: number): this {
      this.d += `T ${x},${y} `;
      return this;
   }

   smoothQuadraticBezierBy(x: number, y: number): this {
      this.d += `t ${x},${y} `;
      return this;
   }

   cubicBezierTo(x1: number, y1: number, x2: number, y2: number, x: number, y: number): this {
      this.d += `C ${x1},${y1} ${x2},${y2} ${x},${y} `;
      return this;
   }

   cubicBezierBy(x1: number, y1: number, x2: number, y2: number, x: number, y: number): this {
      this.d += `c ${x1},${y1} ${x2},${y2} ${x},${y} `;
      return this;
   }
 
   smoothCubicBezierTo(x1: number, y1: number, x: number, y: number): this {
      this.d += `S ${x1},${y1} ${x},${y} `;
      return this;
   }

   smoothCubicBezierBy(x1: number, y1: number, x: number, y: number): this {
      this.d += `S ${x1},${y1} ${x},${y} `;
      return this;
   }

   ellipticArcTo(rx:number, ry:number, angle:number, x:number, y:number, largeFlag=true, sweepFlag=true): this{
      this.d += `A ${rx} ${ry} ${angle} ${largeFlag?1:0} ${sweepFlag?1:0} ${x},${y} `
      return this;
   }

   ellipticArcBy(rx:number, ry:number, angle:number, x:number, y:number, largeFlag=true, sweepFlag=true): this{
      this.d += `a ${rx} ${ry} ${angle} ${largeFlag?1:0} ${sweepFlag?1:0} ${x},${y} `
      return this;
   }


   endPath(close=false) {
      if(close)this.d += 'Z';
      this.parent.d(this.toString());
      return this.parent;
   }

   toString(): string {
      return this.d;
   }
}

export class GeckoSVGPathElement extends GeckoSVGRenderableElement<SVGPathElement>{

   constructor() {
      super();
      this.$el = createSVGElement('path');
   }

   d(d: string): this {
      this.$el.setAttribute('d', d);
      return this;
   }

   pathLength(length: number): this {
      this.$el.setAttribute('pathLength', length + 'px');
      return this;
   }

   startPath(): GeckoSVGPathElementPath {
      return new GeckoSVGPathElementPath(this);
   }

}
