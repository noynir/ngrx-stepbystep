import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamUsersViewContainerComponent } from './team-users-view-container.component';

describe('TeamUsersViewContainerComponent', () => {
  let component: TeamUsersViewContainerComponent;
  let fixture: ComponentFixture<TeamUsersViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamUsersViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamUsersViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
