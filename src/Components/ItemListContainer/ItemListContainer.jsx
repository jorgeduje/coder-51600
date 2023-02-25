
import { useState, useEffect } from "react";

const ItemListContainer = () => {

  const [ nombre , setNombre ] = useState("pepito")
  const [ contador , setContador ] = useState(0)

  const cambiarContador = ()=>{
    setContador( contador + 1)
  }

  const cambiarNombreMaria = ()=>{
    setNombre("maria")
  }
  const cambiarNombrePepito = ()=>{
    setNombre("pepito")
  }

  useEffect( ()=>{
    setNombre("carmen")
    console.log("me ejecute una sola vez") // HACEMOS UNA LLAMADA A UN BACKEND ( PESADO )

  }, [] ) // ARREGLO DE DEPENDENCIAS VACIO

  // useEffect( ()=>{

  //   console.log( "me ejecuto cada vez que cambia algo" )

  // }, [contador]) // ARREGLO DE DEPENDENCIAS A LA ESCUCHA DE UNA VARIABLE


  // console.log("me ejecute fuera del effect")
  return (
    <div>
        <h1>Hola {nombre} como estas?</h1>
        <button onClick={cambiarNombreMaria}>Cambiar a maria</button>
        <button onClick={cambiarNombrePepito}>Cambiar a pepit</button>
        <button onClick={cambiarContador}>Cambiar contador</button>
    </div>
  );
};

export default ItemListContainer;
