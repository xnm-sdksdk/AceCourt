<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <!-- Highlight Player Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row>
          <v-col>
            <v-card class="rounded-b-xl" elevation="3">
              <!-- <v-img
                src=""
                alt="Highlight-Player-Image"
                width="150"
                height="150"
              >
              </v-img> -->
              <v-card-title class="ml-4"> Highlight Player </v-card-title>
              <v-card-subtitle class="ml-4">Carlos Alcaraz</v-card-subtitle>

              <v-card-text class="ml-4">
                Spanish tennis sensation Carlos Alcaraz showcases formidable
                skill and remarkable achievements.
              </v-card-text>
              <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
            </v-card>
          </v-col>

          <!-- Live Games Card -->
          <v-col>
            <div class="">
              <v-card class="rounded-b-xl" elevation="3">
                <v-card-title class="ml-4"> Live Games </v-card-title>
                <v-card-subtitle class="ml-4">Real-Time Data</v-card-subtitle>

                <v-card-text class="ml-4">
                  Experience the thrill of live games with our dynamic
                  dashboard, providing real-time data for an immersive gaming
                  experience
                </v-card-text>
                <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
      <!-- Highlight Game Bar -->

      <!-- Top Matches Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row>
          <v-col>
            <v-card class="rounded-b-xl" elevation="3">
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
          </v-col>

          <v-col>
            <!-- News Card -->
            <div class="">
              <v-card class="rounded-b-xl" elevation="3">
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
          </v-col>
        </v-row>
      </div>
      <!-- Ranking Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row>
          <v-col>
            <v-card class="rounded-b-xl" elevation="3">
              <!-- Player -->
              <!-- <v-img src="" alt="Djokovic-Ranking-Image" width="150" height="150">
          </v-img> -->
              <v-card-title class="ml-4"> Ranking </v-card-title>
              <v-card-subtitle class="ml-4"
                >Tennis - "We'll be back", say Australia's Davis Cup
                nearly-men</v-card-subtitle
              >
              <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
            </v-card>
          </v-col>
          <v-col>
            <!-- Head to Head Card -->
            <div class="">
              <v-card class="rounded-b-xl" elevation="3">
                <!-- De Minaur -->
                <!-- <v-img src="" alt="De-Minaur-Image" width="150" height="150">
          </v-img> -->
                <!-- Medvedev -->
                <!-- <v-img src="" alt="Medvedev-Image" width="150" height="150">
          </v-img> -->
                <v-card-title class="ml-4"> Head to Head </v-card-title>
                <v-card-subtitle class="ml-4"
                  >Medvedev gets revenge on De Minaur and return to US Open
                  quarter-finals</v-card-subtitle
                >
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
      <!-- Tournament Progress Stats Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row>
          <v-col>
            <v-card
              max-width="1400"
              height="300"
              class="rounded-b-xl"
              elevation="3"
            >
              <v-card-title class="ml-4"> Tournament Progress </v-card-title>
              <!-- Graph 1 -->
              <!-- Graph 2 -->
              <!-- Graph 3 -->
              <v-card-subtitle class="ml-4"
                >Percentage of Completion</v-card-subtitle
              >
              <v-card-subtitle class="ml-4"
                >Average First Server Won %</v-card-subtitle
              >
              <v-card-subtitle class="ml-4">Second Serve % Won</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <!-- Footer -->
    </v-container>
    <Footer></Footer>
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
