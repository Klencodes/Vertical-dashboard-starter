import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ICallback } from '../../classes/callback.interface';
import { ResponseStatus } from '../../enums/enums';
import { ConstantValueService } from '../helpers/constant-values.service';
import { DataProviderService } from '../helpers/data-provider.service';
import { EventManagerService } from '../helpers/event-manager.service';
// import { UtilsService } from '../helpers/utils-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private constantValues: ConstantValueService,
    private dataProvider: DataProviderService,
    private eventManageService: EventManagerService,
    // private utilsService: UtilsService,
    private toast: ToastrService,
  ) { }
  /**
* Submit site banner to server
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  createBanner(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_BANNER_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
  * Get All Banners from server
  * @callback ICallback function that returns an error or result
  */
  fetchBanners(callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_BANNERS_ENDPOINT).subscribe(async result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        // this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
* Submit collection update to server
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  updateBanner(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_BANNER_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
* Submit banner state to server
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  updateBannerActiveState(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_BANNER_ACTIVE_STATE_ENDPOINT, data).subscribe(result => {
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
  * Delete product from server
  * @param id 
  * @param callback 
  */
  deleteBanner(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_BANNER_ENDPOINT + id).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
* Submit collection to server
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  createCategory(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_CATEGORY_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
  * Get All Categories from server
  * @param filterParam params (start_date, end_date)
  * @callback ICallback function that returns an error or result
  */
  fetchCategories(callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_CATEGORIES_ENDPOINT).subscribe(async result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        // this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
* Get a single product from server
* @param id ID of product to fetch
* @callback ICallback function that returns an error or result
*/
  fetchCategoryDetails(id: string, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.CATEGORY_DETAILS_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        // this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
* Submit collection update to server
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
  updateCategory(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_CATEGORY_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
  * Delete product from server
  * @param id 
  * @param callback 
  */
  deleteCategory(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_CATEGORY_ENDPOINT + id).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
 * Submit bulk product to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
*/
  bulkProductUpload(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.BULK_PRODUCT_UPLOAD_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
 * Submit update data to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
*/
  updateProduct(data, callback: ICallback) {
    this.dataProvider.updateData(this.constantValues.UPDATE_PRODUCT_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
 * Submit product to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
*/
  createProduct(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.CREATE_PRODUCT_ENDPOINT, data).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
  * Get All products from server (UNPAGINATED)
  * @param filterParam params (start_date, end_date)
  * @callback ICallback function that returns an error or result
  */
  fetchAllProducts(callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_ALL_PRODUCTS_ENDPOINT).subscribe(async result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        // this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
  * Get All products from server with page number
  * @param page Page number (PAGINATED)
  * @callback ICallback function that returns an error or result
  */
  fetchProducts(page: number, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_PRODUCTS_ENDPOINT + '?page=' + page).subscribe(async result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        // this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
 * Search products from server
 * @param search_text Search Text
  * @callback ICallback function that returns an error or result
  */
  async searchProducts(search_text, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.SEARCH_PRODUCTS_ENDPOINT, search_text).subscribe(async result => {
      callback(null, result);
    }, async error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }

  /**
  * Get a single product from server
  * @param id ID of product to fetch
  * @callback ICallback function that returns an error or result
  */
  fetchProductDetails(id: string, callback: ICallback) {
    this.dataProvider.getData(this.constantValues.PRODUCT_DETAILS_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        // this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
  /**
   * Delete product from server
   * @param id 
   * @param callback 
   */
  deleteProduct(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_PRODUCT_ENDPOINT + id).subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }
    /**
* Submit site banner to server
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
createCoupon(data, callback: ICallback) {
  this.dataProvider.postData(this.constantValues.CREATE_COUPON_ENDPOINT, data).subscribe(result => {
    callback(null, result);
    if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
      this.toast.success(result.message)
    }
  }, error => {
    callback(error, null);
    this.toast.error(error.message)
  });
}
/**
* Get All Coupons from server
  * @param page Page number (PAGINATED)
  * @callback ICallback function that returns an error or result
  */
fetchClaimedCoupons(page: number, callback: ICallback) {
  this.dataProvider.getData(this.constantValues.FETCH_CLAIMED_COUPON_ENDPOINT + '?page=' + page).subscribe(async result => {
  callback(null, result);
    if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
      // this.toast.success(result.message)
    }
  }, error => {
    callback(error, null);
    this.toast.error(error.message)
  });
}
/**
* Get All Coupons from server
  * @param page Page number (PAGINATED)
  * @callback ICallback function that returns an error or result
  */
fetchCoupons(page: number, callback: ICallback) {
  this.dataProvider.getData(this.constantValues.FETCH_COUPONS_ENDPOINT + '?page=' + page).subscribe(async result => {
  callback(null, result);
    if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
      // this.toast.success(result.message)
    }
  }, error => {
    callback(error, null);
    this.toast.error(error.message)
  });
}
/**
* Submit coupon update to server
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
updateCoupon(data, callback: ICallback) {
  this.dataProvider.updateData(this.constantValues.UPDATE_COUPON_ENDPOINT, data).subscribe(result => {
    callback(null, result);
    if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
      this.toast.success(result.message)
    }
  }, error => {
    callback(error, null);
    this.toast.error(error.message)
  });
}
/**
* Submit banner state to server
* @data param data to submit to server
* @callback ICallback function that returns an error or result
*/
updateCouponActiveState(data, callback: ICallback) {
  this.dataProvider.updateData(this.constantValues.UPDATE_COUPON_ACTIVE_STATE_ENDPOINT, data).subscribe(result => {
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
* Delete coupon from server
* @param id 
* @param callback 
*/
deleteCoupon(id, callback: ICallback) {
  this.dataProvider.deleteData(this.constantValues.DELETE_COUPON_ENDPOINT + id).subscribe(result => {
    callback(null, result);
    if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
      this.toast.success(result.message)
    }
  }, error => {
    callback(error, null);
    this.toast.error(error.message)
  });
}
  /**
  * Get All tags from server
  * @callback ICallback function that returns an error or result
  */
  fetchTags(callback: ICallback) {
    this.dataProvider.getData(this.constantValues.FETCH_TAGS_ENDPOINT).subscribe(result => {
      callback(null, result);
    }, error => {
      callback(error, null);
      //   this.notificationService.snackBarErrorMessage(error.message);
    });
  }
  /**
   * Upload product image
 * @param data 
 * @param callback 
 */
  uploadImage(data, callback: ICallback) {
    this.dataProvider.postFormData(this.constantValues.UPLOAD_PRODUCT_IMAGE_ENDPOINT, data).subscribe(result => {
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
  updateProductStockState(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.UPDATE_PRODUCT_STOCK_STATE_ENDPOINT, data).subscribe(result => {
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
 * Submit product to server
 * @data param data to submit to server
 * @callback ICallback function that returns an error or result
*/
  updateProductPublishState(data, callback: ICallback) {
    this.dataProvider.postData(this.constantValues.UPDATE_PRODUCT_PUBLISH_STATE_ENDPOINT, data).subscribe(result => {
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
   * Delete product extra image from server
   * @param image_id Id of image to remove
   * @param callback 
   */
  removeImage(id, callback: ICallback) {
    this.dataProvider.deleteData(this.constantValues.DELETE_EXTRA_PRODUCT_IMAGE_ENDPOINT + id + '/').subscribe(result => {
      callback(null, result);
      if (result !== null && result.response === ResponseStatus.SUCCESSFUL) {
        this.toast.success(result.message)
      }
    }, error => {
      callback(error, null);
      this.toast.error(error.message)
    });
  }

}