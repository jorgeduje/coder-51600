import { Button } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const clear = () => {
    Swal.fire({
      title: "Seguro que quieres vaciar el carrito?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, vaciar",
      denyButtonText: `No, no vaciar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito vaciado exitosamente", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

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
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteProductById(item.id)}
                >
                  Elimiar
                </Button>
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
            <Button onClick={clear} variant="contained">
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
