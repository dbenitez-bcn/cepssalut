<template>
  <v-footer app :absolute="true" color="black" class="white--text">
    <v-container fluid>
      <v-row>
        <v-col> {{ email }}</v-col>
      </v-row>
      <v-row>
        <v-col> {{ phone }}</v-col>
      </v-row>
      <v-row>
        <v-col> {{ instagram }}</v-col>
      </v-row>
      <v-row>
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>{{ cepsalut }} ©</strong>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      email: "infocepssalut@gmail.com",
      phone: "933456048",
      cepsalut: "Ceps Salut",
      instagram: "@cepssalut"
    };
  },
});
</script>

<style scoped>
</style>
