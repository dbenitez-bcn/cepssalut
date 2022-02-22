<template>
  <v-container class="d-flex flex-wrap">
    <v-col sm="6" v-for="area in areas" :key="area.id">
      <area-card :area="area"></area-card>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      areas: this.$areas.getAll(),
    };
  },
});
</script>

<style scoped>
</style>