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
  </div>
</template>
<style lang="scss" scoped></style>