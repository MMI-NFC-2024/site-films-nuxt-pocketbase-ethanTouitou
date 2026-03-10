<script setup lang="ts">

</script>

<template>
    <div>
        <nav>
            <NuxtLink to="/">
                Accueil
            </NuxtLink>
            <NuxtLink to="/film">
                Films
            </NuxtLink>
            <NuxtLink to="/personnes">
                Personnes
            </NuxtLink>
            <Login/>
        </nav>
        <slot />
    </div>
</template>