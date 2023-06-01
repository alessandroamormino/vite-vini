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
      <h1 class="card-title p-2 text-center">{{ vineyard.name }}</h1>
      <p class="card-text">{{ vineyard.desc }}</p>
      <router-link :to="{name: 'vineyards.show', params:{id: vineyard.id}}" class="btn btn-primary">Dettaglio</router-link>
  </div>
</div>
</template>

<style lang="scss">
</style>
