// addEventL
const events = () => {
  const hi = () => {
    console.log("hi");
    el.removeEventListener("click", hi);
  };
  const el = document.querySelector("p");
  el.addEventListener("click", hi);
  console.log(el);
  const btn = document.querySelector("button");
  const input = document.querySelector("input");
  btn.addEventListener("click", handleEvent);
  input.addEventListener("keypress", handleEvent);
  function handleEvent(event) {
    console.log(event);
  }
};
events();

// event.stopPropagation