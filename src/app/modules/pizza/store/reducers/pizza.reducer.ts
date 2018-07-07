import { Action, createFeatureSelector } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { PizzaActions, PizzaActionTypes, Pizza} from '../actions/pizza.actions';
// import { State } from '@app/core/store/reducers';

const defaultPizza = {
  ids: ['ABC'],
  entities: {
    'ABC': {
      id: 'ABC',
      size: 'small',
      status: 'cooking'
    }
  }
};
export const pizzaAdaptor = createEntityAdapter<Pizza>();

export interface PizzaState extends EntityState<Pizza> {
}

// Redefining fromApp.State by extending itself and adding in the same time the slice pizza
// So that, the 'pizza' will  always available in the store
// PS: a trial has been done but it seems not to be the case.
// export interface State extends State {
//   pizza: PizzaState;
// }

export const initialState: PizzaState = pizzaAdaptor.getInitialState();
// export const initialState: PizzaState = pizzaAdaptor.getInitialState(defaultPizza);

export function reducer(state = initialState, action: PizzaActions): PizzaState {
  switch (action.type) {

    case PizzaActionTypes.PIZZA_ADDED:
      // if there is one pizza added in the backend, so the store has to be added
      console.log('action=');
      console.log(JSON.stringify(action));
      console.log('action.payload=');
      console.log(JSON.stringify(action.payload));
      console.log(JSON.stringify(action['payload']));
      // return pizzaAdaptor.addOne({id: '003', size: 'medium', status: 'cooking'}, state);
      return pizzaAdaptor.addOne(action.payload, state);

    case PizzaActionTypes.PIZZA_MODIFED:
      // if there is one pizza being modified in the backend, so the store has to modify it
      return pizzaAdaptor.updateOne({
        id: action.payload.id,
        changes: action.payload
      }, state);

    case PizzaActionTypes.PIZZA_REMOVED:
      // if there is one pizza being removed in the backend, so the store has to remove it
      return pizzaAdaptor.removeOne(action.payload.id, state);

    default:
      return state;
  }
}

export const getPizzaState = createFeatureSelector<PizzaState>('pizza');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal } = pizzaAdaptor.getSelectors(getPizzaState);
