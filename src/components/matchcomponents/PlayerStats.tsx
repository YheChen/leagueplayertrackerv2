import React from "react";

export default function PlayerStats({ gameData, playerData, isWin }) {
  console.log(isWin);
  return (
    <div className="flex items-start space-x-4">
      {/* Vertical Line */}
      <div className={`w-[1px] h-16 ${isWin ? "bg-blue-500" : "bg-red-500"}`} />
      {/* Stats Section */}
      <div className="flex flex-col items-start text-sm space-y-1">
        <div className="text-red-500 font-semibold">
          P/Kill {(100 * playerData.challenges.killParticipation).toFixed(2)}%
        </div>
        <div className="text-gray-800 font-medium">
          Wards Placed:{" "}
          {playerData.wardsPlaced + playerData.detectorWardsPlaced}
        </div>
        <div className="text-gray-800 font-medium">
          CS: {playerData.totalMinionsKilled + playerData.neutralMinionsKilled}{" "}
          &#40;
          {(
            (playerData.totalMinionsKilled + playerData.neutralMinionsKilled) /
            (gameData.info.gameDuration / 60)
          ).toFixed(1)}{" "}
          / min&#41;
        </div>
      </div>
    </div>
  );
}
