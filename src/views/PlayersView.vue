<template>
  <div>
    <NavBar></NavBar>

    <v-container>
      <!-- Header Section -->
      <v-row>
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
          <v-container fluid class="name-container">
            <h2 class="text-xl font-bold">{{ player.player_name }}</h2>
          </v-container>
        </v-col>
      </v-row>

      <!-- Player Information Section -->
      <!-- Player Information Section -->
      <v-row>
        <!-- Left Section: Ranking -->
        <v-col v-if="player">
          <v-container fluid class="info-container">
            <v-col class="section">
              <v-row>
                <h3>Position:</h3>
                <p>{{ standings.place }}</p>
              </v-row>
              <v-row>
                <h3>Points:</h3>
                <p>{{ standings.points }}</p>
              </v-row>
            </v-col>
            <v-col>
              <v-row class="align-center">
                <h3>Age:</h3>
                <p>{{ calcBirth() }}</p>
              </v-row>
              <v-row class="align-center">
                <h3>Country:</h3>
                <p>{{ player.player_country }}</p>
              </v-row>
              <v-row class="align-center">
                <h3>Turned Pro:</h3>
                <p>{{ turnPro() }}</p>
              </v-row>
            </v-col>
            <v-col class="align-end">
              <img :src="player.player_logo" />
            </v-col>
          </v-container>
        </v-col>
      </v-row>

      <!-- Career and Last Matches -->
      <v-row>
        <v-container>
          <!-- Player Name Section -->
          <v-row>
            <v-col>
              <v-container fluid class="name-container">
                <h2 class="text-xl font-bold">Career</h2>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-row>

      <!-- Registered Games -->
      <v-row>
        <v-container>
          <!-- Player Name Section -->
          <v-row>
            <v-col>
              <v-container fluid class="name-container">
                <h2 class="text-xl font-bold">Registed Games</h2> </v-container
              ><!-- Player Name Section -->
              <v-row>
                <v-col>
                  <v-table fixed-header width="100%">
                    <thead>
                      <tr>
                        <th class="text-left headColor">Year</th>
                        <th class="text-left headColor">Rank</th>
                        <th class="text-left headColor">Titles</th>
                        <th class="text-left headColor">All Games</th>
                        <th class="text-left headColor">Prize Money</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </v-table>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
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
      standings: null,
      player: null,
      playerId: null,
    };
  },
  created() {
    this.playerId = this.$route.params.id;
    this.standings = this.store.getStandings.find(
      (player) => player.player_key == this.playerId
    );
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

    turnPro() {
      const lessYear = this.player.stats.map((year) => parseInt(year.season));
      return Math.min(...lessYear);
    },
  },
};
</script>
<style scoped>
.name-container {
  background-color: #efefef;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

.info-container {
  background-color: #efefef;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 10px;
  display: flex;
  flex-direction: row;
}

.section {
  display: flex;
  flex-direction: column;
}

img {
  max-width: 100%;
  height: auto;
  margin-top: 10px;
}

.align-center {
  display: flex;
  align-items: center;
}

.align-end {
  display: flex;
  align-items: flex-end;
}

.headColor{
  background-color: #F2F9FC;
  color:#0F3972
}
</style>
