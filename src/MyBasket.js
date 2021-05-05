import { useState } from "react";
export default function MyBasket({ basket }) {
  const [cart, setCart] = useState([
    { name: "Shirt", amount: 1 },
    { name: "Pants", amount: 3 },
    { name: "Socks", amount: 2 },
  ]);

  function addToCart() {
    setCart((nextCart) => [
      ...nextCart,
      {
        name: "Shoes",
        amount: 14,
      },
    ]);
  }

  return (
    <section className="MyBasket">
      <p>
        You have {basket.length} item{basket.length !== 1 ? "s" : ""} in your
        basket, totalling 0DKR
      </p>
      <button onClick={addToCart}>Buy More</button>
      <ul>
        {cart.map((item) => (
          <CartItem name={item.name} amount={item.amount} key={item.name} />
        ))}
      </ul>
    </section>
  );
}
//<CartItem name={item.name} amount={item.amount} />
//<CartItem {...item} />
function CartItem(props) {
  return (
    <li>
      {props.amount} {props.name}
    </li>
  );
}
