<template>
  <v-col class="my-4">
    <v-row class="add-area" align="center" @click="toEditArea">
        <v-icon color="" class="pa-2"> mdi-pencil </v-icon>
        <p class="mb-0">{{ area.title }}</p>
        <v-spacer></v-spacer>
        <delete-button :area="area"></delete-button>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import Area from "~/domain/Area";

export default Vue.extend({
  props: {
    area: {
      type: Area,
      required: true,
    },
  },
  methods: {
    toEditArea() {
      this.$router.push(`/admin/area/${this.area.id}/edit`);
    }
  },
});
</script>

<style scoped>
.add-area {
  border: solid gray;
  border-radius: 6px;
  cursor: pointer;
}
</style>