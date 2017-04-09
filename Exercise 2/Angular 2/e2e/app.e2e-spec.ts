import { CalToolPage } from './app.po';

describe('cal-tool App', function() {
  let page: CalToolPage;

  beforeEach(() => {
    page = new CalToolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
