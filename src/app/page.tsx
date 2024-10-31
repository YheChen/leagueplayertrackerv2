import React from "react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import SearchButton from "@/components/SearchButton";
import PlayerInfo from "@/components/PlayerInfo";
import PlayerRankData from "@/components/PlayerRankData";
import Match from "@/components/Match";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <Header />
      {/* Search Stuff */}
      <div className="flex items-center mb-4">
        <SearchBar />
        <SearchButton text="Search" />
      </div>
      {/* Player Info and Rank Data aligned to the left */}
      <div className="flex flex-col items-start">
        <PlayerInfo />
        <PlayerRankData />
      </div>
    </div>
  );
}
