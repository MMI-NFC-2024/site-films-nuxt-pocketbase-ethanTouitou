<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
import { ref } from 'vue';
const props = defineProps<{
    name: string;
    personnes: PersonneResponse[];
}>();
const personneId = ref()
</script>

<template>
      <Multiselect
                v-model="personneId"
                :options="personnes"
                label="nom"
                value-prop="id"
              />
valeur:{{ personneId }}
<imput type="hidden" :value="personneId" :name="name"/>
</template>

<style src="@vueform/multiselect/themes/default.css"></style>
