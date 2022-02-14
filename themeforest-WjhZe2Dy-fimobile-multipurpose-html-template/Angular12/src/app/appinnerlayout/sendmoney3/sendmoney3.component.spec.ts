import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sendmoney3Component } from './sendmoney3.component';

describe('Sendmoney3Component', () => {
  let component: Sendmoney3Component;
  let fixture: ComponentFixture<Sendmoney3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sendmoney3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sendmoney3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
