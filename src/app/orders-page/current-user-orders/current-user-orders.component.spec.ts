import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentUserOrdersComponent } from './current-user-orders.component';

describe('CurrentUserOrdersComponent', () => {
  let component: CurrentUserOrdersComponent;
  let fixture: ComponentFixture<CurrentUserOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentUserOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentUserOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
