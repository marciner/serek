import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesManualComponent } from './routes-manual.component';

describe('RoutesManualComponent', () => {
  let component: RoutesManualComponent;
  let fixture: ComponentFixture<RoutesManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
