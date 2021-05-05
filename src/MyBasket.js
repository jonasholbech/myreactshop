export default function MyBasket({ basket }) {
  const costReducer = (accumulator, currentValue) =>
    accumulator + currentValue.price * currentValue.amount;
  const amountReducer = (accumulator, currentValue) =>
    accumulator + currentValue.amount;

  const numProducts = basket.reduce(amountReducer, 0);
  const total = basket.reduce(costReducer, 0);
  return (
    <section className="MyBasket">
      <p>
        You have {numProducts} item{numProducts !== 1 ? "s" : ""} in your
        basket, totalling {total}DKR
      </p>

      <ul>
        {basket.map((item, index) => (
          <CartItem
            name={item.productdisplayname}
            amount={item.amount}
            key={item.id}
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
