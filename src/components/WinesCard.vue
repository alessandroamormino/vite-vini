<script>

export default {
  name: 'WinesCard',
  data(){
    return {

    }
  }, 
  props: {
    wine: Object,
  }
}
</script>

<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title p-2 text-center">{{ wine.name }}</h5>
      <h6 class="card-subtitle mb-2">{{ wine.type }}</h6>
      <p class="card-text">{{ wine.year }} - {{ wine.winery?.name }}</p>
      <p v-if="wine.vineyards.length > 0">Vitigni: <span v-for="vineyard in wine.vineyards">{{ vineyard.name }}</span></p>
      <p>Gradazione: {{ wine.gradation }}%</p>
      <p>Estratto: {{ wine.extract }}g/l</p>
      <p>Acidità: {{ wine.acidity }}g/l</p>
      <router-link :to="{name: 'wines.show', params:{id: wine.id}}" class="btn btn-primary">Dettaglio</router-link>
  </div>
</div>
</template>

<style lang="scss">
</style>
