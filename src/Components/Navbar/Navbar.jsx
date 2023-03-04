import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <h3 style={{color: "#e1d4c7"}}>Comision: 51600</h3>

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
