import { defineStore } from "pinia";

const TENNIS_API_URL = "https://api.api-tennis.com/tennis/";
const API_KEY = "180fc8f42877e51e2ab6e22a8e65be1aa951f5ee63b012a132edcc8c6f290d7b";

export const useGameStore = defineStore("game", {
  state: () => ({
    tournaments: [],
  }),
  getters: {
    getAustralianOpen: (state) => {
      return state.tournaments.filter(
        (tournament) =>
          tournament.result.tournament_name === "Australian Open" &&
          tournament.result.event_type === "Boys Singles"
      );
    },
  },
  actions: {
    async fetchTournaments() {
      try {
        const response = await fetch(`${TENNIS_API_URL}?method=get_tournaments&APIkey=${API_KEY}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        this.tournaments = data; // Assuming the response is an array of tournaments
      } catch (error) {
        console.error("Error fetching tournaments:", error);
      }
    },
  },
  persist: true,
});

//ID AUSTRALIAN OPEN BOYS SINGLES:329