export class UserModel {
    id?: string;
    first_name?: string;
    last_name?: string;
    full_name?: string;
    image?: string;
    email?: string;
    phone_number?: string;
    auth_token?: string;
    date_of_birth?: string;
    gender?: string;
    addresses?: AddressModel[];
    deactivate_manager?: boolean;
    total_orders?: string;
    total_amount_spent?: string;
    user_type?: string;
    reward_value ?: string;
    last_login?: string;
    isSelected?: boolean;
    news_letter?: boolean;
    date_created?: string;
    date_updated?: string;
    is_superuser?: boolean;
    is_staff?: boolean;
    is_active?: boolean;
}

export class AddressModel {
    apartment_number: string;
    address: string;
    address_2: string;
    city: string;
    country: string;
    id: string;
    postal_code: string;
    state: string;
}