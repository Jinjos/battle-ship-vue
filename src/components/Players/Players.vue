<template>
  <div class="players">
    <Player v-for="player in playersInfo" :key="player.id"/>
  </div>
</template>

<script>
import Player from './Player'

export default {
  name: 'players',
  data: function () {
    return {
      playersInfo: [
        {
          name: 'player1',
          id: 1
        },
        {
          name: 'player2',
          id: 2
        }
      ]
    }
  },
  components: {
    Player
  }
}
</script>
<style scoped>
.players{
    width: 90%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 50% 50%;
}
</style>
