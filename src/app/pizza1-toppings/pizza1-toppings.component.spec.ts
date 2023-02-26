import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pizza1ToppingsComponent } from './pizza1-toppings.component';

describe('Pizza1ToppingsComponent', () => {
  let component: Pizza1ToppingsComponent;
  let fixture: ComponentFixture<Pizza1ToppingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pizza1ToppingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pizza1ToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
