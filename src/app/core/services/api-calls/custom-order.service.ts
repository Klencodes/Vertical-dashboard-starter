import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICallback } from '../../classes/callback.interface';
import { ResponseStatus } from '../../enums/enums';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';

@Injectable({
  providedIn: 'root'
})
export class CustomOrderService {

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
  async searchCustomOrders(search_phrase, callback: ICallback) {
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
  fetchAllCustomOrders(callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_ALL_CUSTOM_ORDERS_ENDPOINT).subscribe(result => {
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
   fetchCustomOrders(page: number, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_CUSTOM_ORDERS_ENDPOINT + '?page=' + page).subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }

  /** Get a single Order from server
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
  */
  fetchCustomOrderDetails(id, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.CUSTOM_ORDER_DETAILS_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
 * Submit product to server
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
  */
   createCustomOrder(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_CUSTOM_ORDER_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.FAILED) {
        this.toast.error('', result.message)
      } else {
        this.toast.success('', result.message)
      }
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
   * Mark order as paid
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
   */
  updateOrderPaymentState(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.UPDATE_CUSTOM_ORDER_PAYMENT_STATE_ENDPOINT, data).subscribe(result => {
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
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
  */
  updateOrderStatusState(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.UPDATE_CUSTOM_ORDER_STATE_ENDPOINT, data).subscribe(result => {
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
 * @param id id to submit to server
 * @param ICallback function that returns an error or result
 */
  removeOrder(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_CUSTOM_ORDER + id + '/').subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message, '')
      } 
    }, error => {
      callback(error, null);
      this.toast.error( error.message, '')
    });
  }
  /**
  * Get All Services
  * @callback ICallback function that returns an error or result
  */
  fetchAllServices(callback: ICallback) {
    this.dataProvider.getDataNoToken(this.constantValues.FETCH_ALL_SERVICES_ENDPOINT).subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
 * Submit product to server
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
  */
   createService(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_SERVICE_ENDPOINT, data).subscribe(result => {
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
   * Update service
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
  */
  updateService(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_SERVICE_ENDPOINT, data).subscribe(result => {
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
 * @param id id to submit to server
 * @param ICallback function that returns an error or result
 */
   deleteService(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_SERVICE + id + '/').subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message, '')
      } 
    }, error => {
      callback(error, null);
      this.toast.error( error.message, '')
    });
  }
  /**
  * Get All Packages
  * @callback ICallback function that returns an error or result
  */
   fetchPackages(callback: ICallback) {
    this.dataProvider.getDataNoToken(this.constantValues.FETCH_ALL_PACKAGES_ENDPOINT).subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  
  /** Get a single Order from server
 * @param id to submit to server
 * @param ICallback function that returns an error or result
  */
   fetchPackageDetails(id, callback: ICallback) {
    this.dataProvider.getDataNoToken(this.constantValues.PACKAGE_DETAILS_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
 * Submit product to server
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
  */
   createPackageItem(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_PACKAGE_ITEM_ENDPOINT, data).subscribe(result => {
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
   * Update Package Item
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
  */
  updatePackageItem(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_PACKAGE_ITEM_ENDPOINT, data).subscribe(result => {
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message, '')
      }
    }, error => {
      callback(error, null);
      this.toast.error( error.message, '')
    });
  }
  /**
   * Submit product to server
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
  */
 createPackage(data, callback: ICallback) {
   this.dataProvider.postData(this.constantValues.CREATE_PACKAGE_ENDPOINT, data).subscribe(result => {
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
   * Update Package
 * @param data data to submit to server
 * @param ICallback function that returns an error or result
  */
  updatePackage(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_PACKAGE_ENDPOINT, data).subscribe(result => {
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
 * @param id id to submit to server
 * @param ICallback function that returns an error or result
   */
   deletePackage(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_PACKAGE + id + '/').subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message, '')
      } 
    }, error => {
      callback(error, null);
      this.toast.error( error.message, '')
    });
  }
  
  /**
   * Update Order Approved Images
  * @param data data to submit to server
  * @param ICallback function that returns an error or result
  */
   updateApprovedImages(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.UPDATE_APPROVED_ORDER_IMAGES_ENDPOINT, data).subscribe(result => {
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message, '')
      }
    }, error => {
      callback(error, null);
      this.toast.error( error.message, '')
    });
  }
}
