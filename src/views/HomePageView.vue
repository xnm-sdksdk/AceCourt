<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <!-- <v-row>
        <v-col cols="2">
          <v-sheet>
          </v-sheet>
        </v-col>
      </v-row> -->

      <!-- Highlight Player Card -->
      <!-- class="d-flex align-center flex-column" -->
      <div class="">
        <v-card max-width="400" height="400" class="mx-auto my-8" elevation="3">
          <v-img src="" alt="Highlight-Player-Image" width="150" height="150">
          </v-img>
          <v-card-title class="ml-4"> Highlight Player </v-card-title>
          <v-card-subtitle class="ml-4">Carlos Alcaraz</v-card-subtitle>

          <v-card-text class="ml-4">
            Spanish tennis sensation Carlos Alcaraz showcases formidable skill
            and remarkable achievements.
          </v-card-text>
          <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
        </v-card>
      </div>

      <!-- Live Games Card -->

      <div class="">
        <v-card max-width="400" height="400" class="mx-auto my-8" elevation="3">
          <v-card-title class="ml-4"> Live Games </v-card-title>
          <v-card-subtitle class="ml-4">Real-Time Data</v-card-subtitle>

          <v-card-text class="ml-4">
            Experience the thrill of live games with our dynamic dashboard,
            providing real-time data for an immersive gaming experience
          </v-card-text>
          <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
        </v-card>
      </div>
      <!-- Highlight Game Bar -->

      <!-- Top Matches Card -->
      <div class="">
        <v-card max-width="400" height="300" class="mx-auto my-8" elevation="3">
          <!-- Carlos -->
          <!-- <v-img src="" alt="Carlos-Alcaraz-Image" width="150" height="150">
          </v-img> -->
          <!-- Jannik -->
          <!-- <v-img src="" alt="Jannik-Sinner-Image" width="150" height="150">
          </v-img> -->
          <v-card-title class="ml-4"> Top Matches </v-card-title>
          <v-card-subtitle class="ml-4"
            >Jannik Sinner defeats Carlos Alcaraz in a perfect
            Game</v-card-subtitle
          >
        </v-card>
      </div>
      <!-- News Card -->
      <div class="">
        <v-card max-width="400" height="300" class="mx-auto my-8" elevation="3">
          <!-- Player -->
          <!-- <v-img src="" alt="Player-Image" width="150" height="150">
          </v-img> -->
          <v-card-title class="ml-4"> News </v-card-title>
          <v-card-subtitle class="ml-4"
            >Tennis - "We'll be back", say Australia's Davis Cup
            nearly-men</v-card-subtitle
          >
          <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
        </v-card>
      </div>
      <!-- Ranking Card -->

      <!-- Head to Head Card -->

      <!-- Tournament Progress Stats Card -->

      <!-- Footer -->
      <Footer></Footer>
    </v-container>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";
import ButtonSeeMore from "@/components/ButtonSeeMore.vue";
export default {
  components: {
    NavBar,
    ButtonSeeMore,
    Footer,
  },
  data() {
    return {
      SeeMore: "See More",
    };
  },
  // setup() {},
};
</script>

<style></style>
