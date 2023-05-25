import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenGetSalesforceComponent } from './token-get-salesforce.component';

describe('TokenGetSalesforceComponent', () => {
  let component: TokenGetSalesforceComponent;
  let fixture: ComponentFixture<TokenGetSalesforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TokenGetSalesforceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TokenGetSalesforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
