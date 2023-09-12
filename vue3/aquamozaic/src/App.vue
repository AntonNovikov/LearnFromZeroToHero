<template>
  <div>
    <label>Количество строк:</label>
    <input type="number" v-model="rowCount" min="1" />
    <br />
    <label>Количество колонок:</label>
    <input type="number" v-model="columnCount" min="1" />
    <br />
    <div class="grid" :style="{ '--column-count': columnCount }">
      <div v-for="(index) in totalTiles" :key="index" :style="{ backgroundColor: colors[Math.floor((index-1) / columnCount) ][((index -1) % columnCount)] }" class="tile"
        @click="changeColor(Math.floor((index-1) / columnCount) , ((index -1) % columnCount))"> {{[Math.floor((index-1) / columnCount) ]}} {{ [((index -1) % columnCount)]}}
      </div>
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    totalTiles() {
      return this.rowCount * this.columnCount;
    },
  },
  methods: {
    selectColor(index) {
      // Calculate the row and column index based on the clicked div's index
      console.log(index)
      console.log(this.colors)
      const row = Math.floor((index - 1) / this.columnCount);
      const column = (index - 1) % this.columnCount;

      // Update the two-dimensional array with the selected color
      this.colors[row][column] = this.colors[index - 1];
      this.colors[row][column] = this.colors[index - 1];
    },
    changeColor(index , index2) {
      const newColor = prompt('Введите цвет:');
      if (newColor) {
        this.colors[index][index2] = newColor;
      }
    },
  },
  data() {
    return {
      colors: [["red", "#f0a", "green", "#ff0", "#f0f"], ["red", "blue", "green"], ["red", "blue", "green"], ["red", "blue", "green"], ["red", "blue", "green"]],
      rowCount: 5,
      columnCount: 5,
    };
  },

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.tile {
  
 line-height: 100px;
  border-radius: 45%;
  width: 100px;
  height: 100px;
  background-color: gray;
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--column-count), 100px);
  grid-template-rows: repeat(var(--row-count), 100px);
  grid-gap: 10px;
}
</style>
