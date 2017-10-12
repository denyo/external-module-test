import { LogbookAppPage } from './app.po';

describe('logbook-app App', () => {
  let page: LogbookAppPage;

  beforeEach(() => {
    page = new LogbookAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
