import express, { Request, Response } from "express";
import cors from "cors";
import axios from "axios";

const app = express();

app.use(cors());

const API_KEY = "RGAPI-505d2833-da03-4162-b3ba-244fdca0f5a7";

interface RiotAccountResponse {
  puuid: string;
}

interface SummonerResponse {
  id: string;
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
  // Define match data structure based on Riot's API response
  metadata: {
    matchId: string;
    participants: string[];
  };
  info: {
    gameMode: string;
    gameDuration: number;
    participants: Array<{
      puuid: string;
      championName: string;
      kills: number;
      deaths: number;
      assists: number;
    }>;
  };
}

function findPlayerPUUID(
  searchUsername: string,
  searchTagline: string
): Promise<string> {
  const riotAPICallString = `https://americas.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${searchUsername}/${searchTagline}?api_key=${API_KEY}`;
  return axios
    .get<RiotAccountResponse>(riotAPICallString)
    .then((response) => response.data.puuid)
    .catch((error) => {
      throw new Error(error.message);
    });
}

function findPlayerSummonerID(PUUID: string): Promise<string> {
  const riotAPICallString = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${PUUID}?api_key=${API_KEY}`;
  return axios
    .get<SummonerResponse>(riotAPICallString)
    .then((response) => response.data.id)
    .catch((error) => {
      throw new Error(error.message);
    });
}

app.get("/summonerV4", async (req: Request, res: Response) => {
  const playerName = req.query.username as string;
  const playerTag = req.query.tagline as string;

  try {
    const playerPUUID = await findPlayerPUUID(playerName, playerTag);
    const summonerV4apiCall = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${playerPUUID}?api_key=${API_KEY}`;
    const response = await axios.get<SummonerResponse>(summonerV4apiCall);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.get("/leagueV4", async (req: Request, res: Response) => {
  const playerName = req.query.username as string;
  const playerTag = req.query.tagline as string;

  try {
    const playerPUUID = await findPlayerPUUID(playerName, playerTag);
    const playerSummonerID = await findPlayerSummonerID(playerPUUID);
    const leagueV4ApiCall = `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${playerSummonerID}?api_key=${API_KEY}`;
    const response = await axios.get<LeagueEntry[]>(leagueV4ApiCall);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.get("/matchV5", async (req: Request, res: Response) => {
  const playerName = req.query.username as string;
  const playerTag = req.query.tagline as string;

  try {
    const playerPUUID = await findPlayerPUUID(playerName, playerTag);
    const matchV5ApiCallList = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${playerPUUID}/ids?start=0&count=20&api_key=${API_KEY}`;
    const gameIDSResponse = await axios.get<string[]>(matchV5ApiCallList);
    const gameIDS = gameIDSResponse.data;

    const matchArray: MatchData[] = [];

    for (let i = 0; i < gameIDS.length - 15; i++) {
      const matchID = gameIDS[i];
      const matchV5ApiCallMatchData = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchID}?api_key=${API_KEY}`;

      const matchData = await axios
        .get<MatchData>(matchV5ApiCallMatchData)
        .then((response) => response.data)
        .catch((err) => null); // Use null for failed matches

      if (matchData) {
        matchArray.push(matchData);
      }
    }

    res.json(matchArray);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

app.listen(4000, () => {
  console.log("Server started at port 4000");
});
