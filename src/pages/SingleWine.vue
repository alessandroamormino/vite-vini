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
            console.log(response.data.wine);
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
    <h1>Vino: {{ wine.name }}</h1>
    <h6 class="card-subtitle mb-2">{{ wine.type }}</h6>
    <p class="card-text">{{ wine.year }} - {{ wine.winery?.name }}</p>
    <p v-if="wine.vineyards?.length > 0">Vitigni: <span v-for="vineyard in wine.vineyards">{{ vineyard.name }}</span></p>
    <p>Gradazione: {{ wine.gradation }}%</p>
    <p>Estratto: {{ wine.extract }}g/l</p>
    <p>Acidità: {{ wine.acidity }}g/l</p>
  </div>
</template>
<style lang="scss" scoped></style>