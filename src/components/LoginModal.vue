<template>
  <v-card class="d-flex flex-column pa-4">
    <v-text-field label="Email" v-model="email"></v-text-field>
    <v-text-field
      label="Contrasenya"
      v-model="password"
      type="password"
    ></v-text-field>
    <v-btn class="align-self-center" color="primary" @click="login">Accedir</v-btn>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      await this.$fire.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((val) => this.$router.back())
        .catch(console.log);
    },
  },
});
</script>

<style scoped>
</style>