import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sendmoney2Component } from './sendmoney2.component';

describe('Sendmoney2Component', () => {
  let component: Sendmoney2Component;
  let fixture: ComponentFixture<Sendmoney2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sendmoney2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sendmoney2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
