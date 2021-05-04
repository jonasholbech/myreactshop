import MyBasket from "./MyBasket";
import CheckoutForm from "./CheckoutForm";
export default function Basket(props) {
  return (
    <aside className="Basket">
      <MyBasket basket={props.basket} />
      <CheckoutForm />
    </aside>
  );
}
