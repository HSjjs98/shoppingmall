import { Link } from "react-router-dom";
import { FaPen } from "react-icons/fa";
import styles from "./Navbar.module.css";
import { login as Login, logout as Logout } from "../../API/Firebase";
import { useAuthContext } from "../../Context/AuthContext";

export default function Navbar() {
  const { user, loginout } = useAuthContext();
  const handleLoginout = async () => {
    if (loginout === "Login") await Login();
    else await Logout();
  };
  return (
    <nav className={styles.container}>
      <Link to="./products">Products</Link>
      {user && <Link to="./cart">My Cart</Link>}
      {user && user.isAdmin && (
        <Link to="./products/new">
          <FaPen />
        </Link>
      )}
      {user && (
        <span className={styles.user}>
          <img src={user.photoURL} alt="userPhoto" />
          {user.displayName}
        </span>
      )}
      <button className={styles.login} onClick={handleLoginout}>
        {loginout}
      </button>
    </nav>
  );
}
