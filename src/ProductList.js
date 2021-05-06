import Product from "./Product";
export default function ProductList(props) {
  console.log(props);
  return (
    <main className="ProductList">
      {props.products.map((item) => (
        <Product addToBasket={props.addToBasket} {...item} key={item.id} />
      ))}
    </main>
  );
}
