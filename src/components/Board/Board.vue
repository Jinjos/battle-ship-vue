<template>
  <div class="board board-grid-10">
    <div
      v-for="index in getBoardSize"
      :key="index"
      class="cell flex-center"
      :class="getCellName(index)"
    ></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'board',
  computed: {
    ...mapGetters(['getBoardSize'])
  },
  methods: {
    getCellName: function (index) {
      var num = index - 1
      if (num < 10) {
        return 'x' + num + 'y0'
      }
      let arr = Array.from(String(num), Number)
      return 'x' + arr[0] + 'y' + arr[1]
    }
  }
}
</script>
<style scoped>
.board {
  display: grid;
  box-sizing: border-box;
  border: 2px solid;
}
.board-grid-10 {
  grid-template-columns: repeat(10, 50px);
  grid-template-rows: repeat(10, 50px);
}
.board-grid-12 {
  grid-template-columns: repeat(12, 8.33%);
}
.board-grid-15 {
  grid-template-columns: repeat(15, 6.66%);
}
.cell {
  box-sizing: border-box;
  border: 1px solid #000;
}
</style>
