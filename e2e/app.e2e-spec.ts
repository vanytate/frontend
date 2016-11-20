import { MainProjectPage } from './app.po';

describe('main-project App', function() {
  let page: MainProjectPage;

  beforeEach(() => {
    page = new MainProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
