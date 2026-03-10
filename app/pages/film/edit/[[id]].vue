<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
const film = ref({} as FilmsResponse)
const nuxtApp = useNuxtApp()
const route = useRoute()
const id = route.params.id as string
if (id){
   const film_temp = await nuxtApp.$pb.collection("Films").getOne(id)
   film.value = {
    ...film_temp,
    dete_de_sortie: (new Date(film_temp.dete_de_sortie)).toISOString().split('T')[0]!
   }
}
const personnes = await nuxtApp.$pb.collection('Personne').getFullList()

async function envoyerLeFilm(){
    const filmAjouté = id
        ?(await nuxtApp.$pb.collection("Films").update(id,film.value))
        :(await nuxtApp.$pb.collection("Films").create(film.value))
    if (filmAjouté){
        useRouter().push({name:"film-id", params:{id:filmAjouté.id}})
    }
}
function createObjectURL(fichier:File){

    return globalThis.URL.createObjectURL(fichier)
}

</script>

<template>

<form @submit.prevent="envoyerLeFilm">
    <div v-if="film.photo">
        <ImgPb v-if="typeof film.photo === 'string'"  :record="film" :filename="film.photo"/>
        <img v-else :src="createObjectURL(film.photo)" alt="">
        <button @click.prevent="film.photo = ''">Supprimer l'image</button>

    </div>
    <label v-else>Choisir un fichier
        <input type="file" 
        @change="film.photo = ($event.target as HTMLInputElement)?.files?.[0]"/>
    </label>
    <label>titre
        <input type="text" v-model="film.titre">
    </label>  
<label>Durée
        <input type="number" v-model="film.dure_min" placeholder="valeur en minute">
    </label> 
<label>Genres 
        <select v-model="film.genres" multiple>
        <option v-for="genre in FilmsGenresOptions" :value="genre">{{ genre }}</option>    
        </select>
    </label> 
<label> Synopsis
        <textarea v-model="film.synopsis" rows="10"/>
    </label> 
<label>Date
        <input type="date" v-model="film.dete_de_sortie">
    </label> 
<label >producteur 
    <Multiselect
                v-model="film.producteur"
                :options="personnes"
                label="nom"
                value-prop="id"
              />
</label>
<label >realisateur
    <Multiselect
                v-model="film.realisateurs"
                mode="tags"
                :options="personnes"
                label="nom"
                value-prop="id"
              />
</label>
    <button>Envoyer</button>
</form>

</template>
<style src="@vueform/multiselect/themes/default.css"></style>
