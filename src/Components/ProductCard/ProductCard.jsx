
import "./ProductCard.css"

const ProductCard = ( {title, price=0, isRed, login} ) => {


  const saludar = (  )=>{
    console.log("hola ")
  }

  const saludar2 = ( nombre )=>{
    console.log("hola " + nombre )
  }

  
  return (
    <div>
        <h1 className={ isRed ? "red" : "blue" }> {title} </h1>
        <h2> {price} </h2>
        <button onClick={saludar}>Saludar</button>
        <button onClick={ ()=> saludar2("juancito") }>Saludar dos</button>
        <button onClick={login}>Ingresar</button>
    </div>
  )
}

export default ProductCard

// let persona = {
//     nombre: "pepito",
//     edad: 30
// }

// let { edad, nombre } = persona