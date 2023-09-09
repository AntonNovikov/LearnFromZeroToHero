const el = document.querySelector("p");
console.log(el);
console.log(el.classList);
// remove
el.classList.remove("active");
// contains
console.log(el.classList.contains("green"));
// toggle