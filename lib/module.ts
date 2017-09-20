import { NgModule } from '@angular/core';

import { ActionbarComponent } from './actionbar/actionbar.component';
import { ActionbarService, Action, ActionConst } from'./actionbar.service';

@NgModule({
    "declarations": [
        ActionbarComponent,
        ActionbarService
    ],
    "providers": [
        ActionbarService
    ],
    "exports": [
        ActionbarComponent,
        ActionbarService
    ]
})
export class ActionbarModule{

}