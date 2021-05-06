import Product from "./Product";
export default function ProductList(props) {
  return (
    <main className="ProductList">
      {props.products.length === 0 && <Loader />}
      {props.products.map((item) => (
        <Product addToBasket={props.addToBasket} {...item} key={item.id} />
      ))}
    </main>
  );
}
function Loader() {
  return <p>Loading...</p>;
}
