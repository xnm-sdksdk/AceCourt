<template>
  <button
    class="px-4 py-2 rounded-full"
    @click="goBack"
  >
    <img src="@/assets/back.svg" alt="" />
    Back
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style>
button{
  background-color: white;
  border-color:#0F3972;
  color:#0F3972;
  width: 100px;
  display: flex;
  flex-direction: row;
  border: 2px;
}
</style>
