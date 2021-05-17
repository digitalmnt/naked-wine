<template>
  <button
    class="sort"
    @click="sortDesc = !sortDesc"
  >Click to Sort by Points</button>
  <div class="row">
    <div
      class="col"
      v-for="wine in wines"
      :key="wine"
    >
      <wine
        :wine="wine"
      />
    </div>
  </div>
</template>

<script>
// import { getWine } from '../services/api'
import wines from '../data/wines.json'
// import { onBeforeMount, ref } from 'vue'
import Wine from './Wine.vue'

export default {
  name: 'Wines',
  components: {
    Wine,
  },
  data() {
    return {
      sortDesc: true,
    }
  },
  setup() {
    // const wines = ref([])
    // const goToWineStore = async() => {
    //   wines.value = await getWine()
    //   // return []
    // }

    // onBeforeMount(goToWineStore)

    // return {
    //   wines
    // }
  },
  methods: {
    sortWines(a, b) {
      return (this.sortDesc) ? b - a : a - b
    }
  },
  computed: {
    wines() {
      return wines.sort((a, b) => this.sortWines(a.points, b.points))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sort {
  border: solid 1px;
  border-radius: 5px;
  background-color: white;
  display: block;
  margin: 0 auto;
}
.col {
  width: 96%;
}
.row {
  position: relative;
  width: 100%;
}

.row [class^="col"] {
  float: left;
  margin: 0.5rem 2%;
  min-height: 0.125rem;
}
@media (min-width: 576px) {
  .col {
    width: 96%;
  }
}
@media (min-width: 768px) {
  .col {
    width: 46%;
  }
}
@media (min-width: 1200px) {
  .col {
    width: 21%;
  }
}


</style>
