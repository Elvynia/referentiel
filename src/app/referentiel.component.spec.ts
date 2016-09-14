import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ReferentielAppComponent } from '../app/referentiel.component';

beforeEachProviders(() => [ReferentielAppComponent]);

describe('App: Referentiel', () => {
  it('should create the app',
      inject([ReferentielAppComponent], (app: ReferentielAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'referentiel works!\'',
      inject([ReferentielAppComponent], (app: ReferentielAppComponent) => {
    expect(app.title).toEqual('referentiel works!');
  }));
});
