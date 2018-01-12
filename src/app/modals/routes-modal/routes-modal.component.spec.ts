import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesModalComponent } from './routes-modal.component';

describe('RoutesModalComponent', () => {
  let component: RoutesModalComponent;
  let fixture: ComponentFixture<RoutesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
