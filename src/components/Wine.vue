<template>
  <div class="wine">
    <h3>
      {{ wine.title }}
    </h3>
    <wine-detail
      v-for="key in wineKeys"
      :key="key"
      :detail="String(wine[key])"
      :label="key"
    />
  </div>
</template>
<script>
import WineDetail from './WineDetail.vue'

export default {
  components: {
    WineDetail,
  },
  name: 'Wine',
  props: {
    wine: Object,
  },
  data() {
    return {
      wineKeys: ['points', 'description', 'winery', 'province', 'country']
    }
  },
}
</script>
<style scoped>
.wine {
  height: 450px;
  border: solid 1px black;
  border-radius: 5px;
}
</style>