<template>
  <NavBar></NavBar>
    <v-container class="containerTournament">
        <v-row class="tournamentCont">
          <v-col>
            <v-row>
              <h1>Schedule</h1>
            </v-row>
            <v-row>
              <p>Explore the comprehensive schedule feature on our tennis dashboard, keeping you updated on match timings, player matchups, and tournament progress in real-time.</p>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="tournamentCont">
          <v-col>
            <v-row class="d-flex align-center">
              <v-col>
                <SchedulePic height="70" width="70"></SchedulePic>
              </v-col>
            </v-row>
            <v-row>
              <h1>Draws</h1>
            </v-row>
            <v-row>
              <p>Explore the comprehensive schedule feature on our tennis dashboard, keeping you updated on match timings, player matchups, and tournament progress in real-time.</p>
            </v-row>
          </v-col>
        </v-row>
        <v-row class="tournamentCont">
          <v-col>
            <v-row class="d-flex align-center">
              <v-col>
                <DrawsPic height="70" width="70"></DrawsPic>
              </v-col>
            </v-row>
            <v-row>
              <h1>Schedule</h1>
            </v-row>
            <v-row>
              <p>Explore the comprehensive schedule feature on our tennis dashboard, keeping you updated on match timings, player matchups, and tournament progress in real-time.</p>
            </v-row>
          </v-col>
        </v-row>
    </v-container>
</template>
<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar
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
  border: 2px solid #1C1C1C;
  border-radius: 10px;
  padding: 5%;
  margin: 1%;
}

.tournamentCont:hover {
  box-shadow: 0 0 11px rgba(33,33,33,.2);
}

SchedulePic {
  background-color: #F2F9FC;
}

p{
  text-align: justify;
  font-size: 20px;
  font-weight: 500;
  color: #1C1C1C;
};
</style>
