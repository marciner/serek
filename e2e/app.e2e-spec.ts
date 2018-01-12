import { BaseauthfirePage } from './app.po';

describe('baseauthfire App', () => {
  let page: BaseauthfirePage;

  beforeEach(() => {
    page = new BaseauthfirePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
