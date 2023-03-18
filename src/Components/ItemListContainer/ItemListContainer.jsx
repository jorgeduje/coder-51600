import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";
import PulseLoader from "react-spinners/PulseLoader";

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  const productosFiltrados = products.filter(
    (elemento) => elemento.category === categoryName
  );

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productosFiltrados : products);
      }, 2000);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
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
