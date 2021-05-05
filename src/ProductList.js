import Product from "./Product";
export default function ProductList(props) {
  return (
    <main className={`ProductList`}>
      {props.products.map((item) => (
        <Product
          {...item}
          addToBasket={props.addToBasket}
          removeFromBasket={props.removeFromBasket}
          key={item.id}
        />
      ))}
    </main>
  );
}
