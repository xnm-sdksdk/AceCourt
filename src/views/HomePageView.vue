<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="2">
          <v-sheet>
            <NavBar></NavBar>
          </v-sheet>
        </v-col>
      </v-row>

      <!-- Highlight Player Card -->
      <!-- class="d-flex align-center flex-column" -->
      <div>
        <v-card
          max-width="400"
          height="400"
          class="mx-auto my-8"
          elevation="16"
        >
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

      <!-- Highlight Game Bar -->

      <!-- Top Matches Card -->

      <!-- News Card -->

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
