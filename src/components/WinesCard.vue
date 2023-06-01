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
      <p class="card-text">{{ wine.year }}</p>
      <p>Colore: {{ wine.color }}</p>
      <p>Gradazione: {{ wine.gradation }}%</p>
      <p>Estratto: {{ wine.extract }}g/l</p>
      <p>Acidità: {{ wine.acidity }}g/l</p>
  </div>
</div>
</template>

<style lang="scss">
</style>
