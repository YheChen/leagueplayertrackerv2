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
        className="flex flex-col items-center w-full"
        style={{ height: "25vh" }}
      >
        <Header />
        <div className="flex items-center mt-4">
          <SearchBar />
          <SearchButton text="Search" />
        </div>
      </div>

      {/* Middle Layer */}
      <div
        className="flex items-center"
        style={{
          height: "33vh", // 1/3 of the screen height
          width: "33vw", // 1/3 of the screen width
          marginLeft: "14.28vw", // Offset of 1/7 of the screen width
        }}
      >
        <PlayerInfo />
      </div>

      {/* Bottom Layer */}
      <div
        className="flex items-center mt-[-8vh]"
        style={{
          height: "25vh", // 1/4 of the screen height
          width: "33vw", // 1/3 of the screen width
          marginLeft: "14.28vw", // Same offset as middle layer for alignment
        }}
      >
        <PlayerRankData />
      </div>
    </div>
  );
}
