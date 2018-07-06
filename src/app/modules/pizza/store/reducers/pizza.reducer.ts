import { Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { PizzaActions, PizzaActionTypes } from '../actions/pizza.actions';
// import * as fromApp from '@app/core/store/reducers';
import { State } from '@app/core/store/reducers';


export interface Pizza {
  id: string;
  size: string;
  status: string;
}


const defaultPizza = {
  ids: ['000'],
  entities: {
    '000': {
      id: '000',
      size: 'small',
      status: 'cooking'
    }
  }
};
export const pizzaAdaptor = createEntityAdapter<Pizza>();

export interface PizzaState extends EntityState<Pizza> {
}

// Redefining fromApp.State by extending itself and adding in the same time the element pizza
// So that, the 'pizza' will  always available in the store
// PS: a trial has been done but it seems not to be the case.
export interface State extends State {
  pizza: PizzaState;
}

// export const initialState: PizzaState = pizzaAdaptor.getInitialState();
export const initialState: PizzaState = pizzaAdaptor.getInitialState(defaultPizza);

export function reducer(state = initialState, action: PizzaActions): PizzaState {
  switch (action.type) {

    case PizzaActionTypes.PIZZA_ADDED:
      console.log('PIZZA_ADDED');
      return pizzaAdaptor.addOne(action.paylaod, state);

    default:
      console.log('default');
      return state;
  }
}

export const getPizzaState = createFeatureSelector<PizzaState>('pizza');

export const { selectAll } = pizzaAdaptor.getSelectors(getPizzaState);
