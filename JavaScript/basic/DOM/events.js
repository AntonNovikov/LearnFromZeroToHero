// addEventL
const events = () => {
  const hi = () => {
    console.log("hi");
    el.removeEventListener("click", hi);
  };
  const el = document.querySelector("p");
  el.addEventListener("click", hi);
  console.log(el);
};
events();
