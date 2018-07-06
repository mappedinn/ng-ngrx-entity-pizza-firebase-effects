import { WelcomeRoutingModule } from './welcome-routing.module';

describe('WelcomeRoutingModule', () => {
  let welcomeRoutingModule: WelcomeRoutingModule;

  beforeEach(() => {
    welcomeRoutingModule = new WelcomeRoutingModule();
  });

  it('should create an instance', () => {
    expect(welcomeRoutingModule).toBeTruthy();
  });
});
