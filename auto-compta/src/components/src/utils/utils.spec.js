"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
describe('format', () => {
    it('returns empty string for no names defined', () => {
        expect((0, utils_1.format)(undefined, undefined, undefined)).toEqual('');
    });
    it('formats just first names', () => {
        expect((0, utils_1.format)('Joseph', undefined, undefined)).toEqual('Joseph');
    });
    it('formats first and last names', () => {
        expect((0, utils_1.format)('Joseph', undefined, 'Publique')).toEqual('Joseph Publique');
    });
    it('formats first, middle and last names', () => {
        expect((0, utils_1.format)('Joseph', 'Quincy', 'Publique')).toEqual('Joseph Quincy Publique');
    });
});
