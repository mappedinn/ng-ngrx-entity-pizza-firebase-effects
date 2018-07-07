import { Action } from '@ngrx/store';

export enum TestActionTypes {
  TEST_LOAD = '[Test] Test load'
}

export class TestLoad implements Action {
  readonly type = TestActionTypes.TEST_LOAD;
}

export type TestActions = TestLoad;
