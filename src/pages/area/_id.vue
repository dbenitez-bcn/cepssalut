<template>
  <v-container class="pt-0">
    <p v-if="$fetchState.pending"></p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
      <v-img
        :src="require(`~/assets/areas/${area.image}`)"
        max-height="300"
      ></v-img>
      <title-and-subtitle
        :title="area.title"
        :subtitle="area.description"
      ></title-and-subtitle>
    </div>
    <v-divider></v-divider>
    <email-box></email-box>
  </v-container>
</template>

<script>
import Vue from "vue";
import Area from "~/domain/Area";

export default Vue.extend({
  head() {
    return {
      title: this.area ? this.area.id : "",
    };
  },
  mounted() {
    this.$fire.firestore
      .collection("areas")
      .doc("inmigrants")
      .get()
      .then((fo) => console.log(fo.data().title));
  },
  data() {
    return {
      area: null,
    };
  },
  async fetch() {
    this.area = await this.$areas.getById(this.$route.params.id);
  },
});
</script>

<style scoped>
</style>