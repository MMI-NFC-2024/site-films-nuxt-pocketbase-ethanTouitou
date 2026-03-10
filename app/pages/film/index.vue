<script setup lang="ts">
    const NuxtApp = useNuxtApp();
    const films = await NuxtApp.$pb.collection('Films').getFullList();
    const addFilmRoute = { name: 'film-edit-id' as const };
</script>

<template>
    <h1 class="text-4xl">Liste des films</h1>
    <ul>
        <li v-for="film in films">
            <NuxtLink :to="{name:'film-id', params:{id:film.id}}">{{ film.titre }}</NuxtLink>
        </li>
    </ul>
    <NuxtLink :to="addFilmRoute">Ajouter un film</NuxtLink>

</template>
