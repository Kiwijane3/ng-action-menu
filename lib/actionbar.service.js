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
var core_1 = require("@angular/core");
var ActionConst;
(function (ActionConst) {
    ActionConst.TYPE_SEARCH = "type_search";
    ActionConst.TYPE_BUTTON_TEXT = "type_button_text";
    ActionConst.TYPE_BUTTON_ICON = "type_button_icon";
    ActionConst.STYLE_PRIMARY = "style_primary";
    ActionConst.STYLE_SECONDARY = "style_secondary";
    ActionConst.STYLE_WARNING = "style_warning";
})(ActionConst = exports.ActionConst || (exports.ActionConst = {}));
var ActionbarService = (function () {
    function ActionbarService() {
        this.onActionsUpdated = function (actions) { };
    }
    ActionbarService.prototype.setActions = function (actions) {
        this.actions = actions;
        this.onActionsUpdated(this.actions);
    };
    ActionbarService = __decorate([
        core_1.Injectable(), core_1.Component({}),
        __metadata("design:paramtypes", [])
    ], ActionbarService);
    return ActionbarService;
}());
exports.ActionbarService = ActionbarService;
//# sourceMappingURL=actionbar.service.js.map