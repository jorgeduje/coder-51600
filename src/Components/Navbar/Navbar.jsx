import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        
        <Link to="/" style={{ color: "#e1d4c7" }}>
          Comision: 51600
        </Link>

        <ul className={styles.containerList}>
          <li className={styles.navbarItem}>Todas</li>
          <li className={styles.navbarItem}>Urbanas</li>
          <li className={styles.navbarItem}>Deportivas</li>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
