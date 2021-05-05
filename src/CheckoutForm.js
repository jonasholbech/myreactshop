import { useState } from "react";
export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    cardnumber: "",
    month: "",
    year: "",
  });
  function handleChange(e) {
    const nextState = { ...formData };
    nextState[e.target.name] = e.target.value;
    setFormData(nextState);
  }
  function handleChangeNumber(e) {
    const nextState = { ...formData };
    const cleaned = e.target.value.replace(/\D/g, "");
    nextState[e.target.name] = cleaned;
    setFormData(nextState);
  }
  function checkDisabled() {
    return !(
      formData.month.length > 0 &&
      formData.year.length === 2 &&
      formData.cardnumber.length === 16 &&
      formData.name.length > 2
    );
  }
  return (
    <section className="CheckoutForm">
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onInput={handleChange}
          />
        </label>
        <label>
          Card Number
          <input
            type="text"
            name="cardnumber"
            value={formData.cardnumber}
            onChange={handleChangeNumber}
          />
        </label>
        <label>
          Month
          <input
            type="text"
            name="month"
            value={formData.month}
            onChange={handleChangeNumber}
          />
        </label>
        <label>
          Year
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChangeNumber}
          />
        </label>
        <input type="submit" disabled={checkDisabled()} defaultValue="Pay" />
      </form>
    </section>
  );
}
