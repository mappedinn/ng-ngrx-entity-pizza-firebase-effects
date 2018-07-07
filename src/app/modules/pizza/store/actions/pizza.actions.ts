import { Action } from '@ngrx/store';

export interface Pizza {
  id: string;
  size: string;
  status: string;
}



export enum PizzaActionTypes {
  // PIZZA_QUERY: Action from angular app
  PIZZA_QUERY = '[Pizza] query pizzas',

  // PIZZA_QUERY: Action from firbase
  PIZZA_ADDED = '[Pizza] added',

  // PIZZA_QUERY: Action from firebase
  PIZZA_MODIFED = '[Pizza] modified',

  // PIZZA_REMOVED: Action from angular app
  PIZZA_REMOVED = '[Pizza] removed',

  // PIZZA_QUERY: Action from angular app
  PIZZA_UPDATE = '[Pizza] update',

  // PIZZA_QUERY: Action from angular app
  PIZZA_UPDATE_SUCCESS = '[Pizza] update success'

  // SUMMARY:
  // By convention, if the action is past participale (added, modified, removed)
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

export class PizzaRemovedAction implements Action {
  readonly type = PizzaActionTypes.PIZZA_REMOVED;

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
  PizzaRemovedAction | PizzaUpdateAction | PizzaUpdateSuccessAction;
