<script>
import axios from 'axios';
export default {
  data(){
    return {
      URL: 'http://127.0.0.1:8000/api/wines',
      wines: [],
    }
  }, 
  methods: {
    getWines(){
      axios.get(this.URL).then(response => {
        // console.log(response.data.results);
        this.wines = response.data.results;
      });
    }
  },
  mounted(){
    this.getWines();
  },
}
</script>

<template>
  
</template>

<style lang="scss">
</style>
