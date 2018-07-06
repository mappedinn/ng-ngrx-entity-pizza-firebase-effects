import { Action } from '@ngrx/store';
import * as appReducer from '@app/core';


export interface WelcomeState {
  welcomeOnThePlay: boolean;
}

export const initialState: WelcomeState = {
  welcomeOnThePlay: false
};

export interface IState extends appReducer.State {
  // this extensions is meant to allow merging behind the scene IQuestionnaireState with appReducer.IState
  questionnaire: WelcomeState;
}

export function reducer(state = initialState, action: Action): WelcomeState {
  switch (action.type) {

    default:
      return state;
  }
}
