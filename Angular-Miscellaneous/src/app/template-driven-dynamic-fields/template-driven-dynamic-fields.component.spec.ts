import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenDynamicFieldsComponent } from './template-driven-dynamic-fields.component';

describe('TemplateDrivenDynamicFieldsComponent', () => {
  let component: TemplateDrivenDynamicFieldsComponent;
  let fixture: ComponentFixture<TemplateDrivenDynamicFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateDrivenDynamicFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateDrivenDynamicFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
