# About

ng-action-menu is a library for Angular 4 that provides a flexible menu component that can be manipulated from code. It is designed to separate the menu from the page content, allowing simpler and more flexible layout. This library uses material design components.

# Usage Guide

## Installation

To use ng-action-menu, begin by installing it:

	```Bash
	npm install --save ng-action-menu
	```

Then import it into your app's angular module as follows:

	```Typescript
	...
	import { ActionbarModule } from 'ng-action-menu';

	@NgModule({
		...,
		imports: [
			...,
			ActionbarModule
		],
		...
	}) export class...
	```

## Using the menu

The menu component can be placed into your app using the selector *ng-actionbar*. It can then be populated using the *ActionbarService*. Request it via Angular's dependency injector, and then call the *setActions* method on it at an appropriate time, such in the content component's *ngOnInit*; For example:

	```Typescript
	...
	import { Action, ActionConst, ActionbarService } from 'ng-action-menu';

	@Component({
		selector: 'example',
		templateUrl: './example.component.html',
		styleUrls: ['./example.component.css]
	}) export class Example implements OnInit{

		private actionbarService: ActionbarService;
		...

		public constructor(actionbarService: ActionbarService,...){
			this.actionbarService = actionbarService;
			...
		}

		ngOnInit(){
			this.actionbarService.setActions([
				{
					type: ActionConst.TYPE_TEXT_INPUT,
					style: ActionConst.STYLE_PRIMARY,
					text: 'Example',
					iconText: 'example'
				}
			]);
			...
		}

		...

	}
	```

The setActions method takes a list of actions, which describes the menu to be described. Actions have the following schema:

- type (string): The type of widget to be displayed. One of:
  - ActionConst.TYPE_TEXT_INPUT: A text input.
  - ActionConst.TYPE_BUTTON_TEXT: A button that appears as text when possible.
  - ActionConst.TYPE_BUTTON_ICON: A button that always appears as an icon.
- style (string): Determines the css class of the button's text. One of:
  - ActionConst.STYLE_PRIMARY: Intended for the most important option.
  - ActionConst.STYLE_SECONDARY: Intended for other options that do not require the other styles.
  - ActionConst.STYLE_WARNING: Intended for options that are destructive, such as deletion.
- text: The text to represent the option when it is displayed as an icon.
- iconText: Determines the icon used. If ligatures are supported on target browser, then the icon's name can be used; Otherwise the hexadecimal id will be necessary.
- action ((parameter?: any) => void): The function to be called when this action's menu representation is used. For search fields, parameter will be the input's current context; parameter is otherwise undefined.

## Styling

The actionbar can be styled using several preset classes. These include:

- ng-action-menu: Styles the whole actionbar.
- ng-action-menu-element: Styles the wrapper around the individual elements of the actionbar.
- ng-action-menu-text-style-primary: Styles text buttons that have been given the primary style.
- ng-action-menu-text-style-secondary: Styles text buttons that have been given the secondary style.
- ng-action-menu-text-style-warning: Styles text buttons that have been given the warning style.
- ng-action-menu-icon-style-primary: Styles icon buttons that have been given the primary style.
- ng-action-menu-icon-style-secondary: Styles icon buttons that have been given the secondary style.
- ng-action-menu-icon-style-warning: Styles icon buttons that have been given the warning style.

## Adaptive display

The actionbar will display itself differently depending on orientation of the display, in order to provide an ideal user experience on both desktop and mobile displays. When the screen is horizontally oriented, text buttons will display as text and search bars will display the full input. When the screen is vertically oriented,text buttons will display as icons, and search bars will display an icon until the user interacts with them. Icon buttons will always appear as icons.