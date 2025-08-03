import React from "react";
const OddPlayers = ({ IndianTeam }) => {
  const oddLabels = ["First", "Third", "Fifth"];
  return (
    <ul>
      {IndianTeam.filter((_, idx) => idx % 2 === 0).map((p, i) => (
        <li key={i}>{oddLabels[i]} : {p}</li>
      ))}
    </ul>
  );
};
export default OddPlayers;
