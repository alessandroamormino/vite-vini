<script>
import axios from 'axios';
export default{
  data(){
    return{
      URL: "http://127.0.0.1:8000/api/wines",
      wine: '',
    }
  }, 
  methods: {
    getWines() {
        axios.get(this.URL + '/' + this.$route.params.id).then(response => {
            // console.log(response.data.wine);
            this.wine = response.data.wine;
        });
    }
    },
    mounted() {
        this.getWines();
    },
}
</script>
<template>
  <div class="container py-4">
    <div class="title">
      <h1>Vino: {{ wine.name }}</h1>
      <div class="wine-color" :class="wine.color"></div>
    </div>
    <h6 class="card-subtitle mb-2">Tipologia: {{ wine.type }}</h6>
    <p class="card-text annata">{{ wine.year }} - {{ wine.winery?.name }}</p>
    <p v-if="wine.vineyards?.length > 0">Vitigni: <span v-for="vineyard in wine.vineyards">{{ vineyard.name }}</span></p>
    <p>Gradazione: {{ wine.gradation }}%</p>
    <p>Estratto: {{ wine.extract }}g/l</p>
    <p>Acidità: {{ wine.acidity }}g/l</p>
    <p>Colore: {{ wine.color }}</p>

    <router-link :to="{name: 'wines'}" class="btn btn-secondary">Torna alla lista dei vini</router-link>
  </div>
</template>
<style lang="scss" scoped>
h1{
  margin-bottom: 1em;
}
.title{
  display: flex;
  gap: 1em;
}
.wine-color{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.annata{
  font-size: .9em;
  font-style: italic;
}

.rosso {
    background-color: #900c3f;
    color: white;
    text-transform: capitalize;

    &:hover {
        color: white;
    }
}

.bianco {
    background-color: antiquewhite;
    text-transform: capitalize;
    color: #000;
}

.rosè {
    background-color: #ffd7d782;
    text-transform: capitalize;
    color: #000;
}

</style>