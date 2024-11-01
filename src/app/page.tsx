"use client";

import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import PlayerInfo from "../components/PlayerInfo";
import PlayerRankData from "../components/PlayerRankData";
import Matches from "../components/Matches";

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
  const [loading, setLoading] = useState(false);

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
  const handleSearch = () => {
    // Trigger the search function, e.g., calling getPlayerInfo
    getPlayerInfo();
  };
  async function getPlayerInfo() {
    setLoading(true); // Set loading to true at the start

    try {
      // Fetch Summoner Data
      const summonerResponse = await axios.get<SummonerData>(
        "http://localhost:4000/summonerV4",
        {
          params: { username: searchUsername, tagline: searchTagline },
        }
      );
      setShowPlayerInfo(true);
      setPlayerLVL(summonerResponse.data.summonerLevel);
      setPlayerData(summonerResponse.data);
      setPlayerIconID(summonerResponse.data.profileIconId);

      // Fetch League Data
      const leagueResponse = await axios.get<LeagueEntry[]>(
        "http://localhost:4000/leagueV4",
        {
          params: { username: searchUsername, tagline: searchTagline },
        }
      );
      const data = leagueResponse.data;
      setPlayerRankData(data);
      if (data.length > 0) {
        const firstEntry = data[0];
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

      // Fetch Match History Data
      const matchResponse = await axios.get<MatchData[]>(
        "http://localhost:4000/matchV5",
        {
          params: { username: searchUsername, tagline: searchTagline },
        }
      );
      setGameList(matchResponse.data);
    } catch (error) {
      console.error("Error fetching player info:", error);
    } finally {
      setLoading(false); // Set loading to false after all requests finish
    }
  }
  if (loading) {
    return (
      <div className="h-screen flex flex-col items-start">
        {/* Top Layer */}
        <div
          className="flex flex-col items-center justify-center w-full bg-blue-500"
          style={{ height: "55vh", minHeight: "20vh" }}
        >
          <Header />
          <div className="flex items-center mt-4 gap-4">
            <SearchBar
              onChange={handleSearchChange}
              onEnterPress={handleSearch}
            />
            <SearchButton text="SEARCH" onClick={() => getPlayerInfo()} />
          </div>
        </div>

        {/* Middle Layer */}
        <div
          className="flex items-center mt-[-vh] "
          style={{
            transform: "translateY(-25%)",
            height: "100vh", // 1/3 of the screen height
            minHeight: "50vh",
            width: "33vw", // 1/3 of the screen width
            marginLeft: "14.28vw", // Offset of 1/7 of the screen width
          }}
        ></div>

        {/* Bottom Layer with Gray Background */}
        <div
          className="flex items-start w-full bg-white px-[14.28vw]"
          style={{ height: "75vh" }}
        ></div>
      </div>
    );
  }
  return (
    <div className="h-screen flex flex-col items-start">
      {/* Top Layer */}
      <div
        className="flex flex-col items-center justify-center w-full bg-blue-500"
        style={{ height: "55vh", minHeight: "20vh" }}
      >
        <Header />
        <div className="flex items-center mt-4 gap-4">
          <SearchBar
            onChange={handleSearchChange}
            onEnterPress={handleSearch}
          />
          <SearchButton text="SEARCH" onClick={() => getPlayerInfo()} />
        </div>
      </div>

      {/* Middle Layer */}
      <div
        className="flex items-center mt-[-vh] "
        style={{
          transform: "translateY(-25%)",
          height: "100vh", // 1/3 of the screen height
          minHeight: "50vh",
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
        className="flex items-start w-full bg-gray-200 px-[10vw]"
        style={{ height: "75vh" }}
      >
        {/* Left-Aligned Player Rank Data, with spacing from Player Info */}
        <div className="mt-3">
          <PlayerRankData
            playerRank={playerRank}
            playerRankTier={playerRankTier}
            playerLP={playerLP}
            playerWins={playerWins}
            playerLosses={playerLosses}
            playerWinRate={playerWinRate}
          />
        </div>

        {/* Matches Container */}
        <div
          className="container mx-auto w-full px-4 bg-gray-200 pt-3"
          style={{
            width: "60vw",
            maxWidth: "66%",
            margin: "0 auto",
          }}
        >
          <Matches
            gameList={gameList}
            searchUsername={searchUsername}
            searchTagline={searchTagline}
          />
        </div>
      </div>
    </div>
  );
}
