<template>
  <NavBar></NavBar>
  <div class="">
    <h1>Trophies</h1>
  </div>
  <div class="">
    <ProfileButtons></ProfileButtons>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProfileButtons from "@/components/ProfileButtons.vue";
export default {
  components: {
    NavBar,
    ProfileButtons,
  },
  // setup() {},
};
</script>

<style></style>
