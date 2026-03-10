<script setup lang="ts">
const personne = ref({} as PersonneResponse)
const nuxtApp = useNuxtApp()
const route = useRoute()
const id = route.params.id as string
if (id){
   const personne_temp = await nuxtApp.$pb.collection("Personne").getOne(id)
   personne.value = {
    ...personne_temp,
   }
}
async function envoyerLaPersonne(){
    const personneAjoutée = id
        ?(await nuxtApp.$pb.collection("Personne").update(id,personne.value))
        :(await nuxtApp.$pb.collection("Personne").create(personne.value))
    if (personneAjoutée){
        useRouter().push({name:"personnes-id", params:{id:personneAjoutée.id}})
    }
}
function createObjectURL(fichier:File){

    return globalThis.URL.createObjectURL(fichier)
}

</script>

<template>

<form @submit.prevent="envoyerLaPersonne">
    <div v-if="personne.photo">
        <ImgPb v-if="typeof personne.photo === 'string'"  :record="personne" :filename="personne.photo"/>
        <img v-else :src="createObjectURL(personne.photo)" alt="">
        <button @click.prevent="personne.photo = ''">Supprimer l'image</button>

    </div>
    <label v-else>Choisir un fichier
        <input type="file" 
        @change="personne.photo = ($event.target as HTMLInputElement)?.files?.[0]"/>
    </label>
<label for="nom">Nom</label>
<input v-model="personne.nom" id="nom" type="text" required>

<label for="prenom">Prénom</label>
<input v-model="personne.prenom" id="prenom" type="text" required>

<label for="dateNaissance">Date de naissance</label>
<input v-model="personne.date_de_naissence" id="dateNaissance" type="date">

    <button>Envoyer</button>
</form>

</template>