"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.format = void 0;
function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}
exports.format = format;
