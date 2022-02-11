import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Thankyou4Component } from './thankyou4.component';

describe('Thankyou4Component', () => {
  let component: Thankyou4Component;
  let fixture: ComponentFixture<Thankyou4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Thankyou4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Thankyou4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
