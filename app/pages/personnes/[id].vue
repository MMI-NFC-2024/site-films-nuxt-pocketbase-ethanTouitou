<script setup lang="ts">
const route= useRoute()
const id = route.params.id as string;
const NuxtApp = useNuxtApp();
    const personne = await NuxtApp.$pb.collection('Personne').getOne(id);
</script>

<template>
    <div>
        <h1>{{ personne.nom }} {{ personne.prenom }}</h1>
        <ImgPb :record="personne" :filename="personne.photo"/>
        <p v-html="personne.proffession"></p>
    </div>
 <NuxtLink :to="{name: 'personnes-edit-id', params: {id}}">Editer la personne</NuxtLink>
</template>