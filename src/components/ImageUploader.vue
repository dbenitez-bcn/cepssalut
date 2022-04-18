<template>
  <div
    @dragover.prevent
    @drop.prevent="onDrop"
    @click="triggerFile"
    class="image-uploader"
  >
    <input
      @change="onChange"
      id="file-input"
      type="file"
      style="display: none"
    />
    <div
      v-if="!image"
      class="d-flex flex-column justify-center align-center info-box"
    >
      <v-icon size="128" color="primary" class="pa-2">
        mdi-cloud-upload-outline
      </v-icon>
      <div class="headline text-justify" v-text="text"></div>
    </div>
    <v-img v-else :src="image" max-height="300"></v-img>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      image: "",
      text: "Clica o arrastra la imatge",
    };
  },
  methods: {
    triggerFile() {
      document.getElementById("file-input")!.click();
    },
    onDrop(e: DragEvent) {
      this.uploadFile(e.dataTransfer?.files.item(0));
    },
    onChange(e: any) {
      this.uploadFile(e.target.files[0]);
    },
    async uploadFile(file: File | null | undefined) {
      if (file) {
        const imageRef = this.$fire.storage.ref().child("areas/" + file.name);
        await imageRef
          .put(await file.arrayBuffer(), {
            contentType: file.type,
          })
          .catch((e) => console.log(e));
        this.image = await imageRef.getDownloadURL();
        this.$emit("image-uploaded", this.image);
      }
    },
  },
});
</script>

<style scoped>
.image-uploader {
  background-color: rgb(233, 233, 233);
  cursor: pointer;
  height: 300px;
}
.info-box {
  height: 100%;
}
</style>