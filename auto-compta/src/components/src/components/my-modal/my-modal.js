"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyModal = void 0;
const core_1 = require("@stencil/core");
let MyModal = class MyModal {
    getTitle() {
        return this.myTitle;
    }
    render() {
        return <div>Future modale here : {this.getTitle()}.</div>;
    }
};
__decorate([
    (0, core_1.Prop)()
], MyModal.prototype, "myTitle", void 0);
MyModal = __decorate([
    (0, core_1.Component)({
        tag: 'my-modal',
        styleUrl: 'my-modal.scss',
        shadow: false,
    })
], MyModal);
exports.MyModal = MyModal;
