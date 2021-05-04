import { useState } from "react";
export default function Product({ productdisplayname, soldOut, price, id }) {
  const [amount, setAmount] = useState(0);

  function handleClickUp(evt) {
    console.log(evt);
    setAmount((prevState) => {
      return prevState + 1;
    });
  }
  function handleClickDown(evt) {
    console.log(evt);
    setAmount((prevState) => {
      return prevState - 1;
    });
  }
  return (
    <article className={soldOut ? "Product soldout" : "Product"}>
      <h2>{productdisplayname}</h2>
      <p>{price}</p>
      <button onClick={handleClickDown}> - </button>
      {amount}
      <button onClick={handleClickUp}> + </button>
    </article>
  );
}
