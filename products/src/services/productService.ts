
import axios from "axios";
import { ProductResponse } from "Home/types/ProductTypes";
import { getErrorMessage } from "Home/utils/errorHandler";

export const fetchProducts = async (): Promise<ProductResponse> => {
  try {
    const response = await axios.get<ProductResponse>(
      "http://localhost:8000/product/allproducts"
    );
    return response.data;
  } catch (err: unknown) {
    throw new Error(getErrorMessage(err));
  }
};
