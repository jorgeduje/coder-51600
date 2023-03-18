import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useContext(CartContext);

  const precioTotal = getTotalPrice();

  return (
    <div className="cart-container">
      <div className="container-items">
        {cart.map((item) => {
          return (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt="" />
              <div className="cart-item-info">
                <h2>{item.name}</h2>
                <h2>${item.price}.-</h2>
                <h2>Unidades: {item.quantity}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="cart-info">
        <h3>Precio total: {getTotalPrice()}</h3>
        <h3>Descuento: - </h3>
        <h3>Precio final: -</h3>

        {cart.length > 0 && (
          <div className="btn-cart">
            <Button variant="contained">Comprar</Button>
            <Button onClick={() => clearCart()} variant="contained">
              Vaciar carrito
            </Button>
          </div>
        )}

        <h1>El total del carrito es ${getTotalPrice()}</h1>
      </div>
    </div>
  );
};

export default Cart;
