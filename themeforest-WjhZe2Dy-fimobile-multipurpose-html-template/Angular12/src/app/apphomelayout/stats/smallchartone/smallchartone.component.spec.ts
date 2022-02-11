import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallchartoneComponent } from './smallchartone.component';

describe('SmallchartoneComponent', () => {
  let component: SmallchartoneComponent;
  let fixture: ComponentFixture<SmallchartoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallchartoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallchartoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
