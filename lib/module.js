"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var ng_orientation_1 = require("ng-orientation");
var actionbar_component_1 = require("./actionbar/actionbar.component");
var actionbar_service_1 = require("./actionbar.service");
var ActionbarModule = /** @class */ (function () {
    function ActionbarModule() {
    }
    ActionbarModule.decorators = [
        { type: core_1.NgModule, args: [{
                    "imports": [
                        platform_browser_1.BrowserModule,
                        material_1.MaterialModule,
                        flex_layout_1.FlexLayoutModule,
                        forms_1.FormsModule,
                        ng_orientation_1.OrientationModule
                    ],
                    "declarations": [
                        actionbar_component_1.ActionbarComponent
                    ],
                    "providers": [
                        actionbar_service_1.ActionbarService
                    ],
                    "exports": [
                        actionbar_component_1.ActionbarComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    ActionbarModule.ctorParameters = function () { return []; };
    return ActionbarModule;
}());
exports.ActionbarModule = ActionbarModule;
//# sourceMappingURL=module.js.map