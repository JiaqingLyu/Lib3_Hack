import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglestudentPage } from './singlestudent.page';

describe('SinglestudentPage', () => {
  let component: SinglestudentPage;
  let fixture: ComponentFixture<SinglestudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglestudentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglestudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
