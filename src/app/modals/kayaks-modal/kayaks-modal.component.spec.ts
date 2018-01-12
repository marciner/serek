import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KayaksModalComponent } from './kayaks-modal.component';

describe('KayaksModalComponent', () => {
  let component: KayaksModalComponent;
  let fixture: ComponentFixture<KayaksModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayaksModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayaksModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
