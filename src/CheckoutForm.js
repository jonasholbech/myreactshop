import { useState, useRef } from "react";
export default function CheckoutForm() {
  const formEl = useRef(null);
  const ccEl = useRef(null);
  const [name, setName] = useState("");
  const [cc, setCC] = useState("");
  const [ccError, setCCError] = useState("");
  const [dayMonth, setDayMonth] = useState("");

  function onSubmit(evt) {
    evt.preventDefault();
    if (!ccEl.current.checkValidity()) {
      setCCError("I really need you to fill this in");
    }
    if (formEl.current.checkValidity()) {
      console.log("valid, let post");
    } else {
      console.log("not valid");
    }
  }
  return (
    <section className="CheckoutForm">
      <form ref={formEl} noValidate onSubmit={onSubmit}>
        <label htmlFor="form_name">Name</label>
        <input
          type="text"
          id="form_name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="form_cc">Card Number</label>
        <input
          type="text"
          id="form_cc"
          ref={ccEl}
          value={cc}
          onChange={(e) => setCC(e.target.value.replace(/\D/g, ""))}
          required
          pattern="[0-9]{16}"
          minLength="16"
          maxLength="16"
        />
        <span>{ccError}</span>
        <label htmlFor="form_day_month">Day / Month</label>
        <input
          type="text"
          id="form_day_month"
          value={dayMonth}
          onChange={(e) => setDayMonth(e.target.value.replace(/\D\//g, ""))}
          required
          pattern="[0-1][0-9]/[0-9]{2}"
          minLength="5"
          maxLength="5"
        />

        <input type="submit" value="Pay" />
      </form>
    </section>
  );
}
