import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchCompleteComponent } from './user-search-complete.component';

describe('UserSearchCompleteComponent', () => {
  let component: UserSearchCompleteComponent;
  let fixture: ComponentFixture<UserSearchCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
