import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '@env/environment';

import * as fromTest from './test.reducer';

export interface State {
  test: fromTest.TestState;
}

export const reducers: ActionReducerMap<State> = {
  test: fromTest.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


export const getTestState = createFeatureSelector<fromTest.TestState>('test');
export const getTest = createSelector(getTestState, fromTest.getTest);
