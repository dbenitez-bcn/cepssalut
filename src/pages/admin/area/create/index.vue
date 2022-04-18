<template>
  <div>
    <image-uploader @image-uploaded="onImageUploaded"></image-uploader>
    <v-container class="d-flex flex-column justify-center mb-4">
      <v-row justify="center">
        <v-col sm="8">
          <v-text-field
            v-model="title"
            label="Títol"
            :rules="[titleRule]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col sm="8">
          <v-textarea
            auto-grow
            rows="2"
            v-model="description"
            label="Descripció"
            :rules="[descriptionRule]"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col sm="8">
          <v-text-field
            v-model="mailTo"
            label="Email"
            placeholder="Direcció email que rebrà les consultes sobre aquesta area"
            :rules="[mailRule]"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-btn color="primary" @click="create">Afegir area</v-btn>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      image: "",
      title: "",
      description: "",
      mailTo: "",
    };
  },
  methods: {
    mailRule(value: string) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(value) || "Email invàlid";
    },
    titleRule(value: string) {
      return !!value || "Ha de tindre un titol";
    },
    descriptionRule(value: string) {
      return !!value || "Ha de tindre una descripcio";
    },
    onImageUploaded(url: string) {
      this.image = url;
    },
    isValid(): boolean {
      return (
        !!this.image && !!this.title && !!this.description && !!this.mailTo
      );
    },
    async create() {
      if (this.isValid()) {
        await this.$areas.create(
          this.title,
          this.description,
          this.image,
          this.mailTo
        );
        this.$router.push("/admin");
      } else {
        alert("Falten dades");
      }
    },
  },
  computed: {},
});
</script>

<style scoped>
</style>