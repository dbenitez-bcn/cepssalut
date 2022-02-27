<template>
  <v-container class="d-flex flex-column justify-center">
    <v-row>
      <v-col>
        <div class="title text-center" v-text="title" center></div>
      </v-col>
    </v-row>
    <v-row justify="center" >
      <v-col sm="8">
        <div class="body-1 text-justify" v-text="subtitle"></div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
  },
});
</script>

<style scoped>
</style>