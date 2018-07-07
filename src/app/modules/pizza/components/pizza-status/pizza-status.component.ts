import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromPizza from './../../store/reducers/pizza.reducer';
import * as actionsPizza from './../..//store/actions/pizza.actions';

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
    this.store.dispatch( new actionsPizza.PizzaQueryAction());
  }

  updatePizza(id, status) {
    this.store.dispatch(new actionsPizza.PizzaUpdateAction(id, {status}));
  }

}
