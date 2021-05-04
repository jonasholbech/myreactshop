import { useState } from "react";
export default function Product(props) {
  const [amount, setAmount] = useState(0);

  function handleClickUp(evt) {
    setAmount((prevState) => {
      return prevState + 1;
    });
  }
  function handleClickDown(evt) {
    setAmount((prevState) => {
      return prevState - 1;
    });
  }
  return (
    <article className={props.soldOut ? "Product soldout" : "Product"}>
      <h2>{props.productdisplayname}</h2>
      <p>{props.price}</p>
      <button onClick={handleClickDown}> - </button>
      {amount}
      <button onClick={handleClickUp}> + </button>
    </article>
  );
}
