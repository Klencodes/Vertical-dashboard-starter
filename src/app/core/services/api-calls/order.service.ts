import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICallback } from '../../classes/callback.interface';
import { ResponseStatus } from '../../enums/enums';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private dataProvider: DataProviderService,
    private constantValues: ConstantValueService,
    private toast: ToastrService
  ) { }
  /**
 * Search orders from server
 * @param search_text Search Text
  * @callback ICallback function that returns an error or result
  */
  async searchOrders(search_phrase, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.SEARCH_ORDERS_ENDPOINT, search_phrase).subscribe(async result => {
      callback(null, result);
    }, async error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
  * Get All orders for a customer
  * @callback ICallback function that returns an error or result
  */
  fetchAllOrders(callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_ALL_ORDERS_ENDPOINT).subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
  * Get orders with page number
  * @callback ICallback function that returns an error or result
  */
  fetchOrders(page: number, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_ORDERS_ENDPOINT + '?page=' + page).subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }

  /* Get a single Order from server
  * @param id ID of Order to fetch
  * @callback ICallback function that returns an error or result
  */
  fetchOrderDetails(id, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.ORDER_DETAILS_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
 * Submit product to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  createOrder(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_ORDER_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error('', error.message)
    });
  }
  /**
   * Mark order as paid
   * @param id 
   * @param callback 
   */
  updateOrderPaymentState(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.UPDATE_ORDER_PAYMENT_STATE_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message, '')
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message, '')
    });
  }
  /**
   * Mark order as paid
   * @param data 
   * @param callback 
  */
  updateOrderStatusState(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_ORDER_STATE_ENDPOINT, data).subscribe(result => {
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message, '')
      }
    }, error => {
      callback(error, null);
      this.toast.error( error.message, '')
    });
  }
  /**
  * Delete/Cancel order
  * @param id 
  * @param callback 
 */
  removeOrder(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_ORDER + id + '/').subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.error(result.message, '')
      } 
    }, error => {
      callback(error, null);
      this.toast.success( error.message, '')
    });
  }

}
