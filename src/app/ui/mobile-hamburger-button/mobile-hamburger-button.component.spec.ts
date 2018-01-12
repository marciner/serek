import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHamburgerButtonComponent } from './mobile-hamburger-button.component';

describe('MobileHamburgerButtonComponent', () => {
  let component: MobileHamburgerButtonComponent;
  let fixture: ComponentFixture<MobileHamburgerButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHamburgerButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHamburgerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
