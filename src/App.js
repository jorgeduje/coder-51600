import CartWidget from "./Components/CartWidget/CartWidget";
import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";


function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer />
      {/* ProductCard( "hola" ) */}
      <ProductCard title={"Producto uno"} price={200} isRed={false} /> 
      <ProductCard title={"Producto dos"} price={500} isRed={true} />
      <ProductCard title={"Producto tres"} isRed={true} />
      <Footer />
    </div>
  );
}

export default App;


// function sumar( num1, num2 ){
//   return  num1 + num2
// }

// sumar(10, 5) ---> 15
// sumar(4, 2) ---> 6

