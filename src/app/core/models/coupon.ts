import { UserModel } from "./user";

export class CouponModel {
    bound: boolean;
    claim_count: number;
    code: string;
    coupon_type: string;
    coupon_value: string;
    date_created: string;
    date_updated: string;
    expires_date: string;
    id: number;
    is_active: boolean;
    repeat: number;
    user: UserModel
}

export class ClaimedCouponModel {
    coupon_code: string;
    coupon_type: string;
    coupon_value: string;
    customer: string;
    date_claimed: string;
    id: number;
}