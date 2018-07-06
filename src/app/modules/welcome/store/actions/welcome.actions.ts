import { Action } from '@ngrx/store';

export enum WelcomeActionTypes {
  LoadWelcomes = '[Welcome] Load Welcomes'
}

export class LoadWelcome implements Action {
  readonly type = WelcomeActionTypes.LoadWelcomes;
}

export type WelcomeActions = LoadWelcome;
