import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users:[],
    loggedUser:null
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
      }else{
        alert("User don't found!")
      }
    },

    register(name,email,password,typeUser){
      const findUser=this.users.find(user=>user.email==email)
      if(findUser){
        alert("Already have an account with this email!")
      }else{
        this.users.push({id:this.users[this.users.length - 1].id + 1, name:name , email: email , password: password , typeUser:typeUser})
        console.log(this.users);
      }
    },

    logout(){
      this.loggedUser=null
    }
  },
  persist: true,
});