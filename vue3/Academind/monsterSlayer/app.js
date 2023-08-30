function getRandomValue(min, max) {
  Math.floor(Math.random() * (max - min) + min);
}

Vue.create({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      playerHit: [5, 12],
      mosterHit: [8, 15],
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(this.playerHit[0], this.playerHit[1]);
      this.monsterHealth = this.monsterHealth - attackValue;
    },
    attackPlayer() {
      const attackValue = getRandomValue(this.mosterHit[0], this.mosterHit[1]);
      this.playerHealth = this.playerHealth - attackValue;
    },
  },
}).mount("#game");
