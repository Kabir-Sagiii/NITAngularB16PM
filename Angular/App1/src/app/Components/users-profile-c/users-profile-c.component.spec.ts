import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersProfileCComponent } from './users-profile-c.component';

describe('UsersProfileCComponent', () => {
  let component: UsersProfileCComponent;
  let fixture: ComponentFixture<UsersProfileCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersProfileCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersProfileCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
