<template>
  <div>
    <input type="color" v-model="selectedColor" @change="logColor">
    <button @click="doCat">Cat</button>
    <label>Количество строк:</label>

    <input type="number" v-model="rowCount" min="1" @input="changerRow" />
    <br />
    <label>Количество колонок:</label>
    <input type="number" v-model="columnCount" min="1" />
    <br />
    <div class="grid" :style="{ '--column-count': columnCount }">
      <!-- <div v-for="(index) in totalTiles" :key="index" :style="{ backgroundColor: colors[Math.floor((index-1) / columnCount) ][((index -1) % columnCount)] }" class="tile" -->
      <div v-for="(index) in totalTiles" :key="index" :style="{ backgroundColor: applyColor(index) }" class="tile"
        @click="changeColor(Math.floor((index - 1) / columnCount), ((index - 1) % columnCount))"> 
        <!-- {{ [Math.floor((index -
          1) /
          columnCount)] }} {{ [((index - 1) % columnCount)] }} -->
      </div>
    </div>
    <div>{{ colors }}</div>
  </div>
</template>
<script>

export default {
  computed: {
    totalTiles() {
      return this.rowCount * this.columnCount;
    },
    // applyColor(){
    //   return "gray"
    //   // console.log( "applyColor",index)
    //   // return this.colors[Math.floor((index-1) / this.columnCount) ][((index -1) % this.columnCount)]?this.colors[Math.floor((index-1) / this.columnCount) ][((index -1) % this.columnCount)]: "gray"
    // },
  },
  methods: {
    doCat() {
      this.colors = [["gray", "gray", "black", "gray", "gray", "gray", "gray", "gray"], ["gray", "black", "gray", "black", "gray", "gray", "black", "gray"], ["gray", "black", "black", "black", "gray", "gray", "gray", "gray"], ["gray", "gray", "gray", "gray", "black", "gray", "gray", "gray"], ["gray", "gray", "gray", "gray", "gray", "black", "gray", "gray"]]
    },
    changerRow(value) {
      console.log(value.target.value)
      // console.log(first)
      // this.colors.push(["red"])
    },
    applyColor(index) {
      if (!this.colors) return "gray"
      // console.log( "applyColor",index)
      // console.log(this.colors[Math.floor((index - 1) / this.columnCount)][((index - 1) % this.columnCount)] === null)
      return this.colors[Math.floor((index - 1) / this.columnCount)][((index - 1) % this.columnCount)] ? this.colors[Math.floor((index - 1) / this.columnCount)][((index - 1) % this.columnCount)] : "gray"
    },
    changeColor(index, index2) {
      // const newColor = prompt('Введите цвет:');
      const newColor = this.selectedColor;
      if (newColor) {
        this.colors[index][index2] = newColor;
      }
    },
    logColor() {
      console.log(this.selectedColor);
    }
  },

  data() {
    return {
      rowCount: 5,
      columnCount: 8,

      selectedColor: "black",
      colors: []
      // colors: [["red", "#f0a", "green", "#ff0", "#f0f"], ["red", "blue", "green"], ["red", "blue", "green"], ["red", "blue", "green"], ["red", "blue", "green"]],
    };
  },
  beforeMount() {
    console.log("bmounted")
    this.colors = Array.from({ length: this.rowCount }, () =>
      Array(this.columnCount).fill("gray")
    );
  },
  beforeUpdate() {
    console.log("beforeUpdate")
    if (this.colors.length < this.rowCount) {
      while (this.colors.length < this.rowCount) {

        this.colors.push([])
      }
    }
    // this.colors = [["gray", "gray", "black", "gray", "gray", "gray", "gray", "gray"], ["gray", "black", "gray", "black", "gray", "gray", "black", "gray"], ["gray", "black", "black", "black", "gray", "gray", "gray", "gray"], ["gray", "gray", "gray", "gray", "black", "gray", "gray", "gray"], ["gray", "gray", "gray", "gray", "gray", "black", "gray", "gray"]]
    // this.colors = Array.from({ length: this.rowCount }, () =>
    //   Array(this.columnCount).fill("gray")
    // );
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

  line-height: 50px;
  border-radius: 45%;
  width: 50px;
  height: 50px;
  background-color: gray;
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--column-count), 50px);
  grid-template-rows: repeat(var(--row-count), 50px);
  grid-gap: 10px;
}
</style>
