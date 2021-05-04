import { useState } from "react";
export default function Product({ productdisplayname, soldOut, price, id }) {
  const [count, setCount] = useState(0);

  function handleClick(evt) {
    console.log(evt);
    setCount((prevState) => {
      return prevState + 1;
    });
  }
  return (
    <article className={soldOut ? "Product soldout" : "Product"}>
      <h2>{productdisplayname}</h2>
      <p>{price}</p>
      <button onClick={handleClick}>Read more {count}</button>
    </article>
  );
}
