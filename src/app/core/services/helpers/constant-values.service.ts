import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantValueService {
  constructor() { }
  //Core
  get BASE_URL() { return environment.BASE_URL; }
  get GET_COUNTRY_INFO_URL() { return 'https://ipapi.co/json/' }
  get APP_NAME() { return 'I & I Rose Garden Admin' }
  get LOCAL_STORAGE_SAVE_ERROR_MESSAGE() { return 'Error occured while processing request' }
  //Dates Formats
  get MM_DD_YYYY_DATE_FORMAT() { return 'MM-DD-YYYY'; }
  get DD_MM_YYYY_DATE_FORMAT() { return 'DD-MM-YYYY'; }
  
  get SIGNIN_ENDPOINT() { return 'manager/signin/' }
  get MANAGERS_ENDPOINT() { return 'manager/staff/' } 
  get UPDATE_MANAGERS_STATE_ENDPOINT() { return 'manager/update_manager_active_state/' }
  get VERIFY_EMAIL_ENDPOINT() { return 'manager/verify_email/' }
  get FORGET_PASSWORD_ENDPOINT() { return 'manager/forget_password/' }
  get VERIFY_RESET_PASSWORD_ENDPOINT() { return 'manager/verify_reset_password_link/' }
  get RESET_PASSWORD_ENDPOINT() { return 'manager/reset_password/' }
  get CREATE_NEW_PASSWORD_ENDPOINT() { return 'manager/create_password/' }
  
  get FETCH_TOP_PRODUCTS_OVERVIEW() { return 'manager/top_products/' }
  get DASHBOARD_ANALYTICS_OVERVIEW() { return 'manager/analytics/' }

  get FETCH_ALL_PRODUCTS_ENDPOINT() { return 'manager/all_products/' }
  get PRODUCTS_ENDPOINT() { return 'manager/product/' }
  get UPDATE_PRODUCT_STOCK_STATE_ENDPOINT() { return 'manager/update_product_stock_state/' }
  get UPDATE_PRODUCT_PUBLISH_STATE_ENDPOINT() { return 'manager/update_product_publish_state/' }
  get UPDATE_PRODUCT_ARCHIVE_STATE_ENDPOINT() { return 'manager/update_product_archive_state/' }
  get UPDATE_PRODUCT_STATE_ENDPOINT() { return 'manager/update_product_state/' }
  get SEARCH_PRODUCTS_ENDPOINT() { return 'manager/product/search/' }
  get PRODUCTS_COLLECTION_ENDPOINT() { return 'manager/collection/' }
  get FETCH_TAGS_ENDPOINT() { return 'manager/tags/' }
  get BULK_PRODUCT_UPLOAD_ENDPOINT() { return 'manager/import_products/' }
  get UPLOAD_PRODUCT_IMAGE_ENDPOINT() { return 'manager/upload_image/' }
  get DELETE_EXTRA_PRODUCT_IMAGE_ENDPOINT() { return 'manager/delete_product_extra_image/' }
  
  get UPDATE_REVIEW_PUBLISH_STATE_ENDPOINT() { return 'manager/review_published_state/' }
  get REVIEWS_ENDPOINT() { return 'manager/review/' }
  get REPLY_REVIEW_ENDPOINT() { return 'manager/review_reply/' }
  get SEARCH_REVIEWS_ENDPOINT() { return 'manager/review/search/' }
  get FETCH_ALL_REVIEWS_ENDPOINT() { return 'manager/all_reviews/' }
  
  get SEARCH_ORDERS_ENDPOINT() { return 'manager/order/search/' }
  get FETCH_ALL_ORDERS_ENDPOINT() { return 'manager/all_orders/' }
  get ORDERS_ENDPOINT() { return 'manager/order/' }
  get UPDATE_ORDER_PAYMENT_STATE_ENDPOINT() { return 'manager/order_paid_state/' }
  get UPDATE_ORDER_FULFILLMENT_STATE_ENDPOINT() { return 'manager/order_fulfilled_state/' }
  get UPDATE_ORDER_ARCHIVE_STATE_ENDPOINT() { return 'manager/order_archived_state/' }

  get FETCH_ALL_CUSTOMERS_ENDPOINT() { return 'manager/all_customers/' }
  get CUSTOMERS_ENDPOINT() { return 'manager/customer/' }
  get BULK_CUSTOMER_UPLOAD_ENDPOINT() { return 'manager/import_customers/' }
  get CUSTOMER_ADDRESSES_ENDPOINT() { return 'manager/customer_address/' }
  get SEARCH_CUSTOMERS_ENDPOINT() { return 'manager/customer/search/' }
  
  get NOTIFICATIONS_ENDPOINT() { return 'manager/notification/' }
  
  get COUPON_ENDPOINT() { return 'manager/coupon/' }
  get UPDATE_COUPON_ACTIVE_STATE_ENDPOINT() { return 'manager/update_coupon_state/' }

  get BANNER_ENDPOINT() { return 'manager/banner/' }
  get UPDATE_BANNER_ACTIVE_STATE_ENDPOINT() { return 'manager/update_banner_state/' }

}