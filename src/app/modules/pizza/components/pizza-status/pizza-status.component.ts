import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromPizza from 'app/modules/pizza/store/reducers/pizza.reducer';
import * as actionsPizza from 'app/modules/pizza/store/actions/pizza.actions';

@Component({
  selector: 'app-pizza-status',
  templateUrl: './pizza-status.component.html',
  styleUrls: ['./pizza-status.component.css']
})
export class PizzaStatusComponent implements OnInit {

  pizzas$: Observable<any>;

  constructor(private store: Store<fromPizza.PizzaState>) { }

  ngOnInit() {
    this.pizzas$ = this.store.select(fromPizza.selectAll);

    const pizza = {
      id: new Date().getMilliseconds().toString(),
      size: 'small',
      status: 'cooking'
    };
    this.store.dispatch(new actionsPizza.PizzaAddedAction(pizza));

  }

  createPizza() {
    const pizza = {
      id: new Date().getMilliseconds().toString(),
      size: 'small',
      status: 'cooking'
    };
    this.store.dispatch(new actionsPizza.PizzaAddedAction(pizza));
  }

}
