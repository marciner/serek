import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersInDayComponent } from './orders-in-day.component';

describe('OrdersInDayComponent', () => {
  let component: OrdersInDayComponent;
  let fixture: ComponentFixture<OrdersInDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersInDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersInDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
