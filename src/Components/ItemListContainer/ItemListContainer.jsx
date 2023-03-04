import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
  
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      
      <ItemList items={items}  />
      
    </div>
  );
};

export default ItemListContainer;
