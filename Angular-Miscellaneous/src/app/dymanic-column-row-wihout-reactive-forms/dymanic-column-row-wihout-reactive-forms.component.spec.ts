import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DymanicColumnRowWihoutReactiveFormsComponent } from './dymanic-column-row-wihout-reactive-forms.component';

describe('DymanicColumnRowWihoutReactiveFormsComponent', () => {
  let component: DymanicColumnRowWihoutReactiveFormsComponent;
  let fixture: ComponentFixture<DymanicColumnRowWihoutReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DymanicColumnRowWihoutReactiveFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DymanicColumnRowWihoutReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
