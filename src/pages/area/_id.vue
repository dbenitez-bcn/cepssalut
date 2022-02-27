<template>
  <v-container class="pt-0">
    <v-img
      :src="require(`~/assets/areas/${area.image}`)"
      max-height="300"
    ></v-img>
    <title-and-subtitle
      :title="area.title"
      :subtitle="area.description"
    ></title-and-subtitle>
    <v-divider></v-divider>
    <email-box></email-box>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Area from "~/domain/Area";

export default Vue.extend({
  head() {
    return {
      title: (this as any).area.id,
    };
  },

  data() {
    return {
      area: this.$areas.getById(this.$route.params.id),
    };
  },
});
</script>

<style scoped>
</style>