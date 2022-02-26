<template>
  <v-container>
    <v-row justify="center">
      <v-col sm="8" lg="6">
        <v-form ref="emailForm" v-model="valid">
          <div class="title text-center pb-4">
            Tens mes dubtes? Contacte'ns!
          </div>
          <v-text-field
            v-model="email"
            outlined
            label="Email"
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
  data() {
    return {
      valid: false,
      body: "",
      email: "",
      rules: {
        required: (value: string) => !!value || "",
        email: (value: string) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail";
        },
      },
    };
  },
  methods: {
    submit() {
      alert("sumbited!");
    },
  },
});
</script>

<style scoped>
</style>