/**Bulk Product upload column indicators: number */
export class ProductUploadColumnIndices {
  name: number;
  category: number;
  sku: number;
  price: number;
  description: number;
  weight: number;
  collections: number;
  image: number;
  tags: number;
  extra_product_images: number;
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
  image: number
  email: number
  phone_number: number
  address: number
  address_2: number
  city: number
  state: number
  postal_code: number
  country: number
  birth_date: number
  gender: number

  [key: string]: number;
}
