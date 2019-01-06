<template>
  <div class="game">
    <div class="actions flex-center">
      <button :class="{ boardSet: boardSet}" @click="setBoard" :disabled="boardSet">{{boardStatus}}</button>
      <button :class="{ activeShips: boardSet}" @click="setShip" :disabled="!boardSet">Set a New Ship</button>
    </div>
    <div class="setShip">
     <p class="ship-length">
      <label for="shipLength">
        Ship Length:
      </label>
       <input v-model="shipLength" id="shipLength" placeholder="enter ship length">
    </p>
    <p>
      Ship Coordinate:
      Latitude:
      <ul>
        <li v-for="(cell,index) in boardSize" :key="cell" :class="selectedCoordinate(index,'latitude')" @click="setCoordinate(index,'latitude')">
        {{ index }}
        </li>
      </ul>
      Longtitude:
       <ul>
        <li v-for="(cell,index) in boardSize" :key="cell" :class="selectedCoordinate(index,'longtitude')" @click="setCoordinate(index,'longtitude')">
        {{ index }}
        </li>
      </ul>
    </p>
    <div class="ship-dir">
       <div>Ship Direction:</div>
       <div class="ship-dir-selection">
         <div class="hor">
            <input type="radio" id="horizontal" value="Horizontal" v-model="shipDirection">
            <label for="horizontal">Horizontal</label>
         </div>
         <div class="ver">
           <input type="radio" id="vertical" value="Vertical" v-model="shipDirection">
          <label for="vertical">Vertical</label>
         </div>

       </div>

    </div>
    </div>

    <!-- <BattleShipHeader/>
    <Players/>
    <Actions/>-->
  </div>
</template>

<script>
// import BattleShipHeader from '../components/BattleShipHeader/BattleShipHeader'
// import Players from '../components/Players/Players'
// import Actions from '../components/Actions/Actions'
export default {
  name: 'game',
  data: function () {
    return {
      boardSize: 10,
      board: [],
      boardSet: false,
      boardStatus: 'Create Board',
      shipLength: 2,
      shipDirection: 'Vertical',
      coordinate: null,
      latitude: 0,
      longtitude: 0
    }
  },
  conputed: {

  },
  methods: {
    selectedCoordinate: function (index, type) {
      console.log(index)
      return index === this[type] ? 'active' : ''
    },
    setBoard () {
      console.log('set board')
      for (let i = 0; i < this.boardSize; ++i) {
        let row = []
        for (let x = 0; x < this.boardSize; ++x) {
          row.push(0)
        }
        this.board.push(row)
      }
      console.log(this.board)
      this.boardSet = true
      this.boardStatus = 'Board Created'
    },
    setCoordinate (index, type) {
      console.log(index, type)
      this[type] = index
    },
    setShip (coord, dir, len) {
      // validate all coordinates
      // set coordinates
    }
  }
  // components: {
  //   BattleShipHeader,
  //   Players,
  //   Actions
  // }
}
</script>
<style scoped>
.game {
  display: flex;
  flex-direction: column;
}

.game .actions {
  height: 20vh;
}
.game .actions button {
  padding: 2rem;
}
.game button.boardSet {
  background: gray;
  color: lightgreen;
  font-weight: bold;
}

.game .setShip {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
  width:96vw;
  margin: 0 auto;
}
.active {
  color: #fff;
  background-color: green;

}
.ship-length label,
.ship-length input {
  display:block;
  text-align: left;
}
ul {
  display: flex;
  flex-direction: row;
}
li {
  background-color: lightgray;
  cursor: pointer;
  color: #000;
  padding: 15px;
  box-sizing: border-box;
  border: 1px solid;
  margin: 5px;
}
.ship-dir {
  display: flex;
  flex-direction: column;
}
.ship-dir-selection {
  text-align: left;
}
.activeShips{
  background-color: green;
  color: aliceblue
}

</style>
