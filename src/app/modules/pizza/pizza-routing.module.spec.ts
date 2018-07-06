import { PizzaRoutingModule } from './pizza-routing.module';

describe('PizzaRoutingModule', () => {
  let pizzaRoutingModule: PizzaRoutingModule;

  beforeEach(() => {
    pizzaRoutingModule = new PizzaRoutingModule();
  });

  it('should create an instance', () => {
    expect(pizzaRoutingModule).toBeTruthy();
  });
});
