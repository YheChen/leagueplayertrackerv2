import React from "react";
import PlayerChamp from "./PlayerChamp";
import PlayerItems from "./PlayerItems";
import PlayerSumsRunes from "./PlayerSumsRunes";
import KDA from "./KDA";
import PlayerKillingSpree from "./PlayerKillingSpree";
import PlayerStats from "./PlayerStats";

export default function PlayerGameInfo({ gameData, playerData, isWin }) {
  return (
    <div className="flex-col items-start space-y-1.5 self-start">
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-1.5">
          <PlayerChamp playerData={playerData} />
          <PlayerSumsRunes playerData={playerData} />
          <KDA playerData={playerData} />
        </div>
        <PlayerStats
          gameData={gameData}
          playerData={playerData}
          isWin={isWin}
        />
      </div>
      <div className="flex items-center space-x-1.5">
        <PlayerItems playerData={playerData} />
        <PlayerKillingSpree playerData={playerData} />
      </div>
    </div>
  );
}
