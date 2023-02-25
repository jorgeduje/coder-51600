import Footer from "./Components/Footer/Footer";
import ItemCount from "./Components/ItemCount/ItemCount";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
 
  const onAdd = ( cantidad )=>{
    console.log(`se agrego al carrito ${cantidad} elementos `)
    console.log("se agrego al carrito " + cantidad + " elementos")
  }

  let stock = 5

  let initial = 1

  return (
    <div>
      <Navbar>
        <Footer>
          <ItemListContainer />
          {/* <ProductCard title={title} price={200} isRed={false} login={login} /> */}
          {/* <ItemCount stock={stock} initial={initial} onAdd={onAdd} /> */}
        </Footer>
      </Navbar>
    </div>
  );
}

export default App;
