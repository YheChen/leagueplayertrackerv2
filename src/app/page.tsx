import React from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SearchButton from "@/components/SearchButton";
import PlayerInfo from "@/components/PlayerInfo";
import PlayerRankData from "@/components/PlayerRankData";
import Match from "@/components/Match";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-start">
      {/* Top Layer */}
      <div
        className="flex flex-col items-center w-full bg-blue-500"
        style={{ height: "35vh" }}
      >
        <Header />
        <div className="flex items-center mt-4">
          <SearchBar />
          <SearchButton text="SEARCH" />
        </div>
      </div>

      {/* Middle Layer */}
      <div
        className="flex items-center mt-[-vh]"
        style={{
          height: "60vh", // 1/3 of the screen height
          width: "33vw", // 1/3 of the screen width
          marginLeft: "14.28vw", // Offset of 1/7 of the screen width
        }}
      >
        <PlayerInfo />
      </div>

      {/* Bottom Layer with Gray Background */}
      <div
        className="flex flex-col items-start w-full bg-gray-200"
        style={{ height: "75vh", paddingLeft: "14.28vw" }}
      >
        {/* Left-Aligned Player Rank Data, with spacing from Player Info */}
        <div className="mt-3">
          <PlayerRankData />
        </div>
      </div>
    </div>
  );
}
