import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeryImportantReportComponent } from './very-important-report.component';

describe('VeryImportantReportComponent', () => {
  let component: VeryImportantReportComponent;
  let fixture: ComponentFixture<VeryImportantReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeryImportantReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeryImportantReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
