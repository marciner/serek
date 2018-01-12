import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KayaksPageComponent } from './kayaks-page.component';

describe('KayaksPageComponent', () => {
  let component: KayaksPageComponent;
  let fixture: ComponentFixture<KayaksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KayaksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KayaksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
