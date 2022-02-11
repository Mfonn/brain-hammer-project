import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllreceivemoneyComponent } from './allreceivemoney.component';

describe('AllreceivemoneyComponent', () => {
  let component: AllreceivemoneyComponent;
  let fixture: ComponentFixture<AllreceivemoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllreceivemoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllreceivemoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
