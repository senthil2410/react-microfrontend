import { Product } from "../../../shared/types/Products";

export interface ProductResponse {
  message?: string;
  result: {
    allProducts: Product[];
  };
}
