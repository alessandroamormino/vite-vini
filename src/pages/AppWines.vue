<script>
import axios from 'axios';
import WinesCard from '../components/WinesCard.vue';
export default {
    name: "AppHome",
    data() {
        return {
            URL: "http://127.0.0.1:8000/api/wines",
            wines: [],
        };
    },
    methods: {
        getWines() {
            axios.get(this.URL).then(response => {
                console.log(response.data.results);
                this.wines = response.data.results;
            });
        }
    },
    mounted() {
        this.getWines();
    },
    components: { WinesCard }
}
</script>

<template>
  <div class="container">
    <h1>Vini</h1>
    <div class="d-flex flex-wrap justify-content-center gap-4">
      <WinesCard v-for="wine in this.wines" :wine="wine"></WinesCard>
    </div>
  </div>
</template>

<style lang="scss">
</style>
