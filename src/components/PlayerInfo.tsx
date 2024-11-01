import React from "react";

export default function PlayerInfo({
  playerName,
  playerTagline,
  playerLevel,
  playerIconID,
}) {
  return (
    <div className="flex items-start">
      <div className="relative">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/profileicon/${playerIconID}.png`}
          alt="Player Icon"
          className="w-24 h-24 rounded-lg"
        />
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm font-bold px-2 py-1 rounded-full">
          {playerLevel}
        </span>
      </div>
      <div className="ml-3">
        <h4 className="text-xl font-bold text-black">
          {playerName}#{playerTagline}
        </h4>
      </div>
    </div>
  );
}
