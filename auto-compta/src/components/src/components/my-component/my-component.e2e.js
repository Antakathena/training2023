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
describe('my-component', () => {
    it('renders', () => __awaiter(void 0, void 0, void 0, function* () {
        const page = yield (0, testing_1.newE2EPage)();
        yield page.setContent('<my-component></my-component>');
        const element = yield page.find('my-component');
        expect(element).toHaveClass('hydrated');
    }));
    it('renders changes to the name data', () => __awaiter(void 0, void 0, void 0, function* () {
        const page = yield (0, testing_1.newE2EPage)();
        yield page.setContent('<my-component></my-component>');
        const component = yield page.find('my-component');
        const element = yield page.find('my-component >>> div');
        expect(element.textContent).toEqual(`Hello, World! I'm `);
        component.setProperty('first', 'James');
        yield page.waitForChanges();
        expect(element.textContent).toEqual(`Hello, World! I'm James`);
        component.setProperty('last', 'Quincy');
        yield page.waitForChanges();
        expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);
        component.setProperty('middle', 'Earl');
        yield page.waitForChanges();
        expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
    }));
});
