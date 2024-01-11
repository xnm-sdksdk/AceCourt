import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users:[],
    loggedUser:null,
    isUserLogged:false
  }),
  getters: {
    getAllUsers:(state)=>state.users,
    getLoggedUser:(state)=>state.loggedUser
  },
  actions: {
    login(email,password){
      const findUser=this.users.find(user=>user.email==email && user.password==password)
      if(findUser){
        this.loggedUser=findUser
        this.isUserLogged=true
      }else{
        alert("User don't found!")
      }
    },

    register(name, email, password, typeUser) {
      const findUser = this.users.find((user) => user.email === email);
    
      if (findUser) {
        alert("Already have an account with this email!");
      } else {
        const newUserId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    
        this.users.push({
          id: newUserId,
          name: name,
          email: email,
          password: password,
          typeUser: typeUser,
          bio:"",
          image:"../assets/profilepic.svg",
          trophies:[
            {
              id:1,
              title:"Create a bio",
              image:"@/assets/personal-data-two-color-9c5ea.svg",
              isCompleted:false
            },
            {
              id:1,
              title:"Create a bio",
              image:"@/assets/personal-data-two-color-9c5ea.svg",
              isCompleted:false
            },
          ],
          myPlayers:[],
          myGames:[],
          votes:[],
        });
    
        console.log(this.users);
      }
    },

    logout(){
      this.loggedUser=null
      this.isUserLogged=false
    },

    addMyGames(game) {
      const loggedUserIndex = this.users.findIndex(user => user.id === this.loggedUser.id);
    
      if (loggedUserIndex !== -1) {
        this.users[loggedUserIndex].myGames.push(game);
    
        console.log("Game added to user's collection:", this.users[loggedUserIndex]);
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
  },
  persist: true,
});