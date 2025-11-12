import React, { useEffect, useState } from "react";
import { getErrorMessage } from "../utils/errorHandler";
import { fetchProducts } from "../services/productService";
import type {
  ProductResponse,
  Product as ProductType,
} from "Home/types/ProductTypes";
import { useCart } from "Home/hooks/useCart";

const Product = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();

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

  const handleAddToCart = (product: ProductType) => {
    window.dispatchEvent(
      new CustomEvent<string>("notification", {
        detail: `${product.name} added to cart!`,
      })
    );
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
