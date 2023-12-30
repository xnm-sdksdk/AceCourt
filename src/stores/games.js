import { defineStore } from "pinia";

const TENNIS_API_URL = "https://api.api-tennis.com/tennis/";
const API_KEY =
  "180fc8f42877e51e2ab6e22a8e65be1aa951f5ee63b012a132edcc8c6f290d7b";

export const useGameStore = defineStore("game", {
  state: () => ({
    tournaments: [],
    players: [],
    standings: [],
    liveGames: [],
    myGames: [],
    playerLastMatches:[]
  }),
  getters: {
    getAustralianOpen: (state) => {
      return state.tournaments.filter(
        (tournament) =>
          tournament.tournament_name == "Australian Open" &&
          tournament.event_type_type == "Atp Singles"
      );
    },

    getPlayers: (state) => {
      if ((state.liveGames, length > 0)) {
        const firstliveGame = state.liveGames[0];
        return firstliveGame.event_first_player;
      }
      return null;
    },

    getLiveScore: (state) => {
      return state.liveGames;
    },

    getPlayerLastMaches:(state)=>{
      return state.playerLastMatches
    }
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

    async fetchH2H() {
      try {
        const response = await fetch(
          `${TENNIS_API_URL}?method=get_H2H&APIkey=${API_KEY}&first_player_key=1906&second_player_key=2072`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.playerLastMatches = data.result;
      } catch (error) {
        console.error("Error fetching H2H:", error);
      }
    },
  },
  persist: true,
});