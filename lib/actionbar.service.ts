import { Injectable } from '@angular/core';

export module ActionConst {

	export const TYPE_SEARCH = "type_search";

	export const TYPE_BUTTON_TEXT = "type_button_text";

	export const TYPE_BUTTON_ICON = "type_button_icon";

	export const STYLE_PRIMARY = "style_primary";

	export const STYLE_SECONDARY = "style_secondary";

	export const STYLE_WARNING = "style_warning";

}

export interface Action {
	type: string;
	style?: string;
	text: string;
	iconText: string;
	action: (parameter?: any) => void;
}

@Injectable()
export class ActionbarService {

	public actions: Action[];

	public onActionsUpdated: (actions: Action[]) => void;

	constructor() {
		this.onActionsUpdated = (actions: Action[]) => {};
	}

	public setActions(actions: Action[]) {
		this.actions = actions;
		this.onActionsUpdated(this.actions);
	}

}
