import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFemaleComponent } from './users-female.component';

describe('UsersFemaleComponent', () => {
  let component: UsersFemaleComponent;
  let fixture: ComponentFixture<UsersFemaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFemaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFemaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
