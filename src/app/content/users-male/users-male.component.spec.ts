import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMaleComponent } from './users-male.component';

describe('UsersMaleComponent', () => {
  let component: UsersMaleComponent;
  let fixture: ComponentFixture<UsersMaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersMaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
