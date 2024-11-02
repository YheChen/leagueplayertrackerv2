import React from "react";
import GameStatus from "./GameStatus";
import MatchChamps from "./MatchChamps";
import PlayerGameInfo from "./PlayerGameInfo";

export default function Match({ gameData, searchUsername, searchTagline }) {
  const playerList = gameData.info.participants;
  let playerData = null;

  for (let i = 0; i < playerList.length; i++) {
    if (
      playerList.at(i).riotIdGameName == searchUsername &&
      playerList.at(i).riotIdTagline == searchTagline
    ) {
      playerData = playerList.at(i);
      break;
    }
  }

  const isWin = playerData ? playerData.win : false;

  return (
    <div
      className={`w-full flex items-start p-4 rounded-lg shadow-md border-l-4 mb-4 space-x-3 ${
        isWin ? "bg-blue-100 border-blue-500" : "bg-red-100 border-red-500"
      }`}
    >
      <div className="flex-shrink-0">
        <GameStatus gameData={gameData} isWin={isWin} />
      </div>
      <div className="flex items-center justify-between w-3/4 ">
        <PlayerGameInfo
          gameData={gameData}
          playerData={playerData}
          isWin={isWin}
        />
      </div>
      <MatchChamps gameData={gameData} searchUsername={searchUsername} />
    </div>
  );
}
