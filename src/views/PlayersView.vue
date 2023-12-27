<template>
  <NavBar></NavBar>

  <!-- Main Container -->
  <v-container>
    <!-- Header Section -->
    <v-row class="justify-space-between">
      <v-col>
        <h1 class="text-3xl font-bold mb-4">Player Information</h1>
      </v-col>
      <v-col>
        <BackButton></BackButton>
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
            {{ player.player_name }}
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
                <p>{{ player.player_country }}</p>
              </v-row>
              <v-row>
                <!-- Player Position in Ranking -->
                <p class="rotate">Position:</p>
                <p>{{ playerPlace }}</p>
                <!-- Player Points -->
                <p class="rotate">Points:</p>
                <p>{{ playerPoints }}</p>
              </v-row>
            </v-col>
            <v-col>
              <v-row>
                <p>Age</p>
                <p>{{ calcBirth() }}</p>
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
              <img :src="player.player_logo" />
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
import BackButton from "../components/BackButton.vue";
import { useGameStore } from "@/stores/tennis.js";
export default {
  components: {
    NavBar,
    BackButton,
  },
  data() {
    return {
      store: useGameStore(),
      player: null,
      playerId: null,
      playerPlace: 0,
      playerPoints: 0,
    };
  },
  created() {
    this.playerId = this.$route.params.id;
    this.playerPlace = this.$route.params.place;
    this.playerPoints = this.$route.params.points;
    this.player = this.store.getPlayers.find(
      (player) => player.player_key == this.playerId
    );
    console.log(this.player);
  },
  methods: {
    calcBirth() {
      const birthdate = this.player.player_bday;

      // Verify if birth format is correct "YYYY-MM-DD"
      if (!birthdate || !/^\d{2}\.\d{2}\.\d{4}$/.test(birthdate)) {
        return "Invalid birthdate";
      }

      // Extract date
      const [day, month, year] = birthdate.split(".");
      const birthDateObject = new Date(`${year}-${month}-${day}`);

      // Verify if Date of Birth is NaN
      if (isNaN(birthDateObject.getTime())) {
        return "Invalid birthdate";
      }

      const birthYear = birthDateObject.getFullYear();
      const currentYear = new Date().getFullYear();
      return currentYear - birthYear;
    },
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

.justify-space-between {
  justify-content: space-between;
}
</style>
