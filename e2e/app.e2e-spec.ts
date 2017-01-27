import { DevTeamPage } from './app.po';

describe('dev-team App', function() {
  let page: DevTeamPage;

  beforeEach(() => {
    page = new DevTeamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
