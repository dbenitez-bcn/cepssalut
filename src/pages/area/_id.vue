<template>
  <v-container class="pt-0">
    <div class="text-center" v-if="$fetchState.pending">
      <v-progress-circular
        indeterminate
        size="50"
        color="primary"
        class="ma-2"
      ></v-progress-circular>
    </div>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <v-img
      :src="area.image"
        max-height="300"
      ></v-img>
      <title-and-subtitle
        :title="area.title"
        :subtitle="area.description"
      ></title-and-subtitle>
    </div>
    <v-divider></v-divider>
    <email-box></email-box>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  head() {
    return {
      title: this.area ? this.area.id : "",
    };
  },
  data() {
    return {
      area: null,
    };
  },
  async fetch() {
    this.area = await this.$areas.getById(this.$route.params.id);
  },
});
</script>

<style scoped>
</style>