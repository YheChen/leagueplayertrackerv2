import React from "react";

export default function MatchChamps({ gameData, searchUsername }) {
  return (
    <div className="participants flex justify-end space-x-2">
      <ul className="team space-y-0.5">
        {" "}
        {/* Reduced space between participants */}
        {gameData.info.participants.slice(0, 5).map((summoner, idx) => (
          <li key={idx} className="participant flex items-center space-x-1">
            <div className="participant-icon flex-shrink-0">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${summoner.championName}.png`}
                className="w-5 h-5 rounded-sm" // Small icon with slight rounding
                alt={`${summoner.championName}`}
              />
            </div>
            <div
              className={`participant-name overflow-hidden text-ellipsis whitespace-nowrap leading-tight ${
                summoner.riotIdGameName.toLowerCase() ===
                searchUsername.toLowerCase()
                  ? "font-semibold text-gray-800"
                  : "text-gray-500"
              }`}
              style={{ maxWidth: "90px" }} // Adjust width for truncation
            >
              {summoner.riotIdGameName}
            </div>
          </li>
        ))}
      </ul>
      <ul className="team space-y-0.5">
        {" "}
        {/* Reduced space between participants */}
        {gameData.info.participants.slice(5, 10).map((summoner, idx) => (
          <li key={idx} className="participant flex items-center space-x-1">
            <div className="participant-icon flex-shrink-0">
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.9.1/img/champion/${summoner.championName}.png`}
                className="w-5 h-5 rounded-sm" // Small icon with slight rounding
                alt={`${summoner.championName}`}
              />
            </div>
            <div
              className={`participant-name overflow-hidden text-ellipsis whitespace-nowrap leading-tight ${
                summoner.riotIdGameName.toLowerCase() ===
                searchUsername.toLowerCase()
                  ? "font-semibold text-gray-800"
                  : "text-gray-500"
              }`}
              style={{ maxWidth: "90px" }} // Adjust width for truncation
            >
              {summoner.riotIdGameName}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
