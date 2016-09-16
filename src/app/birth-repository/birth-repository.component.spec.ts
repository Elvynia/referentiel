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
import { BirthRepositoryComponent } from './birth-repository.component';

describe('Component: BirthRepository', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [BirthRepositoryComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([BirthRepositoryComponent],
      (component: BirthRepositoryComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(BirthRepositoryComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(BirthRepositoryComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-birth-repository></app-birth-repository>
  `,
  directives: [BirthRepositoryComponent]
})
class BirthRepositoryComponentTestController {
}

