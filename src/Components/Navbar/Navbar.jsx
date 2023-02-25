
import styles from "./Navbar.module.css";


import CartWidget from "../CartWidget/CartWidget";

const Navbar = ({ children }) => {
  let numero = 12;
  return (
    <div>
      <div className={styles.containerNavbar}>
        <img
          src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1676739967/images_fvvncx.jpg"
          alt=""
          style={{ width: "10%", objectFit: "cover", height: "10vh" }}
        />

        <ul className={styles.containerList}>
          <li>Todas</li>
          <li>Urbanas</li>
          <li>Deportivas</li>
        </ul>
        <CartWidget numero={numero} />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
