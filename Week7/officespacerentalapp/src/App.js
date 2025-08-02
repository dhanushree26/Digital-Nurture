import React from 'react';

function Office(props) {
  const { name, rent, address, image } = props.office;
  return (
    <div style={{ padding: "36px 70px", textAlign: "left", width: 410, marginBottom: "36px" }}>
      <h1 style={{ marginBottom: "16px" }}>
        Office Space , at Affordable Range
      </h1>
      <img
        src={image}
        alt="Office Space"
        style={{ width: 260, height: 175, display: "block", marginBottom: "18px" }}
      />
      <h2 style={{ margin: "0 0 12px 0" }}>Name: {name}</h2>
      <h3 style={{ color: "red", margin: "0 0 10px 0" }}>
        Rent: Rs. {rent}
      </h3>
      <h3 style={{ margin: 0 }}>Address: {address}</h3>
    </div>
  );
}

function App() {
  // Add two more offices as requested
  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Regus",
      rent: 76000,
      address: "Bangalore",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Smart Space",
      rent: 49000,
      address: "Hyderabad",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <div>
      {offices.map((office, idx) => (
        <Office key={idx} office={office} />
      ))}
    </div>
  );
}

export default App;
