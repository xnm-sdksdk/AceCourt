<template>
  <div>
    <NavBar></NavBar>

    <v-container>
      <!-- Header Section -->
      <v-row>
        <v-col>
          <h1>Ranking</h1>
        </v-col>
        <v-col class="text-right">
          <button
            style="letter-spacing: 0.15em"
            @click="goBack"
          >
            <img src="@/assets/arrowSelect.svg" alt="">
            Back
          </button>
        </v-col>
      </v-row>
      <v-data-table :items="standings" :headers="standingsHeaders" class="elevation-1">
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.place }}</td>
            <td>{{ item.player }}</td>
            <td>{{ item.country }}</td>
            <td></td>
            <td>{{ item.points }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { useGameStore } from "@/stores/tennis.js";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: useGameStore(),
      standings: [],
      standingsHeaders: [
        { text: "Position", value: "place" },
        { text: "Name", value: "player" },
        { text: "Nationality", value: "country" },
        { text: "W-L", value: "" },
        { text: "Points", value: "points" },
      ],
    };
  },

  created() {
    this.store.fetchStandings();
    this.standings = this.store.getStandings || [];
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
