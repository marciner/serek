import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsManualComponent } from './reports-manual.component';

describe('ReportsManualComponent', () => {
  let component: ReportsManualComponent;
  let fixture: ComponentFixture<ReportsManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
