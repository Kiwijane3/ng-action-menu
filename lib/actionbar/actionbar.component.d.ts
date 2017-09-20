import { ActionbarService } from '../actionbar.service';
import { OnInit } from '@angular/core';
import { OrientationService } from 'ng-orientation';
export declare class ActionbarComponent implements OnInit {
    private actions;
    searchText: string;
    vertical: boolean;
    private screenService;
    private actionbarService;
    inputExpanded: boolean;
    constructor(screenService: OrientationService, actionbarService: ActionbarService);
    ngOnInit(): void;
    expandInput(): void;
}
