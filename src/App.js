import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";
import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <div>
      <Navbar>
        <Footer>
          <ItemListContainer greeting={"Hola como esta"} />
          <ProductCard title={"Producto uno"} price={200} isRed={false} />
        </Footer>
      </Navbar>
    </div>
  );
}

export default App;

