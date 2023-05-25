import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormSignUpComponent } from './reactive-form-sign-up.component';

describe('ReactiveFormSignUpComponent', () => {
  let component: ReactiveFormSignUpComponent;
  let fixture: ComponentFixture<ReactiveFormSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
