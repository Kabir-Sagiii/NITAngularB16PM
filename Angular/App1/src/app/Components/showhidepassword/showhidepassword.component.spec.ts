import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowhidepasswordComponent } from './showhidepassword.component';

describe('ShowhidepasswordComponent', () => {
  let component: ShowhidepasswordComponent;
  let fixture: ComponentFixture<ShowhidepasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowhidepasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowhidepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
