
import "./ProductCard.css"

const ProductCard = ( {title, price=0, isRed} ) => {

  return (
    <div>
        <h1 className={ isRed ? "red" : "blue" }> {title} </h1>
        <h2> {price} </h2>
    </div>
  )
}

export default ProductCard

// let persona = {
//     nombre: "pepito",
//     edad: 30
// }

// let { edad, nombre } = persona