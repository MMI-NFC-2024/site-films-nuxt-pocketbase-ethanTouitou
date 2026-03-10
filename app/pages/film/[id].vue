<script setup lang="ts">
import Multiselect from '@vueform/multiselect';
const route= useRoute()
const id = route.params.id as string;
const nuxtApp = useNuxtApp();
type FilmAvecExpand = FilmsResponse<{
    producteur: PersonneResponse;
    realisateurs: PersonneResponse[];
    Role_via_film: RoleResponse<{
        acteur: PersonneResponse;
    }>[];
}>;
    const film= ref({} as FilmAvecExpand)
   await miseAJourFilm();
const role = ref({} as RoleRecord)
const personnes = await nuxtApp.$pb.collection('Personne').getFullList()
    console.log("film:",film)
async function miseAJourFilm() {
    film.value = await nuxtApp.$pb.collection<FilmAvecExpand>('Films').getOne(id, {
        expand: "producteur, realisateurs, Role_via_film.acteur"
    });
}

async function ajouterRole (){
    const roleAjouté = await nuxtApp.$pb.collection ("Role").create({...role.value,
        film: id
    })
    await miseAJourFilm()
}
async function supprimeRole (id: string){
    await nuxtApp.$pb.collection('Role').delete(id)
    await miseAJourFilm()
}
</script>

<template>
    <div>
        <h1>{{ film.titre }}</h1>
        <ImgPb :record="film" :filename="film.photo"/>
        <p v-html="film.synopsis"></p>
        <p>producteur:
            <LienPersonne :personne="film.expand.producteur"/>
        </p>
        <p>
            realisateurs:
            <LienPersonne v-for="personne in film.expand.realisateurs" :personne/>
        </p>
        <ul>
            <li v-for="role in film.expand.Role_via_film" >
                role de {{ role.nom }}
                joué par <LienPersonne :personne="role.expand.acteur"/>
                <button @click="supprimeRole(role.id)">Supprimer</button>
            </li>
        </ul>

        <p>ajouter un nouveau role:</p>
        <label >nom du role
        <input type="text" v-model="role.nom">
         <Multiselect
                v-model="role.acteur"
                :options="personnes"
                label="nom"
                value-prop="id"
              />
              <button @click="ajouterRole">ajouter un role</button>
    </label>
    </div>
 <NuxtLink :to="{name: 'film-edit-id', params: {id}}">Editer le film</NuxtLink>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
