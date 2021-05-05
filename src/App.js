import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import Basket from "./Basket";
import ProductList from "./ProductList";
function App() {
  const numProducts = 10;
  const [products, setProducts] = useState([]);
  const [sortKey, setSortKey] = useState("price");
  const [start, setStart] = useState(0);
  const [fetching, setFetching] = useState(true);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    fetch(
      `https://kea-alt-del.dk/t7/api/products?limit=${numProducts}&start=${start}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFetching(false);
      });
  }, [start]);

  function addToBasket(id, amount) {
    const obj = products.find((item) => item.id === id);
    setBasket((prevState) => [...prevState, obj]);
  }
  function removeFromBasket(id) {
    let found = false;
    const nextBasket = basket.filter((item) => {
      if (!found && item.id === id) {
        found = true;
        return false;
      }
      return true;
    });
    setBasket(nextBasket);
  }
  const copy = [...products];
  copy.sort((a, b) => a[sortKey] > b[sortKey]);
  return (
    <div className="App">
      <Nav>
        <button onClick={() => setSortKey("productdisplayname")}>
          Sort By Name
        </button>
        <button onClick={() => setSortKey("price")}>Sort By Price</button>
        <button
          onClick={() => {
            setStart((prev) => prev + numProducts);
            setFetching(true);
          }}
        >
          Next
        </button>
      </Nav>
      <ProductList
        addToBasket={addToBasket}
        removeFromBasket={removeFromBasket}
        fetching={fetching}
        products={copy}
      />
      <Basket basket={basket} />
    </div>
  );
}

export default App;
