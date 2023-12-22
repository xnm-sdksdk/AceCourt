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
          <button style="letter-spacing: 0.15em" @click="goBack">Back</button>
        </v-col>
      </v-row>
      <v-table fixed-header height="570px">
        <thead>
          <tr>
            <th class="text-left">Position</th>
            <th class="text-left">Name</th>
            <th class="text-left">Nacionality</th>
            <th class="text-left">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stand in standings" :key="stand.player">
            <td>{{ stand.place }}</td>
            <td>{{ stand.player }}</td>
            <td>{{ stand.country }}</td>
            <td>{{ stand.points }}</td>
          </tr>
        </tbody>
      </v-table>
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
</style>