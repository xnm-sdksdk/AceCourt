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
                        <th
                          class="text-left"
                          style="background-color: #f2f9fc; color: #0f3972"
                        >
                          Year
                        </th>
                        <th
                          class="text-left"
                          style="background-color: #f2f9fc; color: #0f3972"
                        >
                          Rank
                        </th>
                        <th
                          class="text-left"
                          style="background-color: #f2f9fc; color: #0f3972"
                        >
                          Titles
                        </th>
                        <th
                          class="text-left"
                          style="background-color: #f2f9fc; color: #0f3972"
                        >
                          All Games (W-L)
                        </th>
                        <th
                          class="text-left"
                          style="background-color: #f2f9fc; color: #0f3972"
                        >
                          Prize Money
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="year in filterSingles" :key="year.season">
                        <td style="background-color: #efefef; color: #1c1c1c">
                          {{ year.season }}
                        </td>
                        <td style="background-color: #efefef; color: #1c1c1c">
                          {{ year.rank }}
                        </td>
                        <td style="background-color: #efefef; color: #1c1c1c">
                          {{ year.titles }}
                        </td>
                        <td style="background-color: #efefef; color: #1c1c1c">
                          {{ year.matches_won }}-{{ year.matches_lost }}
                        </td>
                        <td style="background-color: #efefef; color: #1c1c1c">
                          {{ sumPrizeMoney(year.season) }} $
                        </td>
                      </tr>
                    </tbody>
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
import { useGameStore } from "@/stores/games.js";
import { useTennisStore } from "@/stores/tennis.js";
export default {
  components: {
    NavBar,
    BackButton,
  },
  data() {
    return {
      tennisStore: useTennisStore(),
      gameStore: useGameStore(),
      h2h: [],
      standings: null,
      player: null,
      playerId: null,
    };
  },
  created() {
    //Get player Id from route
    this.playerId = this.$route.params.id;

    //Get standings to get the points and place of the player
    this.standings = this.tennisStore.getStandings.find(
      (player) => player.player_key == this.playerId
    );

    //Get player from player id
    this.player = this.tennisStore.getPlayers.find(
      (player) => player.player_key == this.playerId
    );

    //G of the playeret last games
    this.h2h = this.gameStore.getPlayerLastMacthes;
    console.log(this.h2h);
  },

  computed: {
    filterSingles() {
      const stats = this.player.stats.filter((stat) => stat.type == "singles");
      stats.sort((a, b) => parseInt(b.season) - parseInt(a.season));
      return stats;
    },
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

    sumPrizeMoney(season) {
      const tournaments = this.player.tournaments.filter(
        (tournament) => parseInt(tournament.season) === parseInt(season)
      );

      const totalPrizeMoney = tournaments.reduce(
        (total, tournament) =>
          total + parseFloat(tournament.prize.replace(/[^\d.-]/g, "") || 0),
        0
      );

      const formattedTotal = totalPrizeMoney.toLocaleString();

      // Divide a string a cada 3 caracteres
      const formattedWithSpaces = formattedTotal.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        " "
      );

      return formattedWithSpaces;
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
</style>
