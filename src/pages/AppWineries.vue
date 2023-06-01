<script>
import axios from 'axios';
import WineriesCard from '../components/WineriesCard.vue';
export default {
    name: "AppWineries",
    data() {
        return {
            URL: "http://127.0.0.1:8000/api/wineries",
            wineries: [],
        };
    },
    methods: {
        getWineries() {
            axios.get(this.URL).then(response => {
                console.log(response.data.results);
                this.wineries = response.data.results;
            });
        }
    },
    mounted() {
        this.getWineries();
    },
    components: { WineriesCard }
}
</script>

<template>
  <div class="container">
    <h1>Cantine</h1>
    <div class="d-flex flex-wrap justify-content-center gap-4">
      <WineriesCard v-for="winery in this.wineries" :winery="winery"></WineriesCard>
    </div>
  </div>
</template>

<style lang="scss">
</style>
