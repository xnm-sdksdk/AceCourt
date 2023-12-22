<template>
  <div>
    <h1>Lista de Torneios</h1>
    <ul>
      <li v-for="tournament in tournaments" :key="tournament.tournament_key">
        {{ tournament.tournament_name }}
      </li>
    </ul>

    <h1>Lista de Jogadores</h1>
    <ul>
      <li v-for="player in players" :key="player.player_id">
        {{ player.player_name }}
        <p v-if="player.player_logo != null">
          <img :src="player.player_logo" alt="" />
        </p>
        <p v-else><img src="@/assets/profile pic.svg" alt="" /></p>
      </li>
    </ul>
  </div>
</template>

<script>
import { useGameStore } from "@/stores/tennis.js";

export default {
  data() {
    return {
      tournaments: [],
      players: [],
      store: useGameStore(),
    };
  },

  created() {
    this.store.fetchTournaments();

    this.tournaments = this.store.getAustralianOpen;
    console.log(this.tournaments);

    this.store.fetchPlayers();
    this.players = this.store.getPlayers || [];
    console.log(this.players);
  },
};
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
