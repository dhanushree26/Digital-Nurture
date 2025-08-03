import React from "react";
const EvenPlayers = ({ IndianTeam }) => {
  const evenLabels = ["Second", "Fourth", "Sixth"];
  return (
    <ul>
      {IndianTeam.filter((_, idx) => idx % 2 !== 0).map((p, i) => (
        <li key={i}>{evenLabels[i]} : {p}</li>
      ))}
    </ul>
  );
};
export default EvenPlayers;
