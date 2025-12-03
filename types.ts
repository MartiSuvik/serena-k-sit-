
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  image: string;
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface PriceItem {
  name: string;
  price: string;
  description?: string;
}
