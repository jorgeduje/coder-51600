import React, { useContext } from "react";

import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";

import  "./ItemDetail.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito } = useContext(CartContext);

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarAlCarrito(producto);
  };

  return (
    <div className={"containerItemDetail"}>
      <div className={"containerImage"}>
        <img src={productSelected.img} alt="" />
      </div>

      <div className={"containerDetail"}>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Nombre:</span>{" "}
          {productSelected.title}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Descripcion:</span>{" "}
          {productSelected.description}
        </h2>
        <h2 style={{ fontFamily: "monospace" }}>
          <span style={{ fontSize: "23px" }}>Precio:</span> $
          {productSelected.price}.-
        </h2>

        <ItemCount onAdd={onAdd} stock={productSelected.stock} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
