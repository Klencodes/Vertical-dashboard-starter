export enum ResponseStatus {
  SUCCESSFUL = 'SUCCESSFUL',
  FAILED = 'FAILED',

}

export enum UserType {
  FACTORY_ADMIN = 'FACTORY_ADMIN',
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER',
  STAFF = 'STAFF'
}
export enum AccessLevels {
  ADMIN = 'ADMIN',
  SALES = 'SALES',
  MANAGER = 'MANAGER',
  FACTORY_ADMIN = 'FACTORY_ADMIN',
}

export enum DocTypes {
  PDF = 'PDF',
  EXCEL = 'EXCEL',
  CSV = 'CSV',
}

export enum ExportingEnums {
  ALL_CSV = 'ALL_CSV',
  ALL_PDF = 'ALL_PDF',
  SELECTED_CSV = 'SELECTED_CSV',
  SELECTED_PDF = 'SELECTED_PDF',
}
export enum ExportPageType {
  ALL_PRODUCTS = 'ALL_PRODUCTS',
  SELECTED_PRODUCTS = 'SELECTED_PRODUCTS',
  CURRENT_PAGE = 'CURRENT_PAGE',
}
export enum OrderStatus {
  ALL = 'ALL',
  PAID = 'PAID',
  PLACED = 'PLACED',
  ACCEPTED = 'ACCEPTED',
  PACKAGING = 'PACKAGING',
  PREPARING = 'PREPARING',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED'
}
export enum ProductStates {
  ALL = 'ALL',
  PUBLISHED = 'PUBLISHED',
  UNPUBLISHED = 'UNPUBLISHED'
}
export enum CustomerTypes {
  ALL_CUSTOMERS = 'ALL_CUSTOMERS',
  NEW = 'NEW',
  RETURNING = 'RETURNING',
  ABANDONED_CHECKOUTS = 'ABANDONED_CHECKOUTS',
}
export enum CustomerRewardValues {
  GREEN = 'GREEN',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
}
export enum Gender {
  FEMALE = 'Female',
  MALE = 'Male',
}
export enum ReviewStatus {
  PENDING = 'PENDING',
  PUBLISHED = 'PUBLISHED',
  DELETE = 'DELETE',
}
export enum CouponTypes {
  PERCENT = 'PERCENT',
  AMOUNT = 'AMOUNT'
}
export enum CurrencyEnums {
    USD = '$',
    GHS = 'GHS',
    COUNTRY_CODE = 'GHA',
    COUNTRY_CURRENCY = 'GHS',
    SERVICE_CODE = 'JOHNDOEONLINESERVICE',
  }
  export const StoresData = [
    { name: 'All Stores', value: '' },
  { name: 'Online Store', value: 'ONLINE' },
  { name: 'In-Store', value: 'IN_STORE' },
];
export const UnitOfMeasurements = [
  {name: 'Miligrams', value: 'Mg'},
  {name: 'Grams', value: 'G'},
  {name: 'Kilograms', value: 'Kg'}
]
export enum PaymentMethods {
    CARD = 'FABMPGS',
    CASH = 'Cash Payment',
    MOMO = 'STK_PUSH',
    BANK = 'Bank Payment',
}

export enum NetworkProviders {
  MTN = 'NSANOMOMO',
  AIR = 'AIRTELGH',
  VODA = 'VODAGH',
  TIGO = 'TIGOGH',
}


export enum CartEnums {
  TAX = 0.05,
  MERCHANT_TRANSACTION_ID = "14473",
  SERVICE_CODE = "SERVICE_CODE"
}