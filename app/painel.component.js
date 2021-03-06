"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PainelComponent = (function () {
    function PainelComponent() {
        this.corpo = "Corpo do painel";
    }
    PainelComponent = __decorate([
        core_1.Component({
            selector: 'painel',
            template: "\n        <div class=\"panel panel-primary\">\n            <div class=\"panel-heading\">\n                <ng-content select=\".titulo\"></ng-content>\n            </div>\n            <div class=\"panel-body\">\n                <ng-content select=\".corpo\"></ng-content>\n            </div>\n        </div> \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], PainelComponent);
    return PainelComponent;
}());
exports.PainelComponent = PainelComponent;
//# sourceMappingURL=painel.component.js.map