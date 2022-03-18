import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderCComponent } from './formbuilder-c.component';

describe('FormbuilderCComponent', () => {
  let component: FormbuilderCComponent;
  let fixture: ComponentFixture<FormbuilderCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuilderCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuilderCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
