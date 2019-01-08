<template>
  <div class="game">
    <div class="actions flex-center">
      <button :class="{ boardSet: boardSet}" @click="setBoard" :disabled="boardSet">{{boardStatus}}</button>
      <!-- <button :class="{ activeShips: boardSet}" @click="setShipOnBoard" :disabled="!boardSet">Set a New Ship</button> -->
    </div>
    <div class="shipConfig flex-center">
     <div class="ship-length">
      <label for="shipLength">
        Ship Length:
      </label>
       <input v-model="shipLength" id="shipLength" placeholder="enter ship length">
    </div>
    <div class="ship-dir">
       <div>Ship Direction:</div>
       <div class="ship-dir-selection">
         <div class="hor">
            <input type="radio" id="horizontal" value="0" v-model="shipDirection">
            <label for="horizontal">Horizontal</label>
         </div>
         <div class="ver">
           <input type="radio" id="vertical" value="1" v-model="shipDirection">
          <label for="vertical">Vertical</label>
         </div>
       </div>
    </div>
    </div>
    <div class="board">
      <table>
        <tr v-for="(row,x) in boardSize" :key="row">
          <td
            v-for="(cell,y) in boardSize"
            :key="cell"
            :x="x"
            :y="y"
            @click.prevent="setShipOnBoard($event)"
            :class="{ activeShips: boardSet}"></td>
        </tr>
      </table>

      <!-- Ship Coordinate:
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
      </ul> -->
    </div>
    <div
      class="error-message flex-center"
      v-if="errorMessage">{{errorMessage}}</div>
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
      shipDirection: '0',
      coordinate: null,
      selectedX: 0,
      selectedY: 0,
      errorMessage: null
    }
  },
  computed: {
    validateShipLength: function () {
      if ((this.shipLength < 2) || (this.shipLength > 5)) {
        console.log(this.shipLength)
        console.log('ship length should be between 2 to 5')
        return false
      }
      return true
    },
    getSelectedCoordinates: function () {
      let selectedCoordinates = []
      for (let i = 0; i < this.shipLength; ++i) {
        let selectedX = Number(this.selectedX)
        let selectedY = Number(this.selectedY)
        if (Number(this.shipDirection) === 0) {
          // update horizontal point
          selectedY = selectedY + i
        } else {
          // update vertical point
          selectedX = selectedX + i
        }
        selectedCoordinates.push({ selectedX, selectedY })
      }
      return selectedCoordinates
    }
  },
  methods: {
    validateOutOfBox: function (coordinate) {
      if (coordinate.selectedX >= this.boardSize || coordinate.selectedY >= this.boardSize) {
        return true
      }
      return false
    },
    validateIfTaken: function (coordinate) {
      if (Number(this.board[coordinate.selectedX][coordinate.selectedY]) !== 0) {
        return true
      }
      return false
    },
    validatePts: function (coordinates) {
      if (!this.validateShipLength) {
        this.errorMessage = 'Ship length should be between 2 to 5'
        return false
      }
      for (var coordinate of coordinates) {
        if (this.validateOutOfBox(coordinate)) {
          this.errorMessage = 'Oops, you are trying to set a ship out of the board'
          return false
        }
        if (this.validateIfTaken(coordinate)) {
          this.errorMessage = 'Oops, one of the points are already taken'
          return false
        }
      }

      this.errorMessage = null
      return true
    },
    selectedCoordinate: function (index, type) {
      return index === this[type] ? 'active' : ''
    },
    setBoard () {
      for (let i = 0; i < this.boardSize; ++i) {
        let row = []
        for (let x = 0; x < this.boardSize; ++x) {
          row.push(0)
        }
        this.board.push(row)
      }
      this.boardSet = true
      this.boardStatus = 'Board Created'
    },
    setCoordinate (index, type) {
      this[type] = index
    },
    setShipOnBoard (elem) {
      // validate if board enabled
      if (!this.boardSet) return
      // get selected coordinates
      this.selectedX = elem.currentTarget.getAttribute('x')
      this.selectedY = elem.currentTarget.getAttribute('y')
      let coordinates = this.getSelectedCoordinates
      console.log(coordinates)
      console.log(this.validatePts(coordinates))
      if (this.validatePts(coordinates)) {
        coordinates.forEach((coordinate) => {
          this.board[coordinate.selectedX][coordinate.selectedY] = 1
        })
      }
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
  display: grid;
  grid-template-rows: 20vh 10vh auto 5vh;
}
.board{
      display: flex;
    justify-content: center;
}
.game .actions {
  height: 20vh;
}
.game .actions button {
  padding: 2rem;
}

.game .shipConfig {
  display: flex;
  /* flex-direction: column;
  justify-content: space-around; */
  text-align: left;
  width:96vw;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-evenly;
}
.active {
  color: #fff;
  background-color: green;
  border: 1px solid #000;

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
  /* background-color: green;
  color: aliceblue */
}
td {
  width: 50px;
  height:50px;
  background: gray;
}
td.activeShips{
  background: #438e43;
}
td.activeShips:hover{
  background: lightskyblue;
  cursor: pointer;
}
td.activeShips.taken{
  background: lightcoral;
}
.error-message {
  color: red;
  font-weight: bold;
}
</style>
