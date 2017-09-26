import { Action, ActionbarService } from '../actionbar.service';
import { OnInit } from '@angular/core';
import { OrientationService } from 'ng-orientation';
export declare class ActionbarComponent implements OnInit {
    actions: Action[];
    searchText: string;
    vertical: boolean;
    private screenService;
    private actionbarService;
    inputExpanded: boolean;
    constructor(screenService: OrientationService, actionbarService: ActionbarService);
    ngOnInit(): void;
    expandInput(): void;
}
