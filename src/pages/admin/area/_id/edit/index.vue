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
    <area-upsert-view v-else :area="area"></area-upsert-view>
  </v-container>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
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