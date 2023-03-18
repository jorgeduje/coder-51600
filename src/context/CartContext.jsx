import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // FUNCION PARA AGREGAR AL CARRITO
  const agregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);

    if (existe) {
      let newCart = cart.map((elemento) => {
        if (elemento.id === producto.id) {
          return {
            ...elemento,
            quantity: producto.quantity,
          };
        } else {
          return elemento;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  // FUNCION PARA SABER SI UN PRODUCTO YA ESTA EN EL CARRITO
  const isInCart = (id) => {
    return cart.some((elemento) => elemento.id === id);
  };

  // FUNCION PARA LIMPIAR EL ACARRITO
  const clearCart = () => {
    setCart([]);
  };

  // OBTENER EL TOTAL DE LAS CANTIDADES DE LOS ELEMENTOS DEL CARRITO

  const getTotalQuantity = () => {

    return cart.reduce( (acc, elemento)=>{
      return acc + elemento.quantity
    } , 0 )

  };

  // OBTENER EL PRECIO TOTAL DEL CARRITO

  const getTotalPrice = () => {
    let precioTotal = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);

    return precioTotal;
  };

  // ELIMINAR UN PRODUCTO DEL CARRITO

  const deleteProductById = ( id )=>{
    const newCart = cart.filter( (element)=> element.id !== id ) // []
    setCart(newCart)
  }

  const getQuantityById = (id)=>{

    const productSelected = cart.find( (element)=> element.id === id)
    return productSelected?.quantity

  }

  let data = {
    cart,
    agregarAlCarrito,
    clearCart,
    getTotalQuantity,
    getTotalPrice,
    deleteProductById,
    getQuantityById
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

