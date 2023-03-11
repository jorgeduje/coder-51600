import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  const precioTotal = getTotalPrice()

  return (
    <div
      style={{ width: "100%", display: "flex", justifyContent: "space-evenly" }}
    >
      {cart.map((elemento) => {
        return (
          <div style={{ border: "2px solid black" }} key={elemento.id}>
            <h2>{elemento.title}</h2>
            <img src={elemento.img} alt="" style={{ width: "200px" }} />
            <h3>Cantidad: {elemento.quantity}</h3>
            <h3>{elemento.price}</h3>
          </div>
        );
      })}


<h1>El total del carrito es: {precioTotal}</h1>
      <button onClick={clearCart}>Limpiar carrito</button>
    </div>
  );
};

export default Cart;
