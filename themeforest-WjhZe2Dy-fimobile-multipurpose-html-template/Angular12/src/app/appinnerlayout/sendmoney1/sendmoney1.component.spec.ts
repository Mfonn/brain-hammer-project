import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sendmoney1Component } from './sendmoney1.component';

describe('Sendmoney1Component', () => {
  let component: Sendmoney1Component;
  let fixture: ComponentFixture<Sendmoney1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sendmoney1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sendmoney1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
