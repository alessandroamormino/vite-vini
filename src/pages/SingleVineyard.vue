<script>
import axios from 'axios';
export default{
  data(){
    return{
      URL: "http://127.0.0.1:8000/api/vineyards",
      vineyard: '',
    }
  }, 
  methods: {
    getWineries() {

        axios.get(this.URL + '/' + this.$route.params.id).then(response => {
            // console.log(response.data);
            this.vineyard = response.data.vineyard;
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
    <h1 class="card-title p-2 text-center">{{ vineyard.name }}</h1>
    <p class="card-text">{{ vineyard.desc }}</p>
    <p v-if="vineyard.wines?.length > 0">Vini: <span v-for="wine in vineyard.wines" :class="wine.color">{{ wine.name + ' ' }}</span></p>

    <router-link :to="{name: 'vineyards'}" class="btn btn-secondary">Torna alla lista dei vitigni</router-link>
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