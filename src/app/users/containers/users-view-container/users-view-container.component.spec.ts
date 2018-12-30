import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersViewContainerComponent } from './users-view-container.component';

describe('UsersViewContainerComponent', () => {
  let component: UsersViewContainerComponent;
  let fixture: ComponentFixture<UsersViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
