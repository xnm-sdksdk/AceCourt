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
      <v-container class="container mx-auto p-4">
        <!-- Title -->
        <h1 class="text-2xl font-bold mb-4">
          Interactive Experience & <br />Tennis Information
        </h1>

        <v-row>
          <v-col cols="12" md="6">
            <div
              class="inner-container rounded-md"
              style="background-color: #efefef"
            >
              <img
                src="@/assets/ranking.svg"
                alt="Imagem 1"
                class="inner-image"
              />
              <p class="inner-text">Player rankings</p>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div
              class="inner-container rounded-md"
              style="background-color: #efefef"
            >
              <img src="@/assets/vote.svg" alt="Imagem 2" class="inner-image" />
              <p class="inner-text">Vote the winner</p>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <div
              class="inner-container rounded-md"
              style="background-color: #efefef"
            >
              <img
                src="@/assets/schedule.svg"
                alt="Imagem 3"
                class="inner-image"
              />
              <p class="inner-text">Match schedule</p>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div
              class="inner-container rounded-md"
              style="background-color: #efefef"
            >
              <img
                src="@/assets/trophy.svg"
                alt="Imagem 4"
                class="inner-image"
              />
              <p class="inner-text">Win trophies</p>
            </div>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6">
            <div
              class="inner-container rounded-md"
              style="background-color: #efefef"
            >
              <img src="@/assets/news.svg" alt="Imagem 5" class="inner-image" />
              <p class="inner-text">Latest News</p>
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div
              class="inner-container rounded-md"
              style="background-color: #efefef"
            >
              <img
                src="@/assets/stats.svg"
                alt="Imagem 6"
                class="inner-image"
              />
              <p class="inner-text">See your stats</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="container mx-auto p-4 addColor">
        <v-carousel hide-delimiters>
          <v-carousel-item>
            <div class="sub-container">
              <div class="sub-header">
                <h3 class="sub-header-text">
                  "I've been a tennis fanatic for years, and <b>Ace Court</b> <br>has
                  completely changed the game for me. The real-<br>time updates and
                  in-depth player insights keep me <br>glued to the action. It's
                  like having a front-row seat <br>to every match!"
                </h3>
              </div>
              <div class="sub-content">
                <img src="@/assets/sara.svg" alt="Imagem 1" class="sub-image" />
                <div class="sub-texts">
                  <h2 class="sub-title">Sara Johnson</h2>
                  <p class="sub-paragraph">Tennis Enthusiastic</p>
                </div>
              </div>
            </div>
          </v-carousel-item>

          <v-carousel-item>
            <div class="sub-container">
              <div class="sub-header">
                <h3 class="sub-header-text">
                  "As a sports bettor, Ace Court is my ultimate <br>companion. Live
                  updates and detailed player stats <br> give me the edge for
                  strategic bets. The ability to <br> favorite games and players is a
                  game-changer,<br> making it effortless to track my key interests.
                  It's a brmust for serious sports betting."
                </h3>
              </div>
              <div class="sub-content">
                <img src="@/assets/eric.svg" alt="Imagem 2" class="sub-image" />
                <div class="sub-texts">
                  <h2 class="sub-title">Eric May</h2>
                  <p class="sub-paragraph">Sports Bettor</p>
                </div>
              </div>
            </div>
          </v-carousel-item>
          
        </v-carousel>
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

.inner-container {
  background-color: #efefef;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.inner-image {
  width: 50px;
  height: 30px;
  margin-right: 20px;
}

.inner-text {
  text-align: left;
  font-family: "Karla Medium", sans-serif;
  font-size: 16pt;
  color: #0f3972;
}

.rounded-md {
  border-radius: 12px;
}

.sub-container {
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  transition: opacity 0.3s; 
}

.sub-container:hover {
  opacity: 0.8;
}

.v-carousel-item-next .sub-container {
  opacity: 0.5;
}

.sub-header {
  width: 100%;
  text-align:left;
  color: #1C1C1C;
}

.sub-header-text {
  font-size: 16px;
  margin-bottom: 5px;
}

.sub-texts {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.sub-image {
  width: 50px;
  height: auto;
  margin-right: 20px;
}

.sub-content {
  flex-grow: 1;
  display: flex;
  flex-direction: row;
}

.sub-title {
  font-size: 18px;
  margin-bottom: 5px;
  color: #003852;
}

.sub-paragraph {
  font-size: 14px;
  color: #008BCC;
}

.addColor{
  color: #F2F9FC;
}
</style>
