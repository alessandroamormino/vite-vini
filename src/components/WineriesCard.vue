<script>

export default {
  name: 'WineriesCard',
  data(){
    return {

    }
  }, 
  props: {
    winery: Object,
  }
}
</script>

<template>
<div class="card" style="width: 18rem;">
  <div class="card-body">
      <h5 class="card-title p-2 text-center">{{ winery.name }}</h5>
      <h6 class="card-subtitle mb-2">{{ winery.address }}</h6>
      <p class="card-text">{{ winery.town }}</p>
      <p>Distretto: {{ winery.district }}</p>
      <p>Regione: {{ winery.region }}</p>
      <p>Nazione: {{ winery.nation }}</p>
      <p>Telefono: {{ winery.phone_number }}</p>
      <p>Email: {{ winery.mail }}</p>
      <router-link :to="{name: 'wineries.show', params:{id: winery.id}}" class="btn btn-primary">Dettaglio</router-link>
  </div>
</div>
</template>

<style lang="scss">
</style>
