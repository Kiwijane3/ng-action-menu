export declare module ActionConst {
    const TYPE_SEARCH = "type_search";
    const TYPE_BUTTON_TEXT = "type_button_text";
    const TYPE_BUTTON_ICON = "type_button_icon";
    const STYLE_PRIMARY = "style_primary";
    const STYLE_SECONDARY = "style_secondary";
    const STYLE_WARNING = "style_warning";
}
export interface Action {
    type: string;
    style?: string;
    text: string;
    iconText: string;
    action: (parameter?: any) => void;
}
export declare class ActionbarService {
    actions: Action[];
    onActionsUpdated: (actions: Action[]) => void;
    constructor();
    setActions(actions: Action[]): void;
}
