<template>
  <div class="player flex-center">
    <div class="player-title">Player Title</div>
    <div class="board-container">
      <Board/>
      <Arsenal/>
    </div>
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
 .player .board-container{
   display:flex;
 }
 .player.left-player .board-container{
   flex-direction: row-reverse;
 }
 .player.right-player .board-container{
   flex-direction: row;
 }
</style>
