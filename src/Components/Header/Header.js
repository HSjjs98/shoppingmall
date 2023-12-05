import React from "react";
import { FaShopify } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <button className={styles.logo} onClick={() => navigate("/")}>
        <FaShopify className="display: inline" />
        Shoppy
      </button>
      <Navbar className={styles.navbar} />
    </div>
  );
}
