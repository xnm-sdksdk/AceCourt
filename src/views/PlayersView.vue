<template>
  <NavBar></NavBar>
  <!-- Main Container -->
  <v-container>
      <!-- Header Section -->
      <v-row>
        <v-col>
          <h1 class="text-3xl font-bold mb-4">Player Information</h1>
        </v-col>
        <v-col class="text-right">
          <button
            class="bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-gray-100"
            @click="goBack"
          >
            <img src="@/assets/back.svg" alt="" />
            Back
          </button>
        </v-col>
      </v-row>

      <!-- Player Name Section -->
      <v-row>
        <v-col>
          <v-container fluid>
            <h2 class="text-xl font-bold">Player Name: {{ playerName }}</h2>
          </v-container>
        </v-col>
      </v-row>

      <!-- Player Information Section -->
      <v-row>
        <!-- Left Section: Nationality and Ranking -->
        <v-col>
          <v-container
            fluid
            style="
              background-color: #EFEFEF;
              border-bottom-left-radius: 12px;
              margin-top: 5px;
            "
          >
            <!-- Player Nationality and Name -->
            <v-row>
              <v-col>
                <!-- Add player nationality flag image here -->
                <img :src="playerFlag" alt="Player Flag" />
              </v-col>
              <v-col>
                <!-- Player Name -->
                <h3 class="text-lg font-bold">{{ playerName }}</h3>
                <!-- Player Position in Ranking -->
                <p>Rank: {{ playerRank }}</p>
                <!-- Player Points -->
                <p>Points: {{ playerPoints }}</p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>

        <!-- Center Section: Add Your Player Information Here -->

        <!-- Right Section: Empty for Now -->
      </v-row>
    </v-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import {useGameStore} from "@/stores/tennis.js"
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      store: useGameStore(),
      players:[],
      playerId:null
    }
  },

  created () {
    this.store.fetchPlayers();
    this.players = this.store.getPlayers;
    this.playerId=this.$route.params.id
    console.log(this.players);
    console.log(this.playerId)
  },
};
</script>

<style>
h2{
  color:#0F3972
}
</style>
