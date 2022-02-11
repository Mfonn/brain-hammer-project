import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallchartwoComponent } from './smallchartwo.component';

describe('SmallchartwoComponent', () => {
  let component: SmallchartwoComponent;
  let fixture: ComponentFixture<SmallchartwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallchartwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallchartwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
