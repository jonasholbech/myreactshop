export default function MyBasket({ basket }) {
  const cart = [
    { name: "Shirt", amount: 1 },
    { name: "Pants", amount: 3 },
    { name: "Socks", amount: 2 },
  ];

  return (
    <section className="MyBasket">
      <p>
        You have {basket.length} item{basket.length !== 1 ? "s" : ""} in your
        basket, totalling 0DKR
      </p>
      <ul>
        {cart.map((item) => (
          <CartItem name={item.name} amount={item.amount} />
        ))}
      </ul>
    </section>
  );
}
//<CartItem name={item.name} amount={item.amount} />
//<CartItem {...item} />
function CartItem(props) {
  console.log(props);
  return (
    <li>
      {props.amount} {props.name}
    </li>
  );
}
