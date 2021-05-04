import Product from "./Product";
export default function ProductList(props) {
  console.log(props);
  return (
    <main className="ProductList">
      <Product {...props.product} />
      <Product {...props.product} />
      <Product {...props.product} />
      <Product {...props.product} />
    </main>
  );
}
