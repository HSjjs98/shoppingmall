import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import styles from "./Navbar.module.css";
import {
  login as Login,
  logout as Logout,
  onUserStateChange,
} from "../../API/Firebase";

export default function Navbar() {
  const [user, setUser] = useState();
  const [login, setLogin] = useState("Login");

  useEffect(() => {
    onUserStateChange((user) => {
      setUser(user);
    });
  }, []);
  
  const handleLoginout = () => {
    if (login === "Login") {
      Login()
        .then((u) => setUser(u))
        .catch((e) => console.log(e));
      setLogin("Logout");
    } else {
      Logout().then(() => setUser(null));
      setLogin("Login");
    }
  };
  return (
    <div className={styles.container}>
      <Link to="./products">Products</Link>
      <Link to="./cart">My Cart</Link>
      <Link to="./products/new">
        <FaPen />
      </Link>
      {user ? (
        <span className={styles.user}>
          <img src={user.photoURL} alt="" />
          {user.displayName}
        </span>
      ) : (
        <></>
      )}
      <button className={styles.login} onClick={handleLoginout}>
        {login}
      </button>
    </div>
  );
}
