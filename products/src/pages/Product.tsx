import React, { useEffect, useState } from "react";
import { getErrorMessage } from "../utils/errorHandler";
import { fetchProducts } from "../services/productService";
import { ProductResponse } from "../types/products";
import { Product as ProductType } from "@shared/types/Products";
import { useCart } from "@shared/context/cartContext";

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data: ProductResponse = await fetchProducts();
        setProducts(data.result.allProducts);
      } catch (err: unknown) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);
  const { addToCart } = useCart();
  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
  };
  return (
    <div>
      <h1>Products</h1>
      {loading && <h4>Loading...</h4>}
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
      {products.map((product) => (
        <div key={product._id}>
          <p>Name:{product.name}</p>
          <p>Price:{product.price}</p>
          <p>Category:{product.category}</p>
          <p>Stock:{product.stock}</p>
          <button onClick={() => handleAddToCart(product)}>Add-To-Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Product;
