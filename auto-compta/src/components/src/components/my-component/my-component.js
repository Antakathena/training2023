"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyComponent = void 0;
const core_1 = require("@stencil/core");
const utils_1 = require("../../utils/utils");
let MyComponent = class MyComponent {
    getName() {
        return this.name;
    }
    getText() {
        return (0, utils_1.format)(this.first, this.middle, this.last);
    }
    getAge() {
        return this.age;
    }
    render() {
        return <div>Hello, World! I'm {this.getName()}. {this.getText()}. I'm {this.getAge()} years old.</div>;
    }
};
__decorate([
    (0, core_1.Prop)()
], MyComponent.prototype, "name", void 0);
__decorate([
    (0, core_1.Prop)()
], MyComponent.prototype, "first", void 0);
__decorate([
    (0, core_1.Prop)()
], MyComponent.prototype, "middle", void 0);
__decorate([
    (0, core_1.Prop)()
], MyComponent.prototype, "last", void 0);
__decorate([
    (0, core_1.Prop)()
], MyComponent.prototype, "age", void 0);
MyComponent = __decorate([
    (0, core_1.Component)({
        tag: 'my-component',
        styleUrl: 'my-component.css',
        shadow: true,
    })
], MyComponent);
exports.MyComponent = MyComponent;
