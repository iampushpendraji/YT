import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshTokenSalesforceComponent } from './refresh-token-salesforce.component';

describe('RefreshTokenSalesforceComponent', () => {
  let component: RefreshTokenSalesforceComponent;
  let fixture: ComponentFixture<RefreshTokenSalesforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefreshTokenSalesforceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefreshTokenSalesforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
