<template>
  <v-dialog v-model="dialog" max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-icon v-bind="attrs" v-on="on" color="error" class="pa-2">
        mdi-delete
      </v-icon>
    </template>
    <v-card>
      <v-card-title class="text-h5"> Eliminar area </v-card-title>
      <v-card-text
        >Segur que vols eliminar <b>{{ title }}</b>? Aquesta acció es
        irreversible.</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          Cancelar
        </v-btn>
        <v-btn color="green darken-1" text @click="deleteArea">
          Eliminar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import Area from "~/domain/Area";

export default Vue.extend({
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    async deleteArea() {
      this.dialog = false;
      this.$emit("accept");
    },
  },
});
</script>

<style scoped>
</style>