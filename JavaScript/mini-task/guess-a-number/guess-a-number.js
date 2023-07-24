const attempEl = document.querySelector("#tries");

const secretNum = Math.ceil(Math.random() * 10);
// const secretNum = 5;
let tries = 0;
function guessNum(num) {
  if (tries >= 5) return alert("Игра окончена");
  if (num === secretNum) {
    // let button = document.querySelector(`#${secretNum}`);
    let button = document.querySelector(`#but${secretNum}`);

    button.style.background = "green";
    alert("You are right");
    tries = 5;
  } else {
    alert("you are wrong");
    let isMore = secretNum > num ? "больше" : "меньше";
    alert("Загаданное число " + isMore);
    tries++;
    attempEl.textContent = `You have ${5 - tries} attmeps`;
  }
}
