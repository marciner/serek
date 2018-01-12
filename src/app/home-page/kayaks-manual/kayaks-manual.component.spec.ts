import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KayaksManualComponent } from './kayaks-manual.component';

describe('KayaksManualComponent', () => {
  let component: KayaksManualComponent;
  let fixture: ComponentFixture<KayaksManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayaksManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayaksManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
