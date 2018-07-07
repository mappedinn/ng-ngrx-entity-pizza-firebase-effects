
import { Action } from '@ngrx/store';
import { Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { DataService } from '@app/core';

import {switchMap, mergeMap, map } from 'rxjs/operators';

import {PizzaActionTypes, Pizza, PizzaUpdateAction, PizzaUpdateSuccessAction} from '@app/modules/pizza/store/actions/pizza.actions';


@Injectable()
export class PizzaEffects {

  constructor(private actions$: Actions, private dataService: DataService) {}

  @Effect()
  query$: Observable<Action> = this.actions$.ofType(PizzaActionTypes.PIZZA_QUERY).pipe(
    switchMap(action => {
      // console.log('QUERY DISPATCH');
      // console.log(action);
      return this.dataService.afs.collection<Pizza>('pizza', ref => {
        return ref.where('status', '==', 'cooking');
      })
      // return this.dataService.afs.collection<Pizza>('pizza')
      .stateChanges();
      // .pipe(map( docArray => {
      //   return docArray.map( doc => {
      //     console.log(doc);
      //     // console.log(doc.payload.doc.data());
      //     return doc;
      //     // return({
      //     //   ...doc.payload.doc.data(),
      //     //   type: doc.payload.type
      //     // });
      //   });
      // }));
    }),
    mergeMap( actions => actions),
    map(action => {
      console.log('action=');
      console.log(action);
      // const x = {
      //   type: '[Pizza] added',
      //   payload: {id: '003', size: 'medium', status: 'cooking'}};
      const x = {
        type: `[Pizza] ${action.type}`,
        payload: {
          ...action.payload.doc.data(),
          id: action.payload.doc.id,
        }};
      // console.log('What we are expecting to have:');
      // console.log(JSON.stringify(x));
      return x;
      // return {
      //   type: `[Pizza] ${action.type}`,
      //   payload: {
      //     // id: action.payload.doc.id,
      //     ...action.payload.doc.data(),
      //   }};
    })
  );

  @Effect()
  update$: Observable<Action> = this.actions$.ofType(PizzaActionTypes.PIZZA_UPDATE).pipe(
    map((action: PizzaUpdateAction) => action),
    switchMap(data => {
      console.log('UPDATE DISPATCH');
      const ref = this.dataService.afs.doc<Pizza>(`pizza/${data.id}`);
      return from(ref.update(data.changes));
    }),
    map(() => new PizzaUpdateSuccessAction())
  );
}
