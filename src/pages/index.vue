<template>
  <v-container>
    <title-and-subtitle
      :title="title"
      :subtitle="subtitle"
    ></title-and-subtitle>
    <v-divider class="d-none d-sm-flex"></v-divider>
    <area-list-view></area-list-view>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import AreaListView from "~/components/AreaListView.vue";

export default Vue.extend({
  components: { AreaListView },
  name: "IndexPage",
  data() {
    return {
      title: "cepssalut",
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ornare, orci at consectetur porttitor, velit nisi accumsan mauris, ut vehicula augue orci nec est. Aenean.",
    };
  },
});
</script>
