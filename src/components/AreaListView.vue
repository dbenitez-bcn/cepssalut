<template>
  <div>
    <div class="text-center" v-if="$fetchState.pending">
      <v-progress-circular
        indeterminate
        size="50"
        color="primary"
        class="ma-2"
      ></v-progress-circular>
    </div>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <v-container v-else class="d-flex flex-wrap px-0">
      <v-col sm="6" v-for="area in areas" :key="area.id">
        <area-card :area="area"></area-card>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      areas: [],
    };
  },
  async fetch() {
    this.areas = await this.$areas.getAll();
  },
});
</script>

<style scoped>
</style>