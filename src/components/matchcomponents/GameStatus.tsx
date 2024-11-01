import React from "react";
import moment from "moment";

export default function GameStatus({ gameData }) {
  function getGameMode(queueId) {
    switch (queueId) {
      case 0:
        return "Custom";
      case 400:
        return "Normal Draft";
      case 420:
        return "Ranked Solo";
      case 430:
        return "Normal Blind";
      case 440:
        return "Ranked Flex";
      case 450:
        return "ARAM";
      case 700:
        return "Clash";
      case 830:
        return "Intro Bots";
      case 840:
        return "Beginner Bots";
      case 850:
        return "Intermediate Bots";
      case 900:
        return "ARURF";
      case 1020:
        return "One for All";
      case 1400:
        return "Ultimate Spellbook";
      case 1700:
        return "Arena";
      default:
        return "Unknown Gamemode";
    }
  }
  return (
    <div>
      <div className="text-blue-600 font-semibold text-lg">
        {getGameMode(gameData.info.queueId)}
      </div>
      <div className="text-gray-500 text-sm mt-1">
        {moment(gameData.info.gameCreation).fromNow()}
      </div>
      <div className="border-b border-gray-200 my-2 w-1/5"></div>{" "}
      {/* Divider line */}
      <div
        className={`text-gray-700 font-semibold ${
          gameData.win ? "text-blue-600" : "text-red-600"
        }`}
      >
        {gameData.win ? "Victory" : "Defeat"}
      </div>
      <div className="text-gray-500 text-sm mt-1">
        {Math.floor(gameData.info.gameDuration / 60)}m{" "}
        {gameData.info.gameDuration % 60}s
      </div>
    </div>
  );
}
