import { Action } from '@ngrx/store';
import { Pizza } from '@app/modules/pizza/store/reducers/pizza.reducer';

export enum PizzaActionTypes {
  // PIZZA_QUERY: Action from angular app
  PIZZA_QUERY = '[Pizza] QUERY',

  // PIZZA_QUERY: Action from firbase
  PIZZA_ADDED = '[Pizza] ADDED',

  // PIZZA_QUERY: Action from firebase
  PIZZA_MODIFED = '[Pizza] MODIFIED',

  // PIZZA_DELETED: Action from angular app
  PIZZA_DELETED = '[Pizza] DELETED',

  // PIZZA_QUERY: Action from angular app
  PIZZA_UPDATE = '[Pizza] UPDATE',

  // PIZZA_QUERY: Action from angular app
  PIZZA_UPDATE_SUCCESS = '[Pizza] UPDATE SUCCESS'

  // SUMMARY:
  // By convention, if the action is past participale (added, modified, deleted)
  // then, the action is done in the backend (here, it it firebase)
  // By convention, if the action is verb (query, update, update success)
  // then, the action is done by the front
}

export class PizzaQueryAction implements Action {
  readonly type = PizzaActionTypes.PIZZA_QUERY;

  constructor() {}
}

export class PizzaAddedAction implements Action {
  readonly type = PizzaActionTypes.PIZZA_ADDED;

  constructor(public paylaod: Pizza) {}
}

export class PizzaModifiedAction implements Action {
  readonly type = PizzaActionTypes.PIZZA_MODIFED;

  constructor(public paylaod: Pizza) {}
}

export class PizzaDeletedAction implements Action {
  readonly type = PizzaActionTypes.PIZZA_DELETED;

  constructor(public paylaod: Pizza) {}
}

export class PizzaUpdateAction implements Action {
  readonly type = PizzaActionTypes.PIZZA_UPDATE;

  constructor(public id: string, public changes: Partial<Pizza>) {}
}

export class PizzaUpdateSuccessAction implements Action {
  readonly type = PizzaActionTypes.PIZZA_UPDATE_SUCCESS;

  constructor() {}
}


export type PizzaActions = PizzaQueryAction |  PizzaAddedAction | PizzaModifiedAction |
  PizzaDeletedAction | PizzaUpdateAction | PizzaUpdateSuccessAction;
