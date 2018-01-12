import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HOnKayakComponent } from './h-on-kayak.component';

describe('HOnKayakComponent', () => {
  let component: HOnKayakComponent;
  let fixture: ComponentFixture<HOnKayakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HOnKayakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HOnKayakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
