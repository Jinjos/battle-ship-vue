<template>
  <div class="game">
    <BattleShipHeader/>
    <Players/>
    <Actions/>
  </div>
</template>

<script>
import BattleShipHeader from '../components/BattleShipHeader/BattleShipHeader'
import Players from '../components/Players/Players'
import Actions from '../components/Actions/Actions'
export default {
  name: 'game',
  components: {
    BattleShipHeader,
    Players,
    Actions
  }
}
</script>
<style scoped>
  .game {
    display: grid;
    grid-template-rows: 20vh 60vh 20vh;
  }
</style>
