/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharBuildClassChoicesComponent } from './char-build-class-choices.component';

describe('CharBuildClassChoicesComponent', () => {
  let component: CharBuildClassChoicesComponent;
  let fixture: ComponentFixture<CharBuildClassChoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharBuildClassChoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharBuildClassChoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
