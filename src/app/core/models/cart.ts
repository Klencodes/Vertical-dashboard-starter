import { ProductModel } from "./product";

export interface Items {
    id: string;
    date_created: string;
    product: ProductModel;
    quantity: string;
    sub_total: string;
  }

  
  export interface CartModelClient {
    prodData: [{
      product: ProductModel,
      quantity: number,
      subTotal: any
    }],
    total: number
    tax: number
    discount: number
  }
  
  export interface CouponModelServer{
    amount_paid: number;
    amount_saved: number;
    coupon_value: number;
    coupon_type: string;
  
  }