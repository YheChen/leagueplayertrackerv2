"use client";

import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import PlayerInfo from "../components/PlayerInfo";
import PlayerRankData from "../components/PlayerRankData";
import Matches from "../components/Matches";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [playerData, setPlayerData] = useState(null);
  const [playerRankData, setPlayerRankData] = useState(null);
  const [gameList, setGameList] = useState([]);

  const handleSearchChange = (newUsername, newTagline) => {
    setName(newUsername);
    setTagline(newTagline);
  };

  const handleSearch = async () => {
    setLoading(true);
    setSearched(false);

    try {
      // Fetch Summoner Data
      const summonerResponse = await axios.get(
        "http://localhost:4000/summonerV4",
        {
          params: { username: name, tagline },
        }
      );
      setPlayerData(summonerResponse.data);

      interface LeagueEntry {
        queueType: string;
        tier: string;
        rank: string;
        leaguePoints: number;
        wins: number;
        losses: number;
      }
      // Fetch League Data
      const leagueResponse = await axios.get<LeagueEntry[]>(
        "http://localhost:4000/leagueV4",
        {
          params: { username: name, tagline },
        }
      );

      // Ensure we have data and take the first entry (for solo queue or primary rank)
      if (leagueResponse.data && leagueResponse.data.length > 0) {
        const primaryRank = leagueResponse.data[0];
        setPlayerRankData({
          rank: primaryRank.rank,
          tier: primaryRank.tier,
          leaguePoints: primaryRank.leaguePoints,
          wins: primaryRank.wins,
          losses: primaryRank.losses,
          winRate: Math.round(
            (100 * primaryRank.wins) / (primaryRank.wins + primaryRank.losses)
          ),
        });
      } else {
        setPlayerRankData(null); // No rank data available
      }

      interface MatchData {
        // Define the fields based on your API response structure
        matchId: string; // Example field, replace with actual fields
        // Add more fields as per your match data structure
      }
      // Fetch Match History Data
      const matchResponse = await axios.get<MatchData[]>(
        "http://localhost:4000/matchV5",
        {
          params: { username: name, tagline },
        }
      );
      setGameList(matchResponse.data);

      setSearched(true);
    } catch (error) {
      console.error("Error fetching player info:", error);
    } finally {
      setLoading(false);
    }
  };

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
          <SearchButton text="SEARCH" onClick={handleSearch} />
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-full w-full text-xl text-gray-700">
          Loading...
        </div>
      ) : searched ? (
        <>
          {/* Middle Layer with Player Info */}
          <div
            className="flex items-center"
            style={{
              transform: "translateY(-25%)",
              height: "100vh",
              minHeight: "50vh",
              width: "33vw",
              marginLeft: "14.28vw",
            }}
          >
            <PlayerInfo
              playerName={name}
              playerTagline={tagline}
              playerLevel={playerData?.summonerLevel}
              playerIconID={playerData?.profileIconId}
            />
          </div>

          {/* Bottom Layer with Gray Background */}
          <div
            className="flex items-start w-full bg-gray-200 px-[10vw]"
            style={{ height: "75vh" }}
          >
            {playerRankData ? (
              <div className="mt-3">
                <PlayerRankData
                  playerRank={playerRankData.rank}
                  playerRankTier={playerRankData.tier}
                  playerLP={playerRankData.leaguePoints}
                  playerWins={playerRankData.wins}
                  playerLosses={playerRankData.losses}
                  playerWinRate={playerRankData.winRate}
                />
              </div>
            ) : (
              <div className="mt-3 text-gray-500">Ranked data unavailable</div>
            )}

            {/* Matches Container */}
            <div
              className="container mx-auto w-full px-4 bg-gray-200 pt-3"
              style={{ width: "60vw", maxWidth: "66%", margin: "0 auto" }}
            >
              <Matches
                gameList={gameList}
                searchUsername={name}
                searchTagline={tagline}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full text-gray-500 text-xl">
          <p>
            Enter a Riot ID and click "SEARCH" or [ENTER] to view player
            information
          </p>
        </div>
      )}
    </div>
  );
}
