export default function MyBasket({ basket }) {
  const reducer = (accumulator, currentValue) =>
    accumulator + currentValue.price;

  const total = basket.reduce(reducer, 0);
  return (
    <section className="MyBasket">
      <p>
        You have {basket.length} item{basket.length !== 1 ? "s" : ""} in your
        basket, totalling {total}DKR
      </p>

      <ul>
        {basket.map((item, index) => (
          <CartItem
            name={item.productdisplayname}
            amount={item.amount}
            key={index}
          />
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
