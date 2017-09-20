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
Object.defineProperty(exports, "__esModule", { value: true });
var actionbar_service_1 = require("../actionbar.service");
var core_1 = require("@angular/core");
var ng_orientation_1 = require("ng-orientation");
var ActionbarComponent = (function () {
    function ActionbarComponent(screenService, actionbarService) {
        var _this = this;
        this.screenService = screenService;
        this.actionbarService = actionbarService;
        this.screenService.subscribe(function (vertical) { _this.vertical = vertical; });
    }
    ActionbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.actionbarService.onActionsUpdated = function (actions) {
            _this.actions = actions;
            _this.inputExpanded = false;
        };
    };
    ActionbarComponent.prototype.expandInput = function () {
        this.inputExpanded = true;
    };
    ActionbarComponent = __decorate([
        core_1.Component({
            selector: 'ng-actionbar',
            templateUrl: './actionbar.component.html',
            styleUrls: ['./actionbar.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof ng_orientation_1.OrientationService !== "undefined" && ng_orientation_1.OrientationService) === "function" && _a || Object, actionbar_service_1.ActionbarService])
    ], ActionbarComponent);
    return ActionbarComponent;
    var _a;
}());
exports.ActionbarComponent = ActionbarComponent;
//# sourceMappingURL=actionbar.component.js.map