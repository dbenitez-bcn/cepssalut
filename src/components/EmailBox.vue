<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="8" lg="6">
        <v-form ref="emailForm" v-model="valid">
          <div class="title text-center pb-4">
            Tens mes dubtes? Contacte'ns!
          </div>
          <v-text-field
            v-model="from"
            outlined
            label="Email"
            placeholder="Escriu aqui el teu email"
            :rules="[rules.required, rules.email]"
          ></v-text-field>
          <v-textarea
            v-model="body"
            outlined
            placeholder="Escriu aqui la teva consulta"
            :rules="[rules.required]"
          ></v-textarea>
          <div class="d-flex justify-center">
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              @click="submit"
            >
              Enviar
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    to: { type: String, required: true },
  },
  data() {
    return {
      valid: false,
      body: "",
      from: "",
      rules: {
        required: (value: string) => !!value || "",
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Email invàlid";
        },
      },
    };
  },
  methods: {
    async submit() {
      this.valid = false;
      await this.$mails.sendMail(this.from, this.to, this.body);
      this.valid = true;
    },
  },
});
</script>

<style scoped>
</style>