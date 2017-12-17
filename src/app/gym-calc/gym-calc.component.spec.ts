import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymCalcComponent } from './gym-calc.component';

describe('GymCalcComponent', () => {
  let component: GymCalcComponent;
  let fixture: ComponentFixture<GymCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
