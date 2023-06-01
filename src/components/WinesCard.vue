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
      <h5 class="card-title p-2 text-center" :class="wine.color">{{ wine.name }}</h5>
      <h6 class="card-subtitle mb-2">{{ wine.type }}</h6>
      <p class="card-text">{{ wine.year }} - {{ wine.winery?.name }}</p>
      <p v-if="wine.vineyards.length > 0">Vitigni: <span v-for="vineyard in wine.vineyards">{{ vineyard.name }}</span></p>
      <p>Gradazione: {{ wine.gradation }}%</p>
      <p>Estratto: {{ wine.extract }}g/l</p>
      <p>Acidità: {{ wine.acidity }}g/l</p>
      <div class="button">
        <router-link :to="{name: 'wines.show', params:{id: wine.id}}" class="btn btn-secondary" :class="wine.color">Dettaglio</router-link>
      </div>
  </div>
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

.button{
  display: flex;
  justify-content: center;
  a{
    font-size: .9em;
  }
}

.card{
  transition: all .3s ease-in-out;

  &:hover{
    transform: scale(1.04);
    box-shadow: 4px 4px 10px #00000020;
  }
}
</style>
