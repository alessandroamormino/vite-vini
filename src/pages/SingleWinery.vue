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
    <p>Distretto: {{ winery.district }}</p>
    <p>Regione: {{ winery.region }}</p>
    <p>Nazione: {{ winery.nation }}</p>
    <p>Telefono: {{ winery.phone_number }}</p>
    <p>Email: {{ winery.mail }}</p>
  </div>
</template>
<style lang="scss" scoped></style>