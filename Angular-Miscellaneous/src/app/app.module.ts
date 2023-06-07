import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicFieldsComponent } from './dynamic-fields/dynamic-fields.component';
import { ReactiveFormSignUpComponent } from './reactive-form-sign-up/reactive-form-sign-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { MultipleColumnSearchFilterTableComponent } from './multiple-column-search-filter-table/multiple-column-search-filter-table.component';
import { DymanicColumnRowWihoutReactiveFormsComponent } from './dymanic-column-row-wihout-reactive-forms/dymanic-column-row-wihout-reactive-forms.component';
import { AccessRefreshTokenSalesforceComponent } from './token-salesforce/access-refresh-token-salesforce/access-refresh-token-salesforce.component';
import { TokenGetSalesforceComponent } from './token-salesforce/token-get-salesforce/token-get-salesforce.component';
import { RefreshTokenSalesforceComponent } from './refresh-token/refresh-token-salesforce/refresh-token-salesforce.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldsComponent,
    ReactiveFormSignUpComponent,
    TemplateDrivenFormComponent,
    MultipleColumnSearchFilterTableComponent,
    DymanicColumnRowWihoutReactiveFormsComponent,
    AccessRefreshTokenSalesforceComponent,
    TokenGetSalesforceComponent,
    RefreshTokenSalesforceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
