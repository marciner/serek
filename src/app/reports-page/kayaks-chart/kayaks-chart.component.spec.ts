import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KayaksChartComponent } from './kayaks-chart.component';

describe('KayaksChartComponent', () => {
  let component: KayaksChartComponent;
  let fixture: ComponentFixture<KayaksChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayaksChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayaksChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
