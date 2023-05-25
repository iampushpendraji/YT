import { Component } from '@angular/core';

@Component({
  selector: 'app-access-refresh-token-salesforce',
  templateUrl: './access-refresh-token-salesforce.component.html',
  styleUrls: ['./access-refresh-token-salesforce.component.css']
})
export class AccessRefreshTokenSalesforceComponent {
 windowPopup: any;

  openURL(): void{
    const clientId = '3MVG9wt4IL4O5wvJcyeKLuNl0Zs.NP7HyL_Kc7OfQmJx8Zw39qIwDBYw2MmuoQcveqMtTunwAkeWBMuIvjQtg',
          loginURL = 'https://login.salesforce.com',
          redirectURI = 'http://localhost:4200/getsalesforcetoken',
          responseType = 'token',
          URL = `${loginURL}/services/oauth2/authorize?display=popup&client_id=${clientId}&redirect_uri=${redirectURI}&response_type=${responseType}`;
    this.openPopUp(URL);
  }

  openPopUp(URL: string) {
    const height = 700,
          width = 700,
          left = ( screen.width - width ) / 2,
          top = ( screen.height - height ) / 2;
          this.windowPopup = window.open( URL, "center window", 'resizable = yes, width=' + width + ', height=' + height + ', top='+ top + ', left=' + left);
 }

}
