import { Action } from '@ngrx/store';

export enum todoActionsType {
    create = '[TODO] create',
    toggle = '[TODO] toggle',
    delete = '[TODO] delete',
    edit = '[TODO] edit'
}

export class TodoCreateActions implements Action {
    readonly type: string = todoActionsType.create;
    constructor(public payload: {name: string}) {

    }
}

export class TodoDeleteActions implements Action {
    readonly type: string = todoActionsType.delete;
    constructor(public payload: {id: number}) {

    }
}

export class TodoToggleActions implements Action {
    readonly type: string = todoActionsType.toggle;
    constructor(public payload: {id: number}) {
    }
}

export class TodoEditActions implements Action {
    readonly type: string = todoActionsType.edit;
    constructor(public payload: {id: number, name: string}) {
    }
}

export type TodoActions = TodoCreateActions | TodoDeleteActions | TodoToggleActions | TodoEditActions;
