<template>
  <div class="player flex-center">
    <div class="player-title">Player Title</div>
    <Board/>
    <Arsenal/>
  </div>
</template>

<script>
import Board from '../Board/Board'
import Arsenal from '../Arsenal/Arsenal'

export default {
  name: 'player',
  components: {
    Board,
    Arsenal
  }
}
</script>
<style scoped>
 .player {
   flex-direction: column;
 }
</style>
