<template>
  <div class="game">
    <div class="actions flex-center">
      <button :class="{ boardSet: boardSet}" @click="setBoard" :disabled="boardSet">{{boardStatus}}</button>
      <button :class="{ activeShips: boardSet}" @click="setShipOnBoard" :disabled="!boardSet">Set a New Ship</button>
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
      latitude: 0,
      longtitude: 0
    }
  },
  computed: {
    getSelectedCoordinates: function () {
      let selectedCoordinates = []
      // valiate ship length
      if ((this.shipLength < 2) || (this.shipLength > 5)) {
        console.log('ship length should be between 2 to 5')
        return selectedCoordinates
      }
      for (let i = 0; i < this.shipLength; ++i) {
        let lat = this.latitude
        let lng = this.longtitude
        if (Number(this.shipDirection) === 0) {
          // update horizontal point
          lng = lng + i
        } else {
          // update vertical point
          lat = lat + i
        }
        // validate point
        if (this.validatePt(lat, lng)) {
          // push to selected array
          selectedCoordinates.push({ lat, lng })
        }
      }
      console.log(selectedCoordinates)
      return selectedCoordinates
    }
  },
  methods: {
    validatePt: function (lat, lng) {
      console.log(lat, lng)
      if (lat >= this.boardSize || lng >= this.boardSize) {
        console.log('Oops, you are trying to set a ship out of the board')
        return false
      }
      if (Number(this.board[lat][lng]) !== 0) {
        console.log('Oops, one of the points are already taken')
        return false
      }
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
    setShipOnBoard () {
      let coordinates = this.getSelectedCoordinates
      console.log(coordinates)
      // set coordinates
      coordinates.forEach((coordinate) => {
        this.board[coordinate.lat][coordinate.lng] = 1
      })
      console.log(this.board)
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
  /* background: gray;
  color: lightgreen;
  font-weight: bold; */
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

</style>
