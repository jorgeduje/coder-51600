// ESTILOS EN LINEA

// ESTILOS CSS
// import "./Navbar.css"

// MODULOS DE CSS
import styles from "./Navbar.module.css";

// IMPORTAR IMAGEN DE SRC
import imagen1 from "../../images/zapas.jpg";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      {/* DESDE UNA URL EXTERNA */}
      <img
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1676739967/images_fvvncx.jpg"
        alt=""
        style={{width: "10%", objectFit: "cover"}}
      />
      {/* DESDE SRC */}
      {/* <img src={imagen1} alt="" /> */}
      {/* DESDE PUBLIC */}
      {/* <img src="/images/logo512.png" alt="" /> */}
      <ul className={styles.containerList}>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
