import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamViewContainerComponent } from './team-view-container.component';

describe('TeamViewContainerComponent', () => {
  let component: TeamViewContainerComponent;
  let fixture: ComponentFixture<TeamViewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamViewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamViewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
