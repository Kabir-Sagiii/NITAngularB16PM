import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDetailsCComponent } from './udetails-c.component';

describe('UDetailsCComponent', () => {
  let component: UDetailsCComponent;
  let fixture: ComponentFixture<UDetailsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UDetailsCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UDetailsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
