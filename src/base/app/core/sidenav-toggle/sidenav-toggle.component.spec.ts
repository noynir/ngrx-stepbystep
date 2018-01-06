import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavToggleComponent } from './sidenave-toggle.component';

describe('SidenaveToggleComponent', () => {
  let component: SidenavToggleComponent;
  let fixture: ComponentFixture<SidenavToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidenavToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
