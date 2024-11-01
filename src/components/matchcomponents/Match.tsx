import React from "react";
import GameStatus from "./GameStatus";
import MatchChamps from "./MatchChamps";
import PlayerChamp from "./PlayerChamp";
import PlayerItems from "./PlayerItems";
import PlayerStats from "./PlayerStats";
import PlayerSummoners from "./PlayerSummoners";

export default function Match({ gameData, searchUsername, searchTagline }) {
  const playerList = gameData.info.participants;
  let playerData = null;

  for (let i = 0; i < playerList.length; i++) {
    if (
      playerList.at(i).riotIdGameName == searchUsername &&
      playerList.at(i).riotIdTagline == searchTagline
    ) {
      playerData = playerList.at(i);
      console.log(playerData);
    }
  }

  const isWin = playerData.win;

  return (
    <div
      className={`w-full flex p-4 rounded-lg shadow-md border-l-4 mb-4 ${
        isWin ? "bg-blue-100 border-blue-500" : "bg-red-100 border-red-500"
      }`}
    >
      <GameStatus gameData={gameData} playerData={playerData} isWin={isWin} />
      {/* <PlayerChamp gameData={gameData} /> */}
    </div>
  );
}
