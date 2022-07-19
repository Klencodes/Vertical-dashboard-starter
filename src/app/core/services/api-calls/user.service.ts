import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICallback } from '../../classes/callback.interface';
import { ResponseStatus } from '../../enums/enums';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private dataProvider: DataProviderService,
    private constantValues: ConstantValueService,
    private toast: ToastrService
  ) { }
  /**
  * Get All manager
  * @callback ICallback function that returns an error or result
  */
  fetchManagers(callback: ICallback) {
    this.dataProvider.getData(this.constantValues.MANAGERS_ENDPOINT).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        // this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }

  /* Get a single Order from server
  * @param id ID of Order to fetch
  * @callback ICallback function that returns an error or result
  */
  fetchManagerDetails(id: string, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.MANAGERS_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        // this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
 * Submit user to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  createManager(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.MANAGERS_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
 * Update manager 
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  updateManager(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.MANAGERS_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }
  /**
 * Update manager state
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  updateManagerState(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.UPDATE_MANAGERS_STATE_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
   * Delete manager from server
   * @param id 
   * @param callback 
   */
  removeManager(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.MANAGERS_ENDPOINT + id).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
 * Search customer from server
 * @param search_text Search Text
  * @callback ICallback function that returns an error or result
  */
  async searchCustomers(search_phrase, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.SEARCH_CUSTOMERS_ENDPOINT, search_phrase).subscribe(async result => {
      callback(null, result);
    }, async error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
  * Get All customers from server
  * @callback ICallback function that returns an error or result
  */
  fetchAllCustomers(callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_ALL_CUSTOMERS_ENDPOINT).subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
  * Get customers with pagination
  * @callback ICallback function that returns an error or result
  */
  fetchCustomers(page: number, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.CUSTOMERS_ENDPOINT + '?page=' + page).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        // this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }

  /* Get a customer from server
  * @param id ID of Order to fetch
  * @callback ICallback function that returns an error or result
  */
  fetchUserDetails(id: string, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.CUSTOMERS_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        // this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
* Submit Bulk customer upload to server
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  bulkCustomerUpload(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.BULK_CUSTOMER_UPLOAD_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
   * Submit user to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  createCustomer(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CUSTOMERS_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
* Update user 
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  updateCustomer(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.CUSTOMERS_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
   * Delete customer from server
   * @param id 
   * @param callback 
   */
  removeCustomer(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.CUSTOMERS_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
 * Submit user to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  createCustomerAddress(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CUSTOMER_ADDRESSES_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }
  /**
* Update user 
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  updateCustomerAddress(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.CUSTOMER_ADDRESSES_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      // this.toast.error(error.message);

    })
  }

}
