let position = 0;
const box = document.querySelector("#box");

const move = () => {
  if (position >= 150) {
    clearInterval(timer);
  } else {
    position++;
    box.style.left = position + "px";
  }
};

const timer = setInterval(move, 50);
