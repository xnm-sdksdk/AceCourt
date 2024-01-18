<template>
  <NavBar></NavBar>
  <v-container class="containerTournament">
    <div class="flex justify-center items-center">
      <v-row>
        <v-col class="mx-3">
          <router-link :to="{ name: 'schedule' }">
            <v-row class="tournamentCont">
              <v-col>
                <v-row>
                  <h1>Schedule</h1>
                </v-row>
                <v-row>
                  <p>
                    Explore the comprehensive schedule feature on our tennis
                    dashboard, keeping you updated on match timings, player
                    matchups, and tournament progress in real-time.
                  </p>
                </v-row>
              </v-col>
            </v-row>
          </router-link>
        </v-col>

        <v-col class="mx-3">
          <router-link :to="{ name: 'draw' }">
            <v-row class="tournamentCont">
              <v-col>
                <v-row>
                  <h1>Draws</h1>
                </v-row>
                <v-row>
                  <p>
                    Explore the world of tennis with our comprehensive dashboard
                    for live draws, offering up-to-the-minute updates and
                    detailed information, ensuring you stay connected to the
                    excitement of the game.
                  </p>
                </v-row>
              </v-col>
            </v-row>
          </router-link>
        </v-col>

        <v-col class="mx-3">
          <router-link :to="{ name: 'ranking' }">
            <v-row class="tournamentCont">
              <v-col>
                <v-row>
                  <h1>Ranking</h1>
                </v-row>
                <v-row>
                  <p>
                    Explore our tennis dashboard, meticulously designed for avid
                    fans, offering real-time data, player statistics, and match
                    insights to enhance your tennis experience and keep you on
                    top of the rankings.
                  </p>
                </v-row>
              </v-col>
            </v-row>
          </router-link>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
<style>
.containerTournament {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 5%;
}

.tournamentCont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #1c1c1c;
  border-radius: 10px;
  padding: 5%;
  margin: 1%;
  height: 100%;
}

.tournamentCont:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}

SchedulePic {
  background-color: #f2f9fc;
}

p {
  text-align: justify;
  font-size: 20px;
  font-weight: 500;
  color: #1c1c1c;
}
</style>
