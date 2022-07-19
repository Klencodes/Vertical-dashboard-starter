// Table data
export class ProductModel {
  id: number;
  collections: CategoryModel[];
  currency: string;
  category: string;
  description: string;
  extra_images: ExtraImages[];
  image: string;
  is_archived: boolean
  is_published: boolean;
  stock_availability: boolean;
  name: string;
  new_price: string;
  price: string;
  old_price: string;
  product_state: string;
  sku: string;
  slug: string;
  tags: string;
  weight: string;
  isSelected: boolean;
  sales: string;
  sold: string;
}

export class CategoryModel {
  id: number;
  name: string;
  image: string;
  slug: string;
  description: string;
  view_count: number;
  is_active: boolean;
}

export class ExtraImages {
  id: string;
  image: string;
  is_active: boolean;
}