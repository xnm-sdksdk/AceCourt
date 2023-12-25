<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <v-main>
        <div class="">
          <h1>My Profile</h1>
        </div>
        <div class="ma-3 pa-3">
          <ProfileButtons></ProfileButtons>
        </div>
        <div class="">
          <v-row class="bg-yellow">
            <v-col class="bg-black">
              <v-card
                class="rounded-xl bg-grey-lighten-5"
                elevation="3"
                height="300"
              >
                <v-row class="bg-green">
                  <v-col cols="3" class="bg-red">
                    <v-img
                      src="../assets/carlos.svg"
                      alt="Highlight-Player-Image"
                      width="20%"
                    ></v-img>
                  </v-col>
                  <v-col class="bg-blue">
                    <v-card-subtitle>Name</v-card-subtitle>
                    <v-card-title>Sara Johnson</v-card-title>
                    <v-card-subtitle>E-Mail</v-card-subtitle>
                    <v-card-title>Sarajohnson22@gmail.com</v-card-title>
                    <v-card-subtitle>Password</v-card-subtitle>
                    <v-card-title>Sab24yn35therwgtev</v-card-title>
                  </v-col>
                  <v-col class="bg-purple">
                    <v-card-subtitle>Bio</v-card-subtitle>
                    <v-text
                      >Greetings, fellow tennis enthusiasts! I'm Sara, your go-
                      to source for all things tennis-related. As I celebrate my
                      one-year journey in the vibrant world of tennis, allow me
                      to share a bit about my tennis-loving self.</v-text
                    >
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div class="m-6 p-6">
          <button class="px-6">Save</button>
          <button>Logout</button>
        </div>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProfileButtons from "@/components/ProfileButtons.vue";
export default {
  components: {
    NavBar,
    ProfileButtons,
  },
  // setup() {},
};
</script>

<style></style>
