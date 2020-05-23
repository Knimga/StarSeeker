/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharBuildFeatsComponent } from './char-build-feats.component';

describe('CharBuildFeatsComponent', () => {
  let component: CharBuildFeatsComponent;
  let fixture: ComponentFixture<CharBuildFeatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharBuildFeatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharBuildFeatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
