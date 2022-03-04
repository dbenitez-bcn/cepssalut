<template>
  <v-container>
    <title-and-subtitle
      :title="title"
      :subtitle="subtitle"
    ></title-and-subtitle>
    <v-divider class="d-none d-sm-flex"></v-divider>
    <area-list-view></area-list-view>
    <v-divider class="d-none d-sm-flex"></v-divider>
    <email-box></email-box>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import AreaListView from "~/components/AreaListView.vue";
import EmailBox from "~/components/EmailBox.vue";

export default Vue.extend({
  components: { AreaListView, EmailBox },
  name: "IndexPage",
  head() {
    return {
      title: "Inici"
    }
  },
  data() {
    return {
      title: "Ceps Salut",
      subtitle:
        "La missió de la nostra entitat és promoure la salut i contribuir-ne a la prevenció afavorint hàbits i entorns saludables per tal de millorar la qualitat de vida de la població i així reduir les desigualtats en salut en el món.",
    };
  },
});
</script>
