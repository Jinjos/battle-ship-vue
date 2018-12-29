<template>
  <div class="arsenal">
   <div v-for="boat in boats" :key="boat.id" class="boat">
       {{boat.name}} : {{boat.length}}
   </div>
  </div>
</template>

<script>
export default {
  name: 'arsenal',
  data: function () {
      return {
          boats: [
              {
                  id: 1,
                  name: "Cruiser",
                  length: 2,
                  direction: "horizontal"
              },
              {
                  id: 2,
                  name: "Missle Boat",
                  length: 3,
                  direction: "horizontal"
              },
              {
                  id: 3,
                  name: "Destroyer",
                  length: 4,
                  direction: "horizontal"
              },
              {
                  id: 4,
                  name: "Battlecruiser",
                  length: 4,
                  direction: "horizontal"
              },
              {
                  id: 5,
                  name: "Aircraft carrier",
                  length: 5,
                  direction: "horizontal"
              },
          ]
      }
  }
}
</script>
<style scoped>
 .arsenal { 
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    box-sizing: border-box;
    border: 1px solid green;
    padding: 0 1em;
 }
</style>
