<template>
  <div>
    <v-container>
      <v-col>
        <v-row class="add-area" align="center" @click="toCreateArea">
          <v-icon color="gray" class="pa-2"> mdi-plus </v-icon>
          Afegir area
        </v-row>
      </v-col>
    <area-list-item v-for="area in areas" :key="area.id" :area="area"></area-list-item>
    </v-container>
  </div>
</template>

<script>
import Vue from "vue";
import AreaListItem from "./AreaListItem.vue";

export default Vue.extend({
  components: { AreaListItem },
  data() {
    return {
      areas: [],
    };
  },
  async fetch() {
    this.areas = await this.$areas.getAll();
  },
  methods: {
    toCreateArea() {
      this.$router.push("/admin/area/create");
    },
  },
});
</script>

<style scoped>
.add-area {
  border: dashed gray;
  border-radius: 6px;
  cursor: pointer;
}
</style>