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
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // a draw
        this.winner = "draw";
      } else if (value <= 0) {
        // Player lost
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // a draw
        this.winner = "draw";
      } else if (value <= 0) {
        // Monster lost
        this.winner = "player";
      }
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
        // this.monsterHealth = 0;
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
        // this.playerHealth = 0;
      }
      return { width: this.playerHealth + "%" };
    },
    disabledSpecial() {
      return this.currentRound % 3 != 0;
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(this.playerHit[0], this.playerHit[1]);

      this.monsterHealth = this.monsterHealth - attackValue;
      this.addLogMessage("player", "attack", attackValue)
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(
        this.monsterHit[0],
        this.monsterHit[1]
        );
        this.playerHealth = this.playerHealth - attackValue;
        this.addLogMessage("monster", "attack", attackValue)
      },
    specialAttackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(
        this.playerSpecialHit[0],
        this.playerSpecialHit[1]
        );
        this.monsterHealth = this.monsterHealth - attackValue;
        this.addLogMessage("player", "Special attack", attackValue)
        this.attackPlayer();
      },
      healPlayer() {
        this.currentRound++;
        const healValue = getRandomValue(
          this.playerHealHit[0],
          this.playerHealHit[1]
          );
          if (this.playerHealth + healValue > 100) {
            this.playerHealth = 100;
          } else {
            this.playerHealth = this.playerHealth + healValue;
          }
          this.addLogMessage("player", "heal", healValue)
          this.attackPlayer();
        },
        surrender() {
          this.winner = "monster";
        },
        addLogMessage(who, what, value) {
          this.logMessages.unshift({
            actionBy: who,
            actionType: what,
            actionValue: value,
      });
    },
  },
}).mount("#game");
