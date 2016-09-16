import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BirthRepositoryHouseComponent } from './birth-repository-house.component';

describe('Component: BirthRepositoryHouse', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [BirthRepositoryHouseComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BirthRepositoryHouseComponent],
      (component: BirthRepositoryHouseComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BirthRepositoryHouseComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BirthRepositoryHouseComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-birth-repository-house></app-birth-repository-house>
  `,
  directives: [BirthRepositoryHouseComponent]
})
class BirthRepositoryHouseComponentTestController {
}

