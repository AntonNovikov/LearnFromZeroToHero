const riddle = {
  question: "Висит груша нельзя скушать",
  correctAnswer: "лампочка",
  hints: ["Это не съедобное", "Это не фрукт"],
  tries: 3,
  checkAnswer(str) {
    //
    //
    if (this.tries < 1) {
      console.log("Игра окончена");
      return alert("Игра окончена");
    }
    if (str.toLowerCase().includes(this.correctAnswer.toLowerCase())) {
      alert("Правильный ответ");
      console.log("Правильный ответ");
      this.tries = 0;
    } else {
      alert("НЕ Правильный ответ");
      console.log("НЕ Правильный ответ");
      this.tries--;
      const hint = this.hints[this.tries === 2 ? 0 : 1];
      if (this.tries) {
        alert("Подсказка: " + hint);
      }
    }
  },
};

window.onload = function () {
  document.getElementById("riddle").innerText = riddle.question;
};

function check() {
  const input = document.getElementsByTagName("input")[0];
  const guessedAnswer = input.value;
  if (guessedAnswer) {
    //
    riddle.checkAnswer(guessedAnswer);
  }
}
