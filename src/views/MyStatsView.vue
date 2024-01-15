<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <v-main>
        <div class="container mx-auto flex justify-between items-center p-4">
          <v-row class="justify-center align-center">
            <v-col cols="12" md="9" class="ma-3 pa-3">
              <ProfileButtons></ProfileButtons>
            </v-col>
            <v-col cols="12" md="9" class="">
              <v-card
                class="rounded-lg bg-grey-lighten-5"
                elevation="3"
                height="300"
              >
                <v-row class="justify-center align-center">
                  <v-col cols="11">
                    <div class="font-bold">
                      <h1>My Stats</h1>
                    </div>
                    <p class="my-3">Hours per Day</p>
                  </v-col>
                </v-row>
              </v-card>
              <!-- Second Row -->
              <v-row class="justify-center align-center my-2">
                <v-col cols="6" class="">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <div class="flex flex-row">
                      <div class="ml-4 my-3">
                        <Streak></Streak>
                      </div>

                      <div class="my-1">
                        <v-card-text class="">Days in streak</v-card-text>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="6" class="">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <div class="flex flex-row">
                      <div class="ml-4 my-3">
                        <Hours></Hours>
                      </div>
                      <div class="my-1">
                        <v-card-text class="">Average Hours</v-card-text>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <!-- Third Row -->
              <v-row class="justify-center align-center my-1">
                <v-col cols="6" class="">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <div class="flex flex-row">
                      <div class="ml-4 my-3">
                        <RightGames></RightGames>
                      </div>
                      <div class="my-1">
                        <v-card-text class="">Right Games</v-card-text>
                        <v-card-text class="">{{ getFilteredVotes.length }} of {{ getVotes.length }}</v-card-text>
                      </div>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="6" class="">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <div class="flex flex-row">
                      <div class="ml-4 my-3">
                        <DoubleCheck></DoubleCheck>
                      </div>
                      <div class="my-1">
                        <v-card-text class="">Right Games Streak</v-card-text>
                        <v-card-text class="">Rdasdasdasd</v-card-text>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <!-- Fourth Row -->
              <v-row class="justify-center align-center">
                <v-col cols="12" class="">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <div class="flex flex-row">
                      <div class="ml-4 my-3">
                        <ProfileStar></ProfileStar>
                      </div>

                      <div class="my-1">
                        <v-card-text class="">Favorite Players</v-card-text>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
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
import Streak from "@/assets/Streak.svg";
import Hours from "@/assets/Hours.svg";
import DoubleCheck from "@/assets/DoubleCheck.svg";
import RightGames from "@/assets/RightGames.svg";
import ProfileStar from "@/assets/ProfileStar.svg";
import { useUserStore } from "../stores/user";
export default {
  components: {
    NavBar,
    ProfileButtons,
    Streak,
    Hours,
    DoubleCheck,
    RightGames,
    ProfileStar,
  },

  data() {
    return {
      userStore: useUserStore(),
    };
  },

  created () {
    console.log(this.getFilteredVotes);
  },

  computed: {
    getVotes() {
      return this.userStore.getUserVoteGames;
    },

    getFilteredVotes() {
      // Filtra os votos que têm state como true
      const filteredVotes =this.getVotes.filter(vote=>vote.state===true)

      return filteredVotes;
    },
  },
};
</script>

<style></style>
