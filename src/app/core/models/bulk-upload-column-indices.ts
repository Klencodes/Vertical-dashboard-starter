/**Bulk Product upload column indicators: number */
export class ProductUploadColumnIndices {
  name: number;
  category: number;
  old_price: number;
  new_price: number;
  description: number;
  weight: number;
  unit: number;
  image: number;
  tags: number;
  extra_images: number;
  // is_archived: number;
  // is_published: number;
  // stock_availability: number;
  // old_price: number;
  // currency: number;

  [key: string]: number;
}
/**Bulk Customer upload column indicators: number */
export class CustomerUploadColumnIndices {
  first_name: number;
  last_name: number;
  email: number
  phone_number: number
  gender: number
  apartment_number: number
  address: number
  address_2: number
  city: number
  state: number
  postal_code: number
  country: number

  [key: string]: number;
}
