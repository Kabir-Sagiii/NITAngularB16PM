import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdparentComponent } from './idparent.component';

describe('IdparentComponent', () => {
  let component: IdparentComponent;
  let fixture: ComponentFixture<IdparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdparentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
