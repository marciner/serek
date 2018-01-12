import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersManualComponent } from './orders-manual.component';

describe('OrdersManualComponent', () => {
  let component: OrdersManualComponent;
  let fixture: ComponentFixture<OrdersManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
