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
        <v-container
          fluid
          style="
            background-color: #efefef;
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
          "
        >
          <h2 class="text-xl font-bold">
            {{ fetchPlayerInfo }}
          </h2>
        </v-container>
      </v-col>
    </v-row>

    <!-- Player Information Section -->
    <v-row>
      <!-- Left Section: Nationality and Ranking -->
      <v-col v-if="player">
        <v-container
          fluid
          style="
            background-color: #efefef;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
          "
        >
          <!-- Player Nationality and Name -->
          <v-row>
            <v-col>
              <v-row>
                <!-- Add player nationality flag image here -->
                <img src="" />
                <p>Player Country</p>
              </v-row>
              <v-row>
                <!-- Player Position in Ranking -->
                <p class="rotate">Rank:</p>
                <p>1</p>
                <!-- Player Points -->
                <p class="rotate">Points:</p>
                <p>101010</p>
              </v-row>
            </v-col>
            <v-col>
              <v-row>
                <p>Age</p>
                <p>20</p>
              </v-row>
              <v-row>
                <p>Age</p>
                <p>20</p>
              </v-row>
              <v-row>
                <p>Age</p>
                <p>20</p>
              </v-row>
              <v-row>
                <p>Age</p>
                <p>20</p>
              </v-row>
            </v-col>
            <v-col>
              <img src="" />
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <!--Career and Last Matches-->
    <v-row></v-row>
    <!--Registed Games-->
    <v-row></v-row>
  </v-container>
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
      player: null,
      playerId: null,
    };
  },
  computed: {
    fetchPlayerInfo() {
      return this.store.fetchPlayers()
        ? this.store.fetchPlayers().player_
        : "Oops";
    },
  },
  created() {
    this.store.fetchPlayers();
    this.playerId = this.$route.params.id;
    this.player = this.store.getPlayers.find(
      (player) => player.player_key == this.playerId
    );
    console.log(this.player);
  },
};
</script>
z
<style>
h2 {
  color: #0f3972;
}

.rotate {
  rotate: -90deg;
}
</style>
