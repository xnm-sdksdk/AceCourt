<template>
  <div>
    <NavBar></NavBar>
    <main>
      <v-container
        class="container mx-auto flex justify-between items-center p-4"
      >
        <v-row>
          <v-col cols="12" md="6" class="align-self-center">
            <!-- Title -->
            <h1 class="text-5xl font-bold mb-4">
              Discover Australian Open Like Never Before
            </h1>

            <!-- Description -->
            <p class="text-lg mb-4">
              Welcome to Ace Court, your gateway to an immersive tennis
              experience. Get real-time updates, personalize your favorites,
              stay informed with updated news, and explore player rankings—all
              in one place. Elevate your love for tennis with us.
            </p>

            <!-- Start Button -->
            <RouterLink :to="{ name: 'signup' }">
              <button
                class="text-white px-4 py-2 rounded-full"
                style="letter-spacing: 0.15em"
              >
                Start
              </button>
            </RouterLink>
          </v-col>

          <!-- Image -->
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <img
              src="@/assets/HeroImage.svg"
              alt="Imagem"
              class="w-full h-auto small-image"
            />
          </v-col>
        </v-row>
      </v-container>

      <v-container class="mt-10" style="background-color: #efefef">
        <v-row class="fill-height" style="background-color: #efefef">
          <v-col cols="12" md="4" style="background-color: #efefef">
            <div class="feature-container">
              <!--Icon-->
              <img src="../assets/liveGames.svg" class="icon-image" />

              <!-- Title -->
              <h2 class="feature-title">Real-Time Updates</h2>

              <!-- Description -->
              <p class="feature-description">
                Get instant updates on match outcomes, scores, and key moments
                as they happen on the court.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="feature-container">
              <!--Icon-->
              <img
                src="../assets/performanceAnalyse.svg"
                class="icon-image"
                style="max-height: 75px"
              />

              <!-- Title -->
              <h2 class="feature-title">Performance Analysis</h2>

              <!-- Description -->
              <p class="feature-description">
                Stay informed with concise, powerful data visualizations that
                elevate your Australian Open experience.
              </p>
            </div>
          </v-col>

          <v-col cols="12" md="4">
            <div class="feature-container">
              <!--Icon-->
              <img
                src="../assets/followPlayers.svg"
                class="icon-image"
                style="max-height: 75px"
              />

              <!-- Title -->
              <h2 class="feature-title">Follow Your Players</h2>

              <!-- Description -->
              <p class="feature-description">
                Never lose sight of your favorite players. Utilize our tracking
                feature to follow specific athletes throughout the Australian
                Open.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container
        class="container mx-auto flex justify-between items-center p-4 mt-10"
      >
        <v-row>
          <v-col cols="12" md="6" class="align-self-center">
            <!-- Title -->
            <h1 class="text-5xl font-bold mb-4">
              Elevate your tennis experience.
            </h1>

            <!-- Description -->
            <p class="text-lg mb-4">
              Unlock the power of tennis with <b>Ace Court</b>. Real-time
              updates, comprehensive player stats, and the ability to favorite
              games and players redefine your tennis experience. For enthusiasts
              and strategists alike, our dashboard is the key to a richer, more
              personalized journey through the world of tennis. Dive in and
              elevate your game today.
            </p>
          </v-col>

          <!-- Image -->
          <v-col cols="12" md="6" class="d-flex align-center justify-center">
            <img
              src="@/assets/Elevate.svg"
              alt="Imagem"
              class="w-full h-auto small-image2"
            />
          </v-col>
        </v-row>
      </v-container>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style scoped>
h1 {
  font-size: 24pt;
  color: #0f3972;
  font-family: "Karla ExtraBold", sans-serif;
}

h2 {
  font-size: 16pt;
}

p {
  font-size: 12pt;
  font-family: "Karla ExtraLight", sans-serif;
}
.small-image {
  max-width: 100%;
  width: 50%;
  height: auto;
  max-height: 500px;
}

.small-image2 {
  max-width: 100%;
  width: 50%;
  height: auto;
  max-height: 500px;
  border-radius: 12px;
}

button {
  background-color: #a9dc3c;
  transition: background-color 0.5s ease-out;
}

button:hover {
  background-color: #008bcc;
  transition: background-color 0.5s ease-out;
}
.icon-image {
  width: 100px;
  height: 75px;
  color: #008bcc;
}
</style>
