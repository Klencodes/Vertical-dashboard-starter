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
  fetchStaffs(callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_STAFFS_ENDPOINT).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error(result.message, '')
      } else {
        // this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }

  /* Get a single Order from server
  * @param id ID of Order to fetch
  * @callback ICallback function that returns an error or result
  */
  fetchManagerDetails(id: string, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.CREATE_STAFF_ENDPOINT + id + '/').subscribe(result => {
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
 * Submit staff password to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
   createStaffPassword(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.STAFF_CREATE_PASSWORD_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.data.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.data.message, '')
      }else{
        this.toast.error(result.data.message, '');
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }
  /**
 * Submit user to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
   createStaff(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_STAFF_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.data.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.data.message, '')
      }else{
        this.toast.error(result.data.message, '');
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }
  /**
 * Update manager 
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  updateStaff(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.UPDATE_STAFF_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message, '')
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message, '');

    })
  }
  /**
 * Update staff state
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  updateStaffState(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.UPDATE_STAFF_ACTIVE_STATE_ENDPOINT, data).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error(result.message, '')
      } else {
        this.toast.success(result.message, '')
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message, '');

    })
  }
  /**
   * Delete manager from server
   * @param id 
   * @param callback 
   */
  removeManager(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_STAFF_ENDPOINT + id).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success('', result.message)
      } else {
        this.toast.error('', result.message)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);

    })
  }


/**
 * ===========================================
 * CUSTOMER ENDPOINT
 * ===========================================
 */
  /**
 * Search customer from server
 * @param search_text Search Text
  * @callback ICallback function that returns an error or result
  */
  async searchCustomers(search_text, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.SEARCH_CUSTOMERS_ENDPOINT  + '?search_text=' + search_text).subscribe(async result => {
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
    this.dataProvider.getData(this.constantValues.FETCH_CUSTOMERS_ENDPOINT + '?page=' + page).subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        // this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);
    })
  }

  /* Get a customer from server
  * @param id ID of Order to fetch
  * @callback ICallback function that returns an error or result
  */
  fetchCustomerDetails(id, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.CUSTOMER_DETAILS_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result)
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        // this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);
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
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null)
      this.toast.error(error.message);
    })
  }
  /**
   * Submit user to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  createCustomer(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_CUSTOMER_ENDPOINT, data).subscribe(result => {
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
* Update user 
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  updateCustomer(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_CUSTOMER_ENDPOINT, data).subscribe(result => {
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
   * Delete customer from server
   * @param id 
   * @param callback 
   */
   deleteCustomer(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_CUSTOMER_ENDPOINT + id + '/').subscribe(result => {
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
 * Submit user to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
  */
  createCustomerAddress(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_CUSTOMER_ADDRESS_ENDPOINT, data).subscribe(result => {
      callback(null, result)
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
* Update user 
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  updateCustomerAddress(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_CUSTOMER_ADDRESS_ENDPOINT, data).subscribe(result => {
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
* Update user 
* @id param data to submit to server
* @callback ICallback function that returns an error or result
*/
  deleteCustomerAddress(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_CUSTOMER_ADDRESS_ENDPOINT + id + '/').subscribe(result => {
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
* Fetch states or cities informations 
*/
  fetchStatesOrCities() {
    this.dataProvider.getLocalData('/assets/json/gh-states.json').subscribe(result => {
    })
  }

}
