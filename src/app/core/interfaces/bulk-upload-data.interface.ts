export interface ProductUploadData {
  name: string;
  category: string;
  old_price: string;
  new_price: string;
  description: string;
  weight: string;
  unit: string;
  tags: string;
  image: string;
  extra_images: string;
  
  // stock_availability: boolean;
  // product_state: string;
  // is_archived: boolean;
  // quantity: number;
  // barcode: number;
}
/**Customer */
export interface CustomerUploadData {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  gender: string;
  apartment_number: string;
  address: string;
  address_2: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}
/**
 * Product Upload Columns mapping (server_name to client_name)
 */
export const productUploadColumnNames = [
  // {server_name: 'old_price', client_name: 'Old Price'}, 
  // {server_name: 'is_published', client_name: 'Published Publish'},
  // {server_name: 'stock_availability', client_name: 'Stock Availability'},
  // {server_name: 'product_state', client_name: 'Product State'},
  // {server_name: 'is_archived', client_name: 'Archived State'},
  {server_name: 'name', client_name: 'Name'},
  {server_name: 'category', client_name: 'Category'},
  {server_name: 'old_price', client_name: 'Old Price'},
  {server_name: 'new_price', client_name: 'New Price'},
  {server_name: 'description', client_name: 'Description'},
  {server_name: 'weight', client_name: 'Weight'},
  {server_name: 'unit', client_name: 'Unit'},
  {server_name: 'image', client_name: 'Image'},
  {server_name: 'tags', client_name: 'Tags'},
  {server_name: 'extra_images', client_name: 'Extra Images'}, 
];
/**
 * Customer Upload Columns mapping (server_name to client_name)
 */
export const customerUploadColumnNames = [
  {server_name: 'first_name', client_name: 'First Name'},
  {server_name: 'last_name', client_name: 'Last Name'},
  {server_name: 'email', client_name: 'Email'},
  {server_name: 'phone_number', client_name: 'Phone Number'},
  {server_name: 'gender', client_name: 'Gender'},
  {server_name: 'apartment_number', client_name: 'Apartment Number'},
  {server_name: 'address', client_name: 'Address'},
  {server_name: 'address_2', client_name: 'Address 2'},
  {server_name: 'city', client_name: 'City'},
  {server_name: 'state', client_name: 'State'},
  {server_name: 'postal_code', client_name: 'Postal Code'},
  {server_name: 'country', client_name: 'Country'},
  
  // {server_name: 'image', client_name: 'Image'},
  // {server_name: 'quantity', client_name: 'Quantity'},
  // {server_name: 'barcode', client_name: 'Barcode'},
];
