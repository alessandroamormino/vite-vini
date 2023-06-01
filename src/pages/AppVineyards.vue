<script>
import axios from 'axios';
import VineyardsCard from '../components/VineyardsCard.vue';
export default {
    name: "AppVineyards",
    data() {
        return {
            URL: "http://127.0.0.1:8000/api/vineyards",
            vineyards: [],
        };
    },
    methods: {
        getvineyards() {
            axios.get(this.URL).then(response => {
                console.log(response.data.results);
                this.vineyards = response.data.results;
            });
        }
    },
    mounted() {
        this.getvineyards();
    },
    components: { VineyardsCard }
}
</script>

<template>
  <div class="container">
    <h1>Vitigni</h1>
    <div class="d-flex flex-wrap justify-content-center gap-4">
      <VineyardsCard v-for="vineyard in this.vineyards" :vineyard="vineyard"></VineyardsCard>
    </div>
  </div>
</template>

<style lang="scss">
</style>
