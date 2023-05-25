// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token-get-salesforce',
  templateUrl: './token-get-salesforce.component.html',
  styleUrls: ['./token-get-salesforce.component.css'],
})
export class TokenGetSalesforceComponent {
  constructor(private _route: ActivatedRoute) // private _http: HttpClient
  {
    this._route.queryParams.subscribe((params) => {
      debugger;
      if (params.hasOwnProperty('error')) {
        debugger;
      } else {
        const url = new URL(window.location.href),
          fragment = url.hash.substring(1),
          params = new URLSearchParams(fragment),
          accessToken: any = params.get('access_token'),
          refreshToken: any = params.get('refresh_token'),
          instanceUrl: any = params.get('instance_url'),
          salesForceId: any = params.get('id'),
          signature: any = params.get('signature');
        // let is_access_token = localStorage.getItem('usr_access_token'),
        //   is_refresh_token = localStorage.getItem('usr_refresh_token'),
        //   is_instanceUrl = localStorage.getItem('instance_url'),
        //   is_sales_force_id = localStorage.getItem('id'),
        //   is_signature = localStorage.getItem('signature');
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('refresh_token', refreshToken);
        localStorage.setItem('instance_url', instanceUrl);
        localStorage.setItem('sales_force_id', salesForceId);
        localStorage.setItem('signature', signature);
        console.log({
          accessToken,
          refreshToken,
          instanceUrl,
          salesForceId,
          signature,
        });
        // window.close();
        // this.saveDataToDB({accessToken, refreshToken, instanceUrl, salesForceId, signature});
      }
    });
  }

  // saveDataToDB(usr_data: any) {
  //   this._http.post('http://localhost:3002/save_usr_data', usr_data).subscribe((data: any) => {
  //     if(data['status']) {
  //       window.close();
  //     }
  //     else{

  //     }
  //   });
  // }
}
