export default function MyBasket({ basket }) {
  return (
    <section className="MyBasket">
      <p>
        You have {basket.length} item{basket.length !== 1 ? "s" : ""} in your
        basket, totalling 0DKR
      </p>
    </section>
  );
}
