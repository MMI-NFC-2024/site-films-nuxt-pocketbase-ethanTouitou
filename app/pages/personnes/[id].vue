<script setup lang="ts">
const route= useRoute()
const id = route.params.id as string;
const NuxtApp = useNuxtApp();
    const personne = await NuxtApp.$pb.collection('Personne').getOne(id);
</script>

<template>
    <div>
        <h1>{{ personne.titre }}</h1>
        <ImgPb :record="personne" :filename="personne.affiche"/>
        <p v-html="personne.synopsis"></p>
    </div>
 <NuxtLink :to="{name: 'film-edit-id', params: {id}}">Editer le film</NuxtLink>
</template>