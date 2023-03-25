import { Button } from "@mui/material";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ stock, initial=1, onAdd }) => {
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
    <div className="container-btn">
    <h2>Cantidad: {contador}</h2>
    <div className="btns">
      <Button variant="outlined" onClick={sumar}>
        +
      </Button>
      <Button variant="contained" onClick={() => onAdd(contador)}>
        agregar al carrito
      </Button>
      <Button variant="outlined" onClick={restar}>
        -
      </Button>
    </div>
  </div>
  );
};

export default ItemCount;
