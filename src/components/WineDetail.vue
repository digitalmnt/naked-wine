<template>
  <p>
    {{ capitalizeFirstLetter(label) }}: {{ formattedDetail }}
  </p>
</template>
<script>
export default {
  props: {
    detail: String,
    label: String,
  },
  computed: {
    formattedDetail() {
      return this.detail.length > 99 ? `${this.detail.substring(0, 100)}...` : this.detail
    }
  },
  methods: {
    capitalizeFirstLetter: (word) => word.charAt(0).toUpperCase() + word.slice(1),
  }
}
</script>