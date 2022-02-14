import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcharthreeComponent } from './smallcharthree.component';

describe('SmallcharthreeComponent', () => {
  let component: SmallcharthreeComponent;
  let fixture: ComponentFixture<SmallcharthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcharthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallcharthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
