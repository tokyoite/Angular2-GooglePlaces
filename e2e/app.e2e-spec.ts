import { GoogleplacesPage } from './app.po';

describe('googleplaces App', () => {
  let page: GoogleplacesPage;

  beforeEach(() => {
    page = new GoogleplacesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
