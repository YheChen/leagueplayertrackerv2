import React from "react";
import GameStatus from "./GameStatus";
import MatchChamps from "./MatchChamps";
import PlayerChamp from "./PlayerChamp";
import PlayerItems from "./PlayerItems";
import PlayerStats from "./PlayerStats";
import PlayerSummoners from "./PlayerSummoners";

export default function Match({ gameData, searchUsername, searchTagline }) {
  return (
    <div className="w-full flex flex-col p-4 bg-blue-50 rounded-lg shadow-md border-l-4 border-blue-400 mb-4">
      <GameStatus gameData={gameData} />
      {/* <PlayerChamp gameData={gameData} /> */}
    </div>
  );
}
