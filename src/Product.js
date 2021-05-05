import { useState } from "react";
export default function Product(props) {
  const [amount, setAmount] = useState(0);

  function handleClickUp(evt) {
    setAmount((prevState) => {
      return prevState + 1;
    });
    props.addToBasket(props.id, amount);
  }

  function handleClickDown(evt) {
    setAmount((prevState) => {
      return prevState - 1;
    });
    props.removeFromBasket(props.id);
  }
  return (
    <article className={props.soldOut ? "Product soldout" : "Product"}>
      <img
        src={`https://kea-alt-del.dk/t7/images/webp/640/${props.id}.webp`}
        alt=""
      />
      <h2>{props.productdisplayname}</h2>
      <p>{props.price}</p>
      <div className="buttons">
        <button disabled={amount === 0} onClick={handleClickDown}>
          {" "}
          -{" "}
        </button>
        <input type="text" value={amount} disabled />
        <button onClick={handleClickUp}> + </button>
      </div>
    </article>
  );
}
