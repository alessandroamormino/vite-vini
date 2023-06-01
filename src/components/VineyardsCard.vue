<script>

export default {
  name: 'VineyardsCard',
  data(){
    return {

    }
  }, 
  props: {
    vineyard: Object,
  }
}
</script>

<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title p-2 text-center">{{ vineyard.name }}</h5>
      <p class="card-text">{{ vineyard.desc }}</p>
      <div class="button">
        <router-link :to="{name: 'vineyards.show', params:{id: vineyard.id}}" class="btn btn-secondary">Dettaglio</router-link>
      </div>
  </div>
</div>
</template>

<style lang="scss">
.button{
  display: flex;
  justify-content: center;
}

.card{
  transition: all .3s ease-in-out;

  &:hover{
    transform: scale(1.04);
    box-shadow: 4px 4px 10px #00000020;
  }
}
</style>
