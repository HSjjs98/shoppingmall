import React from "react";
import styles from './ProductCard.module.css'

export default function ProductCard({ product }) {
  const {title, image, price, category} = product
  return (
    <li style={{listStyle: "none"}}>
      <img className={styles.image} src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>`￦${price}`</p>
      </div>
      <p>category</p>
    </li>
  );
}
