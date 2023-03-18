import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import PulseLoader from "react-spinners/PulseLoader";

import { db } from "../../firebaseConfig";

import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    let consulta = undefined;

    if (categoryName) {
      const q = query(itemsCollection, where("category", "==", categoryName));
      consulta = getDocs(q);
    } else {
      consulta = getDocs(itemsCollection);
    }

    consulta.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <PulseLoader
          color={"#7F669D"}
          // loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }

  return (
    <div>
      {/* {
        items.length > 0 && <ItemList items={items} />
      } */}

      <ItemList items={items} />
      {/* <h1 style={{ color: items.length > 0 ? "red" : "blue" }}>
        Cambio de color
      </h1> */}

      {/* <input type={ showPassword ? "text" : "password"} /> */}
    </div>
  );
};

export default ItemListContainer;
