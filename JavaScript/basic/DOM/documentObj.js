// createElement()

// write  - override html

//removeChild()
const parent = document.querySelector(".parent");
const child = document.querySelector("#child");

parent.removeChild(child);

// replaceChild()
const newChild = document.createElement("p");
parent.removeChild(newChild, child);
``