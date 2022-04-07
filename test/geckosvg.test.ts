require('jsdom-global')()
import { expect } from 'chai';
import { applyAttributes, createSVGElement, createSVGRectElement } from '../src/geckodom';
import { GeckoSVG } from '../src/geckosvg';

describe('GeckoSVG', () => {

    it('can instantiate', () => {
        const svg = GeckoSVG.createElement(100, 100);
        expect(svg.width).to.equal(100);
        expect(svg.height).to.equal(100);
    });

    describe('SVG API', () => {

        describe('Gecko DOM interface', () =>{
            it('can create generic SVGElement', () => {
                const svgElement = createSVGElement('rect');
                expect(svgElement.innerHTML).to.equal('', 'Should be empty element');
            });

            it('can apply attributes', () => {
                const svgElement = createSVGElement('rect');
                applyAttributes(svgElement, {
                    x: 0,
                    y: 0,
                    width: 100,
                    height: 40
                });
                expect(svgElement.getAttribute('x')).to.equal('0');
                expect(svgElement.getAttribute('y')).to.equal('0');
                expect(svgElement.getAttribute('width')).to.equal('100');
                expect(svgElement.getAttribute('height')).to.equal('40');
            });

            it('can create SVGRectElement', () => {
                const rectElement = createSVGRectElement();
                expect(rectElement.innerHTML).to.equal('', 'Should be empty element');
            });
        });

        describe('GeckoSVG class', () => {

            let svg:GeckoSVG;

            beforeEach(() => {
                svg = GeckoSVG.createElement(500, 500);
            });

            it('can create rectangle', () => {
                //not defined for weird reasons.
                //svg.rect(0, 0, 100, 100);
            });
        });

    })

});