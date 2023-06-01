<script>
import axios from 'axios';
export default{
  data(){
    return{
      URL: "http://127.0.0.1:8000/api/wineries",
      winery: '',
    }
  }, 
  methods: {
    getWineries() {
        axios.get(this.URL + '/' + this.$route.params.id).then(response => {
            // console.log(response.data.winery);
            this.winery = response.data.winery;
        });
    }
    },
    mounted() {
        this.getWineries();
    },
}
</script>
<template>
  <div class="container py-4">
    <h1 class="card-title p-2 text-center">{{ winery.name }}</h1>
    <h6 class="card-subtitle mb-2">{{ winery.address }}</h6>
    <p class="card-text">{{ winery.town }}</p>
    <p v-if="winery.wines?.length > 0">Vini: <span v-for="wine in winery.wines" :class="wine.color">{{ wine.name + ' ' }}</span></p>
    <p>Distretto: {{ winery.district }}</p>
    <p>Regione: {{ winery.region }}</p>
    <p>Nazione: {{ winery.nation }}</p>
    <p>Telefono: {{ winery.phone_number }}</p>
    <p>Email: {{ winery.mail }}</p>

    <router-link :to="{name: 'wineries'}" class="btn btn-secondary">Torna alla lista delle cantine</router-link>

  </div>
</template>
<style lang="scss" scoped>

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