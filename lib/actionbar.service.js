"use strict";
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
var ActionbarService = /** @class */ (function () {
    function ActionbarService() {
        this.onActionsUpdated = function (actions) { };
    }
    ActionbarService.prototype.setActions = function (actions) {
        this.actions = actions;
        this.onActionsUpdated(this.actions);
    };
    ActionbarService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    ActionbarService.ctorParameters = function () { return []; };
    return ActionbarService;
}());
exports.ActionbarService = ActionbarService;
//# sourceMappingURL=actionbar.service.js.map