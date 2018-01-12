import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmOnKayakComponent } from './km-on-kayak.component';

describe('KmOnKayakComponent', () => {
  let component: KmOnKayakComponent;
  let fixture: ComponentFixture<KmOnKayakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmOnKayakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmOnKayakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
