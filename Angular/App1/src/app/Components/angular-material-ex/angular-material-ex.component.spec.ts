import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialExComponent } from './angular-material-ex.component';

describe('AngularMaterialExComponent', () => {
  let component: AngularMaterialExComponent;
  let fixture: ComponentFixture<AngularMaterialExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
