import { defineStore } from "pinia";

const TENNIS_API_URL = "https://api.api-tennis.com/tennis/";
const API_KEY =
  "180fc8f42877e51e2ab6e22a8e65be1aa951f5ee63b012a132edcc8c6f290d7b";

export const useGameStore = defineStore("game", {
  state: () => ({
    // Retrieve Tournament key
    tournaments: [],
    // Retrieve All Players
    players: [],
    // Retrieve Ranking
    standings: [],
    // Retrieve All Live Games
    liveGames: [],
    // Retrieve All Games
    fixtures: [],
    // Retrieve Last Match of Player
    playerLastMatches: [],
    // Retrieve Games of the day
    gamesOfDay: [],
    // Retrieve Stats
    statistics: [],
  }),
  getters: {
    // Get Tournament
    getAustralianOpen: (state) => {
      return state.tournaments.filter(
        (tournament) =>
          tournament.tournament_name == "Australian Open" &&
          tournament.event_type_type == "Atp Singles"
      );
    },
    // Get Players
    getPlayers: (state) => {
      return state.players;
    },
    // Get Live Games
    getLiveScore: (state) => {
      return state.liveGames;
    },
    // Get Last Match from Player
    getPlayerLastMatches: (state) => {
      return state.playerLastMatches;
    },
    // Get Ranking
    getStandings: (state) => {
      return state.standings;
    },
    // Get First Player in Ranking
    getFirstPlayerRanking() {
      return this.standings.length > 0 ? this.standings[0] : null;
    },
    // Get All Games
    getFixtures: (state) => {
      const filter = state.fixtures.filter(
        (game) =>
          game.event_qualification != `True` && game.tournament_key == 1236
      );
      return filter;
    },
    //Statistic
    getStatistic: (state) => {
      return state.statistics;
    },
  },
  actions: {
    async fetchTournaments() {
      try {
        const response = await fetch(
          `${TENNIS_API_URL}?method=get_tournaments&APIkey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.tournaments = data.result;
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    },

    // Fetch All Players
    async fetchPlayers() {
      try {
        const response = await fetch(
          `${TENNIS_API_URL}?method=get_players&tournament_key=1236&APIkey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.players = data.result;
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    },
    // Fetch All Games
    // https://api.api-tennis.com/tennis/?method=get_fixtures&APIkey=180fc8f42877e51e2ab6e22a8e65be1aa951f5ee63b012a132edcc8c6f290d7b&date_start=2023-01-01&date_stop=2023-02-28&tournament_key=1236
    async fetchFixtures() {
      try {
        const response = await fetch(
          `${TENNIS_API_URL}?method=get_fixtures&APIkey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        this.fixtures = data.result;
      } catch (err) {
        console.log("Error fetching Fixtures: ", err);
        throw err;
      }
    },
    // Fetch All Live Games
    // https://api.api-tennis.com/tennis/?method=get_livescore&APIkey=180fc8f42877e51e2ab6e22a8e65be1aa951f5ee63b012a132edcc8c6f290d7b
    // &tournament_key=1236
    async fetchLiveScores() {
      try {
        const response = await fetch(
          `${TENNIS_API_URL}?method=get_livescore&APIkey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.liveGames = data.result;
      } catch (error) {
        console.error("Error fetching Live Games:", error);
      }
    },

    // &tournament_key=1236
    // Fetch H2H
    async fetchH2H() {
      try {
        const response = await fetch(
          `${TENNIS_API_URL}?method=get_H2H&APIkey=${API_KEY}&first_player_key=1906&second_player_key=2072`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.h2h = data.result;
      } catch (error) {
        console.error("Error fetching H2H:", error);
      }
    },
    // Fetch Ranking
    // https://api.api-tennis.com/tennis/?method=get_standings&APIkey=180fc8f42877e51e2ab6e22a8e65be1aa951f5ee63b012a132edcc8c6f290d7b&event_type=ATP
    async fetchStandings() {
      try {
        const response = await fetch(
          `${TENNIS_API_URL}?method=get_standings&event_type=ATP&APIkey=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.standings = data.result;
      } catch (error) {
        console.error("Error fetching Standings:", error);
      }
    },

    addStatistic(statistic) {
      const findStatistic = this.statistics.find(
        (stat) => stat.gameKey == statistic.gameKey
      );
      if (!findStatistic) {
        this.statistics.push(statistic);
      }
    },
    persist: true,
  },
});
