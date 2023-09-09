function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      playerHit: [5, 12],
      monsterHit: [8, 15],
    };
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
  },
  methods: {
    attackMonster() {
      console.log(this.monsterHealth);
      console.log(this.playerHit[0], this.playerHit[1]);
      const attackValue = getRandomValue(this.playerHit[0], this.playerHit[1]);
      // const attackValue = getRandomValue(5, 12);
      console.log("++attackValue");
      console.log(attackValue);

      this.monsterHealth = this.monsterHealth - attackValue;
      console.log(this.monsterHealth);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(
        this.monsterHit[0],
        this.monsterHit[1]
      );
      console.log("++attackValue to Player");
      console.log(attackValue);
      this.playerHealth = this.playerHealth - attackValue;
    },
  },
}).mount("#game");
