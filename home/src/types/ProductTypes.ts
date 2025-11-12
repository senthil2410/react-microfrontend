export interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string;
}
export interface ProductResponse {
  message?: string;
  result: {
    allProducts: Product[];
  };
}
