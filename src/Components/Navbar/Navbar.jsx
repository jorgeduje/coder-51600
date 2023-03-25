import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../firebaseConfig";

const Navbar = ({ children }) => {
  // const [categoryList, setCategoryList] = useState([]);
  // const [cate, setCate] = useState([]);

  // useEffect(() => {
  //   const itemsCollection = collection(db, "categories");
  //   getDocs(itemsCollection).then((res) => {
  //     let arrayCategories = res.docs.map((category) => {
  //       return {
  //         ...category.data(),
  //         id: category.id,
  //       };
  //     });
  //     setCategoryList(arrayCategories);
  //     // ESTO ES NUEVO
  //     const firstCat = categoryList.length > 0 && categoryList.find(e => e.title === "Todas")
  //     const otherCat = categoryList.length > 0 &&  categoryList.filter(e => e.title !== "Todas")
  //     if(categoryList.length > 0){
  //       setCate([firstCat, ...otherCat])
  //     }
  //   });

  
  // }, [categoryList]);
  const cate = [ 
    {
      title: "Todas",
      path: "/",
      id: 1
    },
    {
      title: "Deportivas",
      path: "/category/deportivas",
      id: 2
    },
    {
      title: "Urbanas",
      path: "/category/urbanas",
      id: 3
    }
  ]

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/" style={{ color: "#e1d4c7", textDecoration: "none" }}>
          Tienda Zapas
        </Link>

        <ul className={styles.containerList}>
          {cate?.map((category) => {
            return (
              <Link
                key={category.id}
                to={category.path}
                className={styles.navbarItem}
              >
                {category.title}
              </Link>
            );
          })}
        </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
