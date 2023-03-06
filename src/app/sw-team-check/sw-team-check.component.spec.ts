import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwTeamCheckComponent } from './sw-team-check.component';

describe('SwTeamCheckComponent', () => {
  let component: SwTeamCheckComponent;
  let fixture: ComponentFixture<SwTeamCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwTeamCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwTeamCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
