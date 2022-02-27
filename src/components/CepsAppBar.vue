<template>
  <v-app-bar
    app
    color="primary"
    class="d-flex justify-center justify-sm-start"
    elevation="0"
  >
    <div
      class="title text-center clickable"
      v-text="title"
      @click="toHome"
    ></div>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      title: "Ceps Salut",
    };
  },
  methods: {
    toHome() {
      this.$router.push("/");
    },
  },
});
</script>

<style scoped>
.clickable:hover {
  cursor: pointer;
}
</style>