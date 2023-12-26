import { createRouter, createWebHistory } from "vue-router";
import LandingPageView from "@/views/LandingPageView.vue";
import SignUpView from "@/views/SignUpView.vue";
import LogInView from "@/views/LogInView.vue";
import HomePageView from "../views/HomePageView.vue";
import ScoresView from "@/views/ScoresView.vue";
import GameView from "@/views/GameView.vue"
import RankingView from "@/views/RankingView.vue";
import PlayersView from "@/views/PlayersView.vue";
import DrawsView from "@/views/DrawsView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import NewsView from "@/views/NewsView.vue";
import MatchReportView from "@/views/MatchReportView.vue";
import UpcomingGamesView from "@/views/UpcomingGamesView.vue";
import ProfileView from "@/views/ProfileView.vue";
import MyStatsView from "@/views/MyStatsView.vue";
import EditProfile from "@/views/EditProfileView.vue";
import TrophiesView from "@/views/TrophiesView.vue";
import AboutUsView from "@/views/AboutUsView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingpage",
      component: LandingPageView,
      meta: {
        title: "Ace Court",
      },
    },
    {
      path: "/home",
      name: "home",
      component: HomePageView,
      meta: {
        title: "HomePage",
      },
    },
    {
      path: "/login",
      name: "login",
      component: LogInView,
      meta: {
        title: "Login",
      },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignUpView,
      meta: {
        title: "Sign Up",
      },
    },
    {
      path: "/scores",
      name: "scores",
      component: ScoresView,
      meta: {
        title: "Scores",
      },
    },
    {
      path: "/game",
      name: "game",
      component: GameView,
      meta: {
        title: "Game",
      },
    },
    {
      path: "/draws",
      name: "draw",
      component: DrawsView,
      meta: {
        title: "Draws",
      },
    },
    {
      path: "/ranking",
      name: "ranking",
      component: RankingView,
      meta: {
        title: "Ranking",
      },
    },
    {
      path: "/players/:id",
      name: "players",
      component: PlayersView,
      meta: {
        title: "Players",
      },
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
      meta: {
        title: "Schedule",
      },
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      meta: {
        title: "News",
      },
    },
    {
      path: "/matchreport",
      name: "matchreport",
      component: MatchReportView,
      meta: {
        title: "Match Report",
      },
    },
    {
      path: "/upcominggames",
      name: "upcominggames",
      component: UpcomingGamesView,
      meta: {
        title: "Upcoming Games",
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
      meta: {
        title: "Profile",
      },
    },
    {
      path: "/mystats",
      name: "mystats",
      component: MyStatsView,
      meta: {
        title: "My Stats",
      },
    },
    {
      path: "/edit",
      name: "edit",
      component: EditProfile,
      meta: {
        title: "Edit Profile",
      },
    },
    {
      path: "/trophies",
      name: "trophies",
      component: TrophiesView,
      meta: {
        title: "Trophies",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutUsView,
      meta: {
        title: "About Us",
      },
    },
    {
      path: "/:PageNotFound(.*)*",
      name: "pagenotfound",
      component: PageNotFoundView,
      meta: {
        title: "PageNotFound",
      },
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

// router.beforeEach((to, from, next) => {
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   next();
// });

export default router;
