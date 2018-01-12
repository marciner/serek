import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersChartComponent } from './orders-chart.component';

describe('OrdersChartComponent', () => {
  let component: OrdersChartComponent;
  let fixture: ComponentFixture<OrdersChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
