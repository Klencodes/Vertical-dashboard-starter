// Table data
export class ProductModel {
  id: number;
  category: any;
  currency: string;
  description: string;
  extra_images: ExtraImages[];
  image: string;
  is_archived: boolean
  is_published: boolean;
  stock_availability: boolean;
  name: string;
  quantity: number
  new_price: string;
  price: string;
  old_price: string;
  product_state: string;
  sku: string;
  slug: string;
  tags: string;
  weight: string;
  unit: string;
  isSelected: boolean;
  sales_count: number;
  sales_amout: string;
  view_count: number;
}

export class CategoryModel {
  id: string;
  name: any;
  view_count: string;
  product_count: string;
  image: string;
  description: string;
  date_created : string;
  date_updated : string;
  is_active: boolean;
}

export class ExtraImages {
  id: string;
  image: string;
  is_active: boolean;
}