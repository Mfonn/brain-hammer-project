import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoughnutchartwalletComponent } from './doughnutchartwallet.component';

describe('DoughnutchartwalletComponent', () => {
  let component: DoughnutchartwalletComponent;
  let fixture: ComponentFixture<DoughnutchartwalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoughnutchartwalletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoughnutchartwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
