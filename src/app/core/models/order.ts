import { ProductModel } from "./product";
import { UserModel } from "./user";

export class OrderModel {
  id: string;
  channel: string;
  currency: string;
  date_created: string;
  delivery_option: string;
  is_paid: boolean;
  isSelected: boolean;
  note: string;
  customer: UserModel;
  order_code: string;
  order_items: Item[]
  shipping_address: ShippingAddressModel;
  payment: PaymentModel;
  order_status: string;
  discount: string;
  delivery_fee: string;
  total: string;
}

export class Item {
  date_created: string;
  id: string;
  product: ProductModel
  quantity: string;
  sub_total: string;
}

export class PaymentModel {
  amount_paid: string;
  card_cvv: string;
  card_expiry_date: string;
  card_holder: string;
  card_number: string;
  date_created: string;
  date_updated: string;
  id: number;
  is_active: boolean;
  is_paid: boolean;
  network_provider: string;
  payment_method: string;
  phone_number: string;
}

export class ShippingAddressModel {
  address: string;
  apartment_number: string;
  city: string;
  country: string;
  date_created: string;
  date_updated: string;
  postal_code: string;
  state: string;
  primary: boolean;
  id: number;
}