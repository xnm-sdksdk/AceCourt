import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    usageTime: 0,
    loggedUser: null,
    isUserLogged: false,
    timeControl: null,
  }),
  getters: {
    getAllUsers: (state) => state.users,
    getLoggedUser: (state) => state.loggedUser,
    getUserTrophies: (state) => state.loggedUser.trophies,
    getCompletedTrophies: (state) =>
      state.loggedUser.trophies.filter((trophy) => trophy.isCompleted === true),
    getUserVoteGames: (state) =>
      state.loggedUser ? state.loggedUser.votes : [],
    getTime: (state) => state.usageTime,
    getUserPlayers: (state) => state.loggedUser.myPlayers,
  },
  actions: {
    login(email, password) {
      const findUser = this.users.find(
        (user) => user.email === email && user.password === password
      );
      if (findUser) {
        this.loggedUser = findUser;
        this.isUserLogged = true;
        this.timeTrack();
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
              image: "@/assets/report.svg",
              isCompleted: false,
            },
            {
              id: 16,
              title: "Win a Favorite Player",
              image: "@/assets/tennis.svg",
              isCompleted: false,
            },
          ],
          myPlayers: [],
          myGames: [],
          votes: [],
        });
      }
    },

    // Logout
    logout() {
      this.stopTimeTrack();
      this.loggedUser = null;
      this.isUserLogged = false;
    },
    // Add Games to My Games
    addMyGames(game) {
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );

      if (loggedUserIndex !== -1) {
        this.users[loggedUserIndex].myGames.push(game);
        this.loggedUser.myGames.push(game);
        console.log(this.loggedUser.myGames);
      }
    },

    // Remove Games from My Games
    removeMyGames(game) {
      const index = this.myGames.findIndex(
        (myGame) => myGame.event_key === game.event_key
      );
      if (index !== -1) {
        this.myGames.splice(index, 1);
      }
    },

    // Update User Profile
    updateUserProfile(newUser) {
      const index = this.users.findIndex((user) => user.id === newUser.id);

      if (index !== -1) {
        this.users[index] = newUser;

        if (newUser.id === this.loggedUser.id) {
          this.loggedUser = newUser;

          const findBioTrophy = this.loggedUser.trophies.find(
            (trophy) => trophy.id === 1
          );

          if (newUser.bio != "" && !findBioTrophy.isCompleted) {
            findBioTrophy.isCompleted = true;
            console.log(newUser.trophies);
          }
        }
      }
    },

    //Add Vote
    addVote(player, gameKey) {
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );

      if (loggedUserIndex !== -1) {
        const newVote = {
          player: player,
          gameKey: gameKey,
          state: false,
        };

        this.loggedUser.votes.push(newVote);
        this.users[loggedUserIndex] = this.loggedUser;

        const findVoteTrophy = this.loggedUser.trophies.find(
          (trophy) => trophy.id === 8
        );

        if ((this.loggedUser.votes.length = 1 && !findVoteTrophy.isCompleted)) {
          findVoteTrophy.isCompleted = true;
          console.log(newUser.trophies);
        }
      }
    },

    //Add Favorite Player
    addFavorite(playerKey, playerName) {
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );

      if (loggedUserIndex !== -1) {
        const newFav = {
          playerKey: playerKey,
          playerName: playerName,
        };

        this.loggedUser.myPlayers.push(newFav);
        this.users[loggedUserIndex] = this.loggedUser;

        const findFavTrophy = this.loggedUser.trophies.find(
          (trophy) => trophy.id === 16
        );

        if (
          this.loggedUser.myPlayers.length == 1 &&
          !findFavTrophy.isCompleted
        ) {
          findFavTrophy.isCompleted = true;
          console.log(this.loggedUser.trophies);
        }
      }
    },

    //Remove Favorite Player
    remFavorite(playerKey) {
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );

      if (loggedUserIndex !== -1) {
        this.loggedUser.myPlayers = this.loggedUser.myPlayers.filter(
          (player) => player.playerKey != playerKey
        );
        this.users[loggedUserIndex].myPlayers = this.loggedUser.myPlayers;
      }
    },

    // Add MyStats Trophy
    addStatsBadge() {
      //Find in users array
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );

      if (loggedUserIndex !== -1) {
        //Find in loggedUser
        const findMyStatsTrophy = this.loggedUser.trophies.find(
          (trophy) => trophy.id === 14
        );

        //If not completed, complete it
        if (!findMyStatsTrophy.isCompleted) {
          findMyStatsTrophy.isCompleted = true;
          this.users[loggedUserIndex].trophies = this.loggedUser.trophies;
          console.log(this.loggedUser.trophies);
        }
      }
    },

    addCheckVoteBadge(user) {
      //Find in users array
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );

      if (loggedUserIndex !== -1) {
        //Find in loggedUser
        const findCheckVoteTrophy = this.loggedUser.trophies.find(
          (trophy) => trophy.id === 8
        );

        //If not completed, complete it
        if (!findCheckVoteTrophy.isCompleted) {
          findCheckVoteTrophy.isCompleted = true;
          this.users[loggedUserIndex].trophies = this.loggedUser.trophies;
          console.log(this.loggedUser.trophies);
        }
      }
    },

    addCheckGameBadge() {
      //Find in users array
      const loggedUserIndex = this.users.findIndex(
        (user) => user.id === this.loggedUser.id
      );

      if (loggedUserIndex !== -1) {
        //Find in loggedUser
        const findCheckGameTrophy = this.loggedUser.trophies.find(
          (trophy) => trophy.id === 7
        );

        //If not completed, complete it
        if (!findCheckGameTrophy.isCompleted) {
          findCheckGameTrophy.isCompleted = true;
          this.users[loggedUserIndex].trophies = this.loggedUser.trophies;
          console.log(this.loggedUser.trophies);
        }
      }
    },

    // Keep track of usage of the user in the application
    timeTrack() {
      console.log("timeTrack action started");
      this.timeControl = setInterval(() => {
        console.log("Running");
        this.usageTime += 1;
      }, 1000);
    },
    // Stop tracking the usage of the user
    stopTimeTrack() {
      clearInterval(this.timeControl);
      this.timeControl = null;
    },
  },
  persist: true,
});
