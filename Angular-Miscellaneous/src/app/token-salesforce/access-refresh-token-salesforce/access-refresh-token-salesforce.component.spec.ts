import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRefreshTokenSalesforceComponent } from './access-refresh-token-salesforce.component';

describe('AccessRefreshTokenSalesforceComponent', () => {
  let component: AccessRefreshTokenSalesforceComponent;
  let fixture: ComponentFixture<AccessRefreshTokenSalesforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessRefreshTokenSalesforceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessRefreshTokenSalesforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
