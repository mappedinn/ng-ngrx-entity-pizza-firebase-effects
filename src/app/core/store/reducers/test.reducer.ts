import { Action } from '@ngrx/store';


export interface TestState {
  testOnThePlay: boolean;
}

export const initialState: TestState = {
  testOnThePlay: true
};

export function reducer(state = initialState, action: Action): TestState {
  switch (action.type) {

    default:
      return state;
  }
}


export const getTest = (state: TestState) => state.testOnThePlay;
