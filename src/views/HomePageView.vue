<template>
  <v-app>
    <NavBar></NavBar>
    <v-container>
      <!-- Highlight Player Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row>
          <v-col>
            <v-card class="rounded-b-xl" elevation="3" height="300">
              <v-card-title class="m-3"> Highlight Player </v-card-title>
              <v-row>
                <v-col cols="6">
                  <v-avatar size="200">
                    <v-img
                      src="../assets/carlos.svg"
                      alt="Highlight-Player-Image"
                      width="100%"
                      height="100%"
                    >
                    </v-img>
                  </v-avatar>
                </v-col>

                <v-col>
                  <div class="text-blue-900 font-extrabold">
                    <v-card-subtitle class="m-1" justify="start"
                      >Carlos Alcaraz</v-card-subtitle
                    >
                  </div>

                  <v-card-text class="m-1" justify="start">
                    Spanish tennis sensation Carlos Alcaraz showcases formidable
                    skill and remarkable achievements.
                  </v-card-text>
                  <RouterLink :to="{ name: 'players' }">
                    <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
                  </RouterLink>
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <!-- Live Games Card -->
          <v-col>
            <div class="">
              <v-card class="rounded-b-xl" elevation="3" height="300">
                <v-card-title class="m-1"> Live Games </v-card-title>

                <v-card-subtitle class="m-4">Real-Time Data</v-card-subtitle>

                <v-card-text class="m-3 max-w-xs">
                  Experience the thrill of live games with our dynamic
                  dashboard, providing real-time data for an immersive gaming
                  experience
                </v-card-text>

                <div class="m-4 md:m-4 lg:m-4">
                  <RouterLink :to="{ name: 'scores' }">
                    <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
                  </RouterLink>
                </div>
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
            <v-card class="rounded-b-xl" elevation="3" height="300">
              <v-row>
                <v-card-title class="ml-4"> Top Matches </v-card-title>
                <v-divider></v-divider>
                <v-col cols="4">
                  <!-- Carlos -->
                  <v-avatar size="200">
                    <v-img
                      src="../assets/carlos.svg"
                      alt="Carlos-Alcaraz-Image"
                      width="200"
                      height="2050"
                    >
                    </v-img>
                  </v-avatar>
                  <!-- Jannik -->
                  <v-avatar size="200">
                    <v-img
                      src="../assets/jannik.svg"
                      alt="Jannik-Sinner-Image"
                      width="200"
                      height="200"
                    >
                    </v-img>
                  </v-avatar>
                </v-col>
                <v-col cols="8">
                  <v-card-subtitle class="ml-4"
                    >Jannik Sinner defeats Carlos Alcaraz in a perfect
                    Game</v-card-subtitle
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-col>

          <v-col>
            <!-- News Card -->
            <div class="">
              <v-card class="rounded-b-xl" elevation="3" height="300">
                <v-row>
                  <v-card-title class="ml-4"> News </v-card-title>
                  <v-divider></v-divider>
                  <!-- Player -->
                  <v-col cols="4">
                    <v-avatar size="200">
                      <v-img
                        src="../assets/player.svg"
                        alt="Player-Image"
                        width="100%"
                        height="100%"
                      >
                      </v-img>
                    </v-avatar>
                  </v-col>

                  <v-col cols="8">
                    <v-card-subtitle class="ml-4"
                      >Tennis - "We'll be back", say Australia's Davis Cup
                      nearly-men</v-card-subtitle
                    >
                    <RouterLink :to="{ name: 'news' }">
                      <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
                    </RouterLink>
                  </v-col>
                </v-row>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </div>
      <!-- Ranking Card -->
      <div class="container mx-auto flex justify-between items-center p-4">
        <v-row>
          <v-col>
            <v-card class="rounded-b-xl" elevation="3" height="300">
              <v-row>
                <v-card-title class="ml-4"> Ranking </v-card-title>
                <v-divider></v-divider>
                <v-col cols="4">
                  <!-- Player -->
                  <v-avatar size="200">
                    <v-img
                      src="../assets/nova.svg"
                      alt="Djokovic-Ranking-Image"
                      width="100%"
                      height="100%"
                    >
                    </v-img>
                  </v-avatar>
                </v-col>

                <v-col cols="8">
                  <v-card-subtitle class="ml-4"
                    >Tennis - "We'll be back", say Australia's Davis Cup
                    nearly-men</v-card-subtitle
                  >
                  <RouterLink :to="{ name: 'ranking' }">
                    <ButtonSeeMore :text="SeeMore"></ButtonSeeMore>
                  </RouterLink>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col>
            <!-- Head to Head Card -->
            <div class="">
              <v-card class="rounded-b-xl" elevation="3" height="300">
                <v-card-title class="ml-4"> Head to Head </v-card-title>
                <!-- De Minaur -->
                <v-avatar size="200">
                  <v-img
                    src="../assets/alex.svg"
                    alt="De-Minaur-Image"
                    width="100%"
                    height="100%"
                  >
                  </v-img>
                </v-avatar>
                <!-- Medvedev  -->
                <v-avatar size="200">
                  <v-img
                    src="../assets/medvedev.svg"
                    alt="Medvedev-Image"
                    width="100%"
                    height="100%"
                  >
                  </v-img>
                </v-avatar>
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
              max-width="1500"
              class="rounded-b-xl"
              elevation="3"
              height="300"
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
