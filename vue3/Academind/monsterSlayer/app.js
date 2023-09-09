function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      playerHit: [5, 12],
      playerSpecialHit: [10, 25],
      playerHealHit: [8, 20],
      monsterHit: [8, 15],
      currentRound: 0,
      winner: null,
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // a draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Player lost
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // a draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Monster lost
        this.winner = 'player';
      }
    },
  },
  computed: {
    monsterBarStyles() {
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      return { width: this.playerHealth + "%" };
    },
    disabledSpecial() {
      return this.currentRound % 3 != 0;
    },
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(this.playerHit[0], this.playerHit[1]);

      this.monsterHealth = this.monsterHealth - attackValue;
      console.log(this.monsterHealth);
      this.attackPlayer();
      this.currentRound++;
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
    specialAttackMonster() {
      const attackValue = getRandomValue(
        this.playerSpecialHit[0],
        this.playerSpecialHit[1]
      );
      this.monsterHealth = this.monsterHealth - attackValue;
      this.attackPlayer();
      this.currentRound++;
    },
    healPlayer() {
      const healValue = getRandomValue(
        this.playerHealHit[0],
        this.playerHealHit[1]
      );
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth = this.playerHealth + healValue;
      }
      this.attackPlayer();
      this.currentRound++;
    },
  },
}).mount("#game");
