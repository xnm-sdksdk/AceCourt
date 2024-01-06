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
                <v-row class="ml-5 my-5">
                  <v-col cols="3" class="my-5 m-5">
                    <v-img
                      src="../assets/carlos.svg"
                      alt="Highlight-Player-Image"
                      width="180px"
                      height="180px"
                      cover
                      class="rounded-circle"
                    ></v-img>
                  </v-col>

                  <v-col cols="3" class="text-slate-700">
                    <v-card-subtitle class="m-1 text-body-2"
                      >Name</v-card-subtitle
                    >
                    <v-card-title class="my-2 text-body-1"
                      >Sara Johnson</v-card-title
                    >
                    <v-card-subtitle class="m-1 text-body-2"
                      >E-Mail</v-card-subtitle
                    >
                    <v-card-title class="my-2 text-body-1"
                      >Sarajohnson22@gmail.com</v-card-title
                    >
                    <v-card-subtitle class="m-1 text-body-2"
                      >Password</v-card-subtitle
                    >
                    <v-card-title class="my-2 text-body-1"
                      >Sab24yn35therwgtev</v-card-title
                    >
                  </v-col>
                  <v-col cols="5" class="m-1">
                    <div class="text-slate-700 text-left">
                      <v-card-subtitle class="text-slate-700"
                        >Bio</v-card-subtitle
                      >
                      <v-card-text class="ml-3 max-w-md"
                        >Greetings, fellow tennis enthusiasts! I'm Sara, your
                        go- to source for all things tennis-related. As I
                        celebrate my one-year journey in the vibrant world of
                        tennis, allow me to share a bit about my tennis-loving
                        self.</v-card-text
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <div class="flex flex-row m-3 p-3">
          <div
            class="flex flex-row bg-blue-lighten-5 rounded-xl pa-3 max-w-xs justify-center align-center"
          >
            <button class="px-6">Save</button>
          </div>
          <div
            class="flex flex-row bg-blue-lighten-5 rounded-xl pa-3 max-w-xs justify-center align-center"
          >
            <button>Logout</button>
          </div>
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
  data() {
    return {};
  },
};
</script>

<style></style>
