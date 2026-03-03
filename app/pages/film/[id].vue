<script setup lang="ts">
const route= useRoute()
const id = route.params.id as string;
const NuxtApp = useNuxtApp();
    const film = await NuxtApp.$pb.collection('Films').getOne(id);
</script>

<template>
    <div>
        <h1>{{ film.titre }}</h1>
        
    </div>

</template>