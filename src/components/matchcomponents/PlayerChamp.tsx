import React from "react";

export default function PlayerChamp({ playerData }) {
  console.log(playerData.championName);
  return (
    <div className="inline-flex ml-[17rem] mt-4 items-center">
      <div className="relative">
        <img
          src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${playerData.championName}.png`}
          width="60"
          height="60"
          className="rounded-full"
          alt={`${playerData.championName}`}
        />
        <span className="absolute text-white bg-black rounded-full -left-1/4 -top-1 text-xs px-2 py-0.5">
          {playerData.champLevel}
        </span>
      </div>
    </div>
  );
}
