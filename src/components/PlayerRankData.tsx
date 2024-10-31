import React from "react";
import Image from "next/image";

export default function PlayerRankData({
  playerRank,
  playerRankTier,
  playerLP,
  playerWins,
  playerLosses,
  playerWinRate,
}) {
  return (
    <div
      className="bg-white text-white p-4 rounded-lg shadow-lg"
      style={{ width: "350px", height: "150px" }}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-black text-lg font-semibold">Ranked Solo/Duo</h3>
      </div>
      <div className="flex items-center">
        <Image
          src={`/images/${playerRankTier}.png`}
          alt="Master Rank"
          width={50}
          height={50}
          className="mr-4"
        />
        <div>
          <h4 className="text-2xl text-black font-bold">
            {playerRankTier} {playerRank}
          </h4>
          <p className="text-gray-500">{playerLP} LP</p>
        </div>
        <div className="ml-auto text-right">
          <p className="text-gray-500">
            {playerWins}W {playerLosses}L
          </p>
          <p className="text-gray-500">{playerWinRate}% Winrate</p>
        </div>
      </div>
    </div>
  );
}
