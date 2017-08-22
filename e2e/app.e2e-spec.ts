import { ItesmAngularAppPage } from './app.po';

describe('itesm-angular-app App', () => {
  let page: ItesmAngularAppPage;

  beforeEach(() => {
    page = new ItesmAngularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
