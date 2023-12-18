<template>
  <button type="button" class="p-3 m-3 rounded-3xl bg-lime-400 text-white">
    {{ btnSeeMoreText }}
  </button>
</template>

<script>
export default {
  props: {
    text: { type: String },
  },
  computed: {
    btnSeeMoreText() {
      return this.text;
    },
  },
};
</script>
