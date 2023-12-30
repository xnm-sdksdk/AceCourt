<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <v-main>
        <div class="font-bold">
          <h1>My Profile</h1>
        </div>
        <div class="ma-3 pa-3">
          <ProfileButtons></ProfileButtons>
        </div>
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-row class="justify-center align-center">
            <v-col cols="11" class="">
              <v-card class="rounded-lg bg-grey-lighten-5" elevation="3">
                <!-- First Row -->
                <v-row class="ml-5 my-5">
                  <v-col cols="2" class="">
                    <!-- Hit 5 Games in a row -->
                    <Prize></Prize>
                  </v-col>
                  <v-col cols="3">
                    <!-- Hit 10 games in a row -->
                    <SuperMan></SuperMan>
                  </v-col>
                  <v-col cols="3">
                    <!-- Create a Bio -->
                    <PersonalData></PersonalData>
                  </v-col>
                  <v-col cols="3">
                    <!-- Change you Avatar -->
                    <TransferWise></TransferWise>
                  </v-col>
                </v-row>
                <!-- Second Row -->
                <v-row>
                  <v-col cols="3" class="">
                    <!-- Hit a Game prediction -->
                    <Target></Target>
                  </v-col>
                  <v-col cols="3" class="">
                    <!-- Check the Statistics on a game -->
                    <Analysis></Analysis>
                  </v-col>
                  <v-col cols="3" class="">
                    <!-- Check a game -->
                    <CheckGame></CheckGame>
                  </v-col>
                  <v-col cols="3" class="">
                    <!-- Vote on a game -->
                    <Vote></Vote>
                  </v-col>
                </v-row>
                <!-- Third Row -->
                <v-row>
                  <v-col cols="3" class="">
                    <!-- Check the Schedules page -->
                    <Schedule></Schedule>
                  </v-col>
                  <v-col cols="3" class="">
                    <!-- Get all trophies -->
                    <Trophies></Trophies>
                  </v-col>
                  <v-col cols="3" class="">
                    <!-- Get 10 trophies -->
                    <Winner></Winner>
                  </v-col>
                  <v-col cols="3" class="">
                    <!-- Get 5 trophies -->
                    <Step></Step>
                  </v-col>
                </v-row>
                <!-- Fourth Row -->
                <v-row>
                  <v-col cols="3" class="">
                    <!-- Check all the app pages -->
                    <Checklist></Checklist>
                  </v-col>
                  <v-col cols="3" class="">
                    <!-- Get all trophies -->
                    <Knowledge></Knowledge>
                  </v-col>
                  <v-col cols="3" class="">
                    <!-- Check the Match Report -->
                    <Report></Report>
                  </v-col>
                  <v-col cols="3" class="">
                    <!-- Win a Favorite Player -->
                    <Tennis></Tennis>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProfileButtons from "@/components/ProfileButtons.vue";
import Prize from "@/assets/prize.svg";
import SuperMan from "@/assets/superman.svg";
import PersonalData from "@/assets/personal-data-two-color-9c5ea.svg";
import TransferWise from "@/assets/transferwise.svg";
import Target from "@/assets/target.svg";
import Analysis from "@/assets/analysis.svg";
import CheckGame from "@/assets/oceania.svg";
import Vote from "@/assets/voting.svg";
import Schedule from "@/assets/calendar.svg";
import Trophies from "@/assets/career.svg";
import Winner from "@/assets/winner.svg";
import Step from "@/assets/step.svg";
import Checklist from "@/assets/checklist.svg";
import Knowledge from "@/assets/knowledge.svg";
import Report from "@/assets/report.svg";
import Tennis from "@/assets/tennis.svg";
export default {
  components: {
    NavBar,
    ProfileButtons,
    Prize,
    SuperMan,
    PersonalData,
    TransferWise,
    Target,
    Analysis,
    CheckGame,
    Vote,
    Schedule,
    Trophies,
    Winner,
    Step,
    Checklist,
    Knowledge,
    Report,
    Tennis,
  },
  // setup() {},
};
</script>

<style></style>
