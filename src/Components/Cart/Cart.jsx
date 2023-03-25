import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null)

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

  if(orderId){
    return (
      <div>
        <h2>Gracias por su compra</h2>
        <h4>el comprobante es : {orderId}</h4>
        <Link to="/">Seguir comprando</Link>
      </div>
    )
  }

  return (
    <div>
      {!showForm ? (
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
                <Button variant="contained" onClick={()=>setShowForm(true)}>Terminar la compra</Button>
                <Button onClick={clear} variant="contained">
                  Vaciar carrito
                </Button>
              </div>
            )}

            <h1>El total del carrito es ${getTotalPrice()}</h1>
          </div>
        </div>
      ) : (
        <FormCheckout cart={cart} getTotalPrice={getTotalPrice} setOrderId={setOrderId} clearCart={clearCart} />
      )}
    </div>
  );
};

export default Cart;
