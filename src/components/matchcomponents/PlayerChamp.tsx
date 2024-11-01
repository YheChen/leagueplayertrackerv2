import React from "react";

export default function PlayerChamp({ playerData }) {
  return (
    <div>
      <div className="relative">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${playerData.championName}.png`}
          width="60"
          height="60"
          className="rounded-full"
          alt={`${playerData.championName}`}
        />
        <span className="absolute text-white bg-black rounded-full right-0 bottom-0 text-xs w-6 h-6 flex items-center justify-center">
          {playerData.champLevel}
        </span>
      </div>
    </div>
  );
}
