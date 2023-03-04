import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar>
        <Footer>
          <ItemListContainer />
        </Footer>
      </Navbar>
    </div>
  );
}

export default App;
