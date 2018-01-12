import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarnedMoneyChartComponent } from './earned-money-chart.component';

describe('EarnedMoneyChartComponent', () => {
  let component: EarnedMoneyChartComponent;
  let fixture: ComponentFixture<EarnedMoneyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarnedMoneyChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarnedMoneyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
