import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thankyou3Component } from './thankyou3.component';

describe('Thankyou3Component', () => {
  let component: Thankyou3Component;
  let fixture: ComponentFixture<Thankyou3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thankyou3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thankyou3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
