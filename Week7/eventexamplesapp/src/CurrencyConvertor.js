import React, { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Assuming 1 Euro = 80 INR for demonstration
    if (currency.toLowerCase() === "euro") {
      alert(`Converting to Euro Amount is ${parseFloat(amount) * 80}`);
    } else {
      alert("Please enter currency as Euro");
    }
  }

  return (
    <div style={{ marginTop: 36 }}>
      <h1 style={{ color: "green" }}>Currency Convertor!!!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount:</label>
          <input
            type="text"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            style={{ marginLeft: 16 }}
          />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>Currency:</label>
          <textarea
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            style={{ marginLeft: 4, verticalAlign: "top" }}
          />
        </div>
        <button type="submit" style={{ marginTop: 12 }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CurrencyConvertor;
