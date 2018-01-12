import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersManualComponent } from './users-manual.component';

describe('UsersManualComponent', () => {
  let component: UsersManualComponent;
  let fixture: ComponentFixture<UsersManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
