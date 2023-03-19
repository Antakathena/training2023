"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@stencil/core/testing");
const my_component_1 = require("./my-component");
describe('my-component', () => {
    it('renders', () => __awaiter(void 0, void 0, void 0, function* () {
        const { root } = yield (0, testing_1.newSpecPage)({
            components: [my_component_1.MyComponent],
            html: '<my-component></my-component>',
        });
        expect(root).toEqualHtml(`
      <my-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </my-component>
    `);
    }));
    it('renders with values', () => __awaiter(void 0, void 0, void 0, function* () {
        const { root } = yield (0, testing_1.newSpecPage)({
            components: [my_component_1.MyComponent],
            html: `<my-component first="Stencil" last="'Don't call me a framework' JS"></my-component>`,
        });
        expect(root).toEqualHtml(`
      <my-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </my-component>
    `);
    }));
});
