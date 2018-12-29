<template>
  <header class="flex-center">{{gameTitle}}</header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'battleShipHeader',
  computed: {
    ...mapState([
      'gameTitle'
    ])
  }
}
</script>
<style scoped>

</style>
