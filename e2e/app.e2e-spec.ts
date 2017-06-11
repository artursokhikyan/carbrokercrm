import { CarbrokercrmPage } from './app.po';

describe('carbrokercrm App', () => {
  let page: CarbrokercrmPage;

  beforeEach(() => {
    page = new CarbrokercrmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
