import { expect } from 'chai';
import { GeckoSVG, applyAttributes, registerComponent } from '../src/geckosvg';

describe('GeckoSVG', () => {


    describe('Base class', () => {
        const testDiv = document.createElement('div');

        before(() => {
            document.body.append(testDiv);
        });

        after(() => {
            testDiv.remove();
        });

        it('can instantiate', () => {
            const svg = GeckoSVG.create();
            expect(svg instanceof GeckoSVG).to.equal(true);
        });

        it('can be attached to dom', () => {
            const svg = GeckoSVG.create();
            testDiv.append(svg);
            expect(document.querySelector('gecko-svg')).to.equal(svg);
            svg.remove();
            expect(document.querySelector('gecko-svg')).to.equal(null);
        });

        describe('can be extended', () => {
            class Test extends GeckoSVG {
            }

            it('can be registered', () => {
                registerComponent(Test);
            });

            it('can be created', () => {
                const svg = Test.create();
                expect(svg instanceof Test).to.equal(true);
            });

            it('can be attached to dom', () => {
                const svg = Test.create();
                testDiv.append(svg);
                expect(document.querySelector('test-svg')).to.equal(svg);
                svg.remove();
                expect(document.querySelector('test-svg')).to.equal(null);
            });

        })

    });

    describe('SVG API', () => {

        const svg = GeckoSVG.create<GeckoSVG>();
        const testDiv = document.createElement('div');

        before(() => {
            svg.width = 500;
            svg.height = 500;

            document.body.append(testDiv);
            testDiv.append(svg);

        });

        after(() => {
            // testDiv.remove();
        });

        it('can create rectangle', () => {
            expect(svg.querySelector('gecko-rect')).to.be.equal(null);
            const rect = svg.rect(0, 0, 100, 100);
            expect(svg.querySelector('gecko-rect')).to.be.equal(rect);
        });
    });

});
