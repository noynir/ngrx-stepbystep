import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamRolesViewContainerComponent } from './team-roles-view-container.component';

describe('TeamRolesViewContainerComponent', () => {
  let component: TeamRolesViewContainerComponent;
  let fixture: ComponentFixture<TeamRolesViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamRolesViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamRolesViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
