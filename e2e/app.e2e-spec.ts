import { JrNgFolioPage } from './app.po';

describe('jr-ng-folio App', () => {
  let page: JrNgFolioPage;

  beforeEach(() => {
    page = new JrNgFolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
