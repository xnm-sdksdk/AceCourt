import { createRouter, createWebHistory } from "vue-router";
import DrawsView from "../views/DrawsView.vue";
import EditProfile from "../views/EditProfileView.vue";
import HomePageView from "../views/HomePageView.vue";
import LandingPageView from "../views/LandingPageView.vue";
import LogInView from "../views/LogInView.vue";
import MatchReportView from "../views/MatchReportView.vue";
import MyStatsView from "../views/MyStatsView.vue";
import NewsView from "../views/NewsView.vue";
import PlayersView from "../views/PlayersView.vue";
import ProfileView from "../views/ProfileView.vue";
import RankingView from "../views/RankingView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import ScoresView from "../views/ScoresView.vue";
import SignUpView from "../views/SignUpView.vue";
//import TrophiesView from "../views/TrophyView.vue";
import UpComingGamesView from "../views/UpComingGamesView.vue";
import PageNotFoundView from "../views/PageNotFoundView.vue";
// import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingpage",
      component: LandingPageView,
    },
    {
      path: "/login",
      name: "login",
      component: LogInView,
    },
    {
      path: "/:PageNotFound(.*)*",
      name: "pagenotfound",
      component: PageNotFoundView,
    },
  ],
});

// router.beforeEach((to, from) => {
//   // instead of having to check every route record with
//   // to.matched.some(record => record.meta.requiresAuth)
//   if (to.meta.requiresAuth && !useUserStore().isUser) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     return {
//       path: "/login",
//       // save the location we were at to come back later
//       query: { redirect: to.fullPath },
//     };
//   }
// });

export default router;
