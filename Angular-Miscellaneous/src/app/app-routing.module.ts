import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenGetSalesforceComponent } from './token-salesforce/token-get-salesforce/token-get-salesforce.component';

const routes: Routes = [
  {
    path: 'getsalesforcetoken',
    component: TokenGetSalesforceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
