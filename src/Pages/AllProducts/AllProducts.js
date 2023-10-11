import React from "react";
import ProductCard from "../../Components/ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../API/Firebase";
import styles from "./AllProducts.module.css";

export default function AllProducts() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul className={styles.container}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
