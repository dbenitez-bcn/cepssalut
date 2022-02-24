<template>
  <v-card class="fill-height">
    <v-img
      :src="require(`~/assets/areas/${area.image}`)"
      height="200px"
    ></v-img>
    <div class="one-line title px-4 pt-4" v-text="area.title"></div>

    <div
      class="body-1 subtext text-justify px-4 pt-4"
      v-text="area.description"
    ></div>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="secondary" text>Veure mes</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import Area from "~/domain/Area";

export default Vue.extend({
  props: {
    area: { type: Area, required: true },
  },
});
</script>

<style scoped>
.one-line {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.subtext {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>