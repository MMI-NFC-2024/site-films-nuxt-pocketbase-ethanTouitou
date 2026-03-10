<script setup lang="ts">
const nuxtApp = useNuxtApp();
async function loginGithub() {
    const authData = await nuxtApp.$pb.collection("users").authWithOAuth2({provider:"github"})
    console.log("Login successfull : ",authData);
    
}
const user = nuxtApp.$user
</script>

<template>
    <button v-if="user" @click="nuxtApp.$pb.authStore.clear()">se déconnecter {{ user?.name || user?.email }}</button>
    <button v-else @click="loginGithub">se connecter avec github</button>
</template>