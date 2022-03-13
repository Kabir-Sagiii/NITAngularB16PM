import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdchildComponent } from './idchild.component';

describe('IdchildComponent', () => {
  let component: IdchildComponent;
  let fixture: ComponentFixture<IdchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdchildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
