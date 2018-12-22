<template>
  <div class="board board-grid-10">
     <div v-for="index in boardSize" :key="index" class="cell flex-center">
     </div>
  </div>
</template>

<script>
export default {
  name: 'board',
  computed: {
    boardSize () {
      return this.$store.getters.getBoardSize * this.$store.getters.getBoardSize
    }
  }
}
</script>
<style scoped>
.board{
  display: grid;
  box-sizing: border-box;
  border: 2px solid;
}
.board-grid-10{
    grid-template-columns: repeat(10, 50px);
    grid-template-rows: repeat(10, 50px);
}
.board-grid-12{
    grid-template-columns: repeat(12, 8.33%);
}
.board-grid-15{
    grid-template-columns: repeat(15, 6.66%);
}
.cell {
    box-sizing: border-box;
    border: 1px solid #000;
 }
</style>
