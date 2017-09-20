import { Action, ActionbarService } from '../actionbar.service';
import { Component, Input, OnInit } from '@angular/core';

import { OrientationService } from 'ng-orientation';

@Component({
	selector: 'ng-actionbar',
	templateUrl: './actionbar.component.html',
	styleUrls: ['./actionbar.component.scss']
})
export class ActionbarComponent implements OnInit {

	private actions: Action[];

	public searchText: string;

	public vertical: boolean;

	private screenService: OrientationService;

	private actionbarService: ActionbarService;

	public inputExpanded: boolean;

	constructor(screenService: OrientationService, actionbarService: ActionbarService) {
		this.screenService = screenService;
		this.actionbarService = actionbarService;
		this.screenService.subscribe((vertical) => { this.vertical = vertical });
	}

	ngOnInit() {
		this.actionbarService.onActionsUpdated = (actions) => {
			this.actions = actions;
			this.inputExpanded = false;
		}
	}

	public expandInput(){
		this.inputExpanded = true;
	}

}
