export class ReferentielPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('referentiel-app h1')).getText();
  }
}
