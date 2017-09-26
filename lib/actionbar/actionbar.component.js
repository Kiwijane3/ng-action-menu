"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var actionbar_service_1 = require("../actionbar.service");
var core_1 = require("@angular/core");
var ng_orientation_1 = require("ng-orientation");
var ActionbarComponent = /** @class */ (function () {
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
    ActionbarComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ng-actionbar',
                    templateUrl: './actionbar.component.html',
                    styleUrls: ['./actionbar.component.scss']
                },] },
    ];
    /** @nocollapse */
    ActionbarComponent.ctorParameters = function () { return [
        { type: ng_orientation_1.OrientationService, },
        { type: actionbar_service_1.ActionbarService, },
    ]; };
    return ActionbarComponent;
}());
exports.ActionbarComponent = ActionbarComponent;
//# sourceMappingURL=actionbar.component.js.map