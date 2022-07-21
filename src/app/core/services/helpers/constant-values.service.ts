import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConstantValueService {
  constructor() { }
  //Core
  get BASE_URL() { return environment.BASE_URL; }
  get TINGG_BASE_URL() { return environment.TINGG.BASE_URL; }
  get GET_COUNTRY_INFO_URL() {return 'https://ipapi.co/json/'; }
  get APP_NAME() { return 'Chocolate Mall Admin' }
  get LOCAL_STORAGE_SAVE_ERROR_MESSAGE() { return 'Error occured while processing request' }
  //Dates Formats
  get MM_DD_YYYY_DATE_FORMAT() { return 'MM-DD-YYYY'; }
  get YYYY_MM_DD_DATE_FORMAT() { return 'YYYY-MM-DD'; }
  get DD_MM_YYYY_DATE_FORMAT() { return 'DD-MM-YYYY'; }
  
  get CREATE_STAFF_ENDPOINT() { return 'manager/create_staff/' } 
  get UPDATE_STAFF_ENDPOINT() { return 'manager/update_staff/' } 
  get DELETE_STAFF_ENDPOINT() { return 'manager/delete_staff/' } 
  get FETCH_STAFFS_ENDPOINT() { return 'manager/fetch_staffs' } 
  get UPDATE_STAFF_ACTIVE_STATE_ENDPOINT() { return 'manager/update_staff_active_state/' }
  get STAFF_CREATE_PASSWORD_ENDPOINT() { return 'manager/staff_create_password/' } 
  
  get SIGNIN_ENDPOINT() { return 'manager/signin/' }
  get VERIFY_EMAIL_ENDPOINT() { return 'manager/verify_email/' }
  get FORGET_PASSWORD_ENDPOINT() { return 'manager/forget_password/' }
  get VERIFY_RESET_PASSWORD_ENDPOINT() { return 'manager/verify_reset_password_link/' }
  get RESET_PASSWORD_ENDPOINT() { return 'manager/reset_password/' }
  get CREATE_NEW_PASSWORD_ENDPOINT() { return 'manager/create_password/' }
  
  get DASHBOARD_ANALYTICS_OVERVIEW() { return 'manager/business_analytics/' }
  
  get UPDATE_PRODUCT_STOCK_STATE_ENDPOINT() { return 'manager/update_product_stock_state/' }
  get UPDATE_PRODUCT_PUBLISH_STATE_ENDPOINT() { return 'manager/update_product_publish_state/' }
  get DELETE_EXTRA_PRODUCT_IMAGE_ENDPOINT() { return 'manager/delete_extra_product_image/' }
  get UPLOAD_PRODUCT_IMAGE_ENDPOINT() { return 'manager/upload_image/' }
  get SEARCH_PRODUCTS_ENDPOINT() { return 'manager/search_product/' }
  get FETCH_ALL_PRODUCTS_ENDPOINT() { return 'manager/all_products/' }
  get CREATE_PRODUCT_ENDPOINT() { return 'manager/create_product/' }
  get FETCH_PRODUCTS_ENDPOINT() { return 'manager/fetch_products/' }
  get UPDATE_PRODUCT_ENDPOINT() { return 'manager/update_product/' }
  get DELETE_PRODUCT_ENDPOINT() { return 'manager/delete_product/' }
  get PRODUCT_DETAILS_ENDPOINT() { return 'product_details/' }
  
  get UPDATE_COUPON_ACTIVE_STATE_ENDPOINT() { return 'manager/update_coupon_active_state/' }
  get FETCH_CLAIMED_COUPON_ENDPOINT() { return 'manager/fetch_claimed_coupons/' }
  get FETCH_COUPONS_ENDPOINT() { return 'manager/fetch_coupons/' }
  get CREATE_COUPON_ENDPOINT() { return 'manager/create_coupon/' }
  get UPDATE_COUPON_ENDPOINT() { return 'manager/update_coupon/' }
  get DELETE_COUPON_ENDPOINT() { return 'manager/delete_coupon/' }
  
  get UPDATE_BANNER_ACTIVE_STATE_ENDPOINT() { return 'manager/update_banner_active_state/' }
  get FETCH_BANNERS_ENDPOINT() { return 'manager/fetch_banners/' }
  get CREATE_BANNER_ENDPOINT() { return 'manager/create_banner/' }
  get UPDATE_BANNER_ENDPOINT() { return 'manager/update_banner/' }
  get DELETE_BANNER_ENDPOINT() { return 'manager/delete_banner/' }

  get FETCH_CATEGORIES_ENDPOINT() { return 'manager/fetch_categories/' }
  get CREATE_CATEGORY_ENDPOINT() { return 'manager/create_category/' }
  get CATEGORY_DETAILS_ENDPOINT() { return 'manager/category_details/' }
  get UPDATE_CATEGORY_ENDPOINT() { return 'manager/update_category/' }
  get DELETE_CATEGORY_ENDPOINT() { return 'manager/delete_category/' }
  
  get PRODUCTS_COLLECTION_ENDPOINT() { return 'manager/collection/' }
  get FETCH_TAGS_ENDPOINT() { return 'fetch_tags/' }
  get BULK_PRODUCT_UPLOAD_ENDPOINT() { return 'manager/bulk_products_upload/' }
  
  get SEARCH_ORDERS_ENDPOINT() { return 'manager/order/search/' }
  get FETCH_ALL_ORDERS_ENDPOINT() { return 'manager/fetch_all_orders/' }
  get FETCH_ORDERS_ENDPOINT() { return 'manager/fetch_orders/' }
  get CREATE_ORDER_ENDPOINT() { return 'manager/create_order/' }
  get ORDER_DETAILS_ENDPOINT() { return 'manager/order_details/' }
  get DELETE_ORDER() { return 'manager/delete_order/' }
  get UPDATE_ORDER_PAYMENT_STATE_ENDPOINT() { return 'manager/update_order_paid_state/' }
  get UPDATE_ORDER_STATE_ENDPOINT() { return 'manager/update_order_status/' }
  
  get SEARCH_CUSTOM_ORDERS_ENDPOINT() { return 'manager/custom_order/search/' }
  get FETCH_ALL_CUSTOM_ORDERS_ENDPOINT() { return 'manager/fetch_all_custom_orders/' }
  get FETCH_CUSTOM_ORDERS_ENDPOINT() { return 'manager/fetch_custom_orders/' }
  get CREATE_CUSTOM_ORDER_ENDPOINT() { return 'manager/create_custom_order/' }
  get CUSTOM_ORDER_DETAILS_ENDPOINT() { return 'manager/custom_order_details/' }
  get DELETE_CUSTOM_ORDER() { return 'manager/delete_custom_order/' }
  get UPDATE_CUSTOM_ORDER_PAYMENT_STATE_ENDPOINT() { return 'manager/update_custom_order_paid_state/' }
  get UPDATE_CUSTOM_ORDER_STATE_ENDPOINT() { return 'manager/update_custom_order_status/' }
  get UPDATE_APPROVED_ORDER_IMAGES_ENDPOINT() { return 'manager/update_custom_order_approved_images/' }

  get FETCH_ALL_PACKAGES_ENDPOINT() { return 'fetch_packages/' }
  get CREATE_PACKAGE_ENDPOINT() { return 'manager/create_package/' }
  get UPDATE_PACKAGE_ENDPOINT() { return 'manager/update_package/' }
  get PACKAGE_DETAILS_ENDPOINT() { return 'manager/package_details/' }
  get DELETE_PACKAGE() { return 'manager/delete_package/' }
  get CREATE_PACKAGE_ITEM_ENDPOINT() { return 'manager/create_package_item/' }
  get UPDATE_PACKAGE_ITEM_ENDPOINT() { return 'manager/update_package_item/' }

  get FETCH_ALL_SERVICES_ENDPOINT() { return 'fetch_services/' }
  get CREATE_SERVICE_ENDPOINT() { return 'manager/create_service/' }
  get UPDATE_SERVICE_ENDPOINT() { return 'manager/update_service/' }
  get DELETE_SERVICE() { return 'manager/delete_service/' }
  
  get BULK_CUSTOMER_UPLOAD_ENDPOINT() { return 'manager/bulk_customers_upload/' }
  get SEARCH_CUSTOMERS_ENDPOINT() { return 'manager/search_customer/' }
  get FETCH_ALL_CUSTOMERS_ENDPOINT() { return 'manager/all_customers/' }
  get FETCH_CUSTOMERS_ENDPOINT() { return 'manager/fetch_customers/' }
  get CREATE_CUSTOMER_ENDPOINT() { return 'manager/create_customer/' }
  get CUSTOMER_DETAILS_ENDPOINT() { return 'manager/customer_details/' }
  get UPDATE_CUSTOMER_ENDPOINT() { return 'manager/update_customer/' }
  get DELETE_CUSTOMER_ENDPOINT() { return 'manager/delete_customer/' }
  get CREATE_CUSTOMER_ADDRESS_ENDPOINT() { return 'manager/customer/create_address/' }
  get DELETE_CUSTOMER_ADDRESS_ENDPOINT() { return 'manager/customer/delete_address/' }
  get UPDATE_CUSTOMER_ADDRESS_ENDPOINT() { return 'manager/customer/update_address/' }
  
  get UPDATE_REVIEW_PUBLISH_STATE_ENDPOINT() { return 'manager/review_published_state/' }
  get SEARCH_REVIEWS_ENDPOINT() { return 'manager/search_review' }
  get FETCH_REVIEWS_ENDPOINT() { return 'manager/fetch_reviews/' }
  get UPDATE_REVIEW_ENDPOINT() { return 'manager/update_review/' }
  get DELETE_REVIEW_ENDPOINT() { return 'manager/delete_review/' }
  get REPLY_REVIEW_ENDPOINT() { return 'reply_product_review/' }
  
  get TINGG_TOKEN_OAUTH_REQUEST_ENDPOINT() { return 'v1/oauth/token/request' }
  get TINGG_CHECKOUT_ACKNOWLEDGEMENT_ENDPOINT() { return 'v3/checkout-api/acknowledgement/request' }
  get TINGG_CHECKOUT_CHARGE_REQUEST_ENDPOINT() { return 'v3/checkout-api/charge/request' }
  get TINGG_API_KEY() { return environment.TINGG.API_KEY; }
  get TINGG_API_SECRET() { return environment.TINGG.API_SECRET; }

  get NOTIFICATIONS_ENDPOINT() { return 'manager/notification/' }
}