import React from "react";
function getKillingSpree(killingSpree) {
  switch (killingSpree) {
    case 2:
      return "Double Kill";
    case 3:
      return "Triple Kill";
    case 4:
      return "Quadra Kill";
    case 5:
      return "Penta Kill";
    default:
      return null;
  }
}
export default function PlayerKillingSpree({ playerData }) {
  const killingSpreeText = getKillingSpree(playerData.largestMultiKill);

  if (!killingSpreeText) return null;

  return (
    <div className="bg-red-500 text-white rounded-full text-sm px-2 py-0.5">
      {getKillingSpree(playerData.largestMultiKill)}
    </div>
  );
}
