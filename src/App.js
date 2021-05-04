import "./App.css";
import Nav from "./Nav";
import Basket from "./Basket";
import ProductList from "./ProductList";
function App() {
  const product = {
    id: 1163,
    productdisplayname: "Round Neck Jersey",
    price: 895,
    soldOut: 0,
  };
  const basket = [];
  return (
    <div className="App">
      <Nav />
      <ProductList product={product} />
      <Basket basket={basket} />
    </div>
  );
}

export default App;
