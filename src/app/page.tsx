"use client";

import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import PlayerInfo from "../components/PlayerInfo";
import PlayerRankData from "../components/PlayerRankData";
import Match from "../components/Match";

interface SummonerData {
  summonerLevel: number;
  profileIconId: number;
}

interface LeagueEntry {
  queueType: string;
  tier: string;
  rank: string;
  leaguePoints: number;
  wins: number;
  losses: number;
}
interface MatchData {
  // Define the fields based on your API response structure
}

export default function Home() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  //summoner v4 data
  const [showPlayerInfo, setShowPlayerInfo] = useState(false); // Only display info if the button is pressed
  const [searchUsername, setSearchUsername] = useState("");
  const [searchTagline, setSearchTagline] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [playerLVL, setPlayerLVL] = useState(null);
  const [playerIconID, setPlayerIconID] = useState(null);
  //league v4 data
  const [playerRankData, setPlayerRankData] = useState(null); // League-v4
  const [playerRank, setPlayerRank] = useState(null); // Rank is I, II, III, IV
  const [playerRankTier, setPlayerRankTier] = useState(null); // Tier is Diamond, Master, Gold etc
  const [playerLP, setPlayerLP] = useState(0);
  const [playerWins, setPlayerWins] = useState(0);
  const [playerLosses, setPlayerLosses] = useState(0);
  const [playerWinRate, setPlayerWinRate] = useState<number | null>(null);
  ///match v5 data
  const [gameList, setGameList] = useState([]);

  const handleSearchChange = (newUsername: string, newTagline: string) => {
    setSearchUsername(newUsername);
    setSearchTagline(newTagline);
    setName(newUsername);
    setTagline(newTagline);
  };

  function getPlayerInfo() {
    axios
      .get<SummonerData>("http://localhost:4000/summonerV4", {
        params: { username: searchUsername, tagline: searchTagline },
      })
      .then((response) => {
        setShowPlayerInfo(true);
        setPlayerLVL(response.data.summonerLevel);
        setPlayerData(response.data);
        setPlayerIconID(response.data.profileIconId);
      })
      .catch((error) => {
        console.error("Error fetching player info summonerV4:", error);
      });
    axios
      .get<LeagueEntry[]>("http://localhost:4000/leagueV4", {
        params: { username: searchUsername, tagline: searchTagline },
      })
      .then((response) => {
        const data = response.data;
        setPlayerRankData(data);
        setPlayerLVL(playerData.summonerLevel);
        const firstEntry = data[0];
        if (data.length > 0) {
          setPlayerRank(firstEntry.rank);
          setPlayerRankTier(firstEntry.tier);
          setPlayerLP(firstEntry.leaguePoints);
          setPlayerWins(firstEntry.wins);
          setPlayerLosses(firstEntry.losses);
          const winRate = Math.round(
            (100 * firstEntry.wins) / (firstEntry.wins + firstEntry.losses)
          );
          setPlayerWinRate(winRate);
        }
      })
      .catch((error) => {
        console.error("Error fetching player info leaguev4:", error);
      });
    axios
      .get<MatchData[]>("http://localhost:4000/matchV5", {
        params: { username: searchUsername, tagline: searchTagline },
      })
      .then((response) => {
        setGameList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching player info matchV5:", error);
      });
  }
  return (
    <div className="h-screen flex flex-col items-start">
      {/* Top Layer */}
      <div
        className="flex flex-col items-center justify-center w-full bg-blue-500"
        style={{ height: "55vh" }}
      >
        <Header />
        <div className="flex items-center mt-4">
          <SearchBar onChange={handleSearchChange} />
          <SearchButton text="SEARCH" onClick={() => getPlayerInfo()} />
        </div>
      </div>

      {/* Middle Layer */}
      <div
        className="flex items-center mt-[-vh]"
        style={{
          transform: "translateY(-25%)",
          height: "100vh", // 1/3 of the screen height
          width: "33vw", // 1/3 of the screen width
          marginLeft: "14.28vw", // Offset of 1/7 of the screen width
        }}
      >
        <PlayerInfo
          playerName={name}
          playerTagline={tagline}
          playerLevel={playerLVL}
          playerIconID={playerIconID}
        />
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
