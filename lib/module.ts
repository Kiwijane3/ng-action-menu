import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { OrientationModule } from 'ng-orientation'

import { ActionbarComponent } from './actionbar/actionbar.component';
import { ActionbarService, Action, ActionConst } from'./actionbar.service';

@NgModule({
    "imports": [
        BrowserModule,
		MaterialModule,
        FlexLayoutModule,
        FormsModule,
        OrientationModule
    ],
    "declarations": [
        ActionbarComponent
    ],
    "providers": [
        ActionbarService
    ],
    "exports": [
        ActionbarComponent
    ]
})
export class ActionbarModule{

}