import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    loggedUser: null,
    isUserLogged: false,
  }),
  getters: {
    getAllUsers: (state) => state.users,
    getLoggedUser: (state) => state.loggedUser,
    getUserTrophies: (state) => state.loggedUser.trophies,
    getCompletedTrophies: (state) =>
      state.loggedUser.trophies.filter((trophy) => (trophy.isCompleted = true)),
    getUserVoteGames: (state) => state.loggedUser.votes,
  },
  actions: {
    login(email, password) {
      const findUser = this.users.find(
        (user) => user.email === email && user.password === password
      );
      if (findUser) {
        this.loggedUser = findUser;
        this.isUserLogged = true;
      } else {
        throw new Error("User not found!");
      }
    },

    register(name, email, password, typeUser) {
      const findUser = this.users.find((user) => user.email === email);

      if (findUser) {
        alert("Already have an account with this email!");
      } else {
        const newUserId =
          this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;

        this.users.push({
          id: newUserId,
          name: name,
          email: email,
          password: password,
          typeUser: typeUser,
          bio: "",
          image: "../assets/profilepic.svg",
          trophies: [
            {
              id: 1,
              title: "Create a bio",
              image: "../assets/personal-data-two-color-9c5ea.svg",
              isCompleted: false,
            },
            {
              id: 2,
              title: "Hit 5 games in a row",
              image: "../assets/prize.svg",
              isCompleted: false,
            },
            {
              id: 3,
              title: "Hit 10 games in a row",
              image: "../assets/superman.svg",
              isCompleted: false,
            },
            {
              id: 4,
              title: "Change your avatar",
              image: "../assets/transferwise.svg",
              isCompleted: false,
            },
            {
              id: 5,
              title: "Hit a game prediction",
              image: "../assets/target.svg",
              isCompleted: false,
            },
            {
              id: 6,
              title: "Check the Statistics on a game",
              image: "../assets/analysis.svg",
              isCompleted: false,
            },
            {
              id: 7,
              title: "Check a game",
              image: "../assets/oceania.svg",
              isCompleted: false,
            },
            {
              id: 8,
              title: "Vote on a game",
              image: "../assets/voting.svg",
              isCompleted: false,
            },
            {
              id: 9,
              title: "Check the Schedules page",
              image: "../assets/calendar.svg",
              isCompleted: false,
            },
            {
              id: 10,
              title: "Get all trophies",
              image: "../assets/career.svg",
              isCompleted: false,
            },
            {
              id: 11,
              title: "Get 10 trophies",
              image: "../assets/winner.svg",
              isCompleted: false,
            },
            {
              id: 12,
              title: "Get 5 trophies",
              image: "../assets/step.svg",
              isCompleted: false,
            },
            {
              id: 13,
              title: "Check all the app pages",
              image: "../assets/checklist.svg",
              isCompleted: false,
            },
            {
              id: 14,
              title: "Check the My Stats page",
              image: "../assets/knowledge.svg",
              isCompleted: false,
            },
            {
              id: 15,
              title: "Check the Match Report Page",
              image: "../assets/report.svg",
              isCompleted: false,
            },
            {
              id: 16,
              title: "Win a Favorite Player",
              image: "../assets/tennis.svg",
              isCompleted: false,
            },
          ],
          myPlayers: [],
          myGames: [],
          votes: [],
        });
      }
    },

    logout() {
      this.loggedUser = null;
      this.isUserLogged = false;
      this.$reset();
    },

    addMyGames(game) {
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );

      if (loggedUserIndex !== -1) {
        this.users[loggedUserIndex].myGames.push(game);

        console.log(
          "Game added to user's collection:",
          this.users[loggedUserIndex]
        );
      }
    },
    // ! Needs review
    removeMyGames(game) {
      const index = this.myGames.findIndex(
        (myGame) => myGame.event_key === game.event_key
      );
      if (index !== -1) {
        this.myGames.splice(index, 1);
      }
    },

    updateUserProfile(newUser) {
      const index = this.users.findIndex((user) => user.id === newUser.id);

      if (index !== -1) {
        this.users[index] = newUser;

        if (newUser.id === this.loggedUser.id) {
          this.loggedUser = newUser;

          const findBioTrophy = this.loggedUser.trophies.find(
            (trophy) => trophy.title === "Create a bio"
          );

          if (newUser.bio != "" && !findBioTrophy.isCompleted) {
            findBioTrophy.isCompleted = true;
            console.log(newUser.trophies);
          }
        }
      }
    },

    addVote(player, gameKey) {
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );
      console.log(loggedUserIndex);

      if (loggedUserIndex !== -1) {
        const newVote = {
          player: player,
          gameKey: gameKey,
          state: false,
        };

        this.loggedUser.votes.push(newVote);
        this.users[loggedUserIndex]=this.loggedUser
        console.log(this.loggedUser.votes);
      }
    },

    addFavorite(playerKey, playerName) {
      console.log("TESTE")
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );
      console.log(loggedUserIndex);

      if (loggedUserIndex !== -1) {
        const newFav = {
          playerKey: playerKey,
          playerName: playerName
        };

        this.loggedUser.myPlayers.push(newFav);
        this.users[loggedUserIndex]=this.loggedUser
      }
    },

    remFavorite(playerKey) {
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );

      if (loggedUserIndex !== -1) {
        this.loggedUser.myPlayers=this.loggedUser.myPlayers.filter(player=>player.playerKey != playerKey);
        this.users[loggedUserIndex].myPlayers=this.loggedUser.myPlayers
      }
    },
  },
  persist: true,
});
