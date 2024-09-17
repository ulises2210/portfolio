/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { My_photoComponent } from './my_photo.component';

describe('My_photoComponent', () => {
  let component: My_photoComponent;
  let fixture: ComponentFixture<My_photoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ My_photoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(My_photoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
