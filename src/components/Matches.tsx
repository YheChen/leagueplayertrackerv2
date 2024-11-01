import React from "react";
import Match from "./matchcomponents/Match";

export default function Matches({ gameList, searchUsername, searchTagline }) {
  return (
    <div className="flex flex-col w-full">
      {gameList.length > 0 ? (
        gameList.map((gameData, index) => (
          <Match
            key={index}
            gameData={gameData}
            searchUsername={searchUsername}
            searchTagline={searchTagline}
          />
        ))
      ) : (
        <p>No matches found</p>
      )}
    </div>
  );
}
