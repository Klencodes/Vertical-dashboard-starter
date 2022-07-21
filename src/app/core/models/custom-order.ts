import { UserModel } from "./user";

export class CustomOrderModel {
approved_images: string;
balloon_fee: string;
balloon_2_fee: string;
balloon_3_fee: string;
colours: string;
currency: string;
customer: UserModel;
date_created: string;
date_updated: string;
delivery_fee: string;
delivery_type: string;
id: number
invoice_total: string;
is_paid: boolean
order_code: string;
order_images: string;
order_note: string;
order_status: string;
order_total: string;
package: PackageModel;
photography_fee: string;
referral: string;
sax_fee: string;
service_total: string;
tax: string;
isSelected: boolean;
}
export class AddedServiceModel {
    id: number;
    name: string;
    price: string;
    is_active: boolean;
    date_created: string;
    date_updated: string;
}
export class PackageModel {
    id: number;
    unit: string;
    price: string;
    quantity: string;
    package_name: string;
}