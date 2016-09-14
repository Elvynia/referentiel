import { ReferentielPage } from './app.po';

describe('referentiel App', function() {
  let page: ReferentielPage;

  beforeEach(() => {
    page = new ReferentielPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('referentiel works!');
  });
});
