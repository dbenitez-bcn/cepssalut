<template>
  <v-card class="" height="400">
    <v-img
      :src="require(`~/assets/areas/${area.image}`)"
      height="200px"
    ></v-img>

    <v-card-title>
      {{ area.title }}
    </v-card-title>

    <v-card-subtitle class="subtext">
      {{ area.description }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text> Explore </v-btn>
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
.subtext {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>