import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcharfourComponent } from './smallcharfour.component';

describe('SmallcharfourComponent', () => {
  let component: SmallcharfourComponent;
  let fixture: ComponentFixture<SmallcharfourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcharfourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallcharfourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
