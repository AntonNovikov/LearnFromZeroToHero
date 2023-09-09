const number = 123456789;
// const f = new Intl.NumberFormat("en-us");
// const f = new Intl.NumberFormat("re-RU");

// const f = new Intl.NumberFormat("re-RU", {
// const f = new Intl.NumberFormat("es-sp", {
const f = new Intl.NumberFormat(undefined, {
    // currency: "USD",
    // style: "currency",
    notation: 'compact'
});

console.log(f.format(number));