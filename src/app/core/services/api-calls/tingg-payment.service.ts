import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { ICallback } from '../../classes/callback.interface';
import { ResponseStatus } from '../../enums/enums';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class TinggPaymentService {

  constructor(
    private dataProvider: DataProviderService,
    private constantValues: ConstantValueService,
    private toast: ToastrService
  ) { }
  accessToken$ = new BehaviorSubject<string>(JSON.parse(null));
  /**
* Get All transactions
* @callback ICallback function that returns an error or result
*/
  fetchAllOrders(callback: ICallback) {
    // this.dataProvider.getTinggData(this.constantValues.FETCH_ALL_ORDERS_ENDPOINT).subscribe(result => {
    //   callback(null, result);
    // }, error => {
    //   callback(error, null);
    //   //   this.notificationService.snackBarErrorMessage(error.message);
    // });
  }
  /**
   * Checkout api data
 * @data param data to submit to tingg server
 * @callback ICallback function that returns an error or result
  */
  generateTinggToken(callback: ICallback) {
    //Call tingg oauth token endpoint to generate Access Token
    this.dataProvider.postTinggApiKeyData(this.constantValues.TINGG_TOKEN_OAUTH_REQUEST_ENDPOINT,
      { client_id: this.constantValues.TINGG_API_KEY, client_secret: this.constantValues.TINGG_API_SECRET })
      .subscribe(result => {
        callback(null, result);
        if (result !== null) {
          console.log(result, 'TINGG RESULT')
          //Obtain access token from the result and next it 
          const accessToken = result.access_token;
          // localStorage.setItem('accessToken', accessToken)
          this.accessToken$.next(accessToken)
          // this.toast.success('', result.message)
        }
      }, error => {
        callback(error, null);
        this.toast.error('', error.message)
      });
  }

  checkoutCustomer(data, callback: ICallback) {
    this.dataProvider.postTinggApiKeyAndTokenData(this.constantValues.TINGG_CHECKOUT_CHARGE_REQUEST_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      console.log(result, 'TINGG CHECKOUT RESULT')
      if (result !== null) {
      }
    }, error => {
      callback(error, null);
      this.toast.error('', error.message)
    })

  }
}
