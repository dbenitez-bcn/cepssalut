<template>
  <v-card class="mx-auto">
    <v-img :src="require(`~/assets/areas/${area.image}`)" height="200px"></v-img>

    <v-card-title>
      {{ area.title }}
    </v-card-title>

    <v-card-subtitle>
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
  data: function () {
      return {
          immasad: 'areas/area-collectiu.jpg'
      }
  },
  props: {
    area: { type: Area, required: true },
  }
});
</script>

<style scoped>
</style>