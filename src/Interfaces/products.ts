interface Category {
  _id: string;
  name: string;
}
export interface Product {
  _id: string;
  images: string[];
  name: string;
  price: string;
  rating: string;
  ratingCount: string;
  stock: string;
  category: Category;
  description: string;
}
export interface Pagination {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}
export interface Data {
  pagination: Pagination;
  products: Product[];
}
