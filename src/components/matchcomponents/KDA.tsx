import React from "react";

export default function KDA({ playerData }) {
  console.log(playerData);
  return (
    <div className="flex flex-col">
      <div className="font-bold text-lg text-gray-600">
        {playerData.kills} <span className="text-gray-500"> / </span>
        <span className="text-red-700">{playerData.deaths}</span>
        <span className="text-gray-500"> / </span>
        {playerData.assists}
      </div>
      <div className="font-bold text-gray-600 p-1">
        {playerData.challenges.kda.toFixed(2)}
        <span className="text-gray-500"> KDA</span>
      </div>
    </div>
  );
}
