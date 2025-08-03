import React from "react";
const Scorebelow70 = ({ players }) => (
  <ul>
    {players.filter(p => p.score < 70).map((p, i) => (
      <li key={i}>{p.name} {p.score}</li>
    ))}
  </ul>
);
export default Scorebelow70;
