export default function MyBasket({ basket }) {
  return (
    <section className="MyBasket">
      <p>
        You have {basket.length} item{basket.length !== 1 ? "s" : ""} in your
        basket, totalling 0DKR
      </p>

      <ul>
        {basket.map((item) => (
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
