import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thankyou2Component } from './thankyou2.component';

describe('Thankyou2Component', () => {
  let component: Thankyou2Component;
  let fixture: ComponentFixture<Thankyou2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thankyou2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thankyou2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
