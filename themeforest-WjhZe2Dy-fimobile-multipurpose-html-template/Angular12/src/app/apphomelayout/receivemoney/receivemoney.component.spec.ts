import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivemoneyComponent } from './receivemoney.component';

describe('ReceivemoneyComponent', () => {
  let component: ReceivemoneyComponent;
  let fixture: ComponentFixture<ReceivemoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceivemoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivemoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
