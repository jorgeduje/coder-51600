import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <h1>Estoy en el itemCount</h1>

      <h2>{contador}</h2>

      <button onClick={sumar}>Sumar</button>

      <button onClick={restar}>Restar</button>

      <button onClick={ ()=> onAdd(contador) }>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;

// // ESTA EN UN LUGAR 
// const saludar = ( nombre )=>{ // onADD
//     console.log( `hola ${nombre}` )
// }

// // ESTA EN OTRO LUGAR
// saludar( "juancito" ) // onADD( contador )
