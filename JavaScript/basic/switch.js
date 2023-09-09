// https://www.youtube.com/shorts/Fx7m3ahwgWc

const animal = "shark";
// if (animal === "cat") {
//   console.log("I like cats");
// } else if (animal === "dog") {
//   console.log("Dogs are alright");
// } else if (animal === "shark") {
//   console.log("Sharks are scary");
// } else {
//   console.log("Never heard of it");
// }

switch (animal) {
  case "cat":
    console.log("I like cats");
    break;
  case "dog":
    console.log("Dogs are alright");
    break;
  case "shark":
    console.log("Sharks are scary");
    break;
  default:
    console.log("Never heard of it");
}
