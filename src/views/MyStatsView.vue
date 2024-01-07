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
              <v-card
                class="rounded-lg bg-grey-lighten-5"
                elevation="3"
                height="300"
              >
                <v-row class="justify-center align-center">
                  <v-col cols="11">
                    <p class="my-3">Graph Hours per Day</p>
                  </v-col>
                </v-row>
              </v-card>
              <!-- Second Row -->
              <v-row class="justify-center align-center">
                <v-col cols="6" class="my-4">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <Fire></Fire>

                    <v-card-text class="my-3 ml-3">Days in streak</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6" class="my-4">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <v-card-text class="my-3 ml-3">Average Hours</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <!-- Third Row -->
              <v-row class="justify-center align-center">
                <v-col cols="6" class="my-4">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <v-card-text class="my-3 ml-3">Right Games</v-card-text>
                  </v-card>
                </v-col>
                <v-col cols="6" class="my-4">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <v-card-text class="my-3 ml-3">Right Games Streak</v-card-text>
                  </v-card>
                </v-col>
              </v-row>
              <!-- Fourth Row -->
              <v-row class="justify-center align-center">
                <v-col cols="12" class="my-4">
                  <v-card
                    class="rounded-lg bg-grey-lighten-5"
                    elevation="3"
                    height="100"
                  >
                    <v-card-text class="my-3 ml-3">Favorite Players</v-card-text>
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
import Fire from "@/assets/fire.svg";
export default {
  components: {
    NavBar,
    ProfileButtons,
    Fire,
  },
  // setup() {},
};
</script>

<style></style>
