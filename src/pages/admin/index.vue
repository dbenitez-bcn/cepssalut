<template>
    <v-container>
        <admin-view v-if="this.$fire.auth.currentUser"></admin-view>
        <login-modal v-else></login-modal>
    </v-container>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
    })
</script>

<style scoped>

</style>